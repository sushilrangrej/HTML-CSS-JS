// Getting the title element (assuming it's an h1)
const title = document.querySelector('h1');

// Changing text color using style property
title.style.color = 'blue';

// Alternative ways to select elements
const titleById = document.getElementById('title');
const titleByClass = document.getElementsByClassName('title')[0];

// You can also modify other color properties
title.style.backgroundColor = 'yellow'; // Background color
title.style.textShadow = '2px 2px red'; // Text shadow with color

// Adding/removing CSS classes (better practice)
title.classList.add('blue-text');    // Add a class
title.classList.remove('blue-text'); // Remove a class
title.classList.toggle('blue-text'); // Toggle a class