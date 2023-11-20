import Image from 'next/image'
import Navegation from './components/navegation'
import Views from './components/views'
import Softs from './components/softskills'
import IntroPage from './components/intro'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-32 container mx-auto">

        <IntroPage title={"Award-winning custom designs and digital branding solutions"} description={"With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."} showButton={true} img={"/images/home/desktop/image-hero-phone.png"} classprop={"bg-peach"}/>

        <section className='grid grid-flow-col gap-10'>
          <Link href={`/pages/web-desing`}>
            <Views title={"WEB DESIGN"} imageUrl={"/images/home/desktop/image-web-design-large.jpg"}/>
          </Link>
          <div className='grid gap-10'>
            <Link href={`/pages/app-desing`}>
              <Views title={"APP DESIGN"} imageUrl={"/images/home/desktop/image-app-design.jpg"}/>
            </Link>
            <Link href={`/pages/graphic-desing`}>
              <Views title={"GRAPHIC DESIGN"} imageUrl={"/images/home/desktop/image-graphic-design.jpg"}/>
            </Link>
          </div>
        </section>

        <section className='flex gap-8'>
          <Softs image={"/images/home/desktop/illustration-passionate.svg"} title={"PASSIONATE"} text={"Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."}></Softs>
          <Softs image={"/images/home/desktop/illustration-resourceful.svg"} title={"RESOURCEFUL"} text={"Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."}></Softs>
          <Softs image={"/images/home/desktop/illustration-friendly.svg"} title={"FRIENDLY"} text={"We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."}></Softs>
        </section>

      </main>
    </>
  )
}
