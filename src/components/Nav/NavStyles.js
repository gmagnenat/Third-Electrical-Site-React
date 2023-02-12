export const dropBtnStyles = {
    btn: {
        backgroundColor: "hsla(10, 0%, 95%, 1)",
        color: "white",
        cursor: "pointer",
        paddingTop: "0.5rem",
        fontSize: "1.25rem",
        listStyleType: "none",
        position: "sticky",
        width: "100%",
        height: "48px",
        top: "-1px",
        zIndex: "50",
    },
    bars: {
        width: "35px",
        height: "5px",
        backgroundColor: "#606c94",
        margin: "6px auto",
        pointerEvents: "none"
    },
    barOne: {
        transition: "0.5s",
    },
    barTwo: {
        transition: "0.3s",
    },
    barThree: {
        transition: "0.5s",
    },
    barOneX: {
        transform: "translate(0, 11px) rotate(-45deg)",
    },
    barTwoX: {
        opacity: "0",
    },
    barThreeX: {
        transform: "translate(0, -11px) rotate(45deg)",
    },
    dropContent: {
        transform: "translateY(0.7rem)",
        transform: "scaleY(0)",
        transformOrigin: "top center",
        transitionDuration: "0.5s",
        position: "absolute",
        backgroundColor: "#242D37",
        width: "100%",
        zIndex: "1",
        textAlign: "center",
    },
    dropContentShow: {
        transform: "scaleY(1)",
        transformOrigin: "top center",
    },
    dropItem: {
        display: "block",
        color: "white",
        padding: "12px 16px",
        textDecoration: "none",
        borderBottom: "1px solid #000",
    },
};