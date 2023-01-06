const body = document.querySelector('body');
let addElement = document.createElement('img');
addElement.src = '/src/128.png';
addElement.alt = '128の数字';
addElement.width = 100;
addElement.height = 100;
body.prepend(addElement);