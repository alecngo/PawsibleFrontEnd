import Description from "./Description"
import Hero from "./Hero"
import Products from "./Products"
import Services from "./Services"
import Team from "./Team"
import Video from "./Video"

function About() {
    return (
        <div className="About">
            <Hero />
            <Video />
            <Description />
            <Services />
            <Products />
            <Team />
        </div>
    );
}

export default About;