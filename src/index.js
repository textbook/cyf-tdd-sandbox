import { markdown } from 'markdown';

import markup from "../README.md";

document.getElementById('app').innerHTML = markdown.toHTML(markup);
