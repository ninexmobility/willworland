export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
  contentHtml?: string;
  image?: string;
  imageAlt?: string;
  imageCredit?: { name: string; url: string };
}

export const posts: BlogPost[] = [
  {
    slug: "apple-business-free-mdm",
    title: "Apple's Free MDM Is Here. What It Actually Means for Your Business.",
    date: "2026-04-20",
    summary: "Apple Business launched April 14 and rolled MDM in for free. Here's what's actually covered, what still needs a paid platform, and how to decide which side of that line you're on.",
    tags: ["MDM", "Apple", "Small Business", "Mobility", "IT Strategy"],
    image: "/apple-biz-2.png",
    imageAlt: "Small business owner using an iMac managed through Apple Business",
    content: "",
    contentHtml: `<style>
  .post-body p { font-size: 16px; line-height: 1.8; margin: 0 0 1.4rem; }
  .post-body h2 { font-size: 18px; font-weight: 500; margin: 2.5rem 0 0.75rem; }
  .post-body h3 { font-size: 16px; font-weight: 600; margin: 2rem 0 0.5rem; }
  .post-body a { text-decoration: none; border-bottom: 1px solid currentColor; opacity: 0.85; }
  .post-body a:hover { opacity: 1; }
  .post-body ul { margin: 0 0 1.5rem; padding-left: 1.25rem; }
  .post-body ol { margin: 0 0 1.5rem; padding-left: 1.25rem; }
  .post-body li { font-size: 16px; line-height: 1.8; margin-bottom: 0.35rem; }
  .post-body .pullquote { border-left: 3px solid currentColor; margin: 2rem 0; padding: 0.5rem 0 0.5rem 1.25rem; opacity: 0.85; }
  .post-body .pullquote p { font-size: 19px; line-height: 1.55; font-style: italic; margin: 0; }
  .post-body .callout { border: 1px solid; border-radius: 8px; padding: 1rem 1.25rem; margin: 1.75rem 0; opacity: 0.9; }
  .post-body .callout p { font-size: 14px; line-height: 1.7; margin: 0 0 0.5rem; }
  .post-body .callout p:last-child { margin: 0; }
  .post-body table { width: 100%; border-collapse: collapse; margin: 1.75rem 0; font-size: 14px; }
  .post-body th { text-align: left; padding: 0.5rem 0.75rem; border-bottom: 2px solid; opacity: 0.8; font-weight: 500; }
  .post-body td { padding: 0.6rem 0.75rem; border-bottom: 1px solid rgba(0,0,0,0.08); vertical-align: top; line-height: 1.6; }
  .post-body .sources { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid; }
  .post-body .sources h3 { font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.75rem; opacity: 0.6; }
  .post-body .sources ul { list-style: none; padding: 0; margin: 0; }
  .post-body .sources li { font-size: 13px; margin-bottom: 0.4rem; padding-left: 1rem; position: relative; opacity: 0.7; }
  .post-body .sources li::before { content: "→"; position: absolute; left: 0; opacity: 0.5; }
  .post-body .footer-line { margin-top: 3rem; padding-top: 1.25rem; border-top: 1px solid; font-size: 13px; opacity: 0.6; }
</style>
<div class="post-body">
  <div class="body">
    <p>On April 14, 2026, Apple quietly rearranged the furniture in the business device management world. The separate portals most admins had been juggling — <strong>Apple Business Manager</strong>, <strong>Apple Business Essentials</strong>, and <strong>Apple Business Connect</strong> — were consolidated into a single platform simply called <a href="https://business.apple.com" target="_blank" rel="noopener noreferrer">Apple Business</a>. It launched in 200+ countries and regions, and the headline change is this:</p>

    <p><strong>Built-in MDM is now free. No monthly per-device fee.</strong></p>

    <p>That's a real shift. Apple Business Essentials used to start at $2.99/user/month — a bundled subscription that included MDM, 50 GB of iCloud storage, and Apple support for a single device. Multi-device plans ran $6.99 and $12.99/user/month (200 GB and 2 TB storage, respectively), covering up to three devices per user. You couldn't buy the MDM portion à la carte; it was always part of the bundle. For a 20-person shop running a device each, you were looking at $700+ a year just to have a managed Apple environment. Now the device management piece is free, and iCloud and AppleCare are optional paid add-ons.</p>

    <p>So does this kill the case for <a href="https://www.jamf.com/" target="_blank" rel="noopener noreferrer">Jamf</a>, <a href="https://mosyle.com/" target="_blank" rel="noopener noreferrer">Mosyle</a>, <a href="https://www.iru.com/kandji-mdm" target="_blank" rel="noopener noreferrer">Iru (formerly Kandji)</a>, <a href="https://www.microsoft.com/en-us/security/business/microsoft-intune" target="_blank" rel="noopener noreferrer">Intune</a>, <a href="https://www.ninjaone.com/" target="_blank" rel="noopener noreferrer">NinjaOne</a>, or any of the other paid MDM platforms? Not remotely. But the calculus changed for a specific slice of businesses, and if you're in that slice, you should absolutely take advantage.</p>

    <p>Here's the honest breakdown.</p>

    <h2>What "free" actually gets you</h2>

    <p>The free tier of Apple Business is more capable than a lot of people assume. You get:</p>

    <figure>
      <img src="/apple-biz-1.png" alt="Apple Business built-in device management — iPhone, MacBook, and iMac ready for zero-touch deployment" />
      <figcaption>Apple's pitch for the free tier: zero-touch deployment across iPhone, MacBook, and iMac, all managed from a single platform.</figcaption>
    </figure>

    <p><strong>Zero-touch deployment via Blueprints.</strong> Buy a Mac, iPhone, iPad, or Apple TV from Apple or an Authorized Reseller, assign it to a Blueprint, and it arrives at the employee's desk pre-configured. They sign in, it provisions itself. This is the feature most small businesses have been paying for elsewhere.</p>

    <p><strong>Basic device configuration and security policies.</strong> Password requirements, FileVault encryption, Firewall, screen lock, and the usual baseline restrictions. You can lock down settings so users can't casually turn off security features.</p>

    <p><strong>App distribution from the App Store.</strong> You can push App Store apps to devices or groups of devices. <a href="https://support.apple.com/en-us/102073" target="_blank" rel="noopener noreferrer">Volume Purchase Program (VPP)</a> licensing for paid apps still works the way it always has.</p>

    <p><strong>Lost Mode, Remote Lock, and Remote Wipe.</strong> The fundamentals for a lost or stolen device are all there.</p>

    <p><strong>Managed Apple Accounts with cryptographic separation.</strong> Work data and personal data stay genuinely separate on the same device. This is a meaningful BYOD win.</p>

    <p><strong>An Admin API.</strong> You can script deployments and pull device data programmatically, which was a paid-tier feature before.</p>

    <p><strong>Managed email, calendar, and directory services</strong> (requires iOS 26, iPadOS 26, or macOS 26). You can bring your own domain or buy one through Apple. Think of it as a lightweight alternative to buying a Google Workspace or Microsoft 365 seat purely for the email address.</p>

    <p><strong>Brand presence features</strong> (formerly Apple Business Connect). Place cards in Apple Maps, Siri, and Spotlight. Tap to Pay branding. Order tracking in Wallet. Apple Maps ads are coming to the US and Canada this summer.</p>

    <p>Paid add-ons are still available: <strong>AppleCare+ for Business</strong> (starts at $6.99/month per device, or $13.99/month per user covering up to three devices) and <strong>upgraded iCloud storage</strong> above the 5 GB per user that comes free — 50 GB is $0.99/user/mo, 200 GB is $2.99/user/mo, and 2 TB is $9.99/user/mo.</p>

    <h2>Who this is genuinely good enough for</h2>

    <p>Be honest with yourself about which bucket you're in.</p>

    <p><strong>Free Apple Business is the right call if you are:</strong></p>
    <ul>
      <li>A small business or solo operator with fewer than ~25 Apple devices</li>
      <li>Apple-only (no Android or Windows in the managed fleet)</li>
      <li>Running mostly App Store software — no custom internal apps, no third-party installers, no scripting</li>
      <li>Not pursuing formal compliance frameworks (SOC 2, ISO 27001, HIPAA, PCI-DSS, CIS benchmarks)</li>
      <li>A founder or office manager without dedicated IT staff who just needs the basics to work</li>
    </ul>

    <p>If that's you, go enroll. There's no cost and the floor is higher than it used to be.</p>

    <h2>What you still need a paid MDM for</h2>

    <p>Here's where the free tier runs out of runway. This is the part most of the "Apple MDM is free now!" coverage glossed over, and it matters a lot if you're running anything beyond a simple shop.</p>

    <h3>Managed App Configuration (AppConfig)</h3>

    <p>Paid MDMs let you push an app to a device <strong>with its settings already filled in</strong> — server URL, login credentials, feature flags, the whole payload. The user opens the app and it's ready. Apple Business doesn't support <a href="https://www.appconfig.org/" target="_blank" rel="noopener noreferrer">AppConfig</a>. With the free tier, every user configures every app by hand.</p>

    <p>For a 5-person office, that's an afternoon of annoyance. For 50 field techs getting a new POS app, it's a week of support tickets.</p>

    <h3>Custom configuration profiles</h3>

    <p><a href="https://developer.apple.com/documentation/devicemanagement" target="_blank" rel="noopener noreferrer">Apple's MDM specification</a> supports dozens of configuration payloads — VPN with specific auth types, 802.1X Wi-Fi with certificates, custom certificate trust, app-specific settings, content filters, and a pile of others. Paid MDMs expose the full specification and let you craft custom profiles. Apple Business only exposes what's in its UI. No XML profile editor. No custom payload support.</p>

    <p>If you need to get Macs onto a corporate Wi-Fi that requires certificate-based 802.1X authentication, free Apple Business isn't going to cut it.</p>

    <h3>Custom app deployment (non-App Store)</h3>

    <p>You can push App Store apps and VPP apps. You cannot easily deploy internal enterprise apps, pkg installers, or custom scripts. Most paid MDMs make this trivial. Apple Business doesn't.</p>

    <h3>OS update control</h3>

    <p>Apple Business supports automatic macOS updates — and that's about it. No deferral windows for iOS or iPadOS. No staged rollouts. No ability to hold back an update across a fleet while you validate it against a business-critical app.</p>

    <p>If you've ever had an iOS update break a payment terminal or a warehouse scanner app at 2 AM, you know exactly why this matters.</p>

    <h3>Compliance automation and reporting</h3>

    <p>SOC 2, ISO 27001, HIPAA, and CIS benchmarks all require evidence: what's deployed, on which device, with which settings, at which point in time, and what was remediated when it drifted. Dedicated enterprise MDM platforms have mature tooling for this — continuous compliance automation, drift remediation, audit-ready reporting. Apple Business does not produce audit-ready compliance reporting.</p>

    <h3>Cross-platform management</h3>

    <p>Apple Business manages Apple. That's it. If your environment includes Windows laptops, Android phones or tablets, Chromebooks, or purpose-built devices like Zebra scanners or Android-based POS terminals, you need a platform that speaks all of it — <a href="https://www.microsoft.com/en-us/security/business/microsoft-intune" target="_blank" rel="noopener noreferrer">Intune</a>, <a href="https://soti.net/products/soti-mobicontrol/" target="_blank" rel="noopener noreferrer">SOTI</a>, VMware Workspace ONE, or similar. Most enterprises run mixed fleets, and for them Apple Business is a complement to a UEM, not a replacement.</p>

    <h3>Granular scripting and automation</h3>

    <p>Enterprise-tier MDM platforms are built around the idea that power users will write scripts, extension attributes, and custom workflows to cover the long tail of weird business requirements. That extensibility is a huge part of why they dominate larger fleets. Apple Business has none of it.</p>

    <h3>Hard device ceiling</h3>

    <p>When Apple launched Apple Business Essentials in 2021, it was positioned for "small businesses with up to 500 employees." Apple hasn't loudly restated that ceiling for the new free platform, but the product is still clearly designed for the small-and-mid-market tier. If you're planning to manage thousands of devices, validate the scaling limits with Apple directly before committing to it as your primary MDM.</p>

    <div class="pullquote">
      <p>The free tier raises the floor for small businesses. It does not raise the ceiling for anyone managing real complexity.</p>
    </div>

    <h2>The "External Management" trick is the real story for IT pros</h2>

    <p>Here's the nuance that doesn't get enough airtime: <strong>Apple Business and a third-party MDM are not mutually exclusive.</strong></p>

    <p>When you set up Apple Business, you can choose <strong>External Management</strong> to point your devices at a different MDM — <a href="https://www.jamf.com/" target="_blank" rel="noopener noreferrer">Jamf</a>, <a href="https://mosyle.com/" target="_blank" rel="noopener noreferrer">Mosyle</a>, <a href="https://www.iru.com/kandji-mdm" target="_blank" rel="noopener noreferrer">Iru</a>, <a href="https://www.microsoft.com/en-us/security/business/microsoft-intune" target="_blank" rel="noopener noreferrer">Intune</a>, <a href="https://www.ninjaone.com/" target="_blank" rel="noopener noreferrer">NinjaOne</a>, whatever. Apple Business becomes your identity, procurement, and VPP licensing layer. The external MDM does the actual device management.</p>

    <p>This is how most enterprises already worked with the old Apple Business Manager. The new unified platform doesn't change that workflow — it just consolidates the dashboards.</p>

    <div class="callout">
      <p><strong>Practical consequence:</strong> if you think you might outgrow free Apple Business in the next year or two, start with a third-party MDM now. Migrating later means re-enrolling every device, and that is genuinely painful. Third-party MDM pricing varies by vendor, volume, and negotiation, but entry-level plans generally land in the low single digits per device per month, scaling up from there for bundles that include endpoint security, identity, and compliance tooling. A few dollars a month per device now saves the migration pain later.</p>
    </div>

    <h2>How I'd advise a client today</h2>

    <p>Forget vendor names for a minute. The right platform falls out of four questions:</p>

    <p><strong>1. Fleet composition.</strong> Apple-only, or mixed with Windows, Android, Chromebooks, or purpose-built hardware? A pure-Apple fleet has very different options than a mixed environment where you need a single pane of glass.</p>

    <p><strong>2. Compliance posture.</strong> Are you pursuing or maintaining SOC 2, ISO 27001, HIPAA, PCI-DSS, or CIS benchmarks? If yes, audit-ready reporting and continuous compliance automation become table stakes, and the free tier won't get you there.</p>

    <p><strong>3. App complexity.</strong> Are your users running straight App Store software, or do you have internal enterprise apps, pkg installers, custom scripts, or apps that need pre-configured settings pushed (<a href="https://www.appconfig.org/" target="_blank" rel="noopener noreferrer">AppConfig</a>)? The more custom your app story, the more you need a real MDM.</p>

    <p><strong>4. Team capacity.</strong> Do you have a dedicated IT admin who can write scripts and build workflows, or a lean team (or solo founder) who needs the platform to do most of the thinking? Heavier platforms reward expertise; lighter platforms trade depth for speed.</p>

    <p>Map those four answers against what we just covered and the shortlist usually narrows itself to two or three options. From there, it's about getting quotes, running trials, and testing against your actual use cases — list prices and negotiated prices are often different animals, especially at multi-year terms.</p>

    <p>If you want a second set of eyes on that evaluation, that's exactly the kind of vendor-agnostic advisory work I do.</p>

    <h2>If you're migrating from Apple Business Essentials</h2>

    <p>Existing Essentials, Manager, and Connect customers were automatically migrated to the unified <a href="https://business.apple.com" target="_blank" rel="noopener noreferrer">Apple Business</a> on April 14. Your data came with you. A few things to check in the next week or two:</p>

    <ol>
      <li><strong>Confirm your billing stopped</strong> for the old Essentials subscription. Device management is free now; you shouldn't see new per-device charges.</li>
      <li><strong>Review your Blueprints.</strong> Collections from Essentials should have migrated, but audit them.</li>
      <li><strong>Check iOS 26 / iPadOS 26 / macOS 26 requirements</strong> if you want the new email, calendar, and directory features. Older OS versions still work for core MDM.</li>
      <li><strong>Decide on External Management</strong> if you're considering adding a third-party MDM later. Setting it up before you have 100 devices enrolled is much easier than after.</li>
    </ol>

    <h2>Bottom line</h2>

    <p>Apple made MDM free because they want every business device to be managed, and cost was the friction point for small businesses. That's a good thing for the ecosystem. If you're small, Apple-only, and not chasing compliance, this is a straight upgrade over doing nothing — and over a lot of what you might have been paying for before.</p>

    <p>But "free" doesn't mean "sufficient" for everyone. <a href="https://www.appconfig.org/" target="_blank" rel="noopener noreferrer">AppConfig</a>, custom profiles, OS update control, custom app deployment, and cross-platform management are the boundary lines. If you cross any of them, you still want a real MDM — and Apple's own architecture (External Management) assumes you might.</p>

    <p>If you're in the Sacramento area and you're trying to figure out which side of that line your business falls on, that's exactly the kind of evaluation I help with. A 30-minute conversation can save a lot of re-enrollment pain later.</p>

    <div class="sources">
      <h3>Further reading</h3>
      <ul>
        <li><a href="https://www.apple.com/newsroom/2026/03/introducing-apple-business-a-new-all-in-one-platform-for-businesses-of-all-sizes/" target="_blank" rel="noopener noreferrer">Introducing Apple Business — Apple Newsroom</a></li>
        <li><a href="https://business.apple.com" target="_blank" rel="noopener noreferrer">Apple Business — business.apple.com</a></li>
        <li><a href="https://developer.apple.com/documentation/devicemanagement" target="_blank" rel="noopener noreferrer">Apple Device Management — Developer Documentation</a></li>
        <li><a href="https://support.apple.com/en-us/102073" target="_blank" rel="noopener noreferrer">Apple Volume Purchase Program (VPP) — Apple Support</a></li>
        <li><a href="https://www.appconfig.org/" target="_blank" rel="noopener noreferrer">AppConfig Community — Managed App Configuration standard</a></li>
        <li><a href="https://www.jamf.com/" target="_blank" rel="noopener noreferrer">Jamf — Apple enterprise management</a></li>
        <li><a href="https://mosyle.com/" target="_blank" rel="noopener noreferrer">Mosyle — Apple MDM for business and education</a></li>
        <li><a href="https://www.iru.com/kandji-mdm" target="_blank" rel="noopener noreferrer">Iru (formerly Kandji) — Apple device management</a></li>
        <li><a href="https://www.microsoft.com/en-us/security/business/microsoft-intune" target="_blank" rel="noopener noreferrer">Microsoft Intune — unified endpoint management</a></li>
        <li><a href="https://soti.net/products/soti-mobicontrol/" target="_blank" rel="noopener noreferrer">SOTI MobiControl — enterprise mobility management</a></li>
        <li><a href="https://addigy.com/" target="_blank" rel="noopener noreferrer">Addigy — MSP-focused Apple device management</a></li>
      </ul>
    </div>

    <div class="footer-line">Will Worland is the founder of Oak &amp; Ash Technology, a Sacramento-based IT consultancy focused on mobility, UEM, and endpoint automation. He has 15+ years of experience in enterprise device management across Apple Business, Jamf, Mosyle, Intune, SOTI, Workspace ONE, and more.</div>
  </div>
</div>`,
  },
  {
    slug: "15-years-switching-mdm-platforms",
    title: "What 15 years of switching MDM platforms actually taught me.",
    date: "2026-04-14",
    summary: "I started in this industry before most of today's platforms existed. Here's what I got wrong, what I eventually got right, and the pattern I wish I'd seen sooner.",
    tags: ["MDM", "UEM", "Career", "Lessons"],
    image: "/caveman-mobility.png",
    imageAlt: "Cave people gathered around glowing mobile device interfaces painted on a cave wall — a metaphor for how long humans have been figuring out device management",
    content: "",
    contentHtml: `<style>
  .post-body p { font-size: 16px; line-height: 1.8; margin: 0 0 1.4rem; }
  .post-body h2 { font-size: 18px; font-weight: 500; margin: 2.5rem 0 0.75rem; }
  .post-body a { text-decoration: none; border-bottom: 1px solid currentColor; opacity: 0.85; }
  .post-body a:hover { opacity: 1; }
  .post-body figure { margin: 2rem 0; }
  .post-body img { display: block; width: 100%; border-radius: 14px; border: 1px solid rgba(15, 23, 42, 0.08); background: #fff; }
  .post-body figcaption { font-size: 13px; line-height: 1.7; margin-top: 0.65rem; opacity: 0.7; }
  .post-body .pullquote { border-left: 3px solid currentColor; margin: 2rem 0; padding: 0.5rem 0 0.5rem 1.25rem; opacity: 0.85; }
  .post-body .pullquote p { font-size: 19px; line-height: 1.55; font-style: italic; margin: 0; }
  .post-body .callout { border: 1px solid; border-radius: 8px; padding: 1rem 1.25rem; margin: 1.75rem 0; opacity: 0.9; }
  .post-body .callout p { font-size: 14px; line-height: 1.7; margin: 0 0 0.5rem; }
  .post-body .callout p:last-child { margin: 0; }
  .post-body .footer-line { margin-top: 3rem; padding-top: 1.25rem; border-top: 1px solid; font-size: 13px; opacity: 0.6; }
</style>
<div class="post-body">
  <div class="body">
    <p>I was early. Not "early adopter reading the blogs" early — early in the sense that I was working for one of the first companies in the enterprise mobility management service provider space when the platforms we now take for granted were still figuring out what they were.</p>

    <p>The company was Enterprise Mobile. We eventually became Intermec, and then Honeywell Scanning and Mobility. But in those early days, we were sitting across from enterprise customers who needed their mobile device fleets managed, and we were picking up whatever tools existed to do it. SOTI Pocket Controller. BlackBerry BES. Afaria. MobileIron. Wavelink Avalanche for the rugged frontline device programs. And a Wi-Fi network management platform called Wandering WiFi — which, if that name doesn't ring a bell, you probably know it better by what it became: AirWatch. We were running it before it pivoted to MDM, before it became the market leader, and well before VMware wrote a $1.54 billion check to acquire it in 2014. We weren't evaluating platforms from a position of expertise — we were building that expertise in real time, on real customer deployments, often with software that was still finding its footing.</p>

    <p>It was, in retrospect, one of the best possible educations in this industry. And the most important thing it taught me took years to fully understand.</p>

    <h2>The pattern nobody tells you about</h2>

    <p>Early on, I believed what the vendors believed about themselves. Each platform had a different pitch. Different vocabulary. Different UI paradigms. Different certifications to earn and feature matrices to memorize. When you're new to the industry and the software is new too, that surface-level difference feels significant. You start to develop platform loyalty the same way people develop loyalty to operating systems — through familiarity, through investment, through the sunk cost of everything you've already learned.</p>

    <p>Then you work with enough customers running different platforms and something starts to bother you. The outcomes are the same. The device gets enrolled. The policy gets applied. The app gets distributed. The compliance report gets generated. The customer on AirWatch and the customer on MobileIron and the customer on SOTI are all getting fundamentally the same result — sometimes paying different prices, sometimes getting a few additional features, sometimes getting a slicker interface — but landing in the same place.</p>

    <p>At first I chalked it up to coincidence. Then I chalked it up to the customers having similar requirements. It took a while longer to understand what was actually happening: the platforms weren't differentiated at the level that mattered. They were all sitting on top of the same OS APIs, the same device management protocols, the same manufacturer-defined management surfaces. Wavelink Avalanche was managing the same Zebra and Honeywell rugged devices as SOTI — different console, same underlying device APIs. Wandering WiFi pivoted to MDM and became AirWatch not because it invented new management capabilities, but because the smartphone boom created demand for the same model applied to a new device category. The logo on the console was the variable. The protocol underneath was the constant.</p>

    <figure>
      <img src="/history-mdm.jpg" alt="Mobile device evolution timeline showing the progression from feature phones through smartphones, tablets, laptops and IoT devices" />
      <figcaption>Every generation, every form factor — different logos, same underlying protocols. The console changed. The protocol didn't.</figcaption>
    </figure>

    <div class="pullquote">
      <p>The device didn't care which platform enrolled it. The OS was always the authority. The MDM vendor was always the intermediary.</p>
    </div>

    <p>Once you see that, you can't unsee it. Every new platform I sat down in front of after that realization felt familiar within hours — not because the UI was the same, but because the underlying model was. Same enrollment flow, different wizard. Same profile schema, different editor. Same compliance engine, different dashboard. I wasn't learning a new platform. I was learning a new interface for the same model.</p>

    <h2>The mistake hubris made</h2>

    <p>Understanding the pattern made me better at the work. It also, for a period, made me worse.</p>

    <p>When you feel like you understand something deeply — when you've seen enough deployments across enough platforms that the fundamentals feel obvious — there's a temptation to push against the constraints rather than work within them. To assume that what the platform says is a limitation is actually just a design choice that can be worked around with enough creativity.</p>

    <p>I ran into this head-on while building MobiLauncher at Enterprise Mobility. MobiLauncher was a custom lockdown interface — a web app running inside an Android WebView within a SOTI MobiControl Lockdown Profile. The project was genuinely exciting. We were pushing into territory the platform wasn't explicitly designed for, using the JavaScript Agent API and device Custom Attributes to do things that required real ingenuity to make work.</p>

    <div class="shot-grid" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 2rem 0;">
      <figure style="margin: 0;">
        <img src="/tc75.jpg" alt="Zebra TC75 rugged Android handheld — the kind of device MobiLauncher was built to run on" style="border-radius: 14px; border: 1px solid rgba(15,23,42,0.08); background: #fff;" />
        <figcaption style="font-size: 13px; line-height: 1.7; margin-top: 0.65rem; opacity: 0.7;">Zebra TC75 — the handheld fleet MobiLauncher was designed for. No DevTools, no hot reload.</figcaption>
      </figure>
      <figure style="margin: 0;">
        <img src="/et56.jpg" alt="Zebra ET56 rugged Android tablet — enterprise device running MobiLauncher in a SOTI MobiControl lockdown profile" style="border-radius: 14px; border: 1px solid rgba(15,23,42,0.08); background: #fff;" />
        <figcaption style="font-size: 13px; line-height: 1.7; margin-top: 0.65rem; opacity: 0.7;">Zebra ET56 tablet variant. If it doesn't work on this hardware, it doesn't ship.</figcaption>
      </figure>
    </div>

    <p>The problem was that I got ambitious faster than I got stable. The toolset I was allowed to work with was constrained — intentionally, for good operational reasons. But I was committed to showing what was possible, and that commitment started driving decisions that should have been driven by what was reliable. I shipped releases that were technically impressive and operationally brittle. Features that worked in testing and misbehaved in production. And eventually I had to roll back to a more stable build with less functionality, swallow the lesson, and rebuild from a more honest foundation.</p>

    <p>It wasn't a catastrophic failure. But it was a humbling one. Because the thing I'd understood intellectually for years — that the platform has constraints for a reason, that the protocol defines the boundary of what's safe to build against — I had stopped actually believing in practice. I'd let the excitement of the problem override the discipline of the craft.</p>

    <div class="pullquote">
      <p>The platform doesn't care how clever you are. The protocol has limits. Working with them is the skill. Working around them is the warning sign.</p>
    </div>

    <h2>What the pattern actually gives you</h2>

    <p>Here's what fifteen years and more platform migrations than I can accurately count has left me with:</p>

    <p><strong>Migrations are less scary than they look.</strong> When you understand that you're not re-learning device management — you're re-enrolling devices into a different implementation of the same model — the anxiety about switching platforms deflates significantly. The hard part of a migration is almost never the platform itself. It's the automation you've built on top of vendor-proprietary APIs, the tribal knowledge baked into runbooks that nobody updated, the integrations that assumed a specific implementation detail. Know where your lock-in actually lives before you sign anything.</p>

    <p><strong>Platform loyalty is a trap.</strong> I've watched good engineers spend enormous energy defending a platform choice that was made three years ago under different constraints, long past the point where a different tool would have served them better. The platform is a vehicle, not an identity. The expertise you're building is in the underlying discipline — endpoint management, policy design, enrollment architecture, automation — not in one vendor's interpretation of it.</p>

    <figure>
      <img src="/dinosaur-code.png" alt="A cartoon dinosaur in a tie, typing at an old desktop computer in an office — a visual metaphor for clinging to outdated tools long past their usefulness" />
      <figcaption>Still on the same MDM you picked in 2019 because you know it well? That's not expertise. That's familiarity.</figcaption>
    </figure>

    <p><strong>Constraints are information.</strong> Some of the worst decisions I've made in this industry came from treating a platform constraint as a problem to be solved rather than a signal to be understood. Why does this API not expose that capability? Why does the platform not support this workflow natively? Sometimes the answer is "the vendor hasn't built it yet." But sometimes the answer is "the OS doesn't support it safely" or "customers who tried this pattern got burned." The constraint knows something. Ask what before you work around it.</p>

    <p><strong>The early exposure was the gift.</strong> Being in the room when these platforms were young — running Wandering WiFi before it became AirWatch, managing rugged Zebra fleets through Wavelink Avalanche before the Android Enterprise era simplified everything, watching the industry settle on patterns that are now considered obvious — gave me a reference point that's hard to acquire any other way. I didn't just learn how MDM works. I learned <em>why</em> it works the way it does, which is a different and more durable kind of knowledge.</p>

    <h2>The thing I'd tell someone starting out today</h2>

    <p>Don't get attached to the platform. Get attached to the protocol. Learn how Apple's MDM spec actually works — not just how Jamf exposes it, but what APNs is doing, what a mobileconfig actually contains, what the enrollment handshake looks like at the wire level. Learn what Android Management API defines and what it doesn't. Understand where the OS ends and the vendor begins.</p>

    <p>Do that, and every platform you'll ever sit down in front of becomes familiar within a day. New logo, same model. And when the inevitable migration comes — because it always does — you'll be the calmest person in the room. Not because you've done it before, but because you understand what's actually changing and what isn't.</p>

    <p>The platform is rented. The understanding is yours.</p>

    <div class="footer-line">Will Worland is the founder of Oak &amp; Ash Technology, a Sacramento-based IT consultancy focused on mobility, UEM, and endpoint automation. He has 15+ years of experience in enterprise device management across Wandering WiFi (now AirWatch/Workspace ONE), SOTI, BlackBerry, Afaria, MobileIron, Wavelink Avalanche, Jamf, Intune, and more.</div>
  </div>
</div>`,
  },
  {
    slug: "building-mobilauncher-kiosk-lessons",
    title: "Building a Kiosk App That Doesn't Hate You: Lessons from MobiLauncher",
    date: "2026-04-01",
    summary: "MobiLauncher runs as a static React kiosk inside SOTI's WebView, configured at launch by MDM attributes and hardened for unreliable devices, stale config, and zero DevTools.",
    tags: ["Android", "Kiosk", "SOTI", "React", "MDM"],
    image: "/mobilauncher/main.png",
    imageAlt: "MobiLauncher operations dashboard on a Zebra Android device",
    content: "",
    contentHtml: `<style>
  .post-body p { font-size: 16px; line-height: 1.8; margin: 0 0 1.4rem; }
  .post-body h2 { font-size: 18px; font-weight: 500; margin: 2.5rem 0 0.75rem; }
  .post-body a { text-decoration: none; border-bottom: 1px solid currentColor; opacity: 0.85; }
  .post-body a:hover { opacity: 1; }
  .post-body ul { margin: 0 0 1.5rem; padding-left: 1.25rem; }
  .post-body li { font-size: 16px; line-height: 1.8; margin-bottom: 0.35rem; }
  .post-body code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace; font-size: 0.94em; }
  .post-body figure { margin: 2rem 0; }
  .post-body img { display: block; width: 100%; border-radius: 14px; border: 1px solid rgba(15, 23, 42, 0.08); background: #fff; }
  .post-body figcaption { font-size: 13px; line-height: 1.7; margin-top: 0.65rem; opacity: 0.7; }
  .post-body .pullquote { border-left: 3px solid currentColor; margin: 2rem 0; padding: 0.5rem 0 0.5rem 1.25rem; opacity: 0.85; }
  .post-body .pullquote p { font-size: 19px; line-height: 1.55; font-style: italic; margin: 0; }
  .post-body .callout { border: 1px solid; border-radius: 8px; padding: 1rem 1.25rem; margin: 1.75rem 0; opacity: 0.9; }
  .post-body .callout p { font-size: 14px; line-height: 1.7; margin: 0 0 0.5rem; }
  .post-body .callout p:last-child { margin: 0; }
  .post-body .shot-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 2rem 0; }
  .post-body .shot-grid.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .post-body .footer-line { margin-top: 3rem; padding-top: 1.25rem; border-top: 1px solid; font-size: 13px; opacity: 0.6; }
  @media (max-width: 720px) {
    .post-body .shot-grid,
    .post-body .shot-grid.three { grid-template-columns: 1fr; }
  }
</style>
<div class="post-body">
  <div class="body">
    <p>Nobody sets out wanting to build an MDM kiosk launcher. You get handed a rugged Android device, a URL, and a requirement like "make it impossible for the user to do anything except this." A few months later you're debugging a locked-down WebView on hardware that doesn't care how polished your local Chrome experience was.</p>
    <p>That's MobiLauncher. It's a static React and TypeScript app that ships as flat assets, launches inside SOTI MobiControl, and shapes itself at runtime based on device-side attributes and macros. Building it taught me more about reliability, diagnosability, and defensive UI than most normal web work ever will.</p>

    <h2>The environment is not a browser</h2>
    <p>The first thing kiosk work beats into you is that your app does not run in Chrome. It runs in a WebView packaged with the agent and the device firmware you actually deployed. On our side that meant PeopleNet-era Android hardware first, then larger Samsung and Zebra fleets managed through SOTI MobiControl. These are operational devices, not lifestyle gadgets. Their update cadence reflects that.</p>
    <p>In practice, that changes the engineering standard:</p>
    <ul>
      <li>CSS and JavaScript support is whatever the embedded WebView says it is, not whatever your laptop shipped last week.</li>
      <li>Performance budgets matter immediately because the hardware is modest and the app is always full-screen.</li>
      <li>There are no browser debugging comforts waiting for you in production.</li>
    </ul>
    <div class="callout">
      <p><strong>The real constraint:</strong> when a field device fails, you are usually debugging by behavior, logs, and whatever instrumentation you had the discipline to build ahead of time.</p>
    </div>

    <h2>SOTI's JS agent API is powerful, and a little unforgiving</h2>
    <p>SOTI's JavaScript agent API is what makes a kiosk shell like this useful instead of decorative. It gives the web app a live bridge into the management layer: CustomAttributes, macros, device metadata, app checks, and other operational hooks. That means the launcher can be a real control surface for the device instead of just a pretty menu.</p>
    <p>It also means your runtime contract is only as clean as your MDM configuration. Missing attributes usually come back empty. A macro typo in the console can look exactly like a broken feature. Agent behavior varies across versions. If you don't wrap that surface with consistent fallbacks and logging, your users end up testing your MDM profile for you.</p>

    <div class="shot-grid three">
      <figure class="shot">
        <img src="/mobilauncher/menu.png" alt="Overflow menu in MobiLauncher with device info and tools entries" />
        <figcaption>The launcher exposes device-aware actions directly in the shell instead of forcing users back into the MDM agent.</figcaption>
      </figure>
      <figure class="shot">
        <img src="/mobilauncher/tools-dialog.png" alt="Tools dialog in MobiLauncher with operational actions like LTE discovery and restart agent" />
        <figcaption>Operational tools are mapped to macros and device workflows the MDM agent can actually execute.</figcaption>
      </figure>
      <figure class="shot">
        <img src="/mobilauncher/eng-tools.png" alt="Engineer tools dialog in MobiLauncher with device info, VPN test, logs, and display controls" />
        <figcaption>One layer deeper, engineering tools give support staff a controlled way to diagnose or recover a device without leaving the launcher.</figcaption>
      </figure>
    </div>

    <h2>Runtime configuration without a backend</h2>
    <p>One of the more interesting parts of MobiLauncher is that there is no backend at launch. The app is a static export. One build has to land on different devices, in different groups, for different business units, with different themes and different feature sets.</p>
    <p>The solution is simple and surprisingly durable: the MDM layer injects values into the document root before the app boots, and the app reads those values into state on startup. Theme, business context, VPN state, tool visibility, launch behavior, and tenant-specific overrides all flow from HTML data attributes and config blobs, not runtime API calls.</p>

    <div class="shot-grid">
      <figure class="shot">
        <img src="/mobilauncher/index.png" alt="HTML index file with MobiControl-injected data attributes on the document element" />
        <figcaption>Launch-time attributes on the root element let the same bundle identify the device, group, business context, theme, and enabled tools before React mounts.</figcaption>
      </figure>
      <figure class="shot">
        <img src="/mobilauncher/config001.png" alt="Operations JSON configuration defining a modern shell and launcher tiles" />
        <figcaption>Per-lob configuration controls the shell, tiles, labels, and actions, which keeps tenant variation out of the compiled code path.</figcaption>
      </figure>
    </div>

    <div class="pullquote">
      <p>The device tells the app what world it's in, and the app renders accordingly. For kiosk work, that contract matters more than any backend you wish you had.</p>
    </div>

    <p>The upside is obvious: no startup API dependency, a single deployable artifact, and operators changing behavior in the MDM console instead of waiting on a rebuild. The downside is that your attribute names and config schema become an API surface. Rename one carelessly and you've broken a fleet without changing a single visible line of UI.</p>

    <h2>Diagnosability is a feature, not a nice-to-have</h2>
    <p>The best decision we made was building support surfaces into the product itself. In a normal web app, a hidden diagnostics panel can feel indulgent. In a kiosk environment it is the difference between remote triage and total blindness.</p>
    <p>MobiLauncher eventually grew a support path that exposed device info, runtime inputs, network state, and launcher logs directly on the device. That changed the support model. Instead of trying to infer why a layout failed or a feature disappeared, we could inspect the state the device believed to be true.</p>

    <div class="shot-grid">
      <figure class="shot">
        <img src="/mobilauncher/device-info.png" alt="Device info panel in MobiLauncher showing Zebra ET45 details, storage, signal, VPN, and network data" />
        <figcaption>Device info makes the live operating context visible: model, asset, storage, signal, VPN, and network state in one place.</figcaption>
      </figure>
      <figure class="shot">
        <img src="/mobilauncher/log.png" alt="Launcher logs screen in MobiLauncher showing runtime inputs and config load events" />
        <figcaption>Launcher logs surface config resolution, locale loading, and bad keys so support can see what happened before the UI drifted.</figcaption>
      </figure>
    </div>

    <h2>UI decisions matter more when users can't escape</h2>
    <p>Kiosk UX is harsher than normal UX because the user has no graceful exit. They cannot open another tab, work around your layout, or shrug and try again later. If a button jumps during render, it causes mis-taps. If a tile disappears with no fallback, the device feels broken. If the interface is slow, the hardware gets blamed first and your software second.</p>
    <p>That pushed a few priorities to the front for us: reserve space for dynamic regions, keep touch targets oversized, default aggressively when configuration is missing, and budget component weight like the target hardware is always the least-capable device in the rollout. Because it usually is.</p>

    <h2>The provisioning gap is real</h2>
    <p>There is a category of kiosk failure that only appears after deployment: wrong group assignment, stale attributes, missing firmware prerequisites, late config sync, or a typo in a macro that silently strips runtime inputs. The app hasn't changed, but the environment around it has drifted just enough to create a bad morning for someone on shift.</p>
    <p>That gap never fully closes. What you can do is design for it. Assume configuration arrives late. Assume a field device is missing one important value. Assume the agent profile is slightly wrong. If the app still renders something coherent in those conditions, operations stay calm. If it doesn't, you get a support incident that looks random from the outside and perfectly predictable in hindsight.</p>

    <h2>What I'd tell myself at the start</h2>
    <p><strong>Define the runtime schema early.</strong> Attribute names and config shape are not implementation details once the MDM console depends on them.</p>
    <p><strong>Build diagnostics on day one.</strong> The hidden support surfaces ended up being some of the most important code in the product.</p>
    <p><strong>Test on actual hardware sooner.</strong> Emulators won't tell you how a Zebra device feels under load or how a WebView behaves when the fleet is out of date.</p>
    <p><strong>Design every feature with a missing-config path.</strong> The default state is part of the feature, not a cleanup task for later.</p>
    <p><strong>Treat the MDM console like production.</strong> Because it is.</p>

    <p>MobiLauncher is still evolving, but the core architecture has held up: static deployment, runtime configuration from MDM, defensive rendering, and first-class diagnostics. The constrained environment is exactly why those decisions lasted. When you build for the worst device on the worst network on the worst day, the rest of the fleet gets easier.</p>

    <div class="footer-line">Will Worland is the founder of Oak &amp; Ash Technology, a Sacramento-based IT consultancy focused on mobility, UEM, and endpoint automation. He has 15+ years of experience in enterprise device management across AirWatch, MobileIron, Jamf, Intune, and SOTI MobiControl.</div>
  </div>
</div>`,
  },
  {
    slug: "mdm-protocol-is-the-product",
    title: "Once you've seen one MDM, you've seen them all.",
    date: "2026-03-21",
    summary: "Strip away the UI and every device management platform is running the same protocols against the same OS APIs. Understanding that changes how you evaluate everything.",
    tags: ["MDM", "Architecture", "Apple", "Android", "Linux", "IoT"],
    image: "/one-mdm-all-mdm.png",
    imageAlt: "Protocol and platform logos across Apple, Android, Windows, Linux, and IoT — same protocols, different dashboards",
    content: "",
    contentHtml: `<style>
  .post-body p { font-size: 16px; line-height: 1.8; margin: 0 0 1.4rem; }
  .post-body h2 { font-size: 18px; font-weight: 500; margin: 2.5rem 0 0.75rem; }
  .post-body a { text-decoration: none; border-bottom: 1px solid currentColor; opacity: 0.85; }
  .post-body a:hover { opacity: 1; }
  .post-body .pullquote { border-left: 3px solid currentColor; margin: 2rem 0; padding: 0.5rem 0 0.5rem 1.25rem; opacity: 0.85; }
  .post-body .pullquote p { font-size: 19px; line-height: 1.55; font-style: italic; margin: 0; }
  .post-body .callout { border: 1px solid; border-radius: 8px; padding: 1rem 1.25rem; margin: 1.75rem 0; opacity: 0.9; }
  .post-body .callout p { font-size: 14px; line-height: 1.7; margin: 0 0 0.5rem; }
  .post-body .callout p:last-child { margin: 0; }
  .post-body .sources { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid; }
  .post-body .sources h3 { font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.75rem; opacity: 0.6; }
  .post-body .sources ul { list-style: none; padding: 0; margin: 0; }
  .post-body .sources li { font-size: 13px; margin-bottom: 0.4rem; padding-left: 1rem; position: relative; opacity: 0.7; }
  .post-body .sources li::before { content: "→"; position: absolute; left: 0; opacity: 0.5; }
  .post-body .footer-line { margin-top: 3rem; padding-top: 1.25rem; border-top: 1px solid; font-size: 13px; opacity: 0.6; }
</style>
<div class="post-body">
  <div class="body">
    <p>Every few years, someone in the MDM industry rebrands the same set of capabilities, ships a new dashboard, and charges more for it. The analyst firms write comparison reports. The community debates which platform is "best." IT teams spend months in RFP cycles trying to figure out which vendor has the better enrollment workflow.</p>
    <p>I've been in this industry for fifteen years, across AirWatch, MobileIron, SOTI, Jamf, Intune, and a dozen others. Here's what I've learned: the platform debate is mostly noise. Once you understand what's actually happening underneath — the protocols, the APIs, the OS-level constraints — the vendor differences collapse into something much smaller than the marketing suggests. The UI is a preference. The protocol is the product.</p>
    <h2>The protocol doesn't care what dashboard you're using</h2>
    <p>When Jamf enrolls a Mac, it's talking to the same <a href="https://developer.apple.com/documentation/devicemanagement" target="_blank" rel="noopener noreferrer">Apple MDM protocol</a> that Intune is talking to. The same APNs push mechanism. The same configuration profile schema. The same supervised vs. unsupervised capability boundaries. The same ABM integration endpoints. Apple publishes the spec. Every MDM vendor implements it. What you're buying when you choose Jamf over Kandji over Workspace ONE is not a fundamentally different Apple management capability — it's a different interpretation of the same protocol, wrapped in a different interface, with different tradeoffs around usability, automation, and price.</p>
    <p>The same is true on Android. When SOTI MobiControl manages a Zebra device, it's using the <a href="https://developers.google.com/android/management" target="_blank" rel="noopener noreferrer">Android Management API</a> — the same one NinjaOne, VMware, and Ivanti are using. Google defines what's manageable. The EMM vendor decides how to expose it. Knox on Samsung adds a layer on top, but even that is a published API surface that any certified vendor can access. The device OS is always the authority. The MDM vendor is always the intermediary.</p>
    <div class="pullquote">
      <p>The platform doesn't control the device. The OS does. The platform just holds the keys — and Apple, Google, and Microsoft decide who gets a copy.</p>
    </div>
    <h2>What the UI is actually selling you</h2>
    <p>This isn't a cynical point. The UI matters. Abstraction matters. The difference between a well-designed enrollment workflow and a poorly designed one is real — especially at scale, especially for MSPs managing dozens of clients with thin margins on technician time. Good UX on top of a commodity protocol is genuinely valuable.</p>
    <p>But it's worth being clear about what you're evaluating when you compare MDM platforms. You're not comparing fundamentally different management capabilities. You're comparing:</p>
    <p><strong>Abstraction quality.</strong> How well does the platform hide the complexity of the underlying protocol from the admin? Can a technician push a software update declaration without knowing what a DDM declaration is? Can they set up ADE enrollment without understanding the ABM token flow? The best platforms make the protocol invisible. The worst ones just rename it.</p>
    <p><strong>Automation surface.</strong> Every MDM vendor gets the same API from Apple and Google. What they build on top of it — webhook integrations, scripting engines, rule-based automation, GitOps workflows — is where real differentiation lives. This is the layer that determines whether the platform scales with your operation or becomes a manual bottleneck.</p>
    <p><strong>Reliability of implementation.</strong> Two vendors can implement the same protocol endpoint differently and get wildly different real-world results. APNs push delivery, check-in timing, profile conflict handling, error surfacing — these are implementation details that don't show up in a feature comparison matrix but absolutely show up at 2 AM when a fleet of devices stops checking in.</p>
    <p><strong>Support for the edges.</strong> The protocol defines the baseline. Edge cases — rugged devices, kiosk deployments, multi-user shared iPads, Android Enterprise work profiles on BYOD — are where the platform choices actually diverge. Not because the vendors have different APIs, but because some have invested more in the complexity of handling those scenarios well.</p>
    <h2>The underlying stack, demystified</h2>
    <p>Here's what's actually running every time any management platform "manages" a device. It's the same stack, regardless of vendor:</p>
    <p><strong>On Apple:</strong> The device enrolls via a signed mobileconfig pointing it at the MDM server. All communication runs through <a href="https://developer.apple.com/documentation/devicemanagement/implementing-device-management#Communicate-with-Devices-through-APNs" target="_blank" rel="noopener noreferrer">APNs</a> as the push layer. The MDM server sends a push, the device calls back to retrieve queued commands, executes them, reports status. Configuration is delivered as signed XML payloads. Since iOS 15 and macOS 13, DDM adds a parallel channel using JSON declarations with a proactive status callback model. That's it. Every Apple MDM on the market is a wrapper around this flow.</p>
    <p><strong>On Android:</strong> Android Enterprise defines the management surface via a Device Policy Controller — either Google's own Android Device Policy app or a vendor-supplied DPC for specialized deployments. The DPC applies policies defined by the EMM server via the Android Management API. Managed Google Play handles app distribution. Knox adds Samsung-specific APIs for deeper hardware control. Zebra's EMDK and StageNow layer on top of that for industrial-grade configuration. Every Android EMM is a wrapper around this stack.</p>
    <p><strong>On Windows:</strong> <a href="https://learn.microsoft.com/en-us/windows/client-management/mdm-overview" target="_blank" rel="noopener noreferrer">Windows MDM</a> runs over OMA-DM — an open standard that predates everything else on this list. Intune, Workspace ONE, and every other Windows MDM is a server-side implementation of the same OMA-DM client baked into Windows. Group Policy still exists. Modern management is OMA-DM all the way down.</p>
    <p><strong>On Linux:</strong> Linux is the honest one — there's no single OS vendor mandating a management protocol, so the ecosystem had to build its own. The dominant pattern is agent-based telemetry and policy enforcement via tools like <a href="https://osquery.io" target="_blank" rel="noopener noreferrer">osquery</a>, which exposes the OS as a queryable SQL database, combined with an MDM layer like <a href="https://fleetdm.com" target="_blank" rel="noopener noreferrer">Fleet</a> that runs on top. Configuration management falls back to the tools the infrastructure world has used for thirty years — Ansible, Puppet, Chef — applying declared state over SSH. There's no APNs equivalent, no enrollment profile, no OS-enforced management channel. What you gain is transparency and control. What you trade is the structured guardrails Apple and Google provide. The "protocol is the product" principle still holds — it's just that on Linux, the community built the protocol rather than the OS vendor mandating it.</p>
    <p><strong>On IoT:</strong> This is where the story gets interesting — and where the "seen one, seen them all" thesis gets genuinely stress-tested. IoT device management is still in the protocol fragmentation era that mobile left behind a decade ago. <a href="https://mqtt.org" target="_blank" rel="noopener noreferrer">MQTT</a> handles lightweight pub/sub messaging for constrained devices. <a href="https://www.openmobilealliance.org/lwm2m" target="_blank" rel="noopener noreferrer">LwM2M</a> is the closest thing the IoT world has to a device management protocol standard — it defines object models for device configuration, firmware updates, and telemetry over CoAP. OMA-DM, the same protocol powering Windows MDM, also has an IoT flavor. AWS IoT, Azure IoT Hub, and Google Cloud IoT each layer their own management APIs on top. The result is a landscape that looks a lot like mobile management in 2010: multiple competing protocols, siloed vendor implementations, and a lot of reinvented wheels. The lesson from mobile is clear — eventually, one protocol wins or a dominant platform enforces convergence. IoT hasn't gotten there yet. The vendors who understand that history will build better things than the ones who don't.</p>
    <div class="callout">
      <p><strong>The practical implication:</strong> When you evaluate any device management platform — mobile, desktop, Linux, or IoT — the first question isn't "what can it manage?" The OS or protocol answers that. The real questions are: How well does it implement the underlying spec? What does it build on top? How does it handle failure? And does its abstraction layer make your team faster or slower?</p>
    </div>
    <h2>Why this matters for how you buy</h2>
    <p>Most MDM RFP processes start in the wrong place. They compare feature checklists — does it support ADE? Does it have a self-service portal? Can it manage tvOS? — when those questions are almost always answered the same way by any remotely mature vendor. The protocol guarantees it. What the feature checklist doesn't tell you is how the platform behaves when the APNs cert expires silently, or how it handles a profile conflict on a supervised device, or whether the API is robust enough to build your own automation on top of it.</p>
    <p>The engineers who've worked across multiple platforms develop an intuition for this quickly. The first time you migrate a fleet from one MDM to another, you realize the device didn't change, the OS didn't change, and your management policies didn't change — you just pointed a different UI at the same protocol. The second migration is faster. The third is routine. Because you're not learning a new management paradigm each time. You're learning a new interface for the same underlying model.</p>
    <p>That's not a knock on the platforms. Building reliable, scalable, well-designed tooling on top of a commodity protocol is genuinely hard work, and the best vendors do it well. But it does mean that the anxiety around platform selection — "what if we pick the wrong one?" — is often misplaced. The floor is higher than people think, because the protocol enforces it. And the ceiling is determined by the things that are genuinely vendor-specific: the automation engine, the support model, the roadmap alignment, the pricing at scale.</p>
    <h2>The exception that proves the rule</h2>
    <p>There is one place where the "seen one, seen them all" framing breaks down, and it's worth naming honestly: the gap between platforms that track platform evolution closely and those that don't.</p>
    <p>DDM is a good example. Apple published the spec in 2021. Four years later, vendor support ranged from comprehensive to cosmetic. The protocol was available to everyone equally. The differentiation was entirely in execution — who invested in implementing it properly, who built the right abstractions on top, and who understood what the status channel actually meant for the admin experience.</p>
    <p>IoT is the longer-running version of the same story. The vendors who understand that MQTT and LwM2M are transitional — that the endpoint management industry will eventually converge on something more like the mobile model — will build more durable things than the ones optimizing for today's fragmented landscape. The protocol always wins eventually. The question is just which one.</p>
    <div class="pullquote">
      <p>Platform selection isn't about finding the one that does different things. It's about finding the one that does the same things better — and will keep doing them better as the protocol evolves.</p>
    </div>
    <h2>The frame that changes everything</h2>
    <p>Once you internalize that the protocol is the product, a few things become clearer:</p>
    <p><strong>Migrations become less scary.</strong> You're not re-learning device management — you're re-enrolling devices into a different implementation of the same management model. The hardest part is usually the tooling around the migration, not the migration itself.</p>
    <p><strong>Vendor lock-in becomes more legible.</strong> The lock isn't in the management capabilities — those are protocol-defined and portable. The lock is in the automation you've built on top of the vendor's proprietary APIs, the custom integrations, the reporting infrastructure. Know where your lock-in actually lives before you sign the contract.</p>
    <p><strong>Evaluations become faster.</strong> Once you stop comparing feature checklists and start asking "how does this platform handle protocol edge cases, and what does the automation surface look like?" — the evaluation gets dramatically more efficient. You're asking the questions that reveal real differentiation instead of the ones that produce identical yes/no answers across every vendor.</p>
    <p><strong>New platforms become easier to learn.</strong> Every time a new MDM vendor shows up claiming to have reinvented device management, you can ask one question: what does your protocol implementation look like? Because whatever they've built on top, the foundation is the same one it's always been. Apple's spec. Google's spec. Microsoft's spec. OMA-DM. osquery. MQTT. LwM2M. The platforms come and go. The protocols endure.</p>
    <p>After fifteen years and more platform migrations than I can count, that's the frame I keep coming back to. The UI is rented. The protocol is permanent. Learn the protocol once, and you've learned every device management platform that will ever exist — including the ones that haven't been built yet.</p>
    <div class="sources">
      <h3>Further reading</h3>
      <ul>
        <li><a href="https://developer.apple.com/documentation/devicemanagement" target="_blank" rel="noopener noreferrer">Apple Device Management — Developer Documentation</a></li>
        <li><a href="https://developers.google.com/android/management" target="_blank" rel="noopener noreferrer">Android Management API — Google Developers</a></li>
        <li><a href="https://learn.microsoft.com/en-us/windows/client-management/mdm-overview" target="_blank" rel="noopener noreferrer">Mobile Device Management Overview — Microsoft Learn</a></li>
        <li><a href="https://osquery.io" target="_blank" rel="noopener noreferrer">osquery — OS as a relational database</a></li>
        <li><a href="https://fleetdm.com" target="_blank" rel="noopener noreferrer">Fleet — open source, GitOps-native MDM with Linux support</a></li>
        <li><a href="https://mqtt.org" target="_blank" rel="noopener noreferrer">MQTT — lightweight IoT messaging protocol</a></li>
        <li><a href="https://www.openmobilealliance.org/lwm2m" target="_blank" rel="noopener noreferrer">LwM2M — OMA Lightweight M2M device management standard</a></li>
        <li><a href="https://developer.apple.com/documentation/devicemanagement/implementing-device-management#Communicate-with-Devices-through-APNs" target="_blank" rel="noopener noreferrer">Communicating with devices through APNs — Apple Developer</a></li>
      </ul>
    </div>
    <div class="footer-line">Will Worland is the founder of Oak &amp; Ash Technology, a Sacramento-based IT consultancy focused on mobility, UEM, and endpoint automation. He has 15+ years of experience in enterprise device management across AirWatch, MobileIron, Jamf, Intune, and SOTI MobiControl.</div>
  </div>
</div>`,
  },
  {
    slug: "ddm-declarative-device-management",
    title: "The server is not in charge anymore. Apple just made it official.",
    date: "2026-03-14",
    summary: "Declarative Device Management has been the right answer since 2021. It took Apple deprecating the old model for the industry to admit it. Infrastructure engineers figured this out thirty years ago.",
    tags: ["MDM", "DDM", "Apple", "IaC"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    imageAlt: "Person working on a MacBook Pro",
    imageCredit: {
      name: "Glenn Carstens-Peters",
      url: "https://unsplash.com/photos/person-using-macbook-pro-npxXWgQ33ZQ",
    },
    content: "",
    contentHtml: `<style>
  .post-body p { font-size: 16px; line-height: 1.8; margin: 0 0 1.4rem; }
  .post-body h2 { font-size: 18px; font-weight: 500; margin: 2.5rem 0 0.75rem; }
  .post-body a { text-decoration: none; border-bottom: 1px solid currentColor; opacity: 0.85; }
  .post-body a:hover { opacity: 1; }
  .post-body .pullquote { border-left: 3px solid currentColor; margin: 2rem 0; padding: 0.5rem 0 0.5rem 1.25rem; opacity: 0.85; }
  .post-body .pullquote p { font-size: 19px; line-height: 1.55; font-style: italic; margin: 0; }
  .post-body .callout { border: 1px solid; border-radius: 8px; padding: 1rem 1.25rem; margin: 1.75rem 0; opacity: 0.9; }
  .post-body .callout p { font-size: 14px; line-height: 1.7; margin: 0 0 0.5rem; }
  .post-body .callout p:last-child { margin: 0; }
  .post-body .sources { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid; }
  .post-body .sources h3 { font-size: 13px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.75rem; opacity: 0.6; }
  .post-body .sources ul { list-style: none; padding: 0; margin: 0; }
  .post-body .sources li { font-size: 13px; margin-bottom: 0.4rem; padding-left: 1rem; position: relative; opacity: 0.7; }
  .post-body .sources li::before { content: "→"; position: absolute; left: 0; opacity: 0.5; }
  .post-body .footer-line { margin-top: 3rem; padding-top: 1.25rem; border-top: 1px solid; font-size: 13px; opacity: 0.6; }
</style>
<div class="post-body">
  <div class="body">
    <p>For fifteen years, mobile device management has worked roughly the same way. The server sends a command. The device receives it, acts on it, and reports back. The server polls again later to confirm. Repeat forever. It's the IT equivalent of a manager who has to personally check in on every task rather than trusting the team to handle it.</p>
    <p>It mostly worked. But "mostly" is doing a lot of work in that sentence. Anyone who's managed a large Apple fleet knows the failure modes: OS update commands that fire into the void, APNs push notifications that land too late or not at all, compliance checks that reflect state from twenty minutes ago. The model is reactive by design. The server is always asking. The device is always answering. And if anything in that chain breaks — network, APNs, timing — you find out the hard way.</p>
    <p>When Apple introduced <a href="https://developer.apple.com/documentation/devicemanagement/leveraging-the-declarative-management-data-model-to-scale-devices" target="_blank" rel="noopener noreferrer">Declarative Device Management</a> at WWDC 2021, I thought it was the most important announcement in the session. Most of the industry treated it like a beta curiosity. Vendor roadmaps nodded at it. Blog posts called it "promising." Implementation stalled. For four years, the MDM ecosystem kept shipping legacy profile payloads while DDM sat in the corner waiting to be taken seriously.</p>
    <p>At WWDC 2025, Apple ran out of patience.</p>
    <div class="callout">
      <p><strong>What happened at WWDC 2025:</strong> Apple announced that traditional software update management via MDM commands and configuration profile payloads is deprecated, with removal slated for 2026. Updates will need to be managed via DDM going forward. This is not a soft sunset. The legacy commands are going away. Source: <a href="https://developer.apple.com/videos/play/wwdc2025/258/" target="_blank" rel="noopener noreferrer">What's new in Apple device management and identity — WWDC25</a></p>
    </div>
    <h2>What actually changed with DDM</h2>
    <p>The conceptual shift is straightforward, even if the implementation isn't. Traditional MDM is imperative — you tell the device what to do, step by step, right now. <a href="https://support.apple.com/guide/deployment/intro-to-declarative-device-management-depb1bab77f8/web" target="_blank" rel="noopener noreferrer">DDM is declarative</a> — you describe the state you want, and the device figures out how to get there and stays there.</p>
    <p>Three things make this materially different in practice:</p>
    <p><strong>Declarations, not commands.</strong> Instead of sending a "schedule OS update" command and waiting for an acknowledgment, you push a declaration that says "this device should be running 18.3.2 by April 1st." The device owns the execution. It knows its battery level, its network conditions, whether the user is in a meeting. It picks a window. It installs. It reports done. No more 60-second countdown dialogs appearing at the worst possible moment because the server decided right now was fine.</p>
    <p><strong>A status channel, not polling.</strong> In legacy MDM, the server has to ask the device what's going on. In DDM, the device tells the server proactively when something changes. This sounds like a small architectural detail. It isn't. It means your compliance posture is current, not stale. It means you find out about a configuration drift when it happens, not at the next scheduled check-in. At scale, this is the difference between a monitoring system and a live dashboard.</p>
    <p><strong>Extensibility by design.</strong> The DDM schema is built to grow. New declaration types, new status items, new predicates — Apple can add capabilities without blowing up backward compatibility. Legacy MDM was bolted together over a decade; DDM was designed with the next decade in mind.</p>
    <div class="pullquote">
      <p>The device isn't executing your commands anymore. It's maintaining your declared intent. That's not a UX improvement. That's a different model of authority.</p>
    </div>
    <h2>The infrastructure world solved this in 1993</h2>
    <p>Here's the thing that should embarrass the MDM industry a little: the infrastructure world has been doing declarative state management since before most MDM admins started their careers.</p>
    <p>In 1993, a physicist named Mark Burgess was drowning in shell scripts trying to manage a lab full of Unix workstations at the University of Oslo. His insight was simple and, in retrospect, obvious: stop writing scripts that describe <em>how</em> to change a system, and start writing policies that describe <em>what the system should look like</em>. Let the agent figure out the delta and close it. The result was <a href="https://en.wikipedia.org/wiki/CFEngine" target="_blank" rel="noopener noreferrer">CFEngine</a> — arguably the first declarative configuration management tool, and the direct ancestor of every modern infrastructure automation platform in use today.</p>
    <p>The principle Burgess called <a href="https://mark-burgess-oslo-mb.medium.com/cfengines-star-trek-and-ai-origins-e99096fe845b" target="_blank" rel="noopener noreferrer">"convergence"</a> is exactly what Apple is implementing with DDM. You define a desired end state. The agent evaluates current state against that definition. It closes the gap. It self-heals if something drifts. The server doesn't micromanage the path — it declares the destination.</p>
    <p>From CFEngine, the lineage runs directly through <a href="https://www.puppet.com" target="_blank" rel="noopener noreferrer">Puppet</a> (2005), <a href="https://www.chef.io" target="_blank" rel="noopener noreferrer">Chef</a> (2009), and <a href="https://www.ansible.com" target="_blank" rel="noopener noreferrer">Ansible</a> (2012) — each iterating on the same core idea with different tradeoffs around syntax, architecture, and agent model. By the time cloud infrastructure became the default, declarative management wasn't a philosophy anymore. It was just how you operated at scale. <a href="https://www.terraform.io" target="_blank" rel="noopener noreferrer">Terraform</a>, <a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer">Kubernetes</a> manifests, AWS CloudFormation — all of it is declarative. You write what you want. The platform figures out how to get there.</p>
    <p>This is also the heart of Infrastructure as Code: the idea that your environment's desired state should live in version-controlled, human-readable definitions rather than runbooks and tribal knowledge. You don't script a sequence of changes — you declare a state, commit it to git, and let the tooling converge toward it repeatedly, reliably, across however many machines you're managing. The script breaks when the environment is already halfway changed. The declaration just re-evaluates and corrects.</p>
    <div class="callout">
      <p><strong>The toolchain that got here first:</strong></p>
      <p><strong><a href="https://en.wikipedia.org/wiki/CFEngine" target="_blank" rel="noopener noreferrer">CFEngine</a> (1993)</strong> — Mark Burgess, University of Oslo. First declarative config management tool. Introduced "convergence": desired state, self-healing, distributed agents.</p>
      <p><strong><a href="https://www.puppet.com" target="_blank" rel="noopener noreferrer">Puppet</a> (2005)</strong> — Declarative DSL for server configuration. Popularized the model in enterprise infrastructure teams.</p>
      <p><strong><a href="https://www.chef.io" target="_blank" rel="noopener noreferrer">Chef</a> (2009)</strong> — Code-first approach to desired state; "cookbooks" define what a node should look like.</p>
      <p><strong><a href="https://www.ansible.com" target="_blank" rel="noopener noreferrer">Ansible</a> (2012)</strong> — Agentless declarative automation via YAML playbooks. Lowest barrier to entry; became the dominant choice for many mid-market ops teams.</p>
      <p><strong><a href="https://www.terraform.io" target="_blank" rel="noopener noreferrer">Terraform</a> (2014)</strong> — HashiCorp's IaC tool for cloud infrastructure. Declarative HCL defines the desired state of your entire cloud environment.</p>
      <p><strong><a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer">Kubernetes</a> (2014)</strong> — Container orchestration built entirely on declarative manifests. You declare what should be running; the control plane continuously reconciles actual state to desired state. The reconciliation loop IS the product.</p>
    </div>
    <p>MDM, somehow, missed all of this. While infrastructure engineers were converging server fleets toward declared states with Puppet and Chef, the device management world was still sending commands and polling for acknowledgments — a model that would have felt familiar to an admin in 2005. The MDM protocol wasn't designed for scale or resilience. It was designed to work, mostly, for a fleet that wasn't too big and didn't have too many failure modes.</p>
    <p>DDM is Apple catching the device management world up to where infrastructure engineering has been for thirty years. The fact that it took a deprecation announcement to force adoption is, frankly, a little embarrassing in hindsight.</p>
    <h2>Why this matters beyond Apple</h2>
    <p>You could read DDM as an Apple-specific story. Don't.</p>
    <p>The underlying shift — from server-driven imperative control to client-side declarative state management — is the direction endpoint management is heading across the board. Google's Android Management API has been moving this way for years. Windows has its own version of the tension between SCCM-style push-and-pray and modern cloud-native management. The question every platform is grappling with is the same: how much do you trust the device to manage itself?</p>
    <p>Apple's answer, increasingly, is: a lot. More than you might be comfortable with if you grew up in the era where the network perimeter was the security model and the MDM server was the source of truth. DDM assumes the device is a capable, trusted participant in its own management — not a passive recipient of instructions.</p>
    <p>This has real implications for how endpoint management platforms are built. RMM tools that grew up on Windows — where the agent model gives you deep OS access and the server is genuinely in control — have to rethink what "management" means on an Apple device. You can't just install a heavier agent. Apple's framework is the API surface. You work within it, or you don't work. And increasingly, working within it means thinking like an infrastructure engineer, not like an MDM vendor from 2010.</p>
    <h2>What vendors need to get right</h2>
    <p>The gap between "we support DDM" and "we've actually thought through DDM" is wide right now, and four years of soft adoption pressure didn't close it. Here's what the latter looks like:</p>
    <p><strong>Don't expose the protocol to the admin.</strong> An IT admin managing 200 MacBooks for a client shouldn't need to know what a declaration is. They should see a toggle that says "enforce OS updates" with a deadline picker. The DDM machinery should be invisible. Vendors who surface DDM vocabulary in their UI are just moving complexity from the protocol layer to the admin layer. That's not simplification.</p>
    <p><strong>The status channel is the product.</strong> Real-time state reporting is DDM's most underrated capability. An MDM that implements DDM just to handle software updates and ignores the status channel is leaving the best part on the table. Compliance dashboards that are actually current. Alerts that fire on state change rather than on schedule. This is where the admin experience gets genuinely better — not just more reliable under the hood.</p>
    <p><strong>Think GitOps.</strong> If DDM declarations are the Apple equivalent of Kubernetes manifests or Terraform configs — and they are — then the natural next step is treating them like infrastructure code. Version-controlled, peer-reviewed, deployed through a pipeline. <a href="https://fleetdm.com" target="_blank" rel="noopener noreferrer">Fleet</a> is already headed this direction with GitOps-native MDM workflows. That's the right instinct. The vendors who bring IaC discipline to device management policy will have something meaningfully different from the field.</p>
    <p><strong>Predicates deserve attention.</strong> DDM's predicate system lets you apply declarations conditionally — only enforce this update if the device is on a certain OS version, or if the user is in a specific group. This is where management policy starts to look less like a blunt instrument and more like something intelligent. Most vendors haven't gotten here yet. The ones that do will have a real differentiator.</p>
    <div class="callout">
      <p><strong>The 2026 forcing function:</strong> Legacy software update commands going away isn't just a technical migration. It's a pressure test for every MDM vendor's DDM implementation. The ones who treated DDM as an optional feature for four years are about to find out what "optional" costs when Apple removes the alternative. See: <a href="https://addigy.com/blog/why-apple-os-updates-still-hurt/" target="_blank" rel="noopener noreferrer">Apple MDM to DDM: Rethinking macOS Updates (Addigy)</a> and <a href="https://simplemdm.com/blog/wwdc-2025/" target="_blank" rel="noopener noreferrer">WWDC 2025 recap (SimpleMDM)</a>.</p>
    </div>
    <h2>The organizational reckoning</h2>
    <p>DDM also changes something for IT teams, not just vendors. If the device is maintaining its own declared state, the question shifts from "did we push the right command?" to "did we declare the right intent?" That's a subtle reframe with real consequences.</p>
    <p>An update command either worked or it didn't. A declaration is continuously active. If the device drifts — user downgrades, setting changes, whatever — the declaration drives remediation automatically. That's powerful. It's also a prompt to think more carefully about what you're declaring and why, because the device will keep trying to honor it regardless of context.</p>
    <p>For MSPs especially, this matters. Managing dozens of client environments means management policy needs to be durable, not brittle. DDM's resilience — declarations that survive network interruptions, that self-remediate, that report proactively — is exactly what an MSP needs from a fleet they can't physically touch. The vendors who understood this in 2021 and built accordingly are well positioned. The ones treating the 2026 deprecation as their starting gun have a harder road ahead.</p>
    <h2>Where this goes</h2>
    <p>DDM is still maturing. Apple is adding declaration types incrementally — software updates, disk management, service configurations, Safari extensions. Full parity with legacy MDM capabilities isn't there yet, and the coexistence period adds its own complexity for vendors supporting both. That's been true since 2021 and it's still true today. The difference is that Apple has now set a hard deadline on one side of the coexistence.</p>
    <p>The endpoint management platforms that thrive in this environment will be the ones that stopped thinking about MDM as "sending commands to devices" and started thinking about it as "declaring and maintaining state" — the same shift the infrastructure world made a generation ago. The tools that get there will look less like traditional MDM consoles and more like what you'd expect from a platform built by people who grew up writing Puppet manifests and Terraform configs. Declared intent, convergent enforcement, GitOps-native policy management. The device management world is finally catching up to where infrastructure has been for thirty years.</p>
    <p>Turns out the device was always going to be in charge. The infrastructure engineers knew it first.</p>
  </div>
  <div class="sources">
    <h3>Sources &amp; further reading</h3>
    <ul>
      <li><a href="https://developer.apple.com/videos/play/wwdc2025/258/" target="_blank" rel="noopener noreferrer">What's new in Apple device management and identity — WWDC25 (Apple Developer)</a></li>
      <li><a href="https://developer.apple.com/documentation/devicemanagement/leveraging-the-declarative-management-data-model-to-scale-devices" target="_blank" rel="noopener noreferrer">Leveraging the declarative management data model — Apple Developer Docs</a></li>
      <li><a href="https://support.apple.com/guide/deployment/intro-to-declarative-device-management-depb1bab77f8/web" target="_blank" rel="noopener noreferrer">Intro to Declarative Device Management — Apple Support</a></li>
      <li><a href="https://simplemdm.com/blog/wwdc-2025/" target="_blank" rel="noopener noreferrer">WWDC 2025 recap: OS26, Liquid Glass, and DDM — SimpleMDM</a></li>
      <li><a href="https://addigy.com/blog/why-apple-os-updates-still-hurt/" target="_blank" rel="noopener noreferrer">Apple MDM to DDM: Rethinking macOS Updates — Addigy</a></li>
      <li><a href="https://en.wikipedia.org/wiki/CFEngine" target="_blank" rel="noopener noreferrer">CFEngine — Wikipedia</a></li>
      <li><a href="https://mark-burgess-oslo-mb.medium.com/cfengines-star-trek-and-ai-origins-e99096fe845b" target="_blank" rel="noopener noreferrer">CFEngine's Star Trek and AI origins — Mark Burgess</a></li>
      <li><a href="https://fleetdm.com" target="_blank" rel="noopener noreferrer">Fleet — open source, GitOps-native MDM</a></li>
      <li><a href="https://simplemdm.com/blog/declarative-device-management/" target="_blank" rel="noopener noreferrer">What is Declarative Device Management? — SimpleMDM</a></li>
    </ul>
  </div>
  <div class="footer-line">Will Worland is the founder of Oak &amp; Ash Technology, a Sacramento-based IT consultancy focused on mobility, UEM, and endpoint automation. He has 15+ years of experience in enterprise device management across AirWatch, MobileIron, Jamf, Intune, and SOTI MobiControl.</div>
</div>`,
  },
  {
    slug: "hello-world",
    title: "Hello, World",
    date: "2026-03-01",
    summary: "The first post — a quick intro to what this blog will be about.",
    tags: ["general"],
    image: "https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    imageAlt: "MacBook Air beside a mug on a clean table",
    imageCredit: {
      name: "Alejandro Escamilla",
      url: "https://unsplash.com/photos/macbook-air-near-mug-on-table-yC-Yzbqy7PY",
    },
    content: `Welcome to the blog. I plan to use this space to write about projects I'm working on, things I'm learning, and anything else I find worth sharing.

More posts coming soon.`,
  },
];
