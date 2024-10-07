<script setup>
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import VerticalAccordion from '@/components/VerticalAccordion.vue';

import * as THREE from 'three'

const target = ref()

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer({ antialias: true})
renderer.setSize(256, 256)

camera.aspect = 256 / 256;
camera.updateProjectionMatrix();

const controls = new OrbitControls(camera, renderer.domElement)

const loader = new GLTFLoader();

loader.load( './src/assets/3D/church.glb', function ( gltf ) {
  scene.add( gltf.scene );
}, undefined, function ( error ) {
  console.error( error );
} );

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(3, 1, 1)
controls.update()

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
scene.background = new THREE.Color(0x716455)
scene.add (new THREE.AmbientLight(0x404040, 30))


camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update()

  renderer.render(scene, camera)
}
//Disable panning
controls.mouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: ''
}

onMounted(() => {
  target.value.appendChild(renderer.domElement)
  animate()
})
</script>

<template>
  <main>
    <!-- Accordion section -->
    <div class="flex w-full flex-col gap-4 md:flex-row mt-4 bg-gray-900 border-2 border-gray-700 rounded-lg p-4">
      <VerticalAccordion class="w-full md:w-1/2" :title="$t('About_Work_Title')">
        <p>{{ $t('About_Work') }}</p>
      </VerticalAccordion>

      <VerticalAccordion class="w-full md:w-1/2" :title="$t('About_Sector_Title')">
        <p>{{ $t('About_Sector') }}</p>
      </VerticalAccordion>
    </div>

    <!-- 3D section -->
    <div class="hidden holwierde" ref="target">
      <h6>Kerk van Holwierde</h6>
    </div>
  </main>
</template>

<style scoped>

.holwierde{
  border-radius: 25px;
}
</style>
