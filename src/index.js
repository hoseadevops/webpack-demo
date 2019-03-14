import _ from 'lodash';

import './assets/styles/hello.css';
import icon from './assets/images/icon.png';
import xml from './assets/datas/xml/hi.xml';

function component() {
    let element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    element.classList.add('hello');

    var myIcon = new Image();
     myIcon.src = icon;
    element.appendChild(myIcon);

    console.log(xml);

    return element;
  }
  
document.body.appendChild(component());