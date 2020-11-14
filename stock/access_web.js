console.show();
var r = http.get("http://hq.sinajs.cn/list=gb_qqq");
log("code = " + r.statusCode);
log("html = " + r.body.string());