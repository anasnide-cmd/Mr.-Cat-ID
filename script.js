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
        <p><strong>Breed:</strong> ${cat.breed}</p>
        <p><strong>Gender:</strong> ${cat.gender}</p>
        <p><strong>DOB:</strong> ${cat.dob}</p>
        <p><strong>Colour:</strong> ${cat.colour}</p>
        <p><strong>Personality:</strong> ${cat.personality}</p>
        <p><strong>Status:</strong> ${cat.status}</p>
      `;
      container.appendChild(card);
    });
  });
