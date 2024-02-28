export const Progressbar = ({ bgColor, completed }) => {
    const containerStyles = {
        height: 25,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,
    }
    const filterStyles = {
        backgroundColor: bgColor,
        height: "100%",
        width: `${completed}%`,
        borderRadius: "inherit",
        textAlign: "right",
        transition: "width 1s ease-in-out",
    }
    const labelStyles = {
        padding: 15,
        margin: 10,
        color: "white",
        fontWeight: "bold",
    }
    return (
        <div style={containerStyles}>
            <div style={filterStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    )
}
