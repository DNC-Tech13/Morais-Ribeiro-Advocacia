export const createSlug = (text) => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export const reverseSlug = (text) => {
  return text&&text
    .replace(/-/g, ' ')
    .replace(/\b\w{4,}\b/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));
}
