import { BoxGeometry, Mesh, MeshStandardMaterial, MeshBasicMaterial } from 'three';

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  
  const material = new MeshStandardMaterial({ color: "purple" });
  
  const cube = new Mesh(geometry, material);
  
  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(-2, 0, 0);

  return cube;
}

function createBasicCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  
  const material = new MeshBasicMaterial({ color: "purple" });
  
  const cube = new Mesh(geometry, material);
  
  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.position.set(2, 0, 0);

  return cube;
}

export { createCube, createBasicCube };