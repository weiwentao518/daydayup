function Emitter() {
  var subs = {};
  this.prototype.subscribe = function (type, listener) {
    if (!subs[type]) {
      subs[type] = [];
    }
    subs[type].push(new Sub(type, listener));
  }
  this.prototype.emit = function (type) {
    subs[type].forEach(function (item) {
      item.exec([...arguments].slice(1));
    });
  }

  function Sub(type, listener) {
    this.type = type;
    this.listener = listener;
    this.prototype.release = function () {
      subs[this.type] = subs[this.type].filter(function (item) {
        return item !== this;
      });
    }
    this.prototype.exec = function (args) {
      this.listener.apply(this, args);
    }
  }
}