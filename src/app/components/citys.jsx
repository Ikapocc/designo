import Image from "next/image";
import InfoCity from "./infocitys";

export function Right({title, name, street, address, number, mail, img, classprop}) {
    return(
        <section className={`flex items-center justify-between rounded-lg py-16 ${classprop}`}>
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl text-strong-orange font-semibold">{title}</h1>
                <InfoCity name={name} street={street} address={address} number={number} mail={mail}/>
            </div>
            <Image src={img} alt={`location of the company in ${title}`}></Image>
        </section>
    )
}