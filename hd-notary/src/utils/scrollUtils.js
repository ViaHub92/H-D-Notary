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
    // Don't do anything if we're already waiting for a frame
    if (isWaiting) return;
    
    // Avoid processing if scroll hasn't changed significantly
    const currentScrollPosition = window.scrollY;
    if (Math.abs(currentScrollPosition - lastScrollPosition) < threshold) return;
    
    lastScrollPosition = currentScrollPosition;
    isWaiting = true;
    
    requestAnimationFrame(() => {
      // Determine the new state first without updating state
      const newState = currentScrollPosition > 100;
      
      // Only update if state would actually change
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
    // Get the current header height - this accounts for the header possibly being in compact mode
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    // Add a little extra padding (20px) for visual comfort
    const offset = headerHeight + 20;
    
    // Calculate the target position with dynamic offset
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    
    // Scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};