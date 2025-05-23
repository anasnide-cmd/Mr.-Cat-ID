const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggleBtn.textContent = '☀️';
} else {
  themeToggleBtn.textContent = '🌙';
}

// Toggle theme handler
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// Fetch and render cats
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

      // Toggle details on card click
      card.addEventListener('click', () => {
        card.classList.toggle('active');
      });

      container.appendChild(card);
    });
  });
