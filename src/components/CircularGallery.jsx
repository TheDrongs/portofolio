import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from "ogl";
import { useEffect, useRef } from "react";

const lerp = (start, end, amount) => start + (end - start) * amount;

const vertex = `
  precision highp float;
  attribute vec3 position;
  attribute vec2 uv;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpeed;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 p = position;
    p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5)
      * (0.1 + uSpeed * 0.5);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const fragment = `
  precision highp float;
  uniform vec2 uImageSizes;
  uniform vec2 uPlaneSizes;
  uniform sampler2D tMap;
  uniform float uBorderRadius;
  varying vec2 vUv;

  float roundedBoxSDF(vec2 p, vec2 b, float r) {
    vec2 d = abs(p) - b;
    return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
  }

  void main() {
    vec2 ratio = vec2(
      min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
      min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
    );
    vec2 imageUv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
    vec4 color = texture2D(tMap, imageUv);
    float distanceToEdge = roundedBoxSDF(
      vUv - 0.5,
      vec2(0.5 - uBorderRadius),
      uBorderRadius
    );
    float alpha = 1.0 - smoothstep(-0.002, 0.002, distanceToEdge);
    gl_FragColor = vec4(color.rgb, alpha);
  }
`;

function createTextTexture(gl, text, color) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const font = '700 28px "Segoe UI", sans-serif';

  context.font = font;
  const width = Math.min(Math.ceil(context.measureText(text).width) + 32, 720);
  canvas.width = width;
  canvas.height = 64;
  context.font = font;
  context.fillStyle = color;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, width / 2, canvas.height / 2, width - 20);

  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width, height: canvas.height };
}

class GalleryMedia {
  constructor(options) {
    Object.assign(this, options);
    this.extra = 0;
    this.createMesh();
    this.createTitle();
    this.onResize();
  }

  createMesh() {
    const texture = new Texture(this.gl, { generateMipmaps: true });
    const image = new Image();
    image.decoding = "async";
    image.src = this.item.image;

    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex,
      fragment,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [1, 1] },
        uSpeed: { value: 0 },
        uTime: { value: Math.random() * 100 },
        uBorderRadius: { value: this.borderRadius },
      },
      transparent: true,
    });

    image.onload = () => {
      texture.image = image;
      this.program.uniforms.uImageSizes.value = [
        image.naturalWidth,
        image.naturalHeight,
      ];
    };

    this.plane = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });
    this.plane.setParent(this.scene);
  }

  createTitle() {
    const { texture, width, height } = createTextTexture(
      this.gl,
      this.item.text,
      this.textColor,
    );
    const titleProgram = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true,
    });

    this.title = new Mesh(this.gl, {
      geometry: new Plane(this.gl),
      program: titleProgram,
    });
    const titleHeight = this.plane.scale.y * 0.14;
    this.title.scale.set(titleHeight * (width / height), titleHeight, 1);
    this.title.setParent(this.scene);
  }

  onResize({ screen, viewport } = {}) {
    if (screen) this.screen = screen;
    if (viewport) this.viewport = viewport;

    const scale = this.screen.height / 900;
    this.plane.scale.y = (this.viewport.height * (430 * scale)) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * (520 * scale)) / this.screen.width;
    this.program.uniforms.uPlaneSizes.value = [
      this.plane.scale.x,
      this.plane.scale.y,
    ];

    this.padding = Math.max(0.65, this.plane.scale.x * 0.2);
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;

    if (this.title) {
      const titleHeight = this.plane.scale.y * 0.14;
      const texture = this.title.program.uniforms.tMap.value.image;
      this.title.scale.set(
        titleHeight * (texture.width / texture.height),
        titleHeight,
        1,
      );
    }
  }

  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra;
    const x = this.plane.position.x;
    const halfWidth = this.viewport.width / 2;
    const bend = Math.abs(this.bend);

    if (bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const radius = (halfWidth * halfWidth + bend * bend) / (2 * bend);
      const effectiveX = Math.min(Math.abs(x), halfWidth);
      const arc = radius - Math.sqrt(radius * radius - effectiveX * effectiveX);
      this.plane.position.y = this.bend > 0 ? -arc : arc;
      this.plane.rotation.z =
        (this.bend > 0 ? -1 : 1) *
        Math.sign(x) *
        Math.asin(effectiveX / radius);
    }

    const speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = speed;
    this.title.position.x = this.plane.position.x;
    this.title.position.y = this.plane.position.y - this.plane.scale.y * 0.62;
    this.title.rotation.z = this.plane.rotation.z;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    const isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    const isAfter = this.plane.position.x - planeOffset > viewportOffset;

    if (direction === "right" && isBefore) this.extra -= this.widthTotal;
    if (direction === "left" && isAfter) this.extra += this.widthTotal;
  }

  hitTest(clientX, clientY, rect) {
    const centerX =
      rect.left +
      rect.width / 2 +
      (this.plane.position.x / this.viewport.width) * rect.width;
    const centerY =
      rect.top +
      rect.height / 2 -
      (this.plane.position.y / this.viewport.height) * rect.height;
    const width = (this.plane.scale.x / this.viewport.width) * rect.width;
    const height = (this.plane.scale.y / this.viewport.height) * rect.height;

    return (
      clientX >= centerX - width / 2 &&
      clientX <= centerX + width / 2 &&
      clientY >= centerY - height / 2 &&
      clientY <= centerY + height / 2
    );
  }
}

class CircularGalleryApp {
  constructor(container, options) {
    this.container = container;
    this.options = options;
    this.scroll = { ease: options.scrollEase, current: 0, target: 0, last: 0 };
    this.createRenderer();
    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;
    this.scene = new Transform();
    this.geometry = new Plane(this.gl, { heightSegments: 30, widthSegments: 60 });
    this.onResize();
    this.createMedias();
    this.addEventListeners();
    this.update();
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);
  }

  createMedias() {
    const repeatedItems = this.options.items.concat(this.options.items);
    this.medias = repeatedItems.map(
      (item, index) =>
        new GalleryMedia({
          item,
          index,
          length: repeatedItems.length,
          geometry: this.geometry,
          gl: this.gl,
          scene: this.scene,
          screen: this.screen,
          viewport: this.viewport,
          bend: this.options.bend,
          textColor: this.options.textColor,
          borderRadius: this.options.borderRadius,
        }),
    );
  }

  onResize = () => {
    this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    };
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({ aspect: this.screen.width / this.screen.height });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    this.viewport = { width: height * this.camera.aspect, height };
    this.medias?.forEach((media) =>
      media.onResize({ screen: this.screen, viewport: this.viewport }),
    );
  };

  onPointerDown = (event) => {
    this.isDown = true;
    this.pointerStart = event.clientX;
    this.pointerY = event.clientY;
    this.scrollStart = this.scroll.current;
    this.dragDistance = 0;
    this.container.setPointerCapture?.(event.pointerId);
  };

  onPointerMove = (event) => {
    if (!this.isDown) return;
    const distance = this.pointerStart - event.clientX;
    this.dragDistance = Math.max(this.dragDistance, Math.abs(distance));
    this.scroll.target =
      this.scrollStart + distance * (this.options.scrollSpeed * 0.025);
  };

  onPointerUp = (event) => {
    if (!this.isDown) return;
    this.isDown = false;
    this.container.releasePointerCapture?.(event.pointerId);

    if (this.dragDistance < 7) {
      const rect = this.container.getBoundingClientRect();
      const media = [...this.medias]
        .sort(
          (left, right) =>
            Math.abs(left.plane.position.x) - Math.abs(right.plane.position.x),
        )
        .find((item) => item.hitTest(event.clientX, this.pointerY, rect));
      if (media) this.options.onSelect(media.item.id);
    }

    this.snap();
  };

  onWheel = (event) => {
    event.preventDefault();
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? event.deltaX
      : event.deltaY;
    this.scroll.target +=
      Math.sign(delta) * this.options.scrollSpeed * 0.45;
    window.clearTimeout(this.wheelTimer);
    this.wheelTimer = window.setTimeout(() => this.snap(), 140);
  };

  onKeyDown = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    event.stopPropagation();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    this.scroll.target += direction * this.medias[0].width;
    this.snap();
  };

  snap() {
    const width = this.medias?.[0]?.width;
    if (width) this.scroll.target = Math.round(this.scroll.target / width) * width;
  }

  addEventListeners() {
    window.addEventListener("resize", this.onResize);
    this.container.addEventListener("pointerdown", this.onPointerDown);
    this.container.addEventListener("pointermove", this.onPointerMove);
    this.container.addEventListener("pointerup", this.onPointerUp);
    this.container.addEventListener("pointercancel", this.onPointerUp);
    this.container.addEventListener("wheel", this.onWheel, { passive: false });
    this.container.addEventListener("keydown", this.onKeyDown);
  }

  update = () => {
    this.scroll.current = lerp(
      this.scroll.current,
      this.scroll.target,
      this.scroll.ease,
    );
    const direction = this.scroll.current > this.scroll.last ? "right" : "left";
    this.medias?.forEach((media) => media.update(this.scroll, direction));
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
    this.raf = window.requestAnimationFrame(this.update);
  };

  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.clearTimeout(this.wheelTimer);
    window.removeEventListener("resize", this.onResize);
    this.container.removeEventListener("pointerdown", this.onPointerDown);
    this.container.removeEventListener("pointermove", this.onPointerMove);
    this.container.removeEventListener("pointerup", this.onPointerUp);
    this.container.removeEventListener("pointercancel", this.onPointerUp);
    this.container.removeEventListener("wheel", this.onWheel);
    this.container.removeEventListener("keydown", this.onKeyDown);
    this.gl.canvas.remove();
  }
}

export default function CircularGallery({
  items,
  onSelect,
  bend = 2.4,
  textColor = "#102047",
  borderRadius = 0.04,
  scrollSpeed = 2,
  scrollEase = 0.075,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !items?.length) return undefined;
    const app = new CircularGalleryApp(containerRef.current, {
      items,
      onSelect,
      bend,
      textColor,
      borderRadius,
      scrollSpeed,
      scrollEase,
    });

    return () => app.destroy();
  }, [items, onSelect, bend, textColor, borderRadius, scrollSpeed, scrollEase]);

  return (
    <div
      className="circular-gallery"
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Project gallery. Drag or scroll horizontally, then click a project for details."
    />
  );
}
