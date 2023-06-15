// Fetch articles from an API or database
function fetchArticles() {
    // Make an API request or database query to retrieve articles
    // Example code:
    const articles = [
      { title: 'Article 1', content: 'This is the content of Article 1.' },
      { title: 'Article 2', content: 'This is the content of Article 2.' },
      { title: 'Article 3', content: 'This is the content of Article 3.' }
    ];
  
    // Display the articles on the page
    const articleList = document.getElementById('article-list');
    articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');
      articleElement.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.content}</p>
      `;
      articleList.appendChild(articleElement);
    });
  }
  
  // Fetch categories from an API or database
  function fetchCategories() {
    // Make an API request or database query to retrieve categories
    // Example code:
    const categories = ['Category 1', 'Category 2', 'Category 3'];
  
    // Display the categories on the page
    const categoriesList = document.getElementById('categories');
    categories.forEach(category => {
      const categoryItem = document.createElement('li');
      categoryItem.textContent = category;
      categoriesList.appendChild(categoryItem);
    });
  }
  
  // Call the functions to fetch and display the articles and categories
  fetchArticles();
  fetchCategories();
  