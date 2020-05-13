import './index.less'
import print from './assets/js/print'
import GIF from './assets/img/example.gif'

function component() {
  var element = document.createElement('div')

  // element.innerHTML = "Hello Webpack"
  element.classList.add('red-box')

  var text = document.createElement('i')
  text.innerText = '执子之手，方知子丑，泪流满面，子不走我走。'
  text.classList.add('web-font')
  text.onclick = () => {
    print()
  }

  element.appendChild(text)

  return element
}

function image() {
  var img = new Image(500)

  img.src = GIF

  return img
}

document.body.appendChild(component())
document.body.appendChild(image())
