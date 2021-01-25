class Emitter {
  events = {}
  target = []
  subscribe(name, callback) {
    this.events[name] = this.events[name] || []
    const tag = +new Date()
    this.events[name].push(callback)
    this.target.push({
      tag,
      eventName: name
    })
    return this
  }
  release() {
    console.log(this)
    // const event = this.target.find()
    // if (event) {}
  }
  emit(name) {
    if (!this.events[name]) {
      throw new Error(`Theevent${name}isnotregistered!`)
    }
    const args = Array.prototype.slice.call(arguments, 1)
    this.events[name].forEach(func => {
      func.apply(this, args)
    })
  }
}

const emitter = new Emitter();
const sub1 = emitter.subscribe('click', (...args) => console.log(args));
const sub2 = emitter.subscribe('click', (...args) => console.log(args));
emitter.emit('click', '1', '2');
sub1.release()
// emitter.emit('click', '1', '2');