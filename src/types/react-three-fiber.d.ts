import { Object3DNode, MaterialNode, BufferGeometryNode, LightNode } from '@react-three/fiber';
import * as THREE from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      group: Object3DNode<THREE.Group, typeof THREE.Group>;
      ambientLight: LightNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
      pointLight: LightNode<THREE.PointLight, typeof THREE.PointLight>;
      directionalLight: LightNode<THREE.DirectionalLight, typeof THREE.DirectionalLight>;
      planeGeometry: BufferGeometryNode<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>;
      boxGeometry: BufferGeometryNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
      torusGeometry: BufferGeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>;
      meshPhysicalMaterial: MaterialNode<THREE.MeshPhysicalMaterial, typeof THREE.MeshPhysicalMaterial>;
      color: Object3DNode<THREE.Color, typeof THREE.Color>;
    }
  }
}
