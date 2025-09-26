import { Object3DNode } from '@react-three/fiber'
import { Mesh, Group, Material, BufferGeometry, Light } from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Basic elements
      mesh: any
      instancedMesh: any
      points: any
      
      // Geometries
      sphereGeometry: any
      torusGeometry: any
      boxGeometry: any
      planeGeometry: any
      
      // Materials
      meshPhysicalMaterial: any
      meshBasicMaterial: any
      meshStandardMaterial: any
      pointsMaterial: any
      
      // Lights
      ambientLight: any
      pointLight: any
      directionalLight: any
      spotLight: any
      
      // Other elements
      group: any
      color: any
    }
  }
}
