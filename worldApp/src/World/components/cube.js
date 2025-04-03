import { ConeGeometry, Mesh, MeshBasicMaterial, TorusGeometry} from 'three';

function createCone() {
  const geometry = new ConeGeometry(2, 4, 10);
  
  const material = new MeshBasicMaterial();
  
  const cone = new Mesh(geometry, material);
  
  return cone;
}

function createTorus() {
  const geometry = new TorusGeometry(5, 2, 10, 50);

  const material = new MeshBasicMaterial({color: "#ef9409"});
  
  const tube  = new Mesh(geometry, material);

  tube.position.set(4, 6, -5);
  return tube;
}

export { createCone, createTorus };