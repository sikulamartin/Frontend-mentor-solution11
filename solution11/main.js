let data;

fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    updateData('weekly');
  })
  .catch(error => console.error('Error:', error));

function updateData(timeframe) {
  document.getElementById('work-current').textContent = data[0].timeframes[timeframe].current;
  document.getElementById('work-previous').textContent = data[0].timeframes[timeframe].previous;

  document.getElementById('play-current').textContent = data[1].timeframes[timeframe].current;
  document.getElementById('play-previous').textContent = data[1].timeframes[timeframe].previous;

  document.getElementById('study-current').textContent = data[2].timeframes[timeframe].current;
  document.getElementById('study-previous').textContent = data[2].timeframes[timeframe].previous;

  document.getElementById('exercise-current').textContent = data[3].timeframes[timeframe].current;
  document.getElementById('exercise-previous').textContent = data[3].timeframes[timeframe].previous;

  document.getElementById('social-current').textContent = data[4].timeframes[timeframe].current;
  document.getElementById('social-previous').textContent = data[4].timeframes[timeframe].previous;

  document.getElementById('self-care-current').textContent = data[5].timeframes[timeframe].current;
  document.getElementById('self-care-previous').textContent = data[5].timeframes[timeframe].previous;
}

const dailyStats = document.getElementById('dailyStats');
const weeklyStats = document.getElementById('weeklyStats');
const monthlyStats = document.getElementById('monthlyStats');

weeklyStats.classList.add('active');

dailyStats.addEventListener('click', function() {
    weeklyStats.classList.remove('active');
    monthlyStats.classList.remove('active');
    dailyStats.classList.add('active');
});

weeklyStats.addEventListener('click', function() {
    dailyStats.classList.remove('active');
    monthlyStats.classList.remove('active');
    weeklyStats.classList.add('active');
});

monthlyStats.addEventListener('click', function() {
    dailyStats.classList.remove('active');
    weeklyStats.classList.remove('active');
    monthlyStats.classList.add('active');
});


