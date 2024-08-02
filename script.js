document.addEventListener('DOMContentLoaded', () => {
    const colors = document.querySelectorAll('.color');
    
    colors.forEach(color => {
        color.addEventListener('click', () => {
            const hexValue = color.getAttribute('data-hex');
            navigator.clipboard.writeText(hexValue).then(() => {
                alert(`Copied ${hexValue} to clipboard!`);
            });
        });
    });
});
