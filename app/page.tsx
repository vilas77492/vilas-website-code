import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Solutions } from '@/components/solutions'
import { Products } from '@/components/products'
import { Lifecycle } from '@/components/lifecycle'
import { Partners } from '@/components/partners'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Products />
        <Lifecycle />
        <Partners />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
