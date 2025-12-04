var newsXhr = new XMLHttpRequest();
var newsUrl = './news_article.json';

newsXhr.open('GET', newsUrl, true);
newsXhr.responseType = 'json';

newsXhr.onload = function () {
  if (newsXhr.status !== 200 || !newsXhr.response) {
    console.error('Failed to load news articles');
    return;
  }

  var articles = newsXhr.response.articles;
  var newsDiv = document.getElementById('news-articles');

  articles.forEach(function (article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var description = document.createElement('p');
    description.textContent = article.description;

    articleDiv.appendChild(title);
    articleDiv.appendChild(description);

    newsDiv.appendChild(articleDiv);
  });
};

newsXhr.send();