import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  RingGeometry,
} from 'three';

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const geometryB = new RingGeometry(2, 5, 10, 10, 100, Math.PI * 2);

  const material = new MeshStandardMaterial({ color: 'purple' });
  const materialB = new MeshStandardMaterial({ color: 'green'});

  const cube = new Mesh(geometry, material);
  const meshB = new Mesh(geometryB, materialB);

  cube.add(meshB);

  cube.position.x = -0.5;
  cube.position.y = -0.1;
  cube.position.z = 1;

  meshB.position.z = 2;

  cube.scale.x = 0.5;
  cube.scale.y = 1;
  cube.scale.z = 1;

  cube.rotation.x =  0;
  cube.rotation.y = Math.PI / 2;
  cube.rotation.z = Math.PI / 2;

  meshB.scale.x = 2;
  meshB.scale.y = 1;
  meshB.scale.z = 1;

  meshB.rotation.x = 0;
  meshB.rotation.y = 0;
  meshB.rotation.z = 0;

  return cube;
}

export { createCube };
