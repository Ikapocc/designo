import Image from "next/image";

export default function CompanyInfo({title, description1, description2, img, classprop}) {
    return(
        <section className={`flex justify-center items-center gap-32 rounded-3xl relative ${classprop}`}>
            <Image className="myImage" src={img} alt="image" width={800} height={476}></Image>
            <div className="flex flex-col gap-12 w-3/5 pr-36 leading-8">
                <h2 className="text-strong-orange text-5xl font-semibold">{title}</h2>
                <p className="text-3xl">{description1}</p>
                <p className="text-3xl">{description2}</p>
            </div>
        </section>
    )
}