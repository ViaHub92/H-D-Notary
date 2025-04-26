/**
 * Creates a throttled scroll handler using requestAnimationFrame with debounce
 * for more stable state changes
 * 
 * @param {Function} callback - The function to call on throttled scroll
 * @param {number} threshold - The threshold for scroll position change before updating state
 * @return {Function} - The throttled scroll handler
 */
export const createThrottledScrollHandler = (callback, threshold = 5) => {
  let isWaiting = false;
  let lastScrollPosition = window.scrollY;
  let lastState = null;
  
  return () => {
    if (isWaiting) return;
    
    const currentScrollPosition = window.scrollY;
    if (Math.abs(currentScrollPosition - lastScrollPosition) < threshold) return;
    
    lastScrollPosition = currentScrollPosition;
    isWaiting = true;
    
    requestAnimationFrame(() => {
      const newState = currentScrollPosition > 100;
      
      if (lastState !== newState) {
        callback(newState);
        lastState = newState;
      }
      
      isWaiting = false;
    });
  };
};

/**
 * Utility function for smooth scrolling to sections with header offset
 */
export const scrollToSection = (e) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  
  if (targetElement) {
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    const offset = headerHeight + 20;
    
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};