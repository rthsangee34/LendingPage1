document.addEventListener('DOMContentLoaded', () => {
    // --- Simple Cursor Logic ---
    const cursorDot = document.querySelector('.cursor-dot');
    
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        if(cursorDot) cursorDot.style.display = 'none';
        document.body.style.cursor = 'auto';
    } else {
        document.addEventListener('mousemove', (e) => {
            if(cursorDot) {
                cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        });
    }
});
