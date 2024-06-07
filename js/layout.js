import { getHeader } from './header.js';
import { getFooter } from './footer.js';
import { blockKeysAndContextMenu } from './blocked.js';

blockKeysAndContextMenu();

document.getElementById('header').innerHTML = getHeader();
document.getElementById('footer').innerHTML = getFooter();