import Navigation from "./Navigation";
import HeroContent from "./HeroContent";

const Hero = () => {
    return (
        <>
            <img className="hero-image" src="/wine-hero.webp" alt="Wine bottles" />
            <Navigation />
            <HeroContent />
        </>
    )
}

export default Hero
