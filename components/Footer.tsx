import Link from 'next/link'
const maps='https://www.google.com/maps/search/?api=1&query=Lambreta+Cafe+Civil+Lines+Raipur'
export default function Footer(){return(<footer className="footer">
<img src="/images/logo.png" alt="Lambreta Café logo" height={64}/>
<h2>Lambreta Café</h2><p>Raipur, Chhattisgarh</p>
<nav aria-label="Footer">{[['Home','/'],['Menu','/menu'],['About','/#story'],['Reviews','/#reviews'],['Visit Us','/#visit']].map(([l,h])=><Link key={l} href={h}>{l}</Link>)}</nav>
<nav aria-label="Elsewhere"><a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a><a href={maps} target="_blank" rel="noopener">Directions</a><Link href="/#visit">Contact</Link></nav>
<small>Coffee · Food · Good Times</small></footer>)}
