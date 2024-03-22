const ctx = document.getElementById('zafar');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Blue', 'Red', 'Orange', 'Yellow', 'Green', 'Purple'],
    datasets: [{
      label: 'oylik ustam haqqi %',
      data: [12, 19, 10, 15, 12, 13],
      borderWidth: 1
    
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
