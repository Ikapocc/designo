export default function Information({first, second, thrid}) {
    return(
        <div className='grid text-slate-500 text-2xl font-medium'>
            <p>{first}</p>
            <span>{second}</span>
            <span>{thrid}</span>
        </div>
    )
}