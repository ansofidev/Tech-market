export const getImageUrl = (path: string) => {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('https')) return path;
    return `${path}`;
  };
  