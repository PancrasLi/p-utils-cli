# 工具库 - 一个通过 vite 打包的 js 工具库

> 下载

```
npm i p-utils-cli
```

> 引入

```js
import * as $pt from "p-utils-cli";
$pt.PUtils.cookie.setCookie("testCookieKey", "testValue");
```

> 方法列表

| 名称                 | 描述                                                | 入参                                                            | 结果                  |
| -------------------- | --------------------------------------------------- | --------------------------------------------------------------- | --------------------- |
| preLoadImg           | 预加载图片                                          | Array 要加载的图片列表                                          | Promise 加载结果      |
| getQueryString       | 获取 url 参数                                       | String 要获取的参数 Key                                         | String URL 参数 value |
| contains             | 判断 str 字符串中是否含有字符串                     | str 原字符串,subStr 要查找的字符串 ,isIgnoreCase 是否忽略大小写 | Boolean 是否包含      |
| cookie.setCookie     | 设置 cookie                                         | key,value,expdays-过期时间                                      | none                  |
| cookie.getCookie     | 获取 cookie                                         | key                                                             | key 对应 value        |
| cookie.delCookie     | 删除 cookie                                         | key                                                             | none                  |
| math.add...          | 数学运算，已兼容浮点数运算 对应加减乘除各个英文名称 | 对应数学规则                                                    | 结果                  |
| allElementInViewport | 判断元素是否在视图中完全出现                        | Dom                                                             | Boolean 是否完全出现  |
| anyElementInViewport | 判断元素任意一部分是否在视图中完全出现              | Dom                                                             | Boolean 是否出现      |
