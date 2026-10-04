import type {Metadata} from 'next'
import {Cormorant_Garamond,Jost} from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'
const serif=Cormorant_Garamond({subsets:['latin'],weight:['300','400','500','600'],style:['normal','italic'],variable:'--serif'})
const sans=Jost({subsets:['latin'],weight:['300','400','500'],variable:'--sans'})
export const metadata:Metadata={title:'Lambreta Café — Raipur',description:'Coffee, comfort food and bakes in Civil Lines, Raipur.',icons:{icon:'/images/logo.png',apple:'/images/logo.png'}}
export default function RootLayout({children}:{children:React.ReactNode}){
return(<html lang="en" className={`${serif.variable} ${sans.variable}`}><body><a className="skip" href="#main">Skip to content</a><Nav/><main id="main">{children}</main><Footer/></body></html>)}
