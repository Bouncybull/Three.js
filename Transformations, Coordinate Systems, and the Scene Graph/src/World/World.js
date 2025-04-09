import { createCamera } from './components/camera.js';
import { createCube, createBasicCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let camera;
let renderer;
let scene;

class World 
{
	constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);
    
    const cube = createCube();
    const cubeBasic = createBasicCube();
    const light = createLights();
    
    scene.add(cube, light, cubeBasic);
    
    const resizer = new Resizer(container, camera, renderer);
  }
  
  render() {
    renderer.render(scene, camera);
  }
}

export { World };