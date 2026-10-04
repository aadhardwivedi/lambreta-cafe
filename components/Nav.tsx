'use client'
import {useEffect,useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {AnimatePresence,motion} from 'framer-motion'
import {ease} from './ui'
const links=[['Home','/'],['Menu','/menu'],['About','/#story'],['Reviews','/#reviews'],['Visit Us','/#visit']]
export default function Nav(){
const path=usePathname();const [sc,setSc]=useState(false);const [open,setOpen]=useState(false)
useEffect(()=>{const f=()=>setSc(scrollY>60);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[])
useEffect(()=>{setOpen(false)},[path])
useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open])
useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[])
const solid=sc||path!=='/'
return(<header className={`nav ${solid?'nav-solid':''}`}>
<Link href="/" className="brand" aria-label="Lambreta Café home"><img src="/images/logo.png" alt="" height={44}/><span>Lambreta<small>Café</small></span></Link>
<nav className="nav-links" aria-label="Primary">{links.map(([l,h])=>{const on=(h==='/'&&path==='/')||(h==='/menu'&&path==='/menu');return <Link key={l} href={h} aria-current={on?'page':undefined} className={on?'on':''}>{l}</Link>})}</nav>
<Link href={path==='/menu'?'/#visit':'/menu'} className="nav-cta">{path==='/menu'?'Visit Us':'View Menu'} →</Link>
<button className="burger" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}><span className={open?'x':''}/></button>
<AnimatePresence>{open&&<motion.div className="overlay" initial={{clipPath:'inset(0 0 100% 0)'}} animate={{clipPath:'inset(0 0 0% 0)'}} exit={{clipPath:'inset(0 0 100% 0)'}} transition={{duration:.8,ease}}>
{links.map(([l,h],i)=><motion.div key={l} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:.25+i*.07,duration:.8,ease}}><Link href={h} onClick={()=>setOpen(false)}>{l}</Link></motion.div>)}
</motion.div>}</AnimatePresence></header>)}
