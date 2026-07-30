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
    <div className="brand">{t.label}</div><div className="eyebrow">{t.eyebrow1}</div><h1>{t.title}</h1><p className="tagline">{t.tagline}</p>
    <div className="story-stage">
      <div className="story-box story-a fragment fade-in" data-fragment-index="0">“{t.quote1}”</div>
      <div className="story-box story-b fragment zoom-in" data-fragment-index="1">“{t.quote2}”</div>
      <div className="fragment" data-fragment-index="2">
        <div className="story-box story-a split">“{t.quote1}”</div><div className="story-box story-b split">“{t.quote2}”</div><div className="vision">{t.vision}</div>
      </div>
      <p className="context-note fragment fade-up" data-fragment-index="3">{t.note}</p>
    </div>
  </section>;
}

function Pillar({no,title,items,idx}) { return <article className={`pillar pillar-${idx} fragment fade-up`} data-fragment-index={idx-1}><div className="pillar-no">{String(no).padStart(2,"0")}</div><h3>{title}</h3><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>; }
function ModelSlide({t,rtl=false}) { return <section className={rtl?"rtl":""} data-background-gradient="linear-gradient(135deg,#07130e,#10281d)">
  <div className="brand">{t.label}</div><div className="eyebrow">{t.eyebrow2}</div><h1 className="small-title">{t.model}</h1><p className="pillars-intro">{t.intro}</p>
  <div className="pillars-grid"><Pillar no={1} title={t.p1} items={t.items1} idx={1}/><Pillar no={2} title={t.p2} items={t.items2} idx={2}/><Pillar no={3} title={t.p3} items={t.items3} idx={3}/></div>
</section>; }
function HubSlide({t,rtl=false}) { return <section className={rtl?"rtl":""} data-background-gradient="linear-gradient(135deg,#07130e,#10281d)" data-transition="zoom">
  <div className="brand">{t.label}</div><div className="eyebrow">{t.eyebrow2}</div><h1 className="small-title">{t.connected}</h1>
  <div className="orbit-stage"><div className="fragment fade-in" data-fragment-index="0"><i className="orbit-line line-1"/><i className="orbit-line line-2"/><i className="orbit-line line-3"/></div>
    {[t.p1,t.p2,t.p3].map((x,i)=><article key={x} className={`orbit-card oc-${i+1} fragment zoom-in`} data-fragment-index="0"><div className="pillar-no">0{i+1}</div><h3>{x}</h3></article>)}
    <div className="hub fragment zoom-in" data-fragment-index="1">{t.hub}</div></div>
</section>; }

function App(){
 const deckElement=useRef(null), deck=useRef(null); const [ready,setReady]=useState(false);
 useEffect(()=>{ let active=true; (async()=>{ if(!deckElement.current||deck.current)return; deck.current=new Reveal(deckElement.current,{embedded:true,controls:true,progress:true,center:true,transition:"fade",backgroundTransition:"zoom",width:1600,height:900,margin:.045,hash:false}); await deck.current.initialize(); if(active)setReady(true); })(); return()=>{active=false; try{deck.current?.destroy();}catch{} deck.current=null;};},[]);
 return <main className="app"><nav><span className={ready?"status ready":"status"}/><button onClick={()=>deck.current?.slide(0)}>English</button><button onClick={()=>deck.current?.slide(3)}>العربية</button></nav>
  <div className="reveal" ref={deckElement}><div className="slides"><StorySlide t={EN}/><ModelSlide t={EN}/><HubSlide t={EN}/><StorySlide t={AR} rtl/><ModelSlide t={AR} rtl/><HubSlide t={AR} rtl/></div></div>
 </main>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
