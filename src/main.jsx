import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import Reveal from "reveal.js";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "./styles.css";

const EN = {
  label: "Farm Marshal · English",
  eyebrow1: "Estate intelligence",
  title: "Farm Marshal",
  tagline: "Your entire farm. Visible. Measurable. Under control.",
  quote1: "Imagine that wherever you are, you can open one screen and see the health, activity, risks, and progress of every date palm and every greenhouse on your estate.",
  quote2: "You do not need to search through reports, call different farm managers, or wait until a problem becomes visible. The system brings important issues to you, explains the business impact, and coordinates the right people to solve them.",
  vision: "The first fully visible and digitally managed agricultural estate.",
  note: "Saudi Arabia is actively investing in advanced agriculture, AI-supported greenhouses, robotics, water efficiency, and date-palm innovation.",
  eyebrow2: "One controlled service",
  model: "The operating model",
  intro: "Our expertise is building the digital platform, drone workflow, AI integration, evidence management, automation, and operational control. Agricultural decisions will be designed and validated with qualified Saudi agricultural experts.",
  p1: "Tech Team", p2: "Agricultural Partners · Crowdsourced Everywhere", p3: "Drones and Sensors Integration",
  items1: ["Web and mobile platform","Simple customer experience","Drone mission workflow","Data management","AI integration","Alerts and automation","Maps and dashboards","Security and audit history","Expert marketplace","Reports and task tracking"],
  items2: ["Date-palm knowledge","Greenhouse expertise","Disease and pest assessment","Irrigation recommendations","Local product and treatment guidance","Agricultural validation","Defining inspection protocols"],
  items3: ["Drone equipment","Certified pilots","Flight mission execution","Sensor installation","Data capture and archiving"],
  connected: "Three pillars. One operating system.",
  hub: "We connect technology, aerial visibility, local agricultural expertise, and field operations into one controlled service."
};

const AR = {
  label: "فارم مارشال · العربية", eyebrow1: "ذكاء متكامل للمزرعة", title: "Farm Marshal",
  tagline: "مزرعتك بالكامل. مرئية. قابلة للقياس. وتحت السيطرة.",
  quote1: "تخيّل أنه أينما كنت، يمكنك فتح شاشة واحدة ورؤية حالة كل نخلة وكل بيت محمي في مزرعتك، ومعرفة النشاط والمخاطر والتقدم.",
  quote2: "لن تحتاج إلى البحث في التقارير، أو الاتصال بمديري المزارع المختلفين، أو الانتظار حتى تصبح المشكلة واضحة. يعرض لك النظام المسائل المهمة، ويوضح أثرها على الأعمال، وينسق الأشخاص المناسبين لحلها.",
  vision: "أول منشأة زراعية مرئية بالكامل وتدار رقمياً.",
  note: "تستثمر المملكة العربية السعودية بشكل نشط في الزراعة المتقدمة، والبيوت المحمية المدعومة بالذكاء الاصطناعي، والروبوتات، وكفاءة استخدام المياه، وابتكارات نخيل التمر.",
  eyebrow2: "خدمة واحدة محكمة الإدارة", model: "نموذج التشغيل",
  intro: "تتمثل خبرتنا في بناء المنصة الرقمية، وسير عمل الطائرات المسيّرة، وتكامل الذكاء الاصطناعي، وإدارة الأدلة، والأتمتة، والتحكم التشغيلي. وسيتم تصميم القرارات الزراعية والتحقق منها بالتعاون مع خبراء زراعيين سعوديين مؤهلين.",
  p1: "الفريق التقني", p2: "الشركاء الزراعيون · خبرات جماعية في كل مكان", p3: "تكامل الطائرات المسيّرة وأجهزة الاستشعار",
  items1: ["منصة ويب وتطبيق جوال","تجربة عميل بسيطة","سير مهام الطائرات المسيّرة","إدارة البيانات","تكامل الذكاء الاصطناعي","التنبيهات والأتمتة","الخرائط ولوحات المعلومات","الأمان وسجل التدقيق","سوق الخبراء","التقارير وتتبع المهام"],
  items2: ["معرفة نخيل التمر","خبرة البيوت المحمية","تقييم الأمراض والآفات","توصيات الري","إرشادات المنتجات والمعالجات المحلية","التحقق الزراعي","تحديد بروتوكولات الفحص"],
  items3: ["معدات الطائرات المسيّرة","طيارون معتمدون","تنفيذ مهام الطيران","تركيب أجهزة الاستشعار","التقاط البيانات وأرشفتها"],
  connected: "ثلاث ركائز. منظومة تشغيل واحدة.",
  hub: "نربط التقنية، والرؤية الجوية، والخبرة الزراعية المحلية، والعمليات الميدانية ضمن خدمة واحدة محكمة الإدارة."
};

function StorySlide({ t, rtl=false }) {
  return <section className={rtl ? "rtl" : ""} data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">{t.eyebrow1}</div><h1>{t.title}</h1><p className="tagline">{t.tagline}</p>
    <div className="story-stage">
      <div className="story-box story-a fragment fade-in" data-fragment-index="0">“{t.quote1}”</div>
      <div className="story-box story-b fragment fade-in" data-fragment-index="1">“{t.quote2}”</div>
      <div className="vision-wrap fragment zoom-in" data-fragment-index="2"><div className="vision">{t.vision}</div></div>
    </div>
  </section>;
}

function Pillar({title,items,idx}) { return <article className={`pillar pillar-${idx} fragment fade-up`} data-fragment-index={idx-1}><h3>{title}</h3><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>; }
function ModelSlide({t,rtl=false}) {
  const concise = rtl ? [
    [t.p1,t.items1],
    [t.p2,t.items2],
    [t.p3,t.items3]
  ] : [
    ["Tech Team",["Customer-friendly web and mobile platform","Drone workflows, maps and data management","Machine learning, automation, alerts and reporting","Secure task tracking and expert marketplace"]],
    ["Agricultural Partners · Expertise Everywhere",["Crop and greenhouse expertise","Pest, disease and irrigation guidance","Local treatments and agricultural validation","Standardized inspection protocols"]],
    ["Drone and Sensor Operations",["Equipment, sensors and certified pilots","Flight missions and secure data capture","Data storage and archiving"]]
  ];
  return <section className={`${rtl?"rtl ":""}operating-model-auto-slide`} data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">{t.eyebrow2}</div><h1 className="small-title">{t.model}</h1><p className="pillars-intro">{t.intro}</p>
    <div className="pillars-grid">{concise.map(([title,items],i)=><article className={`pillar operating-pillar-auto operating-pillar-auto-${i+1}`} key={title}><h3>{title}</h3><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div>
  </section>;
}
function HubSlide({t,rtl=false}) { return <section className={`${rtl?"rtl ":""}hub-attention-slide`} data-background-gradient="linear-gradient(135deg,#07130e,#10281d)" data-transition="zoom">
  <div className="brand">Farm Marshal</div><div className="eyebrow">{t.eyebrow2}</div><h1 className="small-title">{t.connected}</h1>
  <div className="orbit-stage">
    <div className="radial-system radial-system-auto" aria-hidden="true"><span className="radial-ring"/><span className="radial-spoke spoke-top"/><span className="radial-spoke spoke-left"/><span className="radial-spoke spoke-right"/></div>
    {[t.p1,t.p2,t.p3].map((x,i)=><article key={x} className={`orbit-card oc-${i+1} orbit-card-auto orbit-card-auto-${i+1}`}><h3>{x}</h3></article>)}
    <div className="hub hub-auto"><span className="hub-target-ring hub-target-ring-one" aria-hidden="true"/><span className="hub-target-ring hub-target-ring-two" aria-hidden="true"/><span className="hub-target-dot hub-target-dot-one" aria-hidden="true"/><span className="hub-target-dot hub-target-dot-two" aria-hidden="true"/><div className="hub-inner">{t.hub}</div></div>
  </div>
</section>; }



/* --------------------------------------------------------------------------
 * Business presentation slides
 * Added after the original English slides. Existing slides are unchanged.
 * -------------------------------------------------------------------------- */
function VisionSlide() {
  return <section className="business-promise-slide" data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">The business promise</div>
    <h1>Visibility. Accountability. Resources Efficiency.</h1>
    <div className="business-card business-hero promise-main-card">
      <div className="business-kicker">Data-as-a-Service for agricultural operations</div>
      <p>We do not sell drones. We provide trusted field evidence, expert supervision, and operational visibility across large agricultural estates.</p>
    </div>
    <div className="value-strip value-strip-animated promise-lower-strip">
      <span className="promise-item promise-item-1">Explore the entire farm</span>
      <span className="promise-item promise-item-2">Verify field execution</span>
      <span className="promise-item promise-item-3">Smarter Water Use, Stronger Yields</span>
      <span className="promise-item promise-item-4">Detect disease risk early and act before it spreads</span>
    </div>
  </section>;
}

function TeamIntroductionSlide() {
  const members=[
    {initials:"AM",name:"Ahmed Mohamed",role:"BMW-Domain Project Manager",highlights:["MBA in General Project Management","More than 15 years of professional experience","Multiple independent hobby projects"],value:"Web app and mobile app, goal definition, delivery governance and business execution"},
    {initials:"MZ",name:"Muhammad Zainelddien",role:"Manager at Apple",highlights:["Management experience in a global technology environment","Operational and customer-focused perspective","Product and execution thinking"],value:"Drone strategy, mission operations, equipment ecosystem and field-data acquisition"},
    {initials:"HM",name:"Hazem Mohy",role:"Mechatronics Engineer",highlights:["Strong practical engineering foundation","Machine learning and computer vision","Real-world systems and software integration"],value:"Machine learning, computer vision, automation and software integration"},
    {initials:"AH",name:"Ahmed Hanfy, Ph.D.",role:"Principal Semiconductor Engineer at Infineon",highlights:["Ph.D. in Nanoelectronics, Technical University of Munich","Graduated summa cum laude","Molecular-device simulation, circuit modeling and semiconductor engineering"],value:"China market analysis, market-entry strategy and business development"}
  ];
  return <section className="team-auto-slide team-trading-slide team-trading-slide-v2" data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">The core team and agricultural network</div>
    <h1 className="team-title">A broad capability set to build, operate and win the market</h1>
    <p className="team-intro-lead">One team, four strengths: international business development, Drone operations, Artificial Intelligence, and Commercial Trading.</p>

    <div className="team-grid team-grid-four team-primary-stage">{members.map((member,i)=><article className={`team-card team-card-compact team-member-auto team-member-auto-${i+1} team-person-${member.initials.toLowerCase()}`} key={member.name}>
      <div className="team-card-head"><span className="team-initials">{member.initials}</span><div><h3>{member.name}</h3><strong>{member.role}</strong></div></div>
      <ul>{member.highlights.map(item=><li key={item}>{item}</li>)}</ul>
      <div className="team-value"><small>Contribution to Farm Marshal</small><b>{member.value}</b></div>
    </article>)}</div>

    {/* Compact clones begin over their original headers, then glide to the side rails. */}
    <div className="team-compact-layer" aria-hidden="true">{members.map(member=><div className={`team-compact-person team-compact-${member.initials.toLowerCase()}`} key={`compact-${member.initials}`}>
      <span>{member.initials}</span><b>{member.name}</b>
    </div>)}</div>

    {/* One Reveal fragment equals exactly one presenter click. */}
    <span className="fragment team-transform-trigger" aria-hidden="true" />

    <div className="team-history-panel" aria-label="Previous trading-company experience">
      <div className="team-history-copy">
        <span className="team-history-kicker">Previous experience</span>
        <h2>Owns Oriel Company for Product Import &amp; Exports</h2>
        <div className="team-history-between"><b>Between</b><span>Germany · Italy · Slovenia · Egypt · Syria</span></div>
        <div className="team-history-focus">
          <b>Focus</b>
          <ul><li>Cars</li><li>Building Materials</li><li>Solar Systems</li><li>Food Goods <i>➡</i> <em>Trigger for <strong>Farm Marshal</strong></em></li></ul>
        </div>
      </div>
      <div className="team-history-visual">
        <div className="team-history-image-window"><img src={imagePath("oriel-company-reference.png")} alt="Oriel Company website homepage" /></div>
        <a href="https://www.oriel-company.de/#home" target="_blank" rel="noreferrer">www.oriel-company.de/#home</a>
      </div>
    </div>

    <div className="agriculture-network agriculture-network-auto"><div className="network-icon">+A</div><div><strong>Agricultural Experts and Academic Partners</strong><span>Crop, irrigation and greenhouse specialists support recommendation design, agricultural validation, inspection protocols and the training and validation of machine-learning models.</span></div></div>
    <div className="team-bottomline team-market-line team-bottomline-auto"><b>One team, four core capabilities and Experts network:</b><span>Build the product</span><i>•</i><span>Operate the field-data ecosystem</span><i>•</i><span>Develop the intelligence</span><i>•</i><span>Enter, win and scale the market</span></div>
  </section>;
}

function ProblemSlide() {
  const problems = [
    ["01", "Limited visibility", "Remote owners cannot inspect every field, team, or work order."],
    ["02", "Hidden Water and Resource Loss", "Irrigation failures may remain invisible until crop damage appears."],
    ["03", "Execution risk", "Reports alone do not prove that the right work happened in the right area."],
    ["04", "Disconnected Expertise", "Advice, evidence, field work, and follow-up are rarely connected."]
  ];
  return <section className="problem-auto-slide" data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Why now</div>
    <h1 className="small-title">The owner manages results, but cannot see the full operation</h1>
    <div className="problem-grid">
      {problems.map(([no,title,text],i) => <article className={`business-card problem-card problem-card-auto problem-card-auto-${i+1}`} key={no}>
        <span className="card-no">{no}</span><h3>{title}</h3><p>{text}</p>
      </article>)}
    </div>
    <div className="business-bottomline problem-bottomline-auto">The cost is not only labor. It is late discovery, wasted inputs, weak accountability, and lost yield.</div>
  </section>;
}

function ReclamationSlide() {
  const capabilities=[
    ["01","Inspect at scale","Cover extensive reclamation areas through planned aerial missions instead of relying only on complete ground walkthroughs."],
    ["02","Create a repeatable baseline","Map field boundaries, planting blocks, irrigation corridors and observation zones using consistent routes."],
    ["03","Compare change over time","Repeat the same inspection pattern to reveal planted, delayed, dry, incomplete or suspicious areas."],
    ["04","Focus people where needed","Convert broad-area visibility into prioritized GPS locations for targeted ground inspection and action."]
  ];
  return <section className="reclamation-sequence-slide" data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Use case 01 · Reclamation at scale</div>
    <h1 className="reclamation-title">Large reclamation areas become inspectable, comparable and actionable</h1>
    <p className="reclamation-lead">The size of the project is no longer the main inspection constraint. Planned aerial coverage provides a consistent view across the estate, while field teams focus on the locations that require attention.</p>
    <div className="reclamation-scale-stage">
      <div className="scale-visual scale-gps-visual">
        <div className="scale-rings"><span>PROJECT</span><span>SECTOR</span><span>ZONE</span><b>GPS</b></div>
        <div className="scale-caption"><strong>Broad coverage</strong><span>From the complete project to the exact inspection point</span></div>
      </div>
      <div className="scale-capabilities">{capabilities.map(([no,title,text],i)=><article className={`scale-capability scale-capability-auto scale-capability-auto-${i+1}`} key={no}><b>{no}</b><div><strong>{title}</strong><span>{text}</span></div></article>)}</div>
    </div>
    <div className="reclamation-output-band reclamation-output-auto">
      <div><small>Coverage</small><strong>Complete project overview</strong></div>
      <i>→</i><div><small>Comparison</small><strong>Repeatable progress evidence</strong></div>
      <i>→</i><div><small>Decision</small><strong>Prioritized field intervention</strong></div>
    </div>
    <div className="reclamation-note">Aerial inspection expands visibility; qualified agricultural experts and field teams remain responsible for validation and action.</div>
  </section>;
}
function WaterSlide() {
  return <section className="water-sequence-slide" data-background-gradient="linear-gradient(135deg,#051611,#0d3327)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Use case 02 · The water card</div>
    <h1>Find water loss before it becomes crop loss</h1>
    <div className="water-layout">
      <article className="business-card water-card water-auto water-auto-left">
        <span className="water-symbol">!</span><h3>Detect abnormal zones</h3>
        <ul><li>Blocked or low-pressure lines</li><li>Leakage and standing water</li><li>Over-irrigation and dry zones</li><li>Uneven vegetation patterns</li></ul>
      </article>
      <div className="water-route water-auto water-auto-center">
        <div>Drone / field evidence</div><span>↓</span><div>Zone comparison</div><span>↓</span><div>GPS inspection points</div>
      </div>
      <article className="business-card water-card water-auto water-auto-right">
        <span className="water-symbol">✓</span><h3>Direct the response</h3>
        <ul><li>Prioritized repair plan</li><li>Technician sent to exact coordinates</li><li>Before-and-after verification</li><li>Historical water-performance record</li></ul>
      </article>
    </div>
    <div className="highlight-box water-highlight water-auto water-auto-bottom">Protect groundwater, operating cost, and yield with one evidence-driven workflow.</div>
  </section>;
}

function TreatmentSlide() {
  const steps = ["Expert recommendation", "Trackable task", "Before evidence", "Treatment record", "After evidence", "Owner approval"];
  return <section className="treatment-sequence-slide" data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Use case 03</div>
    <h1 className="small-title use-case-detail-title">Convert agricultural advice into verified field execution</h1>
    <div className="treatment-flow treatment-flow-auto">
      {steps.map((step,i) => <div className={`treatment-item treatment-step-auto treatment-step-auto-${i+1}`} key={step}>
        <span>{i+1}</span><strong>{step}</strong>{i < steps.length-1 && <i>→</i>}
      </div>)}
    </div>
    <div className="treatment-proof treatment-proof-auto">
      <div><b>What?</b><span>Product and quantity</span></div>
      <div><b>Where?</b><span>GPS area and field label</span></div>
      <div><b>When?</b><span>Time-stamped evidence</span></div>
      <div><b>Result?</b><span>Follow-up inspection</span></div>
    </div>
    <div className="highlight-box treatment-bottom-auto">The platform does not stop at a PDF recommendation. It tracks whether the work happened and whether it worked.</div>
  </section>;
}

function MonitoringSlide() {
  const items = [
    ["Scheduled missions", "The same routes and observation points support consistent comparison."],
    ["Historical comparison", "New evidence is measured against previous inspections."],
    ["Flag suspicious zones", "Machine learning supports prioritization without replacing the agricultural expert."],
    ["Expert action", "Only relevant areas are reviewed and converted into follow-up cases."]
  ];
  return <section className="monitoring-sequence-slide" data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Use case 04 · Continuous monitoring</div>
    <h1 className="small-title">Move from reactive diagnosis to early warning</h1>
    <div className="monitoring-track monitoring-track-auto">
      {items.map(([title,text],i) => <article className={`monitoring-node monitoring-node-auto monitoring-node-auto-${i+1}`} key={title}>
        <span>{i+1}</span><h3>{title}</h3><p>{text}</p>
      </article>)}
    </div>
    <div className="subscription-strip monitoring-bottom-auto"><b>Recurring service</b><span>Weekly or biweekly</span><span>Per field or hectare</span><span>Seasonal monitoring</span><span>Urgent expert review</span></div>
  </section>;
}



// Resolve public assets against Vite's configured base path.
// This works locally and when GitHub Pages hosts the app under
// /FarmMarshal_Presentation/ instead of at the domain root.
const imagePath = (filename) =>
  `${import.meta.env.BASE_URL}images/${encodeURIComponent(filename)}`;

const PRODUCT_IMAGES = {
  webPortfolio: imagePath("web-app-portfolio.png"),
  webIncident: imagePath("web-app-incident.png"),
  webEvidence: imagePath("web-app-evidence.png"),
  mobileHero: imagePath("Best-Option - single slide App.jpeg"),
  mobileArabic: imagePath("mobile-app-arabic.png")
};

function ProductVisual({src,alt,label,className=""}) {
  const [failed,setFailed]=useState(false);
  return <div className={`product-visual ${className}`}>
    {!failed ? <img src={src} alt={alt} onError={()=>setFailed(true)}/> : <div className="visual-placeholder"><strong>{label}</strong><span>{src}</span></div>}
    <small>{label}</small>
  </div>;
}

function WebPlatformSlide() {
  const highlights=[
    ["Your whole Land / Projects, in hand","See every farm, greenhouse and reclamation project from one owner workspace."],
    ["Know what needs attention now","Active issues, project status and location are visible without travelling to the farm."],
    ["Track performance, not reports","Reported, active and solved issues show what happened, what remains open and what was closed."],
    ["Operate in Arabic or English","A bilingual owner experience keeps the same portfolio and status available in either language."]
  ];
  return <section className="owner-view-slide" data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">Web application · Owner view</div>
    <h1 className="small-title">One owner workspace for all farms and projects</h1>
    <p className="portfolio-executive-lead">Wherever the owner is, the current status of every agricultural investment remains visible and actionable.</p>
    <div className="portfolio-slide-layout portfolio-executive-layout">
      <ProductVisual src={PRODUCT_IMAGES.webPortfolio} alt="Farm Marshal owner portfolio homepage" label="" className="portfolio-wide-visual portfolio-sharp-visual"/>
      <div className="portfolio-highlights portfolio-highlights-four">{highlights.map(([title,text],i)=><article className={`portfolio-highlight executive-highlight owner-card owner-card-${i+1}`} key={title}><b>{String(i+1).padStart(2,"0")}</b><div><strong>{title}</strong><span>{text}</span></div></article>)}</div>
    </div>
  </section>;
}
function WebWorkflowSlide() {
  const steps=["Detect","Compare","Expert review","Assign","Verify","Report"];
  return <section data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">Web workflow · Evidence to action</div>
    <h1 className="small-title">From a discovered problem to a verified result</h1>
    <div className="workflow-image-stage">
      <ProductVisual src={PRODUCT_IMAGES.webIncident} alt="Detected irrigation issue in Field B Zone B-14" label="1 · Discovered problem and precise affected zone" className="workflow-image"/>
      <div className="workflow-bridge"><b>One case</b><span>→</span><small>Complete chain of Fixing</small></div>
      <ProductVisual src={PRODUCT_IMAGES.webEvidence} alt="Verification timeline with responsible people and evidence" label="2 · Verification timeline, evidence and responsible people" className="workflow-image"/>
    </div>
    <div className="digital-flow compact-flow workflow-sequence">{steps.map((step,i)=><React.Fragment key={step}><div className={`digital-step workflow-step workflow-step-${i+1}`}><b>{i+1}</b><span>{step}</span></div>{i<steps.length-1&&<i className={`workflow-arrow workflow-arrow-${i+1}`}>→</i>}</React.Fragment>)}</div>
  </section>;
}
function MobileConceptSlide() {
  return <section className="mobile-merged-slide" data-background-gradient="linear-gradient(135deg,#051611,#0d3327)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">Expected mobile experience</div>
    <h1 className="small-title">Connecting platform control to field execution</h1>
    <div className="mobile-slide-label">Expected mobile application · Illustrative concept</div>
    <div className="mobile-merged-visuals">
      <ProductVisual src={PRODUCT_IMAGES.mobileHero} alt="Three-phone expected Farm Marshal mobile application concept" label="" className="mobile-wide-visual mobile-primary-visual mobile-clean-visual"/>
      <ProductVisual src={PRODUCT_IMAGES.mobileArabic} alt="Arabic Farm Marshal field-operator mobile concept" label="" className="mobile-arabic-merged-visual mobile-arabic-clear-visual"/>
    </div>
    <div className="mobile-detail-strip mobile-detail-strip-large">
      <article><b>3</b><strong>User roles</strong><span>Owner · Expert · Field operator</span></article>
      <article><b>6</b><strong>Core actions</strong><span>Receive · Navigate · Capture · Execute · Submit · Verify</span></article>
      <article><b>2</b><strong>Languages</strong><span>Arabic · English</span></article>
    </div>
  </section>;
}
function MobileWorkflowSlide() {
  const actions=[
    ["1","Receive","Assigned task, farm, zone, priority and deadline"],
    ["2","Navigate","GPS route and arrival confirmation"],
    ["3","Capture","Before evidence, notes and measurements"],
    ["4","Execute","Materials, quantities and completed work"],
    ["5","Submit","After evidence and operator declaration"],
    ["6","Verify","Expert review and owner visibility"]
  ];
  return <section data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">Mobile field journey</div>
    <h1 className="small-title">Six simple actions create one complete evidence record</h1>
    <div className="mobile-workflow-layout">
      <div className="mobile-actions">{actions.map(([no,title,text],i)=><article className="mobile-action fragment fade-right" data-fragment-index={i} key={no}><b>{no}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      <ProductVisual src={PRODUCT_IMAGES.mobileArabic} alt="Arabic expected Farm Marshal mobile application" label="Arabic field-operator concept · RTL" className="mobile-arabic-visual"/>
    </div>
    <div className="pilot-targets"><strong>Pilot targets</strong><span>≤ 3 taps to start a task</span><span>100% required evidence before submission</span><span>Offline-first capture</span></div>
  </section>;
}

function InitialUseCasesSlide() {
  const cases=[
    ["01","Reclamation at Scale","Inspect extensive areas, establish repeatable baselines, compare progress and direct field teams to priority GPS points."],
    ["02","The Water Card","Detect abnormal irrigation zones, compare evidence and direct repairs before water loss becomes crop loss."],
    ["03","Verified Field Execution","Turn agricultural recommendations into assigned, evidenced, verified and owner-visible field actions."],
    ["04","Continuous Monitoring","Repeat missions, compare historical evidence, flag suspicious zones and trigger expert follow-up early."]
  ];
  const outcomes=[
    "Earlier identification of operational problems",
    "From Sky to Soil: Smarter Inspections",
    "Every Task Seen. Every Result Verified.",
    "See the Full Picture. Decide with Confidence.",
    "Optimize Water and Inputs with Visual Intelligence"
  ];
  return <section className="use-cases-slide" data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">Four use cases · Detailed next</div>
    <h1 className="small-title">Focus on Visibility to Enable Precise Decisions</h1>
    <div className="use-case-grid use-case-auto-grid use-case-grid-four">{cases.map(([no,title,text],i)=><article className={`use-case-card use-case-overview-card use-case-auto-card use-case-auto-card-${i+1}`} key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    <div className="outcome-band outcome-band-auto"><strong>Expected business outcomes</strong><div>{outcomes.map((x,i)=><span className={`outcome-pill outcome-pill-${i+1}`} key={x}>{x}</span>)}</div></div>
  </section>;
}

function TrustSlide() {
  return <section data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Trust by design</div>
    <h1 className="small-title">Professional evidence and qualified recommendations</h1>
    <div className="trust-grid">
      <article className="business-card trust-card fragment fade-right">
        <span className="trust-icon">⌖</span><h3>Traceable field evidence</h3>
        <ul><li>Mapped field boundaries</li><li>GPS location and time</li><li>Consistent field labels</li><li>Historical comparison</li><li>Duplicate-evidence controls</li></ul>
      </article>
      <article className="business-card trust-card fragment fade-up">
        <span className="trust-icon">ID</span><h3>Qualified experts</h3>
        <ul><li>Verified identity and certificates</li><li>Experience and crop specialization</li><li>Regional knowledge</li><li>Conflict-of-interest declaration</li><li>Platform and customer ratings</li></ul>
      </article>
      <article className="business-card trust-card fragment fade-left">
        <span className="trust-icon">✓</span><h3>Controlled review</h3>
        <ul><li>Submission quality check</li><li>Payment reserved before work</li><li>Expert diagnosis and recommendation</li><li>Junior review challenged by senior expert</li><li>Release after final report</li></ul>
      </article>
    </div>
  </section>;
}

function BusinessModelSlide() {
  const offers = ["Visibility as a Service", "Evidence as a Service", "Agricultural Intelligence", "Water-efficiency support"];
  return <section data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Commercial model</div>
    <h1>We are not selling drones</h1>
    <p className="business-lead">We sell trusted agricultural data and an operating workflow that turns evidence into action.</p>
    <div className="model-grid">
      {offers.map((offer,i) => <div className="business-card offer-card fragment fade-up" data-fragment-index={i} key={offer}><span>0{i+1}</span><strong>{offer}</strong></div>)}
    </div>
    <div className="pilot-box fragment zoom-in">
      <div><small>Start safely</small><b>One farm · One priority use case · Measurable baseline</b></div>
      <div><small>Scale only when proven</small><b>Compare water, time, loss, and execution before expansion</b></div>
    </div>
  </section>;
}

function ClosingSlide() {
  return <section className="closing-slide" data-background-gradient="radial-gradient(circle at 50% 45%,#194a35,#07130e 62%)">
    <div className="brand">Farm Marshal</div>
    <div className="closing-box closing-box-auto">
      <div className="closing-kicker">I do not expect a decision today. I expect a question.</div>
      <h1>What is the single biggest headache you face on your farms right now?</h1>
      <p>Let us start there, define the evidence, and build a measurable pilot around it.</p>
    </div>
  </section>;
}


/* Complete one-to-one Arabic mirror of the English deck. */
const AR_TRANSLATIONS = {
"Farm Marshal":"فارم مارشال","The business promise":"وعد الأعمال","Visibility. Accountability. Resources Efficiency.":"الرؤية. المساءلة. كفاءة الموارد.","Data-as-a-Service for agricultural operations":"البيانات كخدمة للعمليات الزراعية","We do not sell drones. We provide trusted field evidence, expert supervision, and operational visibility across large agricultural estates.":"نحن لا نبيع الطائرات المسيّرة. نحن نوفر أدلة ميدانية موثوقة، وإشرافاً متخصصاً، ورؤية تشغيلية عبر المشاريع الزراعية الكبيرة.","Explore the entire farm":"استكشف المزرعة بالكامل","Verify field execution":"تحقق من التنفيذ الميداني","Smarter Water Use, Stronger Yields":"استخدام أذكى للمياه وإنتاجية أقوى","Detect disease risk early and act before it spreads":"اكتشف مخاطر الأمراض مبكراً وتصرف قبل انتشارها",
"The core team and agricultural network":"الفريق الأساسي والشبكة الزراعية","One team, four strengths: international business development, Drone operations, Artificial Intelligence, and Commercial Trading.":"فريق واحد بأربع نقاط قوة: تطوير الأعمال الدولية، وعمليات الطائرات المسيّرة، والذكاء الاصطناعي، والتجارة.","A broad capability set to build, operate and win the market":"مجموعة واسعة من القدرات للبناء والتشغيل والنجاح في السوق","A complementary team combining product delivery, drone operations, intelligent software, semiconductor engineering and international business development.":"فريق متكامل يجمع تطوير المنتج وتشغيل الطائرات المسيّرة والبرمجيات الذكية وهندسة أشباه الموصلات وتطوير الأعمال الدولية.","Contribution to Farm Marshal":"المساهمة في فارم مارشال","Agricultural Experts and Academic Partners":"خبراء زراعيون وشركاء أكاديميون","Crop, irrigation and greenhouse specialists support recommendation design, agricultural validation, inspection protocols and the training and validation of machine-learning models.":"يدعم متخصصو المحاصيل والري والبيوت المحمية تصميم التوصيات والتحقق الزراعي وبروتوكولات الفحص وتدريب نماذج التعلم الآلي والتحقق منها.","One team, four core capabilities and Experts network:":"فريق واحد، أربع قدرات أساسية وشبكة خبراء:","Build the product":"بناء المنتج","Operate the field-data ecosystem":"تشغيل منظومة البيانات الميدانية","Develop the intelligence":"تطوير الذكاء","Enter, win and scale the market":"دخول السوق والنجاح والتوسع",
"Why now":"لماذا الآن","The owner manages results, but cannot see the full operation":"المالك يدير النتائج، لكنه لا يرى العملية كاملة","Limited visibility":"رؤية محدودة","Remote owners cannot inspect every field, team, or work order.":"لا يستطيع المالكون عن بُعد فحص كل حقل أو فريق أو أمر عمل.","Hidden Water and Resource Loss":"فقدان خفي للمياه والموارد","Irrigation failures may remain invisible until crop damage appears.":"قد تبقى أعطال الري غير مرئية حتى يظهر الضرر على المحصول.","Execution risk":"مخاطر التنفيذ","Reports alone do not prove that the right work happened in the right area.":"التقارير وحدها لا تثبت أن العمل الصحيح نُفذ في المنطقة الصحيحة.","Disconnected Expertise":"خبرات غير مترابطة","Advice, evidence, field work, and follow-up are rarely connected.":"نادراً ما تكون المشورة والأدلة والعمل الميداني والمتابعة مترابطة.","The cost is not only labor. It is late discovery, wasted inputs, weak accountability, and lost yield.":"التكلفة ليست العمالة فقط، بل الاكتشاف المتأخر وهدر المدخلات وضعف المساءلة وفقدان الإنتاجية.",
"One controlled service":"خدمة واحدة محكومة","The operating model":"نموذج التشغيل","Three pillars. One operating system.":"ثلاث ركائز. نظام تشغيل واحد.","Tech Team":"الفريق التقني","Agricultural Partners · Expertise Everywhere":"الشركاء الزراعيون · خبرة في كل مكان","Drone and Sensor Operations":"عمليات الطائرات المسيّرة والمستشعرات","Customer-friendly web and mobile platform":"منصة ويب وجوال سهلة للعملاء","Drone workflows, maps and data management":"مسارات عمل الطائرات والخرائط وإدارة البيانات","Machine learning, automation, alerts and reporting":"التعلم الآلي والأتمتة والتنبيهات والتقارير","Secure task tracking and expert marketplace":"تتبع آمن للمهام ومنصة للخبراء","Crop and greenhouse expertise":"خبرة في المحاصيل والبيوت المحمية","Pest, disease and irrigation guidance":"إرشادات الآفات والأمراض والري","Local treatments and agricultural validation":"معالجات محلية وتحقق زراعي","Standardized inspection protocols":"بروتوكولات فحص موحدة","Equipment, sensors and certified pilots":"معدات ومستشعرات وطيارون معتمدون","Flight missions and secure data capture":"مهام طيران وجمع آمن للبيانات","Data storage and archiving":"تخزين البيانات وأرشفتها","We connect technology, aerial visibility, local agricultural expertise, and field operations into one controlled service.":"نربط التقنية والرؤية الجوية والخبرة الزراعية المحلية والعمليات الميدانية في خدمة واحدة محكومة.",
"Web application · Owner view":"تطبيق الويب · عرض المالك","One owner workspace for all farms and projects":"مساحة عمل واحدة للمالك لجميع المزارع والمشاريع","Wherever the owner is, the current status of every agricultural investment remains visible and actionable.":"أينما كان المالك، تبقى الحالة الحالية لكل استثمار زراعي واضحة وقابلة لاتخاذ الإجراء.","Your whole Land / Projects, in hand":"كل أراضيك ومشاريعك بين يديك","See every farm, greenhouse and reclamation project from one owner workspace.":"شاهد كل مزرعة وبيت محمي ومشروع استصلاح من مساحة عمل واحدة.","Know what needs attention now":"اعرف ما يحتاج إلى الاهتمام الآن","Active issues, project status and location are visible without travelling to the farm.":"المشكلات النشطة وحالة المشروع والموقع واضحة دون السفر إلى المزرعة.","Track performance, not reports":"تابع الأداء، لا التقارير فقط","Reported, active and solved issues show what happened, what remains open and what was closed.":"توضح المشكلات المبلغ عنها والنشطة والمحلولة ما حدث وما يزال مفتوحاً وما تم إغلاقه.","Operate in Arabic or English":"اعمل بالعربية أو الإنجليزية","A bilingual owner experience keeps the same portfolio and status available in either language.":"تجربة ثنائية اللغة تتيح نفس المحفظة والحالة بكلتا اللغتين.",
"Web workflow · Evidence to action":"مسار الويب · من الدليل إلى الإجراء","From a discovered problem to a verified result":"من مشكلة مكتشفة إلى نتيجة موثقة","1 · Discovered problem and precise affected zone":"١ · المشكلة المكتشفة والمنطقة المتأثرة بدقة","2 · Verification timeline, evidence and responsible people":"٢ · خط زمني للتحقق والأدلة والأشخاص المسؤولون","One case":"حالة واحدة","Complete chain of Fixing":"سلسلة معالجة مكتملة","Detected irrigation issue in Field B Zone B-14":"مشكلة ري مكتشفة في الحقل ب، المنطقة ب-١٤","Verification timeline with responsible people and evidence":"خط زمني للتحقق مع المسؤولين والأدلة",
"Expected mobile experience":"تجربة الجوال المتوقعة","Connecting platform control to field execution":"ربط تحكم المنصة بالتنفيذ الميداني","Expected mobile application · Illustrative concept":"تطبيق الجوال المتوقع · تصور توضيحي","User roles":"أدوار المستخدمين","Owner · Expert · Field operator":"المالك · الخبير · المشغل الميداني","Core actions":"الإجراءات الأساسية","Receive · Navigate · Capture · Execute · Submit · Verify":"استلام · تنقل · توثيق · تنفيذ · إرسال · تحقق","Languages":"اللغات","Arabic · English":"العربية · الإنجليزية","Mobile field journey":"رحلة العمل الميداني عبر الجوال","Six simple actions create one complete evidence record":"ستة إجراءات بسيطة تنشئ سجلاً متكاملاً للأدلة","Receive":"استلام","Assigned task, farm, zone, priority and deadline":"المهمة والمزرعة والمنطقة والأولوية والموعد النهائي","Navigate":"تنقل","GPS route and arrival confirmation":"مسار GPS وتأكيد الوصول","Capture":"توثيق","Before evidence, notes and measurements":"أدلة ما قبل التنفيذ والملاحظات والقياسات","Execute":"تنفيذ","Materials, quantities and completed work":"المواد والكميات والعمل المنجز","Submit":"إرسال","After evidence and operator declaration":"أدلة ما بعد التنفيذ وإقرار المشغل","Verify":"تحقق","Expert review and owner visibility":"مراجعة الخبير ووضوح الحالة للمالك","Pilot targets":"أهداف التجربة","≤ 3 taps to start a task":"٣ نقرات أو أقل لبدء المهمة","100% required evidence before submission":"استكمال ١٠٠٪ من الأدلة المطلوبة قبل الإرسال","Offline-first capture":"توثيق يعمل دون اتصال أولاً",
"Four use cases · Detailed next":"أربع حالات استخدام · التفاصيل التالية","Focus on Visibility to Enable Precise Decisions":"التركيز على الرؤية لتمكين قرارات دقيقة","Reclamation at Scale":"الاستصلاح على نطاق واسع","Inspect extensive areas, establish repeatable baselines, compare progress and direct field teams to priority GPS points.":"فحص مساحات واسعة، وإنشاء خطوط أساس قابلة للتكرار، ومقارنة التقدم، وتوجيه الفرق الميدانية إلى نقاط GPS ذات الأولوية.","The Water Card":"بطاقة المياه","Detect abnormal irrigation zones, compare evidence and direct repairs before water loss becomes crop loss.":"اكتشف مناطق الري غير الطبيعية، وقارن الأدلة، ووجّه الإصلاح قبل أن يتحول فقد المياه إلى فقد في المحصول.","Verified Field Execution":"تنفيذ ميداني موثّق","Turn agricultural recommendations into assigned, evidenced, verified and owner-visible field actions.":"حوّل التوصيات الزراعية إلى إجراءات ميدانية مسندة ومدعومة بالأدلة ومتحقق منها وواضحة للمالك.","Continuous Monitoring":"مراقبة مستمرة","Repeat missions, compare historical evidence, flag suspicious zones and trigger expert follow-up early.":"كرر المهام وقارن الأدلة التاريخية وحدد المناطق المشتبه بها وابدأ متابعة الخبير مبكراً.","Expected business outcomes":"نتائج الأعمال المتوقعة","Earlier identification of operational problems":"اكتشاف أبكر للمشكلات التشغيلية","Visibility as a Service":"الرؤية كخدمة","Evidence as a Service":"الأدلة كخدمة","Agricultural Intelligence":"الذكاء الزراعي","Water-efficiency support":"دعم كفاءة المياه",
"Use case 01 · Reclamation at scale":"حالة الاستخدام ٠١ · الاستصلاح على نطاق واسع","Large reclamation areas become inspectable, comparable and actionable":"تصبح مساحات الاستصلاح الكبيرة قابلة للفحص والمقارنة واتخاذ الإجراء","The size of the project is no longer the main inspection constraint. Planned aerial coverage provides a consistent view across the estate, while field teams focus on the locations that require attention.":"لم يعد حجم المشروع هو القيد الرئيسي للفحص. توفر التغطية الجوية المخططة رؤية متسقة للموقع، بينما تركز الفرق الميدانية على الأماكن التي تحتاج إلى اهتمام.","Inspect at scale":"فحص على نطاق واسع","Create a repeatable baseline":"إنشاء خط أساس قابل للتكرار","Compare change over time":"مقارنة التغير عبر الزمن","Focus people where needed":"توجيه الفرق إلى حيث الحاجة","Broad coverage":"تغطية واسعة","From the complete project to the exact inspection point":"من المشروع بالكامل إلى نقطة الفحص الدقيقة","Coverage":"التغطية","Complete project overview":"نظرة شاملة على المشروع","Comparison":"المقارنة","Repeatable progress evidence":"أدلة تقدم قابلة للتكرار","Decision":"القرار","Prioritized field intervention":"تدخل ميداني حسب الأولوية","Aerial inspection expands visibility; qualified agricultural experts and field teams remain responsible for validation and action.":"يوسع الفحص الجوي نطاق الرؤية، بينما يبقى الخبراء الزراعيون المؤهلون والفرق الميدانية مسؤولين عن التحقق والإجراء.",
"Use case 02 · The water card":"حالة الاستخدام ٠٢ · بطاقة المياه","Find water loss before it becomes crop loss":"اكتشف فقد المياه قبل أن يتحول إلى فقد في المحصول","Detect abnormal zones":"اكتشف المناطق غير الطبيعية","Drone / field evidence":"أدلة الطائرة والميدان","Zone comparison":"مقارنة المناطق","GPS inspection points":"نقاط فحص GPS","Direct the response":"وجّه الاستجابة","Protect groundwater, operating cost, and yield with one evidence-driven workflow.":"احمِ المياه الجوفية وتكلفة التشغيل والإنتاجية عبر مسار عمل واحد قائم على الأدلة.",
"Use case 03":"حالة الاستخدام ٠٣","Convert agricultural advice into verified field execution":"حوّل المشورة الزراعية إلى تنفيذ ميداني موثّق","Expert recommendation":"توصية الخبير","Assign":"إسناد","Trackable task":"مهمة قابلة للتتبع","Before evidence":"أدلة ما قبل التنفيذ","After evidence":"أدلة ما بعد التنفيذ","Expert review":"مراجعة الخبير","Owner approval":"اعتماد المالك","Treatment record":"سجل المعالجة","What?":"ماذا؟","Product and quantity":"المنتج والكمية","Where?":"أين؟","GPS area and field label":"منطقة GPS ورمز الحقل","When?":"متى؟","Time-stamped evidence":"أدلة مختومة زمنياً","Result?":"النتيجة؟","Follow-up inspection":"فحص المتابعة","The platform does not stop at a PDF recommendation. It tracks whether the work happened and whether it worked.":"لا تتوقف المنصة عند توصية بصيغة PDF، بل تتابع ما إذا نُفذ العمل وما إذا حقق النتيجة.",
"Use case 04 · Continuous monitoring":"حالة الاستخدام ٠٤ · المراقبة المستمرة","Move from reactive diagnosis to early warning":"انتقل من التشخيص التفاعلي إلى الإنذار المبكر","Scheduled missions":"مهام مجدولة","The same routes and observation points support consistent comparison.":"تدعم المسارات ونقاط المراقبة نفسها مقارنة متسقة.","Historical comparison":"مقارنة تاريخية","New evidence is measured against previous inspections.":"تُقاس الأدلة الجديدة مقابل عمليات الفحص السابقة.","Flag suspicious zones":"تحديد المناطق المشتبه بها","Only relevant areas are reviewed and converted into follow-up cases.":"تُراجع المناطق ذات الصلة فقط وتُحوّل إلى حالات متابعة.","Expert action":"إجراء الخبير","Machine learning supports prioritization without replacing the agricultural expert.":"يدعم التعلم الآلي ترتيب الأولويات دون استبدال الخبير الزراعي.","Recurring service":"خدمة متكررة","Weekly or biweekly":"أسبوعية أو كل أسبوعين","Per field or hectare":"لكل حقل أو هكتار","Seasonal monitoring":"مراقبة موسمية","Urgent expert review":"مراجعة عاجلة من الخبير",
"Trust by design":"الثقة مدمجة في التصميم","Professional evidence and qualified recommendations":"أدلة احترافية وتوصيات مؤهلة","Traceable field evidence":"أدلة ميدانية قابلة للتتبع","Qualified experts":"خبراء مؤهلون","Controlled review":"مراجعة محكومة",
"I do not expect a decision today. I expect a question.":"لا أتوقع قراراً اليوم، بل أتوقع سؤالاً.","What is the single biggest headache you face on your farms right now?":"ما أكبر تحدٍ واحد تواجهه في مزارعك الآن؟","Let us start there, define the evidence, and build a measurable pilot around it.":"لنبدأ من هناك، ونحدد الأدلة، ونبني تجربة قابلة للقياس حوله."
};

function arText(value){
  if(typeof value!=="string") return value;
  const lead=value.match(/^\s*/)?.[0]||"", trail=value.match(/\s*$/)?.[0]||"", core=value.trim();
  return lead+(AR_TRANSLATIONS[core]||core)+trail;
}
function translateArabicTree(node,isRoot=false){
  if(typeof node==="string"||typeof node==="number") return typeof node==="string"?arText(node):node;
  if(Array.isArray(node)) return node.map((x,i)=>translateArabicTree(x,false));
  if(!React.isValidElement(node)) return node;
  const next={...node.props};
  if(next.children!==undefined) next.children=React.Children.map(next.children,c=>translateArabicTree(c,false));
  for(const prop of ["alt","label","title","aria-label"]) if(typeof next[prop]==="string") next[prop]=arText(next[prop]);
  if(node.type==="section"){
    next.dir="rtl"; next.lang="ar";
    next.className=((next.className||"")+" rtl arabic-mirror-slide").trim();
  }
  return React.cloneElement(node,next);
}
function ArabicMirror({render}){ return translateArabicTree(render(),true); }
const ARABIC_MIRRORS=[
  ()=>StorySlide({t:EN}),TeamIntroductionSlide,ProblemSlide,()=>ModelSlide({t:EN}),()=>HubSlide({t:EN}),WebPlatformSlide,WebWorkflowSlide,MobileConceptSlide,VisionSlide,InitialUseCasesSlide,ReclamationSlide,WaterSlide,TreatmentSlide,MonitoringSlide,ClosingSlide,TrustSlide
];

function App(){
 const deckElement=useRef(null), deck=useRef(null); const [ready,setReady]=useState(false);
 useEffect(()=>{ let active=true; (async()=>{ if(!deckElement.current||deck.current)return; deck.current=new Reveal(deckElement.current,{embedded:true,controls:true,progress:true,center:true,transition:"fade",backgroundTransition:"zoom",width:1600,height:900,margin:.045,hash:false}); await deck.current.initialize(); if(active)setReady(true); })(); return()=>{active=false; try{deck.current?.destroy();}catch{} deck.current=null;};},[]);
 return <main className="app"><nav><span className={ready?"status ready":"status"}/><button onClick={()=>deck.current?.slide(0)}>English</button><button onClick={()=>deck.current?.slide(16)}>العربية</button></nav>
  <div className="reveal" ref={deckElement}><div className="slides"><StorySlide t={EN}/><TeamIntroductionSlide/><ProblemSlide/><ModelSlide t={EN}/><HubSlide t={EN}/><WebPlatformSlide/><WebWorkflowSlide/><MobileConceptSlide/><VisionSlide/><InitialUseCasesSlide/><ReclamationSlide/><WaterSlide/><TreatmentSlide/><MonitoringSlide/><ClosingSlide/><TrustSlide/>{ARABIC_MIRRORS.map((render,i)=><ArabicMirror key={`ar-${i}`} render={render}/>)}</div></div>
 </main>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
