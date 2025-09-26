// 3D Component Types
// This file provides types for Three.js components used in JSX

declare namespace JSX {
  interface IntrinsicElements {
    // Three.js basic elements
    mesh: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    ambientLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    pointLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    directionalLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    spotLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    hemisphereLight: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    
    // Geometries
    boxGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    sphereGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    planeGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    cylinderGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    coneGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    torusGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    
    // Materials
    meshStandardMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    meshPhysicalMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    meshBasicMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    meshLambertMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    meshPhongMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    
    // Groups and other elements
    group: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    primitive: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    perspectiveCamera: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    orthographicCamera: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    scene: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}

// Add support for model file imports
declare module "*.glb" {
  const content: any;
  export default content;
}

declare module "*.gltf" {
  const content: any;
  export default content;
}

declare module "*.fbx" {
  const content: any;
  export default content;
}

declare module "*.obj" {
  const content: any;
  export default content;
}

// Add support for other asset types commonly used with Three.js
declare module "*.hdr" {
  const content: any;
  export default content;
}

declare module "*.exr" {
  const content: any;
  export default content;
}
