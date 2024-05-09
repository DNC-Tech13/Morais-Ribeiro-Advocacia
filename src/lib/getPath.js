export const getPath = () => {
  if (typeof window !== 'undefined') {
    const pathname = window?.location.pathname;
    const anchor = window?.location.hash;
  
    return {
      pathname,
      anchor,
      }
  }  
  return {
    pathname: '',
    anchor: ''
  }
}