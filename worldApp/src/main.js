import { World } from './World/World.js';

function main()
{
  const container = document.querySelector('#scene-container');
  
  const world = new World(container);
  
  world.render();
}

const inator = document.querySelector('button');
inator.addEventListener("click",  function(event)
{
  main();
  inator.remove();
});