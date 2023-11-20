export default function InfoCity({name, street, address, number, mail}){
    return(
        <section className="flex gap-24">
            <div className='grid text-xl'>
                <h2 className="font-medium">{name}</h2>
                <span>{street}</span>
                <span>{address}</span>
            </div>

            <div className="grid text-xl">
                <h2 className="font-medium">Contact</h2>
                <address className="grid">
                    <span>{number}</span>
                    <span>{mail}</span>
                </address>
            </div>
        </section>
    )
}