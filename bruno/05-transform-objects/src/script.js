import './style.css'
import * as THREE from 'three'

//35:

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1//mire jolo
mesh.position.set(0.7, -0.6, 1) // this is same as codes on the top
// usually we  create postion here before add mesh and after create mesh
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
//same as =>
mesh.scale.set(2, 0.5, 0.5)

// every classess inherit from object3d has 4 properties/ quarternion/scale/rotation/position
// mesh.position.normalize()//andaze haro be 1 tabdil mikone
// console.log(mesh.position.length());//distance from center to this object
// console.log(mesh.position.distanceTo(new THREE.Vector3(1, 0, 2)));

// ROTATION
// mesh.rotation.reorder('YXZ') //TARTIBE CHARKHESH HA bayad qabl az bashe
mesh.rotation.y = Math.PI / 4
mesh.rotation.x = Math.PI / 4

scene.add(mesh)
//Axes Helper 
//THIS IS an object so must add to the scene
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)
// red: x, blue:z, green:y

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5//mire aqab
camera.position.x = 1
camera.position.y = 1
scene.add(camera)
// console.log(mesh.position.distanceTo(camera.position));

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)