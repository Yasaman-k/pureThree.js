
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

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const points = [];
points.push(new THREE.Vector3(0, 0, 0));
points.push(new THREE.Vector3(0, 20, 0));
points.push(new THREE.Vector3(10, -10, 10));
console.log(points);
const geometry = new THREE.BufferGeometry().setFromPoints(points);



const material = new THREE.LineBasicMaterial(
    {
        color: 0x1E7BFD3
    }
);
const line = new THREE.Line(geometry, material);
scene.add(line);

// camera.position.z =3

function animate() {
    requestAnimationFrame(animate);

    // line.rotation.x += 0;
    // line.rotation.y += 0.006;
    // line.rotation.z += 0.006;


    renderer.render(scene, camera);
};

animate();