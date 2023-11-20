import Image from "next/image";
import Button from "./button";
import Link from "next/link";

export default function Location({img, title}) {
    return(
        <section className="flex flex-col items-center gap-9">
            <Image src={img} alt={`Our office in ${title}`} width={275}></Image>
            <h1 className="text-3xl tracking-widest font-medium">{title}</h1>
            <Button classprop={"bg-peach text-white"} title={"SEE LOCATION"} direction={"/locations"} />
        </section>
    )
}