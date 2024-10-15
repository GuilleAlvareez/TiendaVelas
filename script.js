function handleSocial() {
    const buttons = document.querySelectorAll('.social-icons'); 

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url'); 
            window.open(url);
        });
    });
}

function inicioSesion() {
    
}