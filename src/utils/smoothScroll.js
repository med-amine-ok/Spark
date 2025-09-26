export const scrollToSection = (href) => {
  const targetId = href.replace('#', '');
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    const headerHeight = 80; // Account for fixed navbar height
    const targetPosition = targetElement.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  window.scrollTo({ 
    top: 0, 
    behavior: 'smooth' 
  });
};