export default function debounce(func: any, wait: number, immediate = false) {
  let timeout: any;
  return (...args: any[]) => {
    const later = () => {
      timeout = null; // added this to set same behaviour as ES5
      if (!immediate) func(...args); // this is called conditionally, just like in the ES5 version
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
}
