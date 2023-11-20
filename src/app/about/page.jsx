import CompanyInfo from "../components/companyInfo";
import IntroPage from "../components/intro";
import canada from "../assets/shared/desktop/illustration-canada.svg"
import australia from "../assets/shared/desktop/illustration-australia.svg"
import uk from "../assets/shared/desktop/illustration-united-kingdom.svg"
import Location from "../components/location";

export default function about() {
    return(
        <main className="flex flex-col gap-48 container mx-auto pt-8 pb-28">
            <IntroPage title={"About Us"} 
            description={"Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."}  
                img={"/about/desktop/image-about-hero.jpg"}
                classprop={"bg-contain p-36 bg-peach"} />

            <CompanyInfo img={"/about/desktop/image-world-class-talent.jpg"} title={"World-class talent"} description1={"We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."} description2={"Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."} />

            <section className="flex justify-between p-36">
                <Location title={"CANADA"} img={canada}/>
                <Location title={"AUSTRALIA"} img={australia}/>
                <Location title={"UNITED KINGDOM"} img={uk}/>
            </section>

            <CompanyInfo classprop={"flex-row-reverse"} img={"/about/desktop/image-real-deal.jpg"} title={"The real deal"} description1={"As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."} description2={"We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."} />

        </main>
    )
}