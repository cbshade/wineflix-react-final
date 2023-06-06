import Control from "./Control";

const Controls = () => {
    const controlsData = [
        {
            id: 1,
            classname: "primary-action",
            icon: "Play",
            label: "Drink",
        }, {
            id: 2,
            classname: "secondary-action",
            icon: "InfoCircle",
            label: "More Info",
        },
    ];

    return (
        <>
            <ul className="controls">
                {controlsData.map((control) => (
                    <Control
                        key={control.id}
                        classname={control.classname}
                        label={control.label}
                        icon={control.icon}
                    />
                ))}
            </ul>
        </>
    )
}

export default Controls
