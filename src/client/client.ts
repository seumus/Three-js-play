import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


const scene = new THREE.Scene()
const scene2 = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 10)
const camera3 = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 10)
const camera4 = new THREE.OrthographicCamera(-1, 1, 1, -1, .1, 10)

camera.position.z = 2
camera2.position.y = 2
camera2.lookAt(new THREE.Vector3())
camera3.position.x = -2
camera3.lookAt(new THREE.Vector3())
camera4.position.z = 2


const renderer = new THREE.WebGLRenderer()
const renderer2 = new THREE.WebGLRenderer()
const renderer3 = new THREE.WebGLRenderer()
const renderer4 = new THREE.WebGLRenderer()


// renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setSize(200, 200);
renderer2.setSize(200, 200);
renderer3.setSize(200, 200);
renderer4.setSize(200, 200);
document.body.appendChild(renderer.domElement)
document.body.appendChild(renderer2.domElement)
document.body.appendChild(renderer3.domElement)
document.body.appendChild(renderer4.domElement)

new OrbitControls(camera, renderer.domElement)

// const geometry = new THREE.BoxGeometry()
const geometry = new THREE.TorusGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})
const material2 = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: false,
})
const cube = new THREE.Mesh(geometry, material)
const cube2 = new THREE.Mesh(geometry, material2)
cube.scale.x = .5
cube.scale.y = .5
cube.scale.z = .5

cube2.scale.x = .5
cube2.scale.y = .5
cube2.scale.z = .5

scene.add(cube)
scene2.add(cube2)

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube2.rotation.x += 0.01
    cube2.rotation.y += 0.01
    render()
}

function render() {
    renderer.render(scene, camera)
    renderer2.render(scene2, camera2)
    renderer3.render(scene, camera3)
    renderer4.render(scene, camera4)

}

animate()