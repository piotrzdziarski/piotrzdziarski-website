let Renderer;

export function scaleRendererOnResize(renderer) {
    Renderer = renderer;
    window.addEventListener('resize', scale);
    scale();
}

const scale = () => {
    Renderer.setSize(window.innerWidth,window.innerHeight);
};
