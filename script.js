const linksContainer = document.getElementById('links-container');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-btn');
const addBtn = document.getElementById('add-btn');
const modal = document.getElementById('modal');
const saveBtn = document.getElementById('save-btn');
const cancelBtn = document.getElementById('cancel-btn');
const themeToggle = document.getElementById('theme-toggle');

let links = [
  { imageURL: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg", title: "Google", linkURL: "https://google.com" },
  { imageURL: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg", title: "Google", linkURL: "https://google.com" },
  { imageURL: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg", title: "GitHub", linkURL: "https://github.com" },
  { imageURL: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg", title: "YouTube", linkURL: "https://youtube.com" },
  { imageURL: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg", title: "Twitter", linkURL: "https://twitter.com" },
  { imageURL: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg", title: "LinkedIn", linkURL: "https://linkedin.com" },
];

function displayLinks(linksToDisplay) {
  linksContainer.innerHTML = '';
  linksToDisplay.forEach(link => {
    const card = createLinkCard(link);
    linksContainer.appendChild(card);
  });
}

function createLinkCard(link) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <a href="${link.linkURL}" target="_blank">
      <img src="${link.imageURL}" alt="${link.title}">
    </a>
    <div class="card-content">
      <h3>${link.title}</h3>
      <a href="${link.linkURL}" target="_blank">${link.linkURL}</a>
    </div>
  `;
  return card;
}

function filterLinks() {
  const searchTerm = searchBar.value.toLowerCase();
  const filteredLinks = links.filter(link => 
    link.title.toLowerCase().includes(searchTerm) || 
    link.linkURL.toLowerCase().includes(searchTerm)
  );
  displayLinks(filteredLinks);
}

function showModal() {
  modal.style.display = 'flex';
}

function hideModal() {
  modal.style.display = 'none';
  document.getElementById('image-url').value = '';
  document.getElementById('title').value = '';
  document.getElementById('link').value = '';
}

function addNewLink() {
  const imageURL = document.getElementById('image-url').value || 'https://via.placeholder.com/300';
  const title = document.getElementById('title').value;
  const linkURL = document.getElementById('link').value;

  if (title && linkURL) {
    links.push({ imageURL, title, linkURL });
    displayLinks(links);
    hideModal();
  } else {
    alert('Please enter both a title and a link URL.');
  }
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// Event listeners
searchBar.addEventListener('input', filterLinks);
searchBtn.addEventListener('click', filterLinks);
addBtn.addEventListener('click', showModal);
saveBtn.addEventListener('click', addNewLink);
cancelBtn.addEventListener('click', hideModal);
themeToggle.addEventListener('click', toggleTheme);

// Initial display
displayLinks(links);