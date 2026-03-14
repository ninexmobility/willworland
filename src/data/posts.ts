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
    slug: "ddm-declarative-device-management",
    title: "The server is not in charge anymore. Apple just made it official.",
    date: "2026-03-01",
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
    date: "2026-03-13",
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
