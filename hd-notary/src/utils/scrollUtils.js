/**
 * Creates a throttled scroll handler using requestAnimationFrame for optimal performance
 * @param {Function} callback - The function to call on throttled scroll
 * @return {Function} - The throttled scroll handler
 */
export const createThrottledScrollHandler = (callback) => {
  let isWaiting = false;
  
  return () => {
    if (isWaiting) return;
    
    isWaiting = true;
    
    requestAnimationFrame(() => {
      callback();
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