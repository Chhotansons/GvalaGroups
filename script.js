document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('toggle-dark-mode');
    const sections = document.querySelectorAll('section');
    const navButtons = document.querySelectorAll('.nav-btn');

    // Toggle Dark Mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Navigation
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            sections.forEach(section => section.classList.add('hidden'));
            document.getElementById(button.dataset.section).classList.remove('hidden');
        });
    });

    // Milk Records
    const milkForm = document.getElementById('milk-form');
    const recordList = document.getElementById('record-list');
    const records = JSON.parse(localStorage.getItem('milkRecords')) || [];

    milkForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('supplier-name').value;
        const amount = parseFloat(document.getElementById('milk-amount').value);
        const price = parseFloat(document.getElementById('milk-price').value);

        records.push({ name, amount, price, date: new Date().toLocaleDateString() });
        localStorage.setItem('milkRecords', JSON.stringify(records));
        updateRecords();
    });

    function updateRecords() {
        recordList.innerHTML = records.map(record => `
            <li>${record.date} - ${record.name}: ${record.amount} liters - ₹${record.price}</li>
        `).join('');
    }

    updateRecords();
});
