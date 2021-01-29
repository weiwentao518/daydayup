function _curry(fn, len, ...args) {
  return function (...params) {
    // console.warn('args', args, 'params', params);
    let _args = [...args, ...params];
    // console.warn('all', _args);
    if (_args.length >= len) {
      return fn.apply(this, _args);
    } else {
      return _curry.call(this, fn, len, ..._args)
    }
  }
}

const _fn = _curry(function (a, b, c, d, e) {
  console.log(a + b + c + d + e)
});
_fn(1,2,3,4,5);    //15
_fn(1)(2)(3,4,5);  //15
_fn(1,2)(3,4)(5);  //15
_fn(1)(2)(3)(4)(5);  //15