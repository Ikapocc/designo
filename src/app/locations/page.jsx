import { Right } from "../components/citys";
import canada from "../assets/locations/desktop/image-map-canada.png"
import australia from "../assets/locations/desktop/image-map-australia.png"
import uk from "../assets/locations/desktop/image-map-united-kingdom.png"
import Project from "../components/project";

export default function Locations() {
    return(
        <main className="grid gap-16 container mx-auto">
            <Right title={"Canada"} name={"Designo Central Office"} address={"3886 Welling Street"} street={"Toronto, Ontario M9C 3J5"} number={"P : +1 253-863-8967"} mail={"M : contact@designo.co"} img={canada}/>
            <Right classprop={"flex-row-reverse"} title={"Australia"} name={"Designo Central Office"} address={"3886 Welling Street"} street={"Toronto, Ontario M9C 3J5"} number={"P : +1 253-863-8967"} mail={"M : contact@designo.co"} img={australia}/>
            <Right title={"United Kingdom"} name={"Designo Central Office"} address={"3886 Welling Street"} street={"Toronto, Ontario M9C 3J5"} number={"P : +1 253-863-8967"} mail={"M : contact@designo.co"} img={uk}/>
            <Project />
        </main>
    )
}