document.addEventListener("DOMContentLoaded", function() {
    const data = {
        labels: ['Completed', 'In Progress', 'Behind'],
        datasets: [{
            label: 'Work',
            data: [76, 16, 8], // Data should be in numbers, not percentages
            backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(255, 99, 132)'
            ],
            hoverOffset: 4
        }]
    };

    const options = {
        // Add any additional options here
    };

    // Get the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Create the chart
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
});
