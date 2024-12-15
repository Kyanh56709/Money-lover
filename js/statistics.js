// Sample data (replace with your actual data)
const spendingData = {
    labels: ["Ăn uống", "Mua sắm", "Di chuyển", "Giải trí", "Hóa đơn"],
    datasets: [{
        data: [5000000, 2000000, 1000000, 1500000, 2500000], // Example spending amounts
        backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(153, 102, 255, 0.7)'
        ],
    }]
};

const incomeData = {
    labels: ["Lương", "Thưởng", "Khác"],
    datasets: [{
        data: [10000000, 2000000, 500000], // Example income amounts
        backgroundColor: [
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(54, 162, 235, 0.7)'
        ],
    }]
};

const transactions = [
    { date: '2024-01-10', description: 'Ăn uống', amount: -200000, category: 'Ăn uống' },
    { date: '2024-01-12', description: 'Mua sắm', amount: -500000, category: 'Mua sắm' },
    { date: '2024-01-15', description: 'Lương tháng 12', amount: 10000000, category: 'Lương' },
    // ... more transactions
];

// Create spending chart
const spendingChart = document.getElementById('spendingChart').getContext('2d');
new Chart(spendingChart, {
    type: 'doughnut', // You can change the chart type (bar, line, etc.)
    data: spendingData,
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Chi tiêu'
        }
    }
});

// Create income chart
const incomeChart = document.getElementById('incomeChart').getContext('2d');
new Chart(incomeChart, {
    type: 'doughnut',
    data: incomeData,
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Thu nhập'
        }
    }
});

// Populate transaction list
const transactionList = document.querySelector('.transaction-list');
transactions.forEach(transaction => {
    const transactionItem = document.createElement('div');
    transactionItem.classList.add('transaction-item');

    const transactionDetails = document.createElement('div');
    transactionDetails.classList.add('transaction-details');
    transactionDetails.innerHTML = `
        <p>${transaction.date} - ${transaction.description}</p>
        <p class="transaction-category">${transaction.category}</p>
    `;

    const transactionAmount = document.createElement('div');
    transactionAmount.classList.add('transaction-amount');
    transactionAmount.textContent = `${transaction.amount.toLocaleString()} đ`;
    if (transaction.amount >= 0) {
        transactionAmount.classList.add('income');
    } else {
        transactionAmount.classList.add('expense');
    }

    transactionItem.appendChild(transactionDetails);
    transactionItem.appendChild(transactionAmount);
    transactionList.appendChild(transactionItem);
});