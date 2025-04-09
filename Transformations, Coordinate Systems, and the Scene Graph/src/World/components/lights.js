import { DirectionalLight } from 'three';

function createLights()
{
    const light = new DirectionalLight('white', 8);

    light.position.set(-10, 10, 2);

    return light;
}

export { createLights };