export const theme = {
    font: {
        thin: 300,
        regular: 400,
        bold: 800
    },
    nav: {
        mobileHeight: "60px",
        desktopWidth: "60px",
        background: "#1d2029",
    },
    colors: {
        primary: "#2ce8cd",
        dark: "#252934",
    },
    media: {
        mobile: "@media (min-width: 476px)",
        tablet: "@media (min-width: 768px)",
        smallDesktop: "@media (min-width: 1024px)",
        bigDesktop: "@media (min-width: 1200px)",
    },
    displayFlexCentered: `
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    positionAbsoluteCentered: `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
};