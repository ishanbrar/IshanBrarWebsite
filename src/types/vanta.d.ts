declare module "vanta/dist/vanta.fog.min" {
  import type * as THREE from "three";

  type VantaEffect = { destroy: () => void };

  export default function VANTA_FOG(options: {
    el: HTMLElement | string;
    THREE: typeof THREE;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
  }): VantaEffect;
}
