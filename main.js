$(".btn").click(function () {
  var text = $(".search").val();
  if ($(".btn").text() === "搜索") {
    !text.match(/^(ht|f)tp(s?):\/\//) && (text = "http://" + text);
    history.go(-1);
    setTimeout(function () {
      location.href = text;
    }, 1);
  } else {
    if (!text) {
      $(".search").blur();
    } else {
      searchText(text);
    }
  }
});

$(".search").keydown(function (evt) {
  // 使用回车键进行搜索
  evt.keyCode === 13 && $(".btn").click();
});
// 搜索函数
function searchText(text) {
  if (!text) {
    return;
  }
  setTimeout(function () {
    // 异步执行 兼容QQ浏览器
    location.href = {
      bing: "https://cn.bing.com/search?q=%s"
    } [location.href].replace("%s", text);
  }, 1);
}