/* ============================================================
   CV Ian Rodríguez - script.js
   Funcionalidades:
   - Actualiza automáticamente el año en el footer
   - Detecta redirección de éxito del formulario (formsubmit.co)
   - Resalta el enlace de navegación de la sección activa
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Año dinámico en el footer --- */
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    /* --- 2. Banner de éxito en contact.html ---
        formsubmit.co redirige de vuelta con ?enviado=true
        al completar el formulario correctamente. */
    const params = new URLSearchParams(window.location.search);
    const successBanner = document.getElementById('success-message');

    if (params.get('enviado') === 'true' && successBanner) {
        successBanner.hidden = false;
        // Mueve el foco al banner para lectores de pantalla
        successBanner.setAttribute('tabindex', '-1');
        successBanner.focus();
        // Limpia el parámetro de la URL sin recargar
        const cleanUrl = window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);
    }

    /* --- 3. Resaltado de enlace activo en la nav (index.html) ---
        Usa IntersectionObserver para detectar la sección visible. */
    const sections  = document.querySelectorAll('main section[id]');
    const navLinks  = document.querySelectorAll('nav a[href^="#"]');

    if (sections.length > 0 && navLinks.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.removeAttribute('aria-current');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.setAttribute('aria-current', 'true');
                        }
                    });
                }
            });
        }, { threshold: 0.4 });

        sections.forEach(section => observer.observe(section));
    }

    /* --- 4. Validación de formulario en el cliente (contact.html) --- */
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const name    = document.getElementById('name');
            const email   = document.getElementById('email');
            const message = document.getElementById('message');
            let valid = true;

            [name, email, message].forEach(field => {
                if (field && !field.value.trim()) {
                    field.setAttribute('aria-invalid', 'true');
                    valid = false;
                } else if (field) {
                    field.removeAttribute('aria-invalid');
                }
            });

            if (!valid) {
                e.preventDefault();
                // Enfoca el primer campo inválido para accesibilidad
                const firstInvalid = form.querySelector('[aria-invalid="true"]');
                if (firstInvalid) firstInvalid.focus();
            }
        });
    }

});