window.addEventListener('load', function() {
  /* 二级导航 */
  var left = document.querySelector('.left')
  var right = document.querySelector('.right');
  var lis = left.children
  console.log(lis);
  for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function() {
      this.children[0].style.display = 'block'
      console.log('123')
    }
    lis[i].onmouseout = function() {
      this.children[0].style.display = 'none'
      console.log('456')
    }
  }
  var lis = right.children;
  for (var i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function() {
      this.children[0].style.display = 'block'
      console.log('123')
    }
    lis[i].onmouseout = function() {
      this.children[0].style.display = 'none';
      console.log('456')
    }
  }
  var bodya = document.querySelector('.bodya')
  var ul = bodya.querySelector('.bodya-body')
  var lis = ul.querySelectorAll('li')
  var content = document.querySelector('.content')
  var item = content.querySelectorAll('div')
  for (var i = 0; i < lis.length; i++) {
    lis[i].setAttribute('index', i);
    lis[i].onclick = function() {
      for (var i = 0; i < lis.length; i++) {
        lis[i].className = '';
      }
      this.className = 'bgc';
      var index = this.getAttribute('index');
      for (var i = 0; i < item.length; i++) {
        item[i].style.display = 'none'
      }
      item[index].style.display = 'block';
    }
  }
  /* 点击登录事件 */
  var but = document.querySelector('.but')
  var sign = document.querySelector('.sign')
  var qh = sign.querySelector('.qh');
  var txt = sign.querySelector('.txt')
  var square = sign.querySelector('.square')
  but.addEventListener('click', function() {
    sign.style.display = 'block';
  })
  square.addEventListener('click', function() {
    sign.style.display = 'none';
  })
  var k = 0;
  qh.addEventListener('click', function() {
    if (k == 0) {
      this.src = '/eyeopen.JPG';
      txt.type = 'text'
      k = 1;
    }
    else {
      this.src = '/eyecolse.JPG'
      txt.type = 'password'
      k = 0;
    }
  })
  //切换白天黑夜
  var foot = document.querySelector('.bodya-foot')
  var day = foot.querySelector('.day');
  var body = document.querySelector('body');
  var flag = 0;
  day.addEventListener('click', function() {
    if (flag == 0) {
      body.style.backgroundColor = 'Black'
      this.innerText = '白天'
      flag = 1
    }
    else {
      body.style.backgroundColor = 'white'
      this.innerText = '黑夜';
      flag = 0;
    }
  })
  /* 轮播图 */
  var left = document.querySelector('.leftbut');
  var right = document.querySelector('.rightbut');
  var wrap = document.querySelector('.bodycenter');
  var ul = wrap.querySelector('ul')
  var ol = wrap.querySelector('ol');
  var x = wrap.offsetWidth;
  wrap.addEventListener('mouseenter', function() {
    left.style.display = 'block';
    right.style.display = 'block';
    clearInterval(timer)
    timer = null;
  })
  wrap.addEventListener('mouseleave', function() {
    right.style.display = 'none';
    left.style.display = 'none';
    timer = setInterval(function() {
      left.click();
    }, 3000)
  })
  //点击小圆圈切换图片
  for (var i = 0; i < ul.children.length; i++) {
    var oli = document.createElement('li');
    oli.setAttribute('index', i);
    ol.appendChild(oli);
    oli.addEventListener('click', function() {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].style.backgroundColor = ''
      }
      this.style.backgroundColor = 'Black';
      var index = this.getAttribute('index');
      circle = index;
      obj(ul, -index * x)
    })
    /*circle=index*/
  }
  ol.children[0].style.backgroundColor = 'Black';
  //左按钮点击切换
  //克隆第一张照片,添加照片(实现无缝衔接)
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  //点击右侧按钮，图片滚动一张。
  var num = 0;
  //控制小圆圈播放
  var circle = 0;
  var flag = true;
  if (flag) {
    left.addEventListener('click', function() {

      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      obj(ul, -num * x, function() {
        flag = true;
      });
      circle++;
      if (circle == ol.children.length) {
        circle = 0;
      }
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].style.backgroundColor = '';
      }
      ol.children[circle].style.backgroundColor = 'Black';
    })
  }
  //右边按钮
  if (flag) {
    right.addEventListener('click', function() {
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * x + 'px';
      }
      num--;
      obj(ul, -num * x, function() {
        flag = true;
      });
      circle--;
      if (circle < 0) {
        circle = ol.children.length - 1;
      }
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].style.backgroundColor = '';
      }
      ol.children[circle].style.backgroundColor = 'Black';
    })
  }
  //自动播放
  var timer = setInterval(function() {
    left.click();
  }, 3000)
  var qq = document.querySelector('.QQ');
  var wex = document.querySelector('.wex')
  var m = 0;
  qq.addEventListener('click', function() {
    if (m == 0) {
      wex.style.display = 'block';
      m = 1;
    }
    else {
      wex.style.display = 'none';
      m = 0;
    }
  })
  //倒计时
  var chuxi = document.querySelector('.chuxi')
  var day = document.querySelector('.d');
  var hours = document.querySelector('.h');
  var minutes = document.querySelector('.m');
  var second = document.querySelector('.s');
  getTime()
  setInterval(getTime, 1000)
  function getTime() {
    var date = +new Date();
    var newdate = +new Date('2023-01-21 00:00:00');
    var y = (newdate - date) / 1000
    var d = parseInt(y / 24 / 60 / 60);
    d = d < 10 ? '0' + d : d;
    day.innerHTML = d;
    var h = parseInt(y / 60 / 60 % 24)
    h = h < 10 ? '0' + h : h;
    hours.innerHTML = h;
    var m = parseInt((y / 60) % 60)
    m = m < 10 ? '0' + m : m;
    minutes.innerHTML = m;
    var s = parseInt(y % 60)
    s = s < 10 ? '0' + s : s;
    second.innerHTML = s;
  }
})