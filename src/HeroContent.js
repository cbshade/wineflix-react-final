import Controls from "./Controls"

const HeroContent = () => {
    return (
        <div className="hero-content">
            <h2>
                <img alt="Rex Goliath" src="/rex-goliath-logo.png" />
            </h2>
            <h3>His Royal Majesty is back.</h3>
            <p>
                America's most unhinged rooster is out of retirement, and this time? He's mad as hell.  Experience the unapologetic flavor burst of Rex Goliath.
            </p>
            <Controls />
        </div>
    )
}

export default HeroContent
