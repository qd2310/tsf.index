console.log('是否执行')
function obj(a, b, c) {
  clearInterval(a.timer);
  a.timer = setInterval(function() {
    var step = (b - a.offsetLeft) / 10;
    steps = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (a.offsetLeft == b) {
      clearInterval(a.timer);
      c && c();
    }
    a.style.left = a.offsetLeft + steps + 'px';
  }, 15)
};
function Black() {
  console.log('是否调用obj.js');
  for (var i = 0; i < ol.children.length; i++) {
    ol.children[i].style.backgroundColor = ''
  }
  ol.children[bn].style.backgroundColor = 'black';
}

/* if (c) {
      c()
  }
  这个可以优化等价于'&&'与运算，同为真则执行。*/
