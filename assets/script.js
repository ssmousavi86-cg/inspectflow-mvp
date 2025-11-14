document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    const hamburger = document.querySelector('.hamburger');
    const closeBtn = document.querySelector('.close-btn');

    hamburger.addEventListener('click', () => {
        document.body.classList.add('sidebar-open');
        sidebar.classList.add('open');
        overlay.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        document.body.classList.remove('sidebar-open');
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    });

    overlay.addEventListener('click', () => {
        document.body.classList.remove('sidebar-open');
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
    });

    const calcForm = document.getElementById('calcForm');
    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const num1 = parseFloat(document.getElementById('num1').value) || 0;
            const num2 = parseFloat(document.getElementById('num2').value) || 0;
            document.getElementById('result').textContent = `Result: ${num1 + num2}`;
        });
    }
});
