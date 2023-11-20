import Button from "./button";

export default function IntroPage({title, img, description, showButton = false, classprop}) {
    return(
        <section className={`container mx-auto grid grid-flow-col text-white rounded-3xl p-32 relative bg-no-repeat bg-right-top ${classprop}`} 
            style={{ backgroundImage: `url(${img})`}}>
          <div className='flex flex-col justify-center items-start gap-12 w-3/6'>
            <h1 className='text-6xl font-semibold'>{title}</h1>
            <p className='text-3xl'>{description}</p>
            {showButton ? <Button classprop={"text-black bg-white"} title={"LEARN MORE"} direction='contact'></Button> : <></>}
          </div>
        </section>
    )
}