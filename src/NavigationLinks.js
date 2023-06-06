import NavigationLink from "./NavigationLink";

const NavigationLinks = () => {
    const NavigationLinksData = [
        {
            id: 1,
            url: "https://developer.mozilla.org",
            label: "Home",
            active: true,
        },
        {
            id: 2,
            url: "https://developer.mozilla.org",
            label: "Reds",
        },
        {
            id: 3,
            url: "https://developer.mozilla.org",
            label: "Whites",
        },
        {
            id: 4,
            url: "https://developer.mozilla.org",
            label: "Blends",
        },
    ];
    return (
        <>
            <ul className="navigation-links">
                {NavigationLinksData.map((link) => (
                    <NavigationLink
                        key={link.id}
                        url={link.url}
                        label={link.label}
                        active={link.active}
                    />
                ))}
            </ul>
        </>
    );
};

export default NavigationLinks;
