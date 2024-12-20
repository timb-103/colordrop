export function rgbToHex(rgb: { r: number, g: number, b: number }): string {
  const r = rgb.r.toString(16);
  const g = rgb.g.toString(16);
  const b = rgb.b.toString(16);
  return `#${r.length === 1 ? `0${r}` : r}${g.length === 1 ? `0${g}` : g}${
      b.length === 1 ? `0${b}` : b
    }`;
};
