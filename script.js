const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggleBtn.textContent = '☀️';
} else {
  themeToggleBtn.textContent = '🌙';
}

// Theme toggle
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Render cats
fetch('data/cats.json')
  .then(response => response.json())
  .then(cats => {
    const container = document.getElementById('cats-container');

    cats.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'cat-card';

      card.innerHTML = `
        <img src="images/placeholder.jpg" alt="${cat.name}" />
        <h3>${cat.name}</h3>
        <div class="cat-details">
          <p><strong>Breed:</strong> ${cat.breed}</p>
          <p><strong>Gender:</strong> ${cat.gender}</p>
          <p><strong>DOB:</strong> ${cat.dob}</p>
          <p><strong>Colour:</strong> ${cat.colour}</p>
          <p><strong>Personality:</strong> ${cat.personality}</p>
          <p><strong>Status:</strong> ${cat.status}</p>
        </div>
      `;

      card.addEventListener('click', () => {
        card.classList.toggle('active');
      });

      container.appendChild(card);
    });
  });
