

export const PUtils = {
  /**
   * 预加载图片
   * @param source   Array 预加载图片列表
   * @returns loaded
   */
  /*预加载图片*/
  preLoadImg(source) {
    /*加载图片方法*/
    function loadImage(url) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    }

    let pr = [];
    source.forEach((url) => {
      // 预加载图片
      let p = loadImage(url)
        .then(() => {
          console.log("Single image loading completed");
        })
        .catch((err) => {
          console.log(err);
        });
      pr.push(p);
    });
    // 图片全部加载完
    return Promise.all(pr)
  },
  /**
 * 获取URL参数
 * @param name   String 要获取的参数Key
 */

  getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  /**
 * 判断 str 字符串中是否含有字符串 subStr
 * @param {} str 原字符串
 * @param {} subStr 要查找的字符串
 * @param {} isIgnoreCase 是否忽略大小写
 * @return {Boolean}
 */
  contains(str, subStr, isIgnoreCase) {
    if (isIgnoreCase) {
      // 忽略大小写
      str = str.toLowerCase();
      subStr = subStr.toLowerCase();
    }
    var startChar = subStr.substring(0, 1);
    var strLen = subStr.length;
    for (var j = 0; j < str.length - strLen + 1; j++) {
      if (str.charAt(j) == startChar) {
        /* 如果匹配起始字符,开始查找 */
        if (str.substring(j, j + strLen) == subStr) {
          /*如果从j开始的字符与 str 匹配 */
          return true;
        }
      }
    }
    return false;
  },
  cookie: {
    /*** 设置cookie
 * @param name  String key
 * @param value String Value
 * @param expdays Number 过期时间
 */
    setCookie(name, value, expdays) {
      var expdate = new Date();
      //设置Cookie过期日期
      expdate.setDate(expdate.getDate() + expdays);
      //添加Cookie
      document.cookie =
        name + "=" + escape(value) + ";expires=" + expdate.toUTCString();
    },
    /**
 * 获取cookie
 * @param name String key
 * @returns {string}
 */
    getCookie(name) {
      //获取name在Cookie中起止位置
      var start = document.cookie.indexOf(name + "=");

      if (start != -1) {
        start = start + name.length + 1;
        //获取value的终止位置
        var end = document.cookie.indexOf(";", start);
        if (end == -1) end = document.cookie.length;
        //截获cookie的value值,并返回
        return unescape(document.cookie.substring(start, end));
      }
      return "";
    },
    delCookie(name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = getCookie(name);
      if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }

  },
  math: {
    /**
     * 两数相加
     * @param {*} arg1 加数
     * @param {*} arg2 加数
     * @returns 和
     */
    add(arg1, arg2) {
      var r1, r2, m;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2));
      return (arg1 * m + arg2 * m) / m;
    },
    /**
     * 两数相减
     * @param {*} arg1 被减数
     * @param {*} arg2 减数
     * @returns 差
     */
    subtract(arg1, arg2) {
      var r1, r2, m, n;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2));
      //动态控制精度长度
      n = r1 >= r2 ? r1 : r2;
      return ((arg1 * m - arg2 * m) / m).toFixed(n);
    },
    /**
     * 两数相乘
     * @param {*} arg1 因数
     * @param {*} arg2 因数
     * @returns 积
     */
    multiply(arg1, arg2) {
      var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
      try {
        m += s1.split(".")[1].length;
      } catch (e) { }
      try {
        m += s2.split(".")[1].length;
      } catch (e) { }
      return (
        (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
        Math.pow(10, m)
      );
    },
    /**
     * 两数相除
     * @param {*} arg1 被除数
     * @param {*} arg2 除数
     * @returns 商
     */
    divide(arg1, arg2) {
      var t1 = 0,
        t2 = 0,
        r1,
        r2;
      try {
        t1 = arg1.toString().split(".")[1].length;
      } catch (e) { }
      try {
        t2 = arg2.toString().split(".")[1].length;
      } catch (e) { }
      r1 = Number(arg1.toString().replace(".", ""));
      r2 = Number(arg2.toString().replace(".", ""));
      return (r1 / r2) * Math.pow(10, t2 - t1);
    },
  },
  /**
   * 
   * @param {*} el Dom对象
   * @returns 元素是否在窗口中完全出现
   */
  allElementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  },
  /**
   * 
   * @param {*} el Dom对象
   * @returns 元素任意一部分是否在视图中出现
   */
  anyElementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

}