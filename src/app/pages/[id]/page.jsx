import Image from "next/image";
import data from "src/app/data.json"

export default async function page({params}) {

    const {datos} = data.find(item => item.id === params.id)
    console.log(datos);

    return(
        <main>
            <section className="container mx-auto flex flex-col gap-32">
                {datos.map(items => (
                    <>
                        <div className="flex flex-col gap-8 justify-center items-center bg-peach text-white rounded-3xl py-28" key={params.id}>
                            <h1 className="text-6xl font-medium">{items.title}</h1>
                            <p className="text-3xl">{items.description}</p>
                        </div>
                        <div className="grid grid-cols-3 text-center gap-16">
                            {items.images.map(itemsImg =>(
                                <ul key={itemsImg.id}>
                                    <li className="flex flex-col gap-6">
                                        <Image src={itemsImg.image} alt="my image" width={500} height={500}/>
                                        <h2 className="text-3xl leading-8 font-medium text-strong-orange">{itemsImg.title}</h2>
                                        <p className="text-2xl mx-10">{itemsImg.description}</p>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </>
                ))}
            </section>
        </main>
    )
}