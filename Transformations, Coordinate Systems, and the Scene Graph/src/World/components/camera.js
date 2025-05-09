import { PerspectiveCamera } from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(
  35, // fov
  1, // aspect ratio (dummy value)
  0.001, // near clipping plane
  100, // far clipping plane
  );
  
  camera.position.set(0, 0, 10);
  
  return camera;
}

export { createCamera };
