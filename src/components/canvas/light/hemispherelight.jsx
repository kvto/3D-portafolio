import * as THREE from 'three';

const HemisphereLightComponent = () => {
  // Configura la luz HemisphereLight
  const hemisphereLight = new THREE.HemisphereLight( "black", "0.15");

  // Puedes realizar cualquier otra lógica o interacción con la luz aquí si es necesario

  // Devuelve el resultado para ser renderizado en la aplicación
  return (
    <hemisphereLight />
  );
};

export default HemisphereLightComponent;