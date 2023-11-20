export default function Views({title, imageUrl}) {
    return(
        <div style={{ backgroundImage: `url(${imageUrl})`}} className={`flex flex-col py-16 text-white bg-no-repeat bg-cover rounded-2xl justify-center items-center gap-6 bg-blend-overlay bg-neutral-600`}>
            <h2 className="text-5xl font-medium">{title}</h2>
            <p>VIEW PROJECTS {`>`}</p>
        </div>        
    )
}