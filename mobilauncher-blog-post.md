# Building a Kiosk App That Doesn't Hate You: Lessons from MobiLauncher

Nobody builds a an MDM kiosk app on purpose.

You get handed a device, a URL, and a vague requirement like "make it so users can only do _this_." Then six months later you're elbow-deep in a WebView that doesn't support the CSS property you needed, on a Chromium build that's two years old, deployed to 300 Zebra devices across three states — and the only debug tool you have is a toast notification.

That's MobiLauncher. And honestly? Building it taught me more about reliable software than anything running in a normal browser ever has.

This is the post I wish existed when I started.

---

## The Environment Is Not a Browser

The first thing you have to internalize about MDM kiosk development is that your app doesn't run in Chrome. It runs in a **WebView** — a stripped-down, embedded browser engine that ships _with the DPC Agent_.

For MobiLauncher, the first target was a small(ish) fleet of 'PeopleNet'/Android devices. The latest target was a much larger fleet of **Samsung** & **Zebra Android devices** managed through **SOTI MobiControl**. These aren't consumer phones that get regular OS updates. They're purpose-built industrial devices that get firmware updates on a maintenance cycle, not a whim. The WebView version you're targeting could be Chrome 85 while your dev machine happily runs 124.

**What this means in practice:**

- CSS features you use every day may not exist — check MDN compatibility tables religiously
- JavaScript APIs with broader support in modern browsers may be absent or broken
- `ResizeObserver`, `IntersectionObserver`, certain `Promise` behaviors — all bets are off until you test on iron
- There is no DevTools. There is no `about:inspect`. There is no "just open the console."

That last point deserves its own eulogy. When something breaks in production on a device 200 miles away, your debugging toolkit is: log messages surfaced through the MDM agent, behavior inference, and whatever you thought to build into the app as a diagnostics mode. You will write more deliberate, defensive code in this environment than anywhere else, because you have to.

Build-in your own escape hatch early. We eventually added a hidden offcanvas — revealed by switch a custom attribute from false to true in the console — that surfaced device info, logging, CustomAttribute values, and rendering state. It was the single best decision we made.

---

## SOTI's JS Agent API: Power Tools with Sharp Edges

SOTI MobiControl exposes a **JavaScript Agent API** that lets your web app communicate with the MobiControl agent running on the device. This is genuinely powerful. It means your kiosk interface isn't just a locked-down webpage — it has a live wire into the device management layer.

The API lets you do things like:

- Read and write **CustomAttributes** — key/value pairs stored and synced by the MDM agent
- Execute **Macros** — scripted actions defined in the MobiControl console that can trigger device actions
- Access **CustomData** — structured data pushed from the server to the device
- Pull device metadata (serial, name, group assignments)
- Check for applications installation status and even install new applications from local storage.

In MobiLauncher, we use this extensively. The app's behavior — which features are visible, which theme renders, which layout is active — is entirely driven by `data-attributes` injected at runtime from CustomAttributes and Macros. There's no backend API call. There's no config file checked in to version control. The device tells the app who it is, and the app responds accordingly.

**The sharp edges:**

The JS Agent API is not extensively documented for edge cases, and error handling is your responsibility. If a CustomAttribute doesn't exist on a device, you'll get `null` or an empty string, not a helpful exception. If you call a Macro that isn't defined in that device's profile, nothing happens — silently. You learn to code defensively with sane defaults for everything, because devices in the field will inevitably have incomplete configurations.

Also worth knowing: the API is synchronous in some implementations and asynchronous in others depending on which call you're making and which version of the agent is running. Wrap everything in a consistent async/await abstraction early, before you have to retrofit it.

---

## Runtime Configuration Without a Backend

One of the most interesting architectural constraints of MobiLauncher is that it's a **static export** — a React/Typescript, Vite SPA that gets bundled into flat HTML/JS/CSS and deployed to the device. There's no server. There's no API to call at runtime.

So how does a single build render 16 different business features across 3 themes and 4 layout variants depending on which device is running it?

**`data-attributes` on the document root, populated by the MDM agent at launch.**

When MobiControl loads the WebView, it can inject data into the HTML via Macros and CustomAttributes before the app initializes. MobiLauncher reads these values from `document.documentElement.dataset` on startup and initializes the Redux store accordingly. The entire runtime configuration — feature flags, theme selection, layout mode, locale — flows from a handful of MDM-managed key/value pairs.

This pattern has some real advantages:

- **Zero network dependency at startup** — the app renders correctly even if connectivity is flaky
- **Centralized configuration** — operators change behavior in the MDM console, not in code
- **No secrets in the bundle** — nothing sensitive lives in the static assets

The tradeoff is that your configuration schema becomes a contract between the app and the MDM system. Change a `data-attribute` key name in the app without updating the Macro that sets it, and you've silently broken every device in that profile. We treat the attribute schema like an API surface — versioned, documented, and never changed without a migration plan.

---

## UI Decisions That Matter When Users Can't Escape

Designing for kiosk is designing for a captive audience. Your users can't close the tab, switch apps, or Google a workaround. If your interface is broken, confusing, or slow — they're stuck. This shifts your design priorities in interesting ways.

**Layout stability is non-negotiable.** Cumulative Layout Shift (CLS) — normally a SEO metric — becomes a UX crisis when a button jumps 20px just as a user is tapping it. With touch targets on industrial devices, this causes mis-taps, frustration, and perceived unreliability. Reserve space for every dynamic element. Skeleton states are your friend.

**Graceful degradation beats perfect failure.** When a feature can't load — network timeout, missing config, API error — it should disappear cleanly or show a neutral placeholder, not a broken widget or a white box. Every component in MobiLauncher has a fallback render state. Some of them have been hit in production. They looked fine.

**Performance is a feature, not a metric.** These devices have modest processors. Budget your JavaScript aggressively. Avoid heavy re-renders. MUI component trees are convenient but expensive if you're not careful about memoization. The device your stakeholder demos on is not the device that ships to the warehouse.

**Touch targets.** Make them bigger than you think. Then make them bigger again. Warehouse workers wear gloves. I'm not joking.

---

## The Provisioning Gap

There's a specific kind of failure that only exists in deployed kiosk environments, and it doesn't show up in dev or staging. I call it the **provisioning gap** — the delta between "works on my machine" and "works on a Zebra in a warehouse at 6am during a shift change."

The provisioning gap is caused by:

- **Profile mismatches** — the device is in the wrong MobiControl group and getting the wrong Macros
- **Stale CustomAttributes** — the device was enrolled before a new attribute was added to the schema
- **Incomplete firmware** — the device was provisioned before a required system update
- **Network timing** — the app loads before the MDM agent has finished syncing its configuration
- **Human error in the console** — a Macro was updated with a typo that breaks the attribute injection

Every single one of these has happened to us. The mitigation is the same each time: **build observable apps, not just functional ones.** Log aggressively to whatever surface your MDM exposes. Build the diagnostic overlay. Add a "last seen config" timestamp to the app state so you can tell if the device is getting fresh configuration or running on stale data. Treat your MDM console like a production environment, not a settings page.

The provisioning gap doesn't close — but you can shrink it by assuming it always exists and building accordingly.

---

## What I'd Tell Myself at the Start

A few things I'd go back and do earlier:

**1. Define your data-attribute schema before you write a single component.** Retrofitting configuration keys into a running app is painful. Treat it like a database schema and design it upfront.

**2. Build the diagnostic offcanvas on day one.** You're blind without it. It takes half a day and saves weeks.

**3. Test on actual hardware as early as possible.** Emulators don't replicate WebView quirks, device performance, or touch behavior. Get a real device on your desk.

**4. Defend against missing configuration everywhere.** Default values aren't optional — they're the difference between a degraded experience and a completely broken one.

**5. Version your schema changes.** The MDM console and the app bundle deploy on different cycles. They will be out of sync. Plan for it.

---

Building in constrained environments — limited APIs, locked-down WebViews, no DevTools, modest hardware — makes you a more disciplined engineer. Every decision has weight because there's no "just refresh and try again" when something goes wrong at scale across a managed fleet.

MobiLauncher is still evolving. The modernization toward TypeScript and React brought real improvements in type safety and component structure, but the fundamental architecture — MDM-driven runtime config, defensive rendering, zero-backend static deployment — has held up better than anything else we've shipped.

Build for the worst device on the worst network on the worst day. Everything else is a bonus.

---

_Will Worland is the founder of Oak & Ash Technology, a Sacramento-based consultancy specializing in UEM/MDM, mobility automation, and Android kiosk environments. He's been building and managing enterprise device fleets for 15+ years._
