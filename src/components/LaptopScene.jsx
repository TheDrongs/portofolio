import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { CSS3DObject, CSS3DRenderer } from 'three/addons/renderers/CSS3DRenderer.js';
const ROOM = '#dedbd3';
const SCREEN_WIDTH = 960;
const SCREEN_HEIGHT = 600;
const SCREEN_PANEL_WIDTH = 5.42;
const SCREEN_PANEL_HEIGHT = 3.4;
const DESKTOP_ZOOM = 1.15;
function makeTexture(width, height, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  draw(context, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
function buildLaptop(scene) {
  const laptop = new THREE.Group();
  scene.add(laptop);
  const shell = new THREE.MeshStandardMaterial({
    color: '#c4c1b3',
    roughness: 0.62,
    metalness: 0.2
  });
  const trim = new THREE.MeshStandardMaterial({
    color: '#96988b',
    roughness: 0.7,
    metalness: 0.25
  });
  const dark = new THREE.MeshStandardMaterial({
    color: '#393c35',
    roughness: 0.8
  });
  const keysMaterial = new THREE.MeshStandardMaterial({
    color: '#c9c7ba',
    roughness: 0.85
  });
  const rounded = (width, height, depth, radius, material, parent = laptop) => {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 3, radius), material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  };
  rounded(5.8, 0.25, 3.8, 0.095, shell).position.y = 0.25;
  rounded(5.72, 0.09, 3.7, 0.04, trim).position.y = 0.105;
  rounded(5.08, 0.035, 1.63, 0.03, dark).position.set(0, 0.386, -0.48);
  const keyGeometry = new RoundedBoxGeometry(0.29, 0.065, 0.24, 2, 0.025);
  const keycaps = new THREE.InstancedMesh(keyGeometry, keysMaterial, 75);
  keycaps.castShadow = true;
  keycaps.receiveShadow = true;
  const matrix = new THREE.Matrix4();
  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 15; column++) {
      matrix.makeTranslation(-2.32 + column * 0.33, 0.422, -1.1 + row * 0.3);
      keycaps.setMatrixAt(row * 15 + column, matrix);
    }
  }
  laptop.add(keycaps);
  const keyboardTexture = makeTexture(1500, 500, (ctx, width, height) => {
    const rows = ['esc 1 2 3 4 5 6 7 8 9 0 - = del home', 'tab Q W E R T Y U I O P [ ] \\ end', 'caps A S D F G H J K L ; enter up pgup fn', 'shift Z X C V B N M , . / shift left down right', 'ctrl fn alt cmd . . . space . . . cmd alt ctrl fn'];
    ctx.fillStyle = '#575c50';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '19px monospace';
    rows.forEach((row, r) => row.split(' ').forEach((key, c) => ctx.fillText(key === '.' ? '' : key, (c + 0.5) * width / 15, (r + 0.5) * height / 5)));
  });
  const keyboardLabels = new THREE.Mesh(new THREE.PlaneGeometry(4.95, 1.5), new THREE.MeshBasicMaterial({
    map: keyboardTexture,
    transparent: true,
    depthWrite: false
  }));
  keyboardLabels.rotation.x = -Math.PI / 2;
  keyboardLabels.position.set(0, 0.457, -0.5);
  laptop.add(keyboardLabels);
  rounded(1.74, 0.015, 0.87, 0.007, trim).position.set(0, 0.383, 1.07);
  rounded(1.67, 0.012, 0.8, 0.005, shell).position.set(0, 0.394, 1.07);
  const hinge = new THREE.Group();
  hinge.position.set(0, 0.4, -1.66);
  hinge.rotation.x = Math.PI / 2;
  laptop.add(hinge);
  rounded(5.8, 3.75, 0.19, 0.09, shell, hinge).position.y = 1.875;
  const screenMaterial = new THREE.MeshBasicMaterial({
    color: '#467b73'
  });
  const display = rounded(SCREEN_PANEL_WIDTH, SCREEN_PANEL_HEIGHT, 0.012, 0.005, screenMaterial, hinge);
  display.name = 'laptop-display';
  display.position.set(0, 1.93, 0.137);
  const webcam = new THREE.Mesh(new THREE.CircleGeometry(0.018, 12), dark);
  webcam.position.set(0, 3.66, 0.102);
  hinge.add(webcam);
  const logoTexture = makeTexture(256, 256, ctx => {
    ctx.strokeStyle = '#929584';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(128, 128, 95, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#777e6d';
    ctx.font = 'italic 140px Georgia';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('a.', 125, 130);
  });
  const logo = new THREE.Mesh(new THREE.PlaneGeometry(0.78, 0.78), new THREE.MeshStandardMaterial({
    map: logoTexture,
    transparent: true,
    roughness: 0.6,
    depthWrite: false
  }));
  logo.rotation.y = Math.PI;
  logo.position.set(0, 1.9, -0.102);
  hinge.add(logo);
  const hingeBar = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 4.8, 16), trim);
  hingeBar.rotation.z = Math.PI / 2;
  hingeBar.position.set(0, 0.38, -1.62);
  laptop.add(hingeBar);
  const led = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 8), new THREE.MeshBasicMaterial({
    color: '#8caa6c'
  }));
  led.position.set(2.44, 0.31, 1.905);
  laptop.add(led);
  return {
    laptop,
    hinge
  };
}
function buildSmartphone(scene) {
  const phone = new THREE.Group();
  phone.name = 'smartphone';
  scene.add(phone);
  const roundedShape = (width, height, radius) => {
    const x = -width / 2, y = -height / 2;
    return new THREE.Shape()
      .moveTo(x + radius, y).lineTo(x + width - radius, y)
      .quadraticCurveTo(x + width, y, x + width, y + radius)
      .lineTo(x + width, y + height - radius)
      .quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
      .lineTo(x + radius, y + height)
      .quadraticCurveTo(x, y + height, x, y + height - radius)
      .lineTo(x, y + radius).quadraticCurveTo(x, y, x + radius, y);
  };
  const body = new THREE.Mesh(
    new THREE.ExtrudeGeometry(roundedShape(2.65, 5.4, .32), { depth: .18, bevelEnabled: true, bevelSize: .035, bevelThickness: .035, bevelSegments: 3, steps: 1 }),
    new THREE.MeshStandardMaterial({ color: '#aeb19e', metalness: .45, roughness: .4 })
  );
  body.position.z = -.09;
  body.castShadow = true;
  body.receiveShadow = true;
  phone.add(body);
  const glass = new THREE.Mesh(new THREE.ShapeGeometry(roundedShape(2.48, 5.22, .26)), new THREE.MeshStandardMaterial({ color: '#262d27', metalness: .2, roughness: .26 }));
  glass.position.z = .13;
  phone.add(glass);
  const display = new THREE.Mesh(new THREE.ShapeGeometry(roundedShape(2.25, 4.73, .16)), new THREE.MeshBasicMaterial({ color: '#273c36' }));
  display.position.z = .14;
  phone.add(display);
  const speaker = new THREE.Mesh(new RoundedBoxGeometry(.45, .045, .012, 2, .005), new THREE.MeshBasicMaterial({ color: '#171e19' }));
  speaker.position.set(0, 2.49, .15);
  phone.add(speaker);
  const lens = new THREE.Mesh(new THREE.CircleGeometry(.035, 16), new THREE.MeshStandardMaterial({ color: '#61756d', metalness: .7, roughness: .1 }));
  lens.position.set(.46, 2.49, .15);
  phone.add(lens);
  const home = new THREE.Mesh(new RoundedBoxGeometry(.68, .035, .01, 2, .004), new THREE.MeshBasicMaterial({ color: '#909d86' }));
  home.position.set(0, -2.47, .15);
  phone.add(home);
  const brand = makeTexture(256, 256, ctx => {
    ctx.fillStyle = '#a7b497'; ctx.font = 'italic 132px Georgia'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('ap.', 128, 128);
  });
  const logo = new THREE.Mesh(new THREE.PlaneGeometry(.8, .8), new THREE.MeshBasicMaterial({ map: brand, transparent: true, depthWrite: false }));
  logo.position.set(0, 0, .155);
  phone.add(logo);
  phone.position.set(.25, .65, 0);
  phone.rotation.set(-Math.PI / 2 + .12, 0, -.18);
  phone.visible = false;
  return phone;
}

export default function LaptopScene({
  opened,
  screenElement,
  mobileHost,
  onSettled,
  onReady,
  onFallback,
  onActivate
}) {
  const hostRef = useRef(null);
  const openedRef = useRef(opened);
  const settledRef = useRef(false);
  useEffect(() => {
    openedRef.current = opened;
    settledRef.current = false;
  }, [opened]);
  useEffect(() => {
    const host = hostRef.current;
    let renderer;
    let observer;
    let animationFrame;
    let disposed = false;
    let scene;
    let cssRenderer;
    let media;
    let handleResize;
    let contextLost;
    let handleDeviceClick;
    let handlePointerMove;
    const fallback = () => {
      mobileHost.current?.appendChild(screenElement);
      screenElement.style.cssText = '';
      screenElement.classList.add('is-flat');
      onFallback();
      onSettled(openedRef.current);
    };
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      renderer.domElement.setAttribute('aria-hidden', 'true');
      renderer.domElement.className = 'laptop-canvas';
      host.appendChild(renderer.domElement);
      cssRenderer = new CSS3DRenderer();
      cssRenderer.domElement.className = 'laptop-html-layer';
      host.appendChild(cssRenderer.domElement);
      scene = new THREE.Scene();
      scene.background = new THREE.Color(ROOM);
      scene.fog = new THREE.Fog(ROOM, 22, 55);
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 70);
      const initialPosition = new THREE.Vector3(5.6, 6.2, 8);
      const finalPosition = new THREE.Vector3(0, 2.33, 6);
      const initialTarget = new THREE.Vector3(-0.5, 1.65, 0);
      const finalTarget = new THREE.Vector3(0, 2.33, -1.66);
      const target = new THREE.Vector3();
      scene.add(new THREE.HemisphereLight('#fff7e9', '#939b86', 2.7));
      const sunlight = new THREE.DirectionalLight('#fff3d9', 4.1);
      sunlight.position.set(-5, 9, 5);
      sunlight.castShadow = true;
      sunlight.shadow.mapSize.set(1024, 1024);
      Object.assign(sunlight.shadow.camera, {
        left: -8,
        right: 8,
        top: 8,
        bottom: -8,
        near: 0.5,
        far: 30
      });
      sunlight.shadow.normalBias = 0.035;
      sunlight.shadow.bias = -0.0003;
      sunlight.shadow.radius = 4;
      scene.add(sunlight);
      const fill = new THREE.DirectionalLight('#e0e9ef', 1.1);
      fill.position.set(5, 4, -4);
      scene.add(fill);
      const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({
        color: ROOM,
        roughness: 1
      }));
      floor.rotation.x = -Math.PI / 2;
      floor.receiveShadow = true;
      scene.add(floor);
      const {
        laptop,
        hinge
      } = buildLaptop(scene);
      laptop.name = 'laptop';
      const phone = buildSmartphone(scene);
      const phoneCorners = [-1.36, 1.36].flatMap(x => [-2.735, 2.735].map(y => new THREE.Vector3(x, y, .15)));
      const projectedPhoneCorner = new THREE.Vector3();
      const screenObject = new CSS3DObject(screenElement);
      screenObject.position.set(0, 1.93, 0.152);
      screenObject.name = 'portfolio-screen';
      screenObject.scale.set(SCREEN_PANEL_WIDTH / SCREEN_WIDTH, SCREEN_PANEL_HEIGHT / SCREEN_HEIGHT, 1);
      screenElement.style.width = `${SCREEN_WIDTH}px`;
      screenElement.style.height = `${SCREEN_HEIGHT}px`;
      let mobile = false;
      let initialized = false;
      let progress = 0;
      let viewportWidth = 1;
      let viewportHeight = 1;
      const lidTop = new THREE.Vector3(0, 3.75, 0.005);
      const projectedTop = new THREE.Vector3();
      let previousTime = 0;
      let dirty = true;
      const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
      media = window.matchMedia('(max-width: 760px)');
      const setMode = () => {
        const nextMobile = media.matches;
        if (!initialized || nextMobile !== mobile) {
          initialized = true;
          mobile = nextMobile;
          laptop.visible = !mobile;
          phone.visible = mobile;
          if (screenObject.parent) screenObject.parent.remove(screenObject);
          if (mobile) {
            mobileHost.current?.appendChild(screenElement);
            screenElement.classList.add('is-flat');
          } else {
            screenElement.classList.remove('is-flat');
            hinge.add(screenObject);
          }
        }
      };
      handleResize = () => {
        if (disposed) return;
        setMode();
        const {
          width,
          height
        } = host.getBoundingClientRect();
        viewportWidth = Math.max(width, 1);
        viewportHeight = Math.max(height, 1);
        renderer.setSize(viewportWidth, viewportHeight);
        cssRenderer.setSize(viewportWidth, viewportHeight);
        camera.aspect = viewportWidth / viewportHeight;
        camera.zoom = mobile ? 1 : DESKTOP_ZOOM;
        camera.updateProjectionMatrix();
        dirty = true;
      };
      observer = new ResizeObserver(handleResize);
      observer.observe(host);
      media.addEventListener('change', handleResize);
      handleResize();
      const draw = time => {
        if (disposed) return;
        const delta = Math.min((time - previousTime) / 1000 || 0, 0.05);
        previousTime = time;
        const destination = openedRef.current ? 1 : 0;
        const nextProgress = motionPreference.matches ? destination : THREE.MathUtils.damp(progress, destination, 3.5, delta);
        const changed = Math.abs(nextProgress - progress) > 0.00001;
        progress = Math.abs(nextProgress - destination) < 0.001 ? destination : nextProgress;
        const complete = destination === 1 && progress === 1;
        if (complete !== settledRef.current) {
          settledRef.current = complete;
          onSettled(complete);
        }
        if (dirty || changed) {
          const eased = progress * progress * (3 - 2 * progress);
          hinge.rotation.x = THREE.MathUtils.lerp(Math.PI / 2, 0, eased);
          laptop.rotation.y = THREE.MathUtils.lerp(-0.13, 0, eased);
          camera.position.lerpVectors(initialPosition, finalPosition, eased);
          target.lerpVectors(initialTarget, finalTarget, eased);
          if (mobile) {
            camera.position.set(4, 8.8, 11.8);
            target.set(0, 1.15, 0);
            phone.rotation.x = THREE.MathUtils.lerp(-Math.PI / 2 + .12, -.1, eased);
            phone.rotation.z = THREE.MathUtils.lerp(-.18, 0, eased);
            phone.position.y = THREE.MathUtils.lerp(.65, 2.8, eased);
          }
          if (!mobile && camera.aspect < 1.5) {
            // Fit narrow windows along the viewing direction, preserving a front-facing screen.
            camera.position.sub(target).multiplyScalar(1.5 / Math.max(camera.aspect, 0.5)).add(target);
          }
          camera.clearViewOffset();
          camera.lookAt(target);
          if (mobile) {
            // Lower the welcome phone by 25% of its on-screen height, preserving its size.
            phone.updateMatrixWorld(true);
            camera.updateMatrixWorld(true);
            let top = -Infinity;
            let bottom = Infinity;
            for (const corner of phoneCorners) {
              projectedPhoneCorner.copy(corner).applyMatrix4(phone.matrixWorld).project(camera);
              top = Math.max(top, projectedPhoneCorner.y);
              bottom = Math.min(bottom, projectedPhoneCorner.y);
            }
            const phoneHeight = (top - bottom) * viewportHeight / 2;
            camera.setViewOffset(viewportWidth, viewportHeight, 0, -phoneHeight * .25 * (1 - eased), viewportWidth, viewportHeight);
          } else {
            // Anchor the top edge to the bottom of the header, without moving the device off its desk.
            laptop.updateMatrixWorld(true);
            camera.updateMatrixWorld(true);
            projectedTop.copy(lidTop).applyMatrix4(hinge.matrixWorld).project(camera);
            const topGap = (1 - projectedTop.y) * viewportHeight / 2;
            camera.setViewOffset(viewportWidth, viewportHeight, 0, topGap * eased, viewportWidth, viewportHeight);
          }
          renderer.render(scene, camera);
          if (!mobile) cssRenderer.render(scene, camera);
          screenElement.style.opacity = mobile ? '1' : String(THREE.MathUtils.smoothstep(progress, 0.8, 0.98));
          dirty = false;
        }
        animationFrame = requestAnimationFrame(draw);
      };
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      const hitDevice = event => {
        const rect = renderer.domElement.getBoundingClientRect();
        if (!rect.width || !rect.height) return false;
        pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
        raycaster.setFromCamera(pointer, camera);
        return raycaster.intersectObject(mobile ? phone : laptop, true).length > 0;
      };
      handleDeviceClick = event => {
        if (!openedRef.current && hitDevice(event)) onActivate();
      };
      handlePointerMove = event => {
        renderer.domElement.style.cursor = !openedRef.current && hitDevice(event) ? 'pointer' : '';
      };
      renderer.domElement.addEventListener('click', handleDeviceClick);
      renderer.domElement.addEventListener('pointermove', handlePointerMove);
      contextLost = event => {
        event.preventDefault();
        cancelAnimationFrame(animationFrame);
        fallback();
      };
      renderer.domElement.addEventListener('webglcontextlost', contextLost);
      animationFrame = requestAnimationFrame(draw);
      onReady();
    } catch (error) {
      console.warn('3D view unavailable; using the accessible portfolio view.', error);
      fallback();
    }
    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      observer?.disconnect();
      media?.removeEventListener('change', handleResize);
      if (contextLost) renderer?.domElement.removeEventListener('webglcontextlost', contextLost);
      if (handleDeviceClick) renderer?.domElement.removeEventListener('click', handleDeviceClick);
      if (handlePointerMove) renderer?.domElement.removeEventListener('pointermove', handlePointerMove);
      screenElement.remove();
      const geometries = new Set();
      const materials = new Set();
      const textures = new Set();
      scene?.traverse(object => {
        object.shadow?.dispose();
        if (object.isInstancedMesh) object.dispose();
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => {
          materials.add(material);
          Object.values(material).forEach(value => {
            if (value?.isTexture) textures.add(value);
          });
        });
      });
      textures.forEach(texture => texture.dispose());
      materials.forEach(material => material.dispose());
      geometries.forEach(geometry => geometry.dispose());
      renderer?.dispose();
      renderer?.domElement.remove();
      cssRenderer?.domElement.remove();
    };
  }, [screenElement, mobileHost, onSettled, onReady, onFallback, onActivate]);
  return <div className="laptop-scene" ref={hostRef} />;
}
