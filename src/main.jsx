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
function ModelSlide({t,rtl=false}) { return <section className={rtl?"rtl":""} data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
  <div className="brand">Farm Marshal</div><div className="eyebrow">{t.eyebrow2}</div><h1 className="small-title">{t.model}</h1><p className="pillars-intro">{t.intro}</p>
  <div className="pillars-grid"><Pillar title={t.p1} items={t.items1} idx={1}/><Pillar title={t.p2} items={t.items2} idx={2}/><Pillar title={t.p3} items={t.items3} idx={3}/></div>
</section>; }
function HubSlide({t,rtl=false}) { return <section className={rtl?"rtl":""} data-background-gradient="linear-gradient(135deg,#07130e,#10281d)" data-transition="zoom">
  <div className="brand">Farm Marshal</div><div className="eyebrow">{t.eyebrow2}</div><h1 className="small-title">{t.connected}</h1>
  <div className="orbit-stage">
    <div className="radial-system fragment fade-in" data-fragment-index="0" aria-hidden="true"><span className="radial-ring"/><span className="radial-spoke spoke-top"/><span className="radial-spoke spoke-left"/><span className="radial-spoke spoke-right"/></div>
    {[t.p1,t.p2,t.p3].map((x,i)=><article key={x} className={`orbit-card oc-${i+1} fragment zoom-in`} data-fragment-index="0"><h3>{x}</h3></article>)}
    <div className="hub fragment zoom-in" data-fragment-index="1"><div className="hub-inner">{t.hub}</div></div></div>
</section>; }



/* --------------------------------------------------------------------------
 * Business presentation slides
 * Added after the original English slides. Existing slides are unchanged.
 * -------------------------------------------------------------------------- */
function VisionSlide() {
  return <section data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">The business promise</div>
    <h1>Visibility. Accountability. Water Efficiency.</h1>
    <div className="business-card business-hero fragment fade-up">
      <div className="business-kicker">Data-as-a-Service for agricultural operations</div>
      <p>We do not sell drones. We provide trusted field evidence, expert supervision, and operational visibility across large agricultural estates.</p>
    </div>
    <div className="value-strip">
      <span>See the complete farm</span><span>Verify field execution</span><span>Protect water and yield</span>
    </div>
  </section>;
}

function ProblemSlide() {
  const problems = [
    ["01", "Limited visibility", "Remote owners cannot inspect every field, team, or work order."],
    ["02", "Hidden water loss", "Irrigation failures may remain invisible until crop damage appears."],
    ["03", "Execution risk", "Reports alone do not prove that the right work happened in the right area."],
    ["04", "Fragmented expertise", "Advice, evidence, field work, and follow-up are rarely connected."]
  ];
  return <section data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Why now</div>
    <h1 className="small-title">The owner manages results, but cannot see the full operation</h1>
    <div className="problem-grid">
      {problems.map(([no,title,text],i) => <article className="business-card problem-card fragment fade-up" data-fragment-index={i} key={no}>
        <span className="card-no">{no}</span><h3>{title}</h3><p>{text}</p>
      </article>)}
    </div>
    <div className="business-bottomline">The cost is not only labor. It is late discovery, wasted inputs, weak accountability, and lost yield.</div>
  </section>;
}

function ReclamationSlide() {
  const steps = ["Map the field", "Capture GPS evidence", "Compare progress", "Issue action report"];
  return <section data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Use case 01</div>
    <h1 className="small-title">Land reclamation progress verification</h1>
    <p className="business-lead">Was the planned area planted, irrigated, and progressing according to plan?</p>
    <div className="flow-row">
      {steps.map((step,i) => <React.Fragment key={step}>
        <div className="flow-step fragment fade-up" data-fragment-index={i}><b>{String(i+1).padStart(2,"0")}</b><span>{step}</span></div>
        {i < steps.length-1 && <div className="flow-arrow">→</div>}
      </React.Fragment>)}
    </div>
    <div className="evidence-grid">
      <div><strong>Evidence</strong><span>Geotagged photos and video</span></div>
      <div><strong>Control</strong><span>Field boundaries and repeatable routes</span></div>
      <div><strong>Output</strong><span>Progress map and prioritized actions</span></div>
    </div>
    <div className="highlight-box">Verify remotely that reclamation and planting work is progressing according to plan.</div>
  </section>;
}

function WaterSlide() {
  return <section data-background-gradient="linear-gradient(135deg,#051611,#0d3327)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Use case 02 · The water card</div>
    <h1>Find water loss before it becomes crop loss</h1>
    <div className="water-layout">
      <article className="business-card water-card fragment fade-right">
        <span className="water-symbol">≈</span><h3>Detect abnormal zones</h3>
        <ul><li>Blocked or low-pressure lines</li><li>Leakage and standing water</li><li>Over-irrigation and dry zones</li><li>Uneven vegetation patterns</li></ul>
      </article>
      <div className="water-route fragment fade-up">
        <div>Drone / field evidence</div><span>↓</span><div>Zone comparison</div><span>↓</span><div>GPS inspection points</div>
      </div>
      <article className="business-card water-card fragment fade-left">
        <span className="water-symbol">✓</span><h3>Direct the response</h3>
        <ul><li>Prioritized repair plan</li><li>Technician sent to exact coordinates</li><li>Before-and-after verification</li><li>Historical water-performance record</li></ul>
      </article>
    </div>
    <div className="highlight-box water-highlight">Protect groundwater, operating cost, and yield with one evidence-driven workflow.</div>
  </section>;
}

function TreatmentSlide() {
  const steps = ["Expert recommendation", "Trackable task", "Before evidence", "Treatment record", "After evidence", "Owner approval"];
  return <section data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Use case 03</div>
    <h1 className="small-title">Convert agricultural advice into verified field execution</h1>
    <div className="treatment-flow">
      {steps.map((step,i) => <div className="treatment-item fragment fade-up" data-fragment-index={i} key={step}>
        <span>{i+1}</span><strong>{step}</strong>{i < steps.length-1 && <i>→</i>}
      </div>)}
    </div>
    <div className="treatment-proof">
      <div><b>What?</b><span>Product and quantity</span></div>
      <div><b>Where?</b><span>GPS area and field label</span></div>
      <div><b>When?</b><span>Time-stamped evidence</span></div>
      <div><b>Result?</b><span>Follow-up inspection</span></div>
    </div>
    <div className="highlight-box">The platform does not stop at a PDF recommendation. It tracks whether the work happened and whether it worked.</div>
  </section>;
}

function MonitoringSlide() {
  const items = [
    ["Scheduled missions", "The same routes and observation points support consistent comparison."],
    ["Historical comparison", "New evidence is measured against previous inspections."],
    ["Flag suspicious zones", "AI assists prioritization without replacing the agricultural expert."],
    ["Expert action", "Only relevant areas are reviewed and converted into follow-up cases."]
  ];
  return <section data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div>
    <div className="eyebrow">Use case 04 · Continuous monitoring</div>
    <h1 className="small-title">Move from reactive diagnosis to early warning</h1>
    <div className="monitoring-track">
      {items.map(([title,text],i) => <article className="monitoring-node fragment zoom-in" data-fragment-index={i} key={title}>
        <span>{i+1}</span><h3>{title}</h3><p>{text}</p>
      </article>)}
    </div>
    <div className="subscription-strip"><b>Recurring service</b><span>Weekly or biweekly</span><span>Per field or hectare</span><span>Seasonal monitoring</span><span>Urgent expert review</span></div>
  </section>;
}


const PRODUCT_IMAGES = {
  webPortfolio: "/images/web-app-portfolio.png",
  webIncident: "/images/web-app-incident.png",
  webEvidence: "/images/web-app-evidence.png",
  mobileHero: "/images/mobile-app-hero.png",
  mobileArabic: "/images/mobile-app-arabic.png"
};

function ProductVisual({src,alt,label,className=""}) {
  const [failed,setFailed]=useState(false);
  return <div className={`product-visual ${className}`}>
    {!failed ? <img src={src} alt={alt} onError={()=>setFailed(true)}/> : <div className="visual-placeholder"><strong>{label}</strong><span>{src}</span></div>}
    <small>{label}</small>
  </div>;
}

function WebPlatformSlide() {
  const capabilities=[
    ["Portfolio visibility","All farms, greenhouses, project status, and active issues in one owner workspace."],
    ["Project context","Navigation appears only after a farm is selected, preventing data confusion."],
    ["Bilingual operation","English and Arabic interfaces with complete RTL behavior."],
    ["Issue accounting","Reported, active, and solved cases remain visible at project level."]
  ];
  return <section data-background-gradient="linear-gradient(135deg,#06110c,#102a1e)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">Digital owner experience</div>
    <h1 className="small-title">The web app is the owner’s operating command center</h1>
    <div className="web-product-layout">
      <ProductVisual src={PRODUCT_IMAGES.webPortfolio} alt="Farm Marshal owner portfolio web application" label="Owner portfolio · Web application" className="web-hero-visual"/>
      <div className="capability-stack">{capabilities.map(([title,text],i)=><article className="capability-card fragment fade-left" data-fragment-index={i} key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    </div>
    <div className="product-caption">One portfolio → one selected project → one traceable operational workflow.</div>
  </section>;
}

function WebWorkflowSlide() {
  const steps=["Detect","Compare","Expert review","Assign","Verify","Report"];
  return <section data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">Web workflow</div>
    <h1 className="small-title">From a visible problem to a verified result</h1>
    <div className="web-evidence-grid">
      <ProductVisual src={PRODUCT_IMAGES.webIncident} alt="Farm Marshal issue detection page" label="Issue detected · Zone B-14"/>
      <ProductVisual src={PRODUCT_IMAGES.webEvidence} alt="Farm Marshal evidence and verification page" label="Evidence, experts, repair and verification"/>
    </div>
    <div className="digital-flow">{steps.map((step,i)=><React.Fragment key={step}><div className="digital-step fragment fade-up" data-fragment-index={i}><b>{i+1}</b><span>{step}</span></div>{i<steps.length-1&&<i>→</i>}</React.Fragment>)}</div>
    <div className="web-proof-strip"><span>GPS + time</span><span>Parallel expert recommendations</span><span>Before / after evidence</span><span>Owner approval</span></div>
  </section>;
}

function MobileConceptSlide() {
  return <section data-background-gradient="linear-gradient(135deg,#051611,#0d3327)">
    <div className="brand">Farm Marshal</div><div className="eyebrow">Expected mobile experience</div>
    <h1 className="small-title">The mobile concept connects platform control to field execution</h1>
    <div className="mobile-concept-layout">
      <ProductVisual src={PRODUCT_IMAGES.mobileHero} alt="Expected Farm Marshal mobile application concept" label="Expected mobile application · Illustrative concept" className="mobile-hero-visual"/>
      <div className="mobile-number-grid">
        <article><b>3</b><strong>User roles</strong><span>Owner · Expert · Field operator</span></article>
        <article><b>6</b><strong>Core workflows</strong><span>Assign through verification</span></article>
        <article><b>2</b><strong>Languages</strong><span>Arabic + English</span></article>
        <article><b>1</b><strong>Evidence chain</strong><span>Person · Time · GPS · Task</span></article>
      </div>
    </div>
    <div className="concept-disclaimer">Illustrative product concept. Mobile interaction and synchronization performance will be validated during a field pilot.</div>
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
    <div className="closing-box fragment zoom-in">
      <div className="closing-kicker">I do not expect a decision today. I expect a question.</div>
      <h1>What is the single biggest headache you face on your farms right now?</h1>
      <p>Let us start there, define the evidence, and build a measurable pilot around it.</p>
    </div>
  </section>;
}

function App(){
 const deckElement=useRef(null), deck=useRef(null); const [ready,setReady]=useState(false);
 useEffect(()=>{ let active=true; (async()=>{ if(!deckElement.current||deck.current)return; deck.current=new Reveal(deckElement.current,{embedded:true,controls:true,progress:true,center:true,transition:"fade",backgroundTransition:"zoom",width:1600,height:900,margin:.045,hash:false}); await deck.current.initialize(); if(active)setReady(true); })(); return()=>{active=false; try{deck.current?.destroy();}catch{} deck.current=null;};},[]);
 return <main className="app"><nav><span className={ready?"status ready":"status"}/><button onClick={()=>deck.current?.slide(0)}>English</button><button onClick={()=>deck.current?.slide(16)}>العربية</button></nav>
  <div className="reveal" ref={deckElement}><div className="slides"><StorySlide t={EN}/><ModelSlide t={EN}/><HubSlide t={EN}/><VisionSlide/><ProblemSlide/><ReclamationSlide/><WaterSlide/><TreatmentSlide/><MonitoringSlide/><WebPlatformSlide/><WebWorkflowSlide/><MobileConceptSlide/><MobileWorkflowSlide/><TrustSlide/><BusinessModelSlide/><ClosingSlide/><StorySlide t={AR} rtl/><ModelSlide t={AR} rtl/><HubSlide t={AR} rtl/></div></div>
 </main>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
