import * as THREE from 'three';

// Scene
const scene = new THREE.scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: '#ff0000'});
new mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);