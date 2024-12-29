document.addEventListener('DOMContentLoaded', () => {
    const loadOrders = async (endpoint, tableId) => {
        try {
            const response = await fetch(`http://localhost:3000/api/${endpoint}`);
            const orders = await response.json();
            const tableBody = document.getElementById(tableId);
            tableBody.innerHTML = ''; // Clear existing rows
            orders.forEach(order => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.customer_name}</td>
                    <td>${order.order_date}</td>
                    <td>${order.status}</td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error(`Error loading ${endpoint}:`, error);
        }
    };

    loadOrders('incoming-orders', 'incoming-orders');
});