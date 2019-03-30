//设置cookie,增加到vue实例方便全局调用
//vue全局调用的理由是，有些组件所用到的接口可能需要session验证，session从cookie获取
//当然，如果session保存到vuex的话除外
//全局引入vue
var cookie = {
  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires+";path=/";
  },
  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
  },
  delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = cookie.getCookie(name);
    if (cval != null)
      document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}

export default cookie;
