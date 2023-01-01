
export function scrollToSection() {
    const element = document.getElementById('about');
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
  