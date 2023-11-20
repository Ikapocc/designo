import Image from "next/image";
import Link from "next/link";

export default function Navegation({logo, classprop}) {
    return(
        <div className={classprop}>
            <Link href={"/"}><Image src={logo} alt="company logo" width={285}></Image></Link>
            <nav>
                <ul className="flex gap-16 cursor-pointer text-xl">
                    <li className="hover:underline">
                        <Link href={"/about"}>OUR COMPANY</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={"/locations"}>LOCATIONS</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={"/contact"}>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}