
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

scene.add(camera)

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.ConeGeometry(2,4,5670);
// const geometry = new THREE.SphereGeometry();

const texture = new THREE.TextureLoader().load('images/park.jpg');
// texture.wrapS = THREE.RepeatWrapping;
// texture.wrapT = THREE.RepeatWrapping;
// texture.repeat.set(4, 4);

// const Moontexture = new THREE.TextureLoader().load('images/moon.jpg');

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial(
    {
        color: 0x1E7BFD3,
        map: texture
    }
);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); 

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.001;
    cube.rotation.y += 0.001;
    // cube.rotation.z += 0.01;

    renderer.render(scene, camera);
};

animate();