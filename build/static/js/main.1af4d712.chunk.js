(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/proggraming.5bf23194.jpeg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/fslightbox.bd477ad7.jpg"},function(e,t,a){e.exports=a.p+"static/media/cossack.bf553ff5.jpg"},function(e,t,a){e.exports=a.p+"static/media/bulma.0dc6b8ba.jpg"},function(e,t,a){e.exports=a.p+"static/media/cars.504190fc.jpeg"},function(e,t,a){e.exports=a.p+"static/media/quizert.05b0c34b.jpg"},function(e,t,a){e.exports=a.p+"static/media/skijumping.17850411.jpg"},function(e,t,a){e.exports=a.p+"static/media/treerum.eb31b561.jpg"},function(e,t,a){e.exports=a.p+"static/media/smokes.66db4a71.jpg"},function(e,t,a){e.exports=a.p+"static/media/spacer.2df1231e.jpg"},function(e,t,a){e.exports=a.p+"static/media/bendophoto.7a851f76.jpg"},,,,function(e,t,a){e.exports=a(49)},,,,,,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),s=(a(41),a(3)),i=a(5),o=a(7),m=a(6),u=a(8),p=a(2),h=a(4);function d(){var e=Object(h.a)(["\nhtml  {\nwidth: 100%;\nheight: 100%;\nmargin: 0;\n}\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n    color: black;\n    font-size: 42px;\n    height: 100%;\n    width: 100%;\n  }\n  \n  *, *::before, *::after {\n  -webkit-tap-highlight-color: transparent;\n    box-sizing: border-box;\n  }\n"]);return d=function(){return e},e}var f=Object(p.b)(d()),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null)}}]),t}(n.PureComponent),E=a(52),g=a(51),v=a(9),j=function e(){Object(s.a)(this,e),this.scene=k.scene,this.renderer=k.renderer,this.camera=k.camera,this.rectangle=k.rectangle,this.randoms=k.randoms,this.lasersNumber=100,this.canvasDots=k.canvasDots,this.canvasLines=k.canvasLines},w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"animate",value:function(){requestAnimationFrame(this.animate.bind(this)),this.rotateLasers(),this.coefficient=window.innerWidth/window.innerHeight,this.renderer.render(this.scene,this.camera)}},{key:"rotateLasers",value:function(){for(var e=0;e<this.lasersNumber;e++){var t=1e-4*Date.now()*this.randoms[e];this.canvasDots[e].position.x=0,this.canvasDots[e].position.y=Math.sin(t)*e*.5,this.canvasDots[e].position.z=Math.cos(t)*e*(.8/this.coefficient),this.canvasLines[e].position.x=0,this.canvasLines[e].position.y=Math.sin(t)*e*.5,this.canvasLines[e].position.z=Math.cos(t)*e*(.8/this.coefficient)}}}]),t}(j),L=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"addWindowResizeListener",value:function(e){window.addEventListener("resize",e)}},{key:"scaleRendererOnResize",value:function(){this.coefficient=window.innerWidth/window.innerHeight,this.addWindowResizeListener(this.scaleRenderer.bind(this)),this.scaleRenderer(),this.rotateCamera()}},{key:"scaleRenderer",value:function(){var e=this;this.renderer.setSize(window.innerWidth,window.innerHeight),this.canvasLines.forEach(function(t){t.geometry.vertices=[new v.h(0,200,1/e.coefficient*-100),new v.h(0,0,0)]})}},{key:"rotateCamera",value:function(){var e=0;e=this.coefficient<1?15:9,this.camera.lookAt(new v.h(-6,-5,e))}}]),t}(j),C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"drawDot",value:function(){this.generateRandomColor();var e=new v.a;e.vertices.push(new v.h(0,0,0));var t=new v.f({size:2,sizeAttenuation:!1,color:2943181}),a=new v.e(e,t);k.canvasDots.push(a),this.scene.add(a)}},{key:"generateRandomColor",value:function(){for(var e="rgb(",t=0;t<3;t++)e+=Math.floor(255*Math.random()),e+=2===t?")":",";return e}}]),t}(j),N=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"drawLine",value:function(){var e=new v.c({color:10066329,transparent:!0,opacity:!0});e.opacity=.15;var t=new v.a;t.vertices.push(new v.h(0,200,-50),new v.h(0,0,0));var a=new v.b(t,e);this.scene.add(a),k.canvasLines.push(a)}}]),t}(j),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"drawLasers",value:function(){for(var e=0;e<this.lasersNumber;e++){k.randoms.push(Math.random()),(new C).drawDot(),(new N).drawLine()}}}]),t}(j),k=function(){function e(t){Object(s.a)(this,e),this.scene=new v.g,this.renderer=new v.i({canvas:t,antialias:!0}),this.renderer.setClearColor(2239280,1)}return Object(i.a)(e,[{key:"createAnimation",value:function(){this.setUpCamera(),this.setUpCanvasStaticProperties(),this.drawLasers(),this.scaleRendererOnResize(),this.animate()}},{key:"setUpCamera",value:function(){this.camera=new v.d(-1,1,1,-1,-500,1e3),this.camera.zoom=.08,this.camera.updateProjectionMatrix(),this.scene.add(this.camera)}},{key:"setUpCanvasStaticProperties",value:function(){e.scene=this.scene,e.renderer=this.renderer,e.camera=this.camera,e.dots=[],e.randoms=[],e.canvasDots=[],e.canvasLines=[]}},{key:"drawLasers",value:function(){var e=new y;e.drawLasers()}},{key:"scaleRendererOnResize",value:function(){(new L).scaleRendererOnResize()}},{key:"animate",value:function(){(new w).animate()}}]),e}();function O(){var e=Object(h.a)(["\n  margin: 0;\n  padding: 0;\n  display: block;\n  background: #222b30;\n"]);return O=function(){return e},e}var x=p.c.canvas(O()),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).canvas=r.a.createRef(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{ref:this.canvas})}},{key:"componentDidMount",value:function(){new k(this.canvas.current).createAnimation()}}]),t}(n.Component),z=a(50);function I(){var e=Object(h.a)(["\n  color: rgba(150,150,150, 0.5);\n  width: 100%;\n  font-size: 22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  padding: 14px 0;\n  \n\n \n  path {\n    transition: fill .25s ease;\n    fill: #aaa;\n  }\n  \n :hover {\n  path {\n    fill: #fff;\n  }\n }\n"]);return I=function(){return e},e}function P(){var e=Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return P=function(){return e},e}function R(){var e=Object(h.a)(["\n  position: absolute;\n  left: 0;\n  height: 100%;\n  top: 0;\n  width: 50px;\n  background: #1b2328;\n  z-index: 1;\n"]);return R=function(){return e},e}var A=p.c.nav(R()),D=p.c.div(P()),B=p.c.div(I()),S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(A,null,r.a.createElement(D,null,r.a.createElement(z.a,{to:"/"},r.a.createElement(B,{id:"home"},r.a.createElement("svg",{width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},r.a.createElement("path",{d:"M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"})))),r.a.createElement(z.a,{to:"/about"},r.a.createElement(B,{id:"about"},r.a.createElement("svg",{width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},r.a.createElement("path",{d:"M 25 3 C 19.464844 3 15 7.464844 15 13 L 15 19 C 15 22.238281 16.585938 25.144531 19 26.96875 L 19 31.5 C 19 31.605469 18.980469 31.695313 18.71875 31.9375 C 18.457031 32.179688 17.992188 32.503906 17.375 32.8125 C 16.144531 33.429688 14.367188 34.0625 12.5625 34.9375 C 10.757813 35.8125 8.886719 36.925781 7.4375 38.53125 C 5.988281 40.136719 5 42.289063 5 45 L 5 46 L 45 46 L 45 45 C 45 42.265625 44.011719 40.105469 42.5625 38.5 C 41.113281 36.894531 39.242188 35.800781 37.4375 34.9375 C 35.632813 34.074219 33.851563 33.421875 32.625 32.8125 C 32.011719 32.507813 31.539063 32.210938 31.28125 31.96875 C 31.023438 31.726563 31 31.625 31 31.5 L 31 26.96875 C 33.414063 25.144531 35 22.238281 35 19 L 35 13 C 35 7.464844 30.535156 3 25 3 Z M 25 5 C 29.464844 5 33 8.535156 33 13 L 33 19 C 33 21.757813 31.558594 24.242188 29.4375 25.65625 L 29 25.96875 L 29 31.5 C 29 32.273438 29.398438 32.957031 29.90625 33.4375 C 30.414063 33.917969 31.050781 34.277344 31.75 34.625 C 33.148438 35.320313 34.867188 35.9375 36.5625 36.75 C 38.257813 37.5625 39.886719 38.542969 41.0625 39.84375 C 42.039063 40.921875 42.605469 42.304688 42.8125 44 L 7.1875 44 C 7.394531 42.324219 7.964844 40.957031 8.9375 39.875 C 10.113281 38.570313 11.742188 37.574219 13.4375 36.75 C 15.132813 35.925781 16.855469 35.289063 18.25 34.59375 C 18.945313 34.246094 19.589844 33.878906 20.09375 33.40625 C 20.597656 32.933594 21 32.269531 21 31.5 L 21 25.96875 L 20.5625 25.65625 C 18.441406 24.242188 17 21.757813 17 19 L 17 13 C 17 8.535156 20.535156 5 25 5 Z "})))),r.a.createElement(z.a,{to:"/skills"},r.a.createElement(B,{id:"skills"},r.a.createElement("svg",{width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},r.a.createElement("path",{d:"M 19 1 C 17.90625 1 17 1.90625 17 3 L 9 3 C 7.355469 3 6 4.355469 6 6 L 6 45 C 6 46.644531 7.355469 48 9 48 L 41 48 C 42.644531 48 44 46.644531 44 45 L 44 6 C 44 4.355469 42.644531 3 41 3 L 33 3 C 33 1.90625 32.09375 1 31 1 Z M 19 3 L 31 3 L 31 7 C 31 7.566406 30.566406 8 30 8 L 20 8 C 19.433594 8 19 7.566406 19 7 Z M 9 5 L 17 5 L 17 7 L 11 7 L 11 43 L 39 43 L 39 7 L 33 7 L 33 5 L 41 5 C 41.554688 5 42 5.445313 42 6 L 42 45 C 42 45.554688 41.554688 46 41 46 L 9 46 C 8.445313 46 8 45.554688 8 45 L 8 6 C 8 5.445313 8.445313 5 9 5 Z M 13 9 L 17.785156 9 C 18.335938 9.609375 19.125 10 20 10 L 30 10 C 30.875 10 31.664063 9.609375 32.214844 9 L 37 9 L 37 41 L 13 41 Z M 25.453125 14 C 22.726563 14 21.777344 15.972656 22.558594 17.65625 C 22.453125 17.753906 22.289063 18.042969 22.296875 18.253906 C 22.320313 18.75 22.675781 18.9375 22.839844 19.011719 C 22.902344 19.585938 23.269531 20.132813 23.640625 20.367188 L 23.640625 21.535156 C 23.132813 22.84375 20 22.460938 20 25 L 30 25 C 30 22.460938 26.867188 22.84375 26.363281 21.535156 L 26.363281 20.367188 C 26.738281 20.027344 26.914063 19.507813 26.929688 19.011719 C 27.09375 18.878906 27.351563 18.710938 27.429688 18.308594 C 27.492188 17.980469 27.359375 17.714844 27.203125 17.519531 C 27.695313 16.792969 27.625 14.546875 25.746094 14.546875 Z M 17 29 L 17 31 L 33 31 L 33 29 Z M 17 34 L 17 36 L 30 36 L 30 34 Z "})))),r.a.createElement(z.a,{to:"/projects"},r.a.createElement(B,{id:"projects"},r.a.createElement("svg",{width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},r.a.createElement("path",{d:"M 3 4 C 1.355469 4 0 5.355469 0 7 L 0 43.90625 C -0.0625 44.136719 -0.0390625 44.378906 0.0625 44.59375 C 0.34375 45.957031 1.5625 47 3 47 L 42 47 C 43.492188 47 44.71875 45.875 44.9375 44.4375 C 44.945313 44.375 44.964844 44.3125 44.96875 44.25 C 44.96875 44.230469 44.96875 44.207031 44.96875 44.1875 L 45 44.03125 C 45 44.019531 45 44.011719 45 44 L 49.96875 17.1875 L 50 17.09375 L 50 17 C 50 15.355469 48.644531 14 47 14 L 47 11 C 47 9.355469 45.644531 8 44 8 L 18.03125 8 C 18.035156 8.003906 18.023438 8 18 8 C 17.96875 7.976563 17.878906 7.902344 17.71875 7.71875 C 17.472656 7.4375 17.1875 6.96875 16.875 6.46875 C 16.5625 5.96875 16.226563 5.4375 15.8125 4.96875 C 15.398438 4.5 14.820313 4 14 4 Z M 3 6 L 14 6 C 13.9375 6 14.066406 6 14.3125 6.28125 C 14.558594 6.5625 14.84375 7.03125 15.15625 7.53125 C 15.46875 8.03125 15.8125 8.5625 16.21875 9.03125 C 16.625 9.5 17.179688 10 18 10 L 44 10 C 44.5625 10 45 10.4375 45 11 L 45 14 L 8 14 C 6.425781 14 5.171875 15.265625 5.0625 16.8125 L 5.03125 16.8125 L 5 17 L 2 33.1875 L 2 7 C 2 6.4375 2.4375 6 3 6 Z M 8 16 L 47 16 C 47.5625 16 48 16.4375 48 17 L 43.09375 43.53125 L 43.0625 43.59375 C 43.050781 43.632813 43.039063 43.675781 43.03125 43.71875 C 43.019531 43.757813 43.007813 43.800781 43 43.84375 C 43 43.863281 43 43.886719 43 43.90625 C 43 43.917969 43 43.925781 43 43.9375 C 42.984375 43.988281 42.976563 44.039063 42.96875 44.09375 C 42.964844 44.125 42.972656 44.15625 42.96875 44.1875 C 42.964844 44.230469 42.964844 44.269531 42.96875 44.3125 C 42.84375 44.71875 42.457031 45 42 45 L 3 45 C 2.4375 45 2 44.5625 2 44 L 6.96875 17.1875 L 7 17.09375 L 7 17 C 7 16.4375 7.4375 16 8 16 Z "}))))))}},{key:"componentDidMount",value:function(){document.getElementById(this.props.isActive).classList.add("active")}}]),t}(n.Component);function Z(){var e=Object(h.a)(["\n  font-family: 'Rancho', cursive;\n  font-size: 22px;\n  letter-spacing: 3px;\n  color: #414a50;\n"]);return Z=function(){return e},e}var T=p.c.span(Z());n.Component;function V(){var e=Object(h.a)(["\n  color: ","\n"]);return V=function(){return e},e}function _(){var e=Object(h.a)(["\n  display: block;\n  font-size: 30px;\n  padding: 0;\n  margin: 0;\n\n  @media (min-width: 476px) {\n    font-size: 34px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 38px;\n  }\n\n  @media (min-width: 1000px) {\n    font-size: 42px;\n  }\n"]);return _=function(){return e},e}function H(){var e=Object(h.a)(["\n  position: absolute;\n  color: white;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100vw;\n  font-weight: 700;\n  padding: 15px;\n  text-align: center;\n"]);return H=function(){return e},e}var F=p.c.div(H()),W=p.c.h1(_()),U=p.c.span(V(),function(e){return e.theme.colors.primary}),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).header=r.a.createRef(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{isActive:"home"}),r.a.createElement(F,{ref:this.header},r.a.createElement(W,null,r.a.createElement("span",{className:"letter"},"H"),r.a.createElement("span",{className:"letter"},"e"),r.a.createElement("span",{className:"letter"},"l"),r.a.createElement("span",{className:"letter"},"l"),r.a.createElement("span",{className:"letter"},"o"),r.a.createElement("span",{className:"letter"},",")," ",r.a.createElement("span",{className:"letter"},"I"),r.a.createElement("span",{className:"letter"},"'"),r.a.createElement("span",{className:"letter"},"m")," ",r.a.createElement(U,null,r.a.createElement("span",{className:"letter"},"P"),r.a.createElement("span",{className:"letter"},"e"),r.a.createElement("span",{className:"letter"},"t"),r.a.createElement("span",{className:"letter"},"e"),r.a.createElement("span",{className:"letter"},"r")," ",r.a.createElement("span",{className:"letter"},"Z"),r.a.createElement("span",{className:"letter"},"d"),r.a.createElement("span",{className:"letter"},"z"),r.a.createElement("span",{className:"letter"},"i"),r.a.createElement("span",{className:"letter"},"a"),r.a.createElement("span",{className:"letter"},"r"),r.a.createElement("span",{className:"letter"},"s"),r.a.createElement("span",{className:"letter"},"k"),r.a.createElement("span",{className:"letter"},"i"),r.a.createElement("span",{className:"letter"},"."))),r.a.createElement(W,null,r.a.createElement("span",{className:"letter"},"I"),r.a.createElement("span",{className:"letter"},"'"),r.a.createElement("span",{className:"letter"},"m")," ",r.a.createElement("span",{className:"letter"},"a")," ",r.a.createElement("span",{className:"letter"},"f"),r.a.createElement("span",{className:"letter"},"u"),r.a.createElement("span",{className:"letter"},"l"),r.a.createElement("span",{className:"letter"},"l"),r.a.createElement("span",{className:"letter"},"-"),r.a.createElement("span",{className:"letter"},"s"),r.a.createElement("span",{className:"letter"},"t"),r.a.createElement("span",{className:"letter"},"a"),r.a.createElement("span",{className:"letter"},"c"),r.a.createElement("span",{className:"letter"},"k")," ",r.a.createElement("span",{className:"letter"},"w"),r.a.createElement("span",{className:"letter"},"e"),r.a.createElement("span",{className:"letter"},"b")," ",r.a.createElement("span",{className:"letter"},"d"),r.a.createElement("span",{className:"letter"},"e"),r.a.createElement("span",{className:"letter"},"v"),r.a.createElement("span",{className:"letter"},"e"),r.a.createElement("span",{className:"letter"},"l"),r.a.createElement("span",{className:"letter"},"o"),r.a.createElement("span",{className:"letter"},"p"),r.a.createElement("span",{className:"letter"},"e"),r.a.createElement("span",{className:"letter"},"r"),r.a.createElement("span",{className:"letter"},"."))))}},{key:"componentDidMount",value:function(){for(var e=document.getElementsByClassName("letter"),t=function(t){setTimeout(function(){e[t]&&e[t].classList.add("letter-in")},40*t)},a=0;a<e.length;a++)t(a)}}]),t}(n.Component),q=a(16),Q=a.n(q);function G(){var e=Object(h.a)(["\n  max-width: 100%;\n  max-height: 100%;\n  box-shadow: 0 15px 30px rgba(15,15,15, 0.8);\n  animation: fade-in .5s ease;\n  display: block;\n  \n  @keyframes  fade-in\n  {\n    0% {\n      opacity: 0;\n    }\n    \n    100% {\n      opacity: 1;\n    }\n  }\n"]);return G=function(){return e},e}function X(){var e=Object(h.a)(["\n  font-size: 18px;\n  color: white;\n"]);return X=function(){return e},e}function Y(){var e=Object(h.a)(["\n  color: #2ce8cd;\n  font-size: 42px;\n"]);return Y=function(){return e},e}function K(){var e=Object(h.a)(["\n    @media (min-width: 768px) {\n  width: 50%;\n  }\n"]);return K=function(){return e},e}function $(){var e=Object(h.a)(["\n\n    @media (min-width: 768px) {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n"]);return $=function(){return e},e}function ee(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return ee=function(){return e},e}var te=p.c.div(ee()),ae=p.c.div($()),ne=p.c.div(K()),re=p.c.h1(Y()),ce=p.c.article(X()),le=p.c.img(G()),se=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{isActive:"about"}),r.a.createElement(te,null,r.a.createElement(ae,null,r.a.createElement(ne,{className:"flex1"},r.a.createElement(re,null,r.a.createElement("span",{className:"letter"},"A"),r.a.createElement("span",{className:"letter"},"b"),r.a.createElement("span",{className:"letter"},"o"),r.a.createElement("span",{className:"letter"},"u"),r.a.createElement("span",{className:"letter"},"t")," ",r.a.createElement("span",{className:"letter"},"m"),r.a.createElement("span",{className:"letter"},"e")),r.a.createElement(ce,null,r.a.createElement("p",null,"My programming journey started about 2 years ago after I watched my first C++ tutorial."),r.a.createElement("p",null,"I didn't know yet which coding path should I choose. I've tried writing desktop apps in C++, mobile apps in Xamarin or even games in Unity."),r.a.createElement("p",null,"In the end I've chosen web dev. I've had a lot of fun with writing simple websites in HTML and CSS."),r.a.createElement("p",null,"Then I took programming not too seriously, but when I started wading in PHP, SQL and JS I understood that this is what I want to do in my life."))),r.a.createElement(ne,{className:"flex2"},r.a.createElement(le,{src:Q.a,className:"xdimg",alt:"Beatiful Code"})))))}},{key:"componentDidMount",value:function(){for(var e=document.getElementsByClassName("letter"),t=function(t){setTimeout(function(){e[t]&&e[t].classList.add("letter-in")},40*t)},a=0;a<e.length;a++)t(a)}}]),t}(n.Component);function ie(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]);return ie=function(){return e},e}function oe(){var e=Object(h.a)(["\n  font-size: 18px;\n  color: white;\n"]);return oe=function(){return e},e}function me(){var e=Object(h.a)(["\n  color: #2ce8cd;\n  font-size: 42px;\n"]);return me=function(){return e},e}function ue(){var e=Object(h.a)(["\n    @media (min-width: 768px) {\n  width: 50%;\n  }\n"]);return ue=function(){return e},e}function pe(){var e=Object(h.a)(["\n\n    @media (min-width: 768px) {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n"]);return pe=function(){return e},e}function he(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]);return he=function(){return e},e}var de=p.c.div(he()),fe=p.c.div(pe()),be=p.c.div(ue()),Ee=p.c.h1(me()),ge=p.c.article(oe()),ve=p.c.section(ie()),je=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{isActive:"skills"}),r.a.createElement(de,null,r.a.createElement(fe,null,r.a.createElement(be,{className:"flex1"},r.a.createElement(Ee,null,r.a.createElement("span",{className:"letter"},"S"),r.a.createElement("span",{className:"letter"},"k"),r.a.createElement("span",{className:"letter"},"i"),r.a.createElement("span",{className:"letter"},"l"),r.a.createElement("span",{className:"letter"},"l"),r.a.createElement("span",{className:"letter"},"s")," ",r.a.createElement("span",{className:"letter"},"&")," ",r.a.createElement("span",{className:"letter"},"E"),r.a.createElement("span",{className:"letter"},"x"),r.a.createElement("span",{className:"letter"},"p"),r.a.createElement("span",{className:"letter"},"e"),r.a.createElement("span",{className:"letter"},"r"),r.a.createElement("span",{className:"letter"},"i"),r.a.createElement("span",{className:"letter"},"e"),r.a.createElement("span",{className:"letter"},"n"),r.a.createElement("span",{className:"letter"},"c"),r.a.createElement("span",{className:"letter"},"e")),r.a.createElement(ge,null,r.a.createElement("p",null,"The main area of my expertise is front-end development. I love Vue.js \u2665. From the backend side I prefer PHP, when it comes to frameworks my biggest advantage is Laravel."),r.a.createElement("p",null,"I have experience in relational databases especially in MySQL and some knowledge of Linux servers."),r.a.createElement("p",null,"In front-end RWD is basis for me, mostly I write apps according to mobile first methodology."))),r.a.createElement(be,{className:"flex2"},r.a.createElement(ve,null,r.a.createElement("h2",{className:"skill"},"HTML"),r.a.createElement("h2",{className:"skill"},"CSS"),r.a.createElement("h2",{className:"skill"},"JS"),r.a.createElement("h2",{className:"skill"},"PHP"),r.a.createElement("h2",{className:"skill"},"Sass"),r.a.createElement("h2",{className:"skill"},"MySQL"),r.a.createElement("h2",{className:"skill"},"Laravel"),r.a.createElement("h2",{className:"skill"},"Vue.js"),r.a.createElement("h2",{className:"skill"},"React.js"),r.a.createElement("h2",{className:"skill"},"Bootstrap"),r.a.createElement("h2",{className:"skill"},"Bulma"),r.a.createElement("h2",{className:"skill"},"RWD"),r.a.createElement("h2",{className:"skill"},"PHPUnit"),r.a.createElement("h2",{className:"skill"},"OOP"),r.a.createElement("h2",{className:"skill"},"REST API"),r.a.createElement("h2",{className:"skill"},"Three.js"),r.a.createElement("h2",{className:"skill"},"JEST"),r.a.createElement("h2",{className:"skill"},"Linux"),r.a.createElement("h2",{className:"skill"},"Gulp"),r.a.createElement("h2",{className:"skill"},"NPM"),r.a.createElement("h2",{className:"skill"},"Git"))))))}},{key:"componentDidMount",value:function(){for(var e=document.getElementsByClassName("letter"),t=function(t){setTimeout(function(){e[t]&&e[t].classList.add("letter-in")},40*t)},a=0;a<e.length;a++)t(a);var n=document.getElementsByClassName("skill"),r=function(e){setTimeout(function(){n[e]&&n[e].classList.add("letter-in")},40*e)};for(a=0;a<n.length;a++)r(a)}}]),t}(n.Component),we=a(22),Le=a.n(we),Ce=a(23),Ne=a.n(Ce),ye=a(24),ke=a.n(ye),Oe=a(25),xe=a.n(Oe),Me=a(26),ze=a.n(Me),Ie=a(27),Pe=a.n(Ie),Re=a(28),Ae=a.n(Re),De=a(29),Be=a.n(De),Se=a(30),Ze=a.n(Se),Te=a(31),Ve=a.n(Te);function _e(){var e=Object(h.a)([" \n   font-size: 10px;\n   font-family: Arial, sans-serif;\n   text-transform: uppercase;  \n   background: #2deed3;\n   border: 0;\n   height: 80px;\n   width: 80px;\n   border-radius: 50%;\n   text-align: center;\n   transition: opacity .3s;\n   cursor: pointer;\n   box-shadow: 0 10px 20px rgba(0,0,0,0.8);\n   opacity: 0;\n   outline: none;\n   font-weight: 700;\n   \n   :active {\n    background: #1d9987;\n   }\n"]);return _e=function(){return e},e}function He(){var e=Object(h.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    \n    :hover button {\n       opacity: 1 !important;\n    }\n"]);return He=function(){return e},e}function Fe(){var e=Object(h.a)(["\n  width:100%;\n  flex: 1 0 20%;\n  border: 1px solid transparent;\n  background-size: cover;\n  position: relative;\n  transition: filter .3s ease;\n  box-shadow: 0 5px 10px #000;\n  \n  :hover {\n        filter: brightness(150%);\n    }\n    \n  \n  ::before {\n  content: '';\n  float: left;\n  padding-top: 100%;\n  }\n"]);return Fe=function(){return e},e}function We(){var e=Object(h.a)(["\n  margin-left: 50px;\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n  flex-flow: row wrap;\n  width: calc(100% - 50px);\n  justify-content: space-around;\n"]);return We=function(){return e},e}var Ue=p.c.main(We()),Je=p.c.article(Fe()),qe=p.c.div(He()),Qe=p.c.button(_e()),Ge=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{isActive:"projects"}),r.a.createElement(Ue,null,r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+Le.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"https://fslightbox.com",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project"))))),r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+Ne.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"https://cossackfood.000webhostapp.com",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project"))))),r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+ke.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"https://github.com/MDBulma/MDBulma",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project"))))),r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+xe.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"https://github.com/PiotrZdziarski/ElectricCars",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project"))))),r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+ze.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"http://quizert.000webhostapp.com/",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project"))))),r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+Pe.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"https://skijumping.000webhostapp.com/",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project"))))),r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+Ae.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"https://treerum.000webhostapp.com/",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project"))))),r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+Be.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"http://pzdziarski2001.000webhostapp.com",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project"))))),r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+Ze.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"https://heuristic-goodall-60abde.netlify.com/",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project"))))),r.a.createElement(Je,{className:"project",style:{backgroundImage:"linear-gradient(rgba(0,0,0, 0.5),rgba(0,0,0, 0.5)),url("+Ve.a+")"}},r.a.createElement(qe,null,r.a.createElement("a",{href:"http://bendophoto.000webhostapp.com/",target:"_blank"},r.a.createElement(Qe,null,"View ",r.a.createElement("div",null,"Project")))))))}},{key:"componentDidMount",value:function(){for(var e=document.getElementsByClassName("project"),t=function(t){setTimeout(function(){e[t]&&e[t].classList.add("img-in")},80*t)},a=0;a<e.length;a++)t(a)}}]),t}(n.Component),Xe=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{exact:!0,path:"/",component:J}),r.a.createElement(g.a,{path:"/about",component:se}),r.a.createElement(g.a,{path:"/skills",component:je}),r.a.createElement(g.a,{path:"/projects",component:Ge})))}}]),t}(n.Component),Ye={font:{thin:300,regular:400,bold:800},colors:{primary:"#2ce8cd"}},Ke=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(M,null),r.a.createElement("a",{target:"_blank",href:"https://github.com/"},r.a.createElement("svg",{className:"githubIcon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30"},r.a.createElement("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"}))),r.a.createElement(p.a,{theme:Ye},r.a.createElement(Xe,null)))}}]),t}(n.Component);l.a.render(r.a.createElement(Ke,null),document.getElementById("root"))}],[[35,2,1]]]);
//# sourceMappingURL=main.1af4d712.chunk.js.map