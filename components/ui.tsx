'use client'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
export const ease=[.22,1,.36,1] as const
export function Reveal({children,delay=0,className}:{children:React.ReactNode;delay?:number;className?:string}){
return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{duration:1.1,delay,ease}}>{children}</motion.div>}
export function Img({src,alt,sizes='(max-width:800px) 100vw, 50vw',priority=false,pos='center'}:{src:string;alt:string;sizes?:string;priority?:boolean;pos?:string}){
return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{objectFit:'cover',objectPosition:pos}}/>}
/* Adapted from the 21st.dev "arrow button" pattern: arrow slides on hover, restyled to Lambreta */
export function Btn({href,children,variant='gold'}:{href:string;children:React.ReactNode;variant?:'gold'|'ghost'}){
const inner=<motion.span className={`btn btn-${variant}`} whileHover="h" whileTap={{scale:.98}}><span>{children}</span><motion.i variants={{h:{x:6}}} transition={{duration:.4,ease}} aria-hidden>→</motion.i></motion.span>
if(href.startsWith('http'))return <a href={href} target="_blank" rel="noopener">{inner}</a>
return <Link href={href}>{inner}</Link>}
