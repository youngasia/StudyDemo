import _ from 'lodash';
import './style.css';
import y128 from './y128.png';

function component(){
    var element = document.createElement('div');
    // lodash由js引入

    element.innerHTML = _.join(['Hello','webpack'],' ');
    element.classList.add('hello');
    //加图片
    var myICon = new Image();
    myICon.src = y128;

    element.appendChild(myICon);
    return element;
}

document.body.appendChild(component());