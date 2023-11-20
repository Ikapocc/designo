import Link from "next/link";
import Button from "./button";

export default function Project() {
    return(
        <section className="bg-peach text-white flex rounded-xl py-20 px-36 items-center justify-between z-10 relative top-16">
            <div className="flex flex-col gap-16 w-3/5">
                <h2 className="text-5xl font-medium pr-72">Let’s talk about your project</h2>
                <p className="text-3xl">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            </div>

            <Button title={"GET IN TOUCH"} classprop={"text-black bg-white"} direction={"/contact" }/>
        </section>
    )
}