'use client'
import {useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import {menu} from '@/data/menu'
import {Img,Reveal,ease} from './ui'
const price=(p:string)=>'₹'+p.replace('/',' / ')
export default function MenuPage(){
const [active,setActive]=useState('dining')
useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-45% 0px -50% 0px'})
menu.forEach(s=>{const el=document.getElementById(s.id);el&&io.observe(el)});return()=>io.disconnect()},[])
return(<>
<section className="mhero"><div className="mhero-img"><Img src="/images/food-aglio.jpg" alt="" sizes="45vw" priority/></div><div className="wrap">
<p className="eyebrow">Freshly prepared. Thoughtfully served.</p>
<h1 className="display m"><span className="mask"><motion.span initial={{y:'110%'}} animate={{y:0}} transition={{duration:1.3,ease}}>The Lambreta Menu</motion.span></span></h1>
<p className="lead">Coffee · Food · Bakes · Everything in between</p></div></section>
<nav className="tabs" aria-label="Menu categories">{menu.map(s=><a key={s.id} href={`#${s.id}`} aria-current={active===s.id?'true':undefined} onClick={()=>setActive(s.id)}>{s.label}{active===s.id&&<motion.i layoutId="u" className="u" transition={{duration:.5,ease}}/>}</a>)}</nav>
{menu.map(s=><section key={s.id} id={s.id} className={`msec ${s.cls}`}><div className="wrap mgrid">
{s.id==='dining'&&<aside className="march"><div><Img src="/images/int-1.jpg" alt="Painted floral panel beside a warm lamp" sizes="25vw"/></div><span className="script">Good Food, Good People</span></aside>}
<div><Reveal><h2 className="mtitle">{s.title}</h2><p className="msub">{s.sub}</p></Reveal>
<div className="groups">{s.groups.map(g=><Reveal key={g.t} className="grp"><h3>{g.t}</h3>{g.note&&<p className="note">({g.note})</p>}
<ul>{g.items.map(([n,p])=><li key={n}><span>{n}</span><b>{price(p)}</b></li>)}</ul>{g.t==='Handmade Pastas'&&<p className="note">Prices shown as Vegetarian / Chicken</p>}</Reveal>)}</div></div></div></section>)}
<section className="dl"><div className="dl-frame"><svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden><path d="M12 26h34v10a14 14 0 0 1-14 14h-6a14 14 0 0 1-14-14V26zM46 29h4a6 6 0 0 1 0 12h-5M22 8c-3 3 3 5 0 9M30 8c-3 3 3 5 0 9M38 8c-3 3 3 5 0 9"/></svg>
<Reveal><h2 className="h2 light">A little something<br/>to take with you</h2><p className="lead">Prefer to browse offline? Download the complete Lambreta Café menu.</p>
<motion.a href="/Lambreta_Cafe_Menu.pdf" download="Lambreta_Cafe_Menu.pdf" className="btn dlbtn" whileHover="h" whileTap={{scale:.98}}><span>Download Menu</span><motion.i variants={{h:{y:5}}} transition={{duration:.4,ease}} aria-hidden>↓</motion.i></motion.a></Reveal></div></section></>)}
