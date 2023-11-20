import Link from "next/link";

export default function Views({title, imageUrl, linkTo}) {
    return(
        <div style={{ backgroundImage: `url(${imageUrl})`}} className={`flex flex-col text-white bg-no-repeat bg-cover rounded-2xl justify-center items-center gap-6 bg-blend-overlay bg-neutral-600 p-36`}>
            <h2 className="text-5xl font-medium">{title}</h2>
            <Link href={`/pages/${linkTo}`}>
                <p>VIEW PROJECTS {`>`}</p>
            </Link>
        </div>        
    )
}