function Sub(type, callback) {
  this.type = type;
  this.callback = callback;
  this.release = function () {
    console.log(this)
    // this.subs[this.type] = this.subs[this.type].filter(function (item) {
    //   return item !== this;
    // });
    this.callback = null
  }
  this.exec = function (args) {
    console.log(args)
    if (this.callback) {
      this.callback.apply(this, args);
    }
  }
}

class Emitter {
  subs = {}

  subscribe(type, callback) {
    if (!this.subs[type]) {
      this.subs[type] = [];
    }
    const sub = new Sub(type, callback)
    this.subs[type].push(sub);
    // sub.subs = this.subs
    return sub
  }

  emit(type) {
    this.subs[type].forEach(function (item) {
      const args = Array.prototype.slice.call(arguments, 1)
      item.exec(args);
    });
  }
}

const emitter = new Emitter();
const sub1 = emitter.subscribe('click', (...args) => console.log(args));
const sub2 = emitter.subscribe('click', (...args) => console.log(args));
// emitter.emit('click', '1', '2');
sub1.release()
emitter.emit('click', '1', '2');