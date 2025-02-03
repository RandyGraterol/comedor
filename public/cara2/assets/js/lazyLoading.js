document.addEventListener('DOMContentLoaded', () => {
  
    const lazyLoad = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;  // Asigna el src real
          observer.unobserve(img);  // Deja de observar esta imagen

            img.addEventListener('load', () => {
                    const descripcionNombre = img.nextElementSibling;
                    descripcionNombre.style = 'opacity:1 !important'; // Mostrar la sección descripcion-nombre
                });
        }
      });
    };

    // Crear el IntersectionObserver
    const observer = new IntersectionObserver(lazyLoad, {
      root: null,  // Viewport del navegador
      rootMargin: '0px',  // Sin margen adicional
      threshold:0// Se ejecuta cuando el 10% de la imagen es visible
    });

    // Seleccionar todas las imágenes con la clase "lazy"
    const images = document.querySelectorAll('.lazy');
    images.forEach(img => observer.observe(img));  // Observar cada imagen
  });