export function clampWindowPosition(position, area, size) {
  return {
    x: Math.max(0, Math.min(position.x, Math.max(0, area.width - size.width))),
    y: Math.max(0, Math.min(position.y, Math.max(0, area.height - size.height))),
  };
}

// Pointer coordinates are in viewport pixels; CSS3D windows use local screen pixels.
export function moveWindowPosition(origin, delta, area, size, scale = { x: 1, y: 1 }) {
  return clampWindowPosition({ x: origin.x + delta.x / (scale.x || 1), y: origin.y + delta.y / (scale.y || 1) }, area, size);
}
