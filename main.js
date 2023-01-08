function search() {
  var text = document.querySelector(".search").value;
  !text.match(/^(ht|f)tp(s?):\/\//) && (text = "https://www.bing.com/search?q=" + text);
  location.href = text;
}

document.querySelector(".search").onkeydown = function (event) {
  event.keyCode === 13 && search();
};
