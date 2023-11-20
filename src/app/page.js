import Image from 'next/image'
import Navegation from './components/navegation'
import Views from './components/views'
import Softs from './components/softskills'
import IntroPage from './components/intro'
import Link from 'next/link'
import Project from './components/project'

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-32 container mx-auto">

        <IntroPage title={"Award-winning custom designs and digital branding solutions"} description={"With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services."} showButton={true} img={"/images/home/desktop/image-hero-phone.png"} classprop={"bg-peach"}/>

        <section className='grid grid-flow-col gap-10'>
          <Views title={"WEB DESIGN"} classprop={"p-36"} imageUrl={"/images/home/desktop/image-web-design-large.jpg"} linkTo={"web-desing"}/>
          
          <div className='grid gap-10'>
            <Views title={"APP DESIGN"} classprop={"p-36"} imageUrl={"/images/home/desktop/image-app-design.jpg"} linkTo={"app-desing"}/>
            <Views title={"GRAPHIC DESIGN"} classprop={"p-36"} imageUrl={"/images/home/desktop/image-graphic-design.jpg"} linkTo={"graphic-desing"}/>
          </div>
        </section>

        <section className='flex gap-8'>
          <Softs image={"/images/home/desktop/illustration-passionate.svg"} title={"PASSIONATE"} text={"Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."}></Softs>
          <Softs image={"/images/home/desktop/illustration-resourceful.svg"} title={"RESOURCEFUL"} text={"Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."}></Softs>
          <Softs image={"/images/home/desktop/illustration-friendly.svg"} title={"FRIENDLY"} text={"We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."}></Softs>
        </section>

        <Project />

      </main>
    </>
  )
}
