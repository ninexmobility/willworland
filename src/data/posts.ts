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
