'use client'
import {useEffect,useRef} from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {Btn,Img,Reveal,ease} from './ui'
const maps='https://www.google.com/maps/search/?api=1&query=Lambreta+Cafe+Civil+Lines+Raipur'
const sig=[['/images/food-aglio.jpg','Spaghetti Aglio Olio','center'],['/images/food-dessert.jpg','Basque Cheesecake','center 40%'],['/images/food-sandwich.jpg','Herbed Mushroom Sandwich','center 70%']]
const gal=[['int-3','Main dining area','g1'],['int-4','Outdoor seating','g2'],['int-6','Heritage doorway','g3'],['int-2','Warm interior','g4'],['int-7','Café counter','g5']]
const exp=[['Good Coffee','Carefully crafted coffee and cold brews.'],['All Day Dining','Comfort food from morning to evening.'],['Freshly Baked','Fresh breads, cakes, cookies and desserts.'],['A Place to Stay','A warm space for conversations and slow afternoons.']]
const rev=[['Everything was perfect. Food, coffees and the ambience. The manager and staff here serve with love.','Mohnish Makhija'],['Got a warm welcome and prompt service. Staff were super helpful and made us feel at home.','Anuj Mannur'],['Unique Chhattisgarhi vibe & great ambience.','Jeffy']]
export default function Home(){
const root=useRef<HTMLDivElement>(null)
useEffect(()=>{gsap.registerPlugin(ScrollTrigger)
const mm=gsap.matchMedia()
mm.add('(prefers-reduced-motion: no-preference)',()=>{
const ctx=gsap.context(()=>{
gsap.to('.hero-img',{yPercent:14,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}})
gsap.to('.hero-copy',{yPercent:-12,opacity:.2,ease:'none',scrollTrigger:{trigger:'.hero',start:'30% top',end:'bottom top',scrub:true}})
gsap.utils.toArray<HTMLElement>('.gs-clip',root.current).forEach(el=>gsap.fromTo(el,{clipPath:'inset(12% 12% 12% 12%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.6,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 82%'}}))
gsap.utils.toArray<HTMLElement>('.gs-par',root.current).forEach(el=>gsap.fromTo(el,{yPercent:-7},{yPercent:7,ease:'none',scrollTrigger:{trigger:el.parentElement||el,start:'top bottom',end:'bottom top',scrub:true}}))
gsap.fromTo('.cta-title',{xPercent:-6},{xPercent:0,ease:'none',scrollTrigger:{trigger:'.cta',start:'top bottom',end:'center center',scrub:true}})
},root);return()=>ctx.revert()})
return()=>mm.revert()},[])
return(<div ref={root}>
<section className="hero"><div className="hero-bg"><div className="hero-img"><Img src="/images/int-5.jpg" alt="Lambreta Café dining room under a woven rattan ceiling" sizes="100vw" priority/></div></div>
<div className="hero-copy wrap"><motion.p className="eyebrow" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3,duration:1.2}}>A café with a soul</motion.p>
<h1 className="display">{['Slow mornings.','Good coffee.','Beautiful food.'].map((l,i)=><span className="mask" key={l}><motion.span initial={{y:'110%'}} animate={{y:0}} transition={{delay:.5+i*.18,duration:1.3,ease}}>{l}</motion.span></span>)}</h1>
<motion.p className="lead" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.3,duration:1.2}}>A cozy corner in Raipur where coffee, comfort food and conversations come together.</motion.p>
<motion.div className="row" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.6,duration:1}}><Btn href="/menu">Explore Our Menu</Btn><Btn href="/#visit" variant="ghost">Visit Lambreta</Btn></motion.div></div>
<span className="scroll">Scroll to explore ↓</span></section>

<section id="story" className="story"><div className="wrap split">
<div className="arch gs-clip"><div className="gs-par"><Img src="/images/int-1.jpg" alt="Lamp-lit corner with a painted floral panel"/></div></div>
<Reveal><p className="eyebrow dark">Our story</p><h2 className="h2">A little corner worth slowing down for.</h2>
<p className="body">Lambreta Café brings together thoughtful food, carefully crafted coffee and a warm, character-filled space designed to make you stay a little longer.</p>
<ul className="marks">{['Coffee','Food','Bakes','Good Times'].map(m=><li key={m}>{m}</li>)}</ul></Reveal></div></section>

<section className="sigs"><div className="wrap"><div className="sec-head"><h2 className="h2 light">Signatures</h2><p className="eyebrow">Some of our favourites</p></div>
<div className="sig-grid">{sig.map(([s,n,p],i)=><Reveal key={n} delay={i*.12}><Link href="/menu" className="sig"><div className="sig-img"><Img src={s} alt={n} sizes="(max-width:800px) 80vw, 33vw" pos={p}/></div><div className="sig-cap"><span>{n}</span><i aria-hidden>→</i></div></Link></Reveal>)}</div></div></section>

<section className="space"><div className="wrap"><Reveal><h2 className="h2 big">Come for the coffee.<br/>Stay for the space.</h2></Reveal>
<div className="gal">{gal.map(([s,a,c])=><figure key={s} className={`gal-i ${c} gs-clip`}><div className="gs-par"><Img src={`/images/${s}.jpg`} alt={a} sizes="(max-width:800px) 100vw, 40vw"/></div></figure>)}</div></div></section>

<section className="exp"><div className="wrap exp-grid">{exp.map(([t,d],i)=><Reveal key={t} delay={i*.1}><h3>{t}</h3><p>{d}</p></Reveal>)}</div></section>

<section id="reviews" className="reviews"><div className="wrap"><div><Reveal><div className="num">4.2</div><p className="eyebrow dark">406 reviews</p></Reveal></div>
<div className="rev-grid">{rev.map(([q,n],i)=><Reveal key={n} delay={i*.12}><blockquote><p>“{q}”</p><footer>— {n}</footer></blockquote></Reveal>)}</div></div></section>

<section id="visit" className="visit"><div className="wrap split"><Reveal><p className="eyebrow">Find us at</p><h2 className="h2 light">Lambreta Café</h2>
<address className="addr">Jabbal Building,<br/>47/496, Civil Lines,<br/>Raipur, Chhattisgarh 492001</address><p className="open">Open · Closes 10 PM</p><Btn href={maps}>Get Directions</Btn></Reveal>
<div className="mapbox gs-clip"><div className="gs-par"><Img src="/images/int-6.jpg" alt="Carved heritage doorway at the café entrance"/></div><a className="pin" href={maps} target="_blank" rel="noopener">● Civil Lines, Raipur</a></div></div></section>

<section className="cta"><div className="wrap"><h2 className="cta-title">Your table is waiting.</h2><p className="lead">Coffee. Food. Conversations.</p><div className="row c"><Btn href="/menu">Explore Menu</Btn><Btn href={maps} variant="ghost">Get Directions</Btn></div></div></section>
</div>)}
