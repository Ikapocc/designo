import Image from "next/image";

export default function Softs({image, title, text}) {
    return(
        <section className="flex flex-col justify-center text-center items-center my-24">
            <Image src={image} alt={`text about a ${title} skill`} width={300} height={400}></Image>
            <h3 className="text-3xl font-medium tracking-widest py-8">{title}</h3>
            <p className="text-xl leading-8">{text}</p>
        </section>
    )
}