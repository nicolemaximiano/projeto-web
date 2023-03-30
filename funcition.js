const form = document.querySelector('#form');
const postsContainer = document.querySelector('#posts');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const title = form.title.value;
  const content = form.content.value;
  
  const post = { title, content };
  
  displayPost(post);
});

function displayPost(post) {
  const postElement = document.createElement('div');
  postElement.classList.add('post');
  
  const titleElement = document.createElement('h2');
  titleElement.textContent = post.title;
  
  const contentElement = document.createElement('p');
  contentElement.textContent = post.content;
  
  postElement.appendChild(titleElement);
  postElement.appendChild(contentElement);
  
  postsContainer.appendChild(postElement);
}
