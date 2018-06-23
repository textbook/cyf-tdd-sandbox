import { markdown } from 'markdown';

fetch('../README.md')
  .then(result => result.text())
  .then(body => {
    document.getElementById('app').innerHTML = markdown.toHTML(body);
  });
