
// import * as THREE from 'three';

import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { FontLoader } from '/jm/loaders/FontLoader.js';

const loader = new THREE.FontLoader();

loader.load('/fonts/helvetiker_regular.typeface.json', function (font) {

    const geometry = new TextBufferGeometry('Hello three.js!', {
        font: font,
        size: 80,
        height: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
    });
    console.log(geometry);
    const material = new THREE.MeshBasicMaterial(
        {
            color: 0x1E7BFD3
        }
    );
    const text = new THREE.Mesh(geometry, material);
    scene.add(text);
});


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
);

camera.position.set(0, 0, 80);
camera.lookAt(0, 0, 0);

scene.add(camera)

// const renderer = new THREE.WebGLRenderer({canvas:});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// camera.position.z =3

function animate() {
    requestAnimationFrame(animate);
    // line.rotation.x += 0;
    // line.rotation.y += 0.006;
    // line.rotation.z += 0.006;
    renderer.render(scene, camera);
};

animate();