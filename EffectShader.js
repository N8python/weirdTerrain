import * as THREE from 'https://unpkg.com/three@0.155.0/build/three.module.js';
const EffectShader = {

    uniforms: {

        'sceneDiffuse': { value: null }
    },

    vertexShader: /* glsl */ `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,

    fragmentShader: /* glsl */ `
		uniform highp sampler2D sceneDiffuse;
        varying vec2 vUv;
		void main() {
            vec4 diffuse = texture2D(sceneDiffuse, vUv);
            gl_FragColor = vec4(diffuse.rgb, 1.0);
		}`

};

export { EffectShader };