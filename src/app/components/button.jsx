import Link from "next/link";

export default function Button({title, classprop, direction = ""}) {
    return(
        <button className={`${classprop} px-10 py-5 text-2xl rounded-lg tracking-wider`}>
            <Link href={direction}>{title}</Link>
        </button>
    )
}