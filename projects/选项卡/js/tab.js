window.onload = function () {
  let tabs = document.querySelectorAll('#navBox li');
  let news = document.querySelectorAll('#tabBox div');

  function clearActive(arr) {
    for (let i = 0; i < arr.length; i++) {
      arr[i].className = '';
    }
  }

  function tabBind(elements, news) {
    for (var i = 0; i < elements.length; i++) {
      (function (i) {
        elements[i].onclick = function () {
          clearActive(elements);
          clearActive(news);
          this.className = 'active';
          news[i].className = 'active';
        };
      })(i);
    }
  }

  tabBind(tabs, news);

}
