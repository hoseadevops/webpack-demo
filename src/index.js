import _ from 'lodash';

import './assets/styles/hello.css';
import icon from './assets/images/icon.png';
import xml from './assets/datas/xml/hi.xml';
import printMe from './print.js';

function component() {
    let element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myIcon = new Image();
     myIcon.src = icon;
    element.appendChild(myIcon);

    console.log(xml);
    
    btn.innerHTML = '点击这里，然后查看 console！';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
document.body.appendChild(component());