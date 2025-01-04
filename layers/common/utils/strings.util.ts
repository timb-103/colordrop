export function formatSlug(slug: string): string {
  return slug
    .trim()
    .toLowerCase()
    .replace(/\//g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function capitalizeWords(input: string): string {
  return input
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function escapeText(unsafe: string): string {
  return unsafe.replace(/[<>&"()]/g, (char: string): string => {
    switch (char) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '"': return '&quot;';
      case '(': return '&#40;';
      case ')': return '&#41;';
      default: return char;
    }
  });
}
