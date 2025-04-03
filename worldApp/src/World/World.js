import { createCamera } from './components/camera.js';
import { createCone, createTorus } from './components/cube.js';
import { createScene } from './components/scene.js';

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
    
    const cone = createCone();
    const tube = createTorus();
    
    scene.add(cone);
    scene.add(tube);
    
    const resizer = new Resizer(container, camera, renderer);
  }
  
  render() {
    renderer.render(scene, camera);
  }
}

export { World };