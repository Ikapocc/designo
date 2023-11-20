import Location from "../components/location";
import canada from "../assets/shared/desktop/illustration-canada.svg"
import australia from "../assets/shared/desktop/illustration-australia.svg"
import uk from "../assets/shared/desktop/illustration-united-kingdom.svg"

export default function Contact() {
    return(
        <main className="container mx-auto">
            <section className="flex bg-peach p-24 rounded-2xl">
                <div className="flex flex-col text-white gap-8">
                    <h1 className="text-5xl font-medium">Contact Us</h1>

                    <p className="text-2xl">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                </div>

                <form className="grid gap-8">
                    <input className="bg-transparent" placeholder="Name"></input>
                    <input className="bg-transparent" placeholder="Email Address"></input>
                    <input className="bg-transparent" placeholder="Phone"></input>
                    <input className="bg-transparent" placeholder="Your Message"></input>
                </form>
            </section>

            <section className="flex justify-between p-36">
                <Location title={"CANADA"} img={canada}/>
                <Location title={"AUSTRALIA"} img={australia}/>
                <Location title={"UNITED KINGDOM"} img={uk}/>
            </section>
        </main>
    )
}