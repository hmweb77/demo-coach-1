import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import QuoteGenerator from './components/QuoteGenerator'
import { Process } from './components/Progress'

import About from './components/About'

import Goals from './components/Goals'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    <Header />
    <main>
      <Hero />
      <QuoteGenerator />
      <Process />
      <About />
      <Services />
      <Goals />
      <Testimonials />
    </main>
    <Footer />
  </div>
  )
}
