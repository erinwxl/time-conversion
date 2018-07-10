/**时间转换方法**/

/**   1.时间转10位时间戳   ***/

function timest(time) {
    var tmp = Date.parse(time.replace(/-/g, "/")).toString();// .replace(/-/g, "/") 兼容ios
    tmp = tmp.substr(0,10);
    return tmp; //返回时间戳
}

var start_time = "2018-07-03 16:24";
var st_time = timest(start_time); // 转时间戳


/***   2.时间戳转时间格式  ****/

var this_time = formatTime('1530769980','Y-M-D h:m'); // 调用

function formatTime(number, format) {
    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];

    var date = new Date(number * 1000);
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}
//数据转化
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}


/****   3.将new Date()转成年月日等指定时间格式   ****/

var nowtime = new Date().Format("yyyy-MM-dd hh:mm"); //调用

Date.prototype.Format = function (fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/****  4.获取今天之后指定第几天的日期（明天、后天等的日期）  *****/
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = dd.getDate();
    return y+"-"+m+"-"+d;
}

GetDateStr(0);// 今天
GetDateStr(1); //明天
console.log(GetDateStr(10))



/** 插件示例 **/

/****  1.指定时间(年月日) 加上 指定的分钟 *****/

//将指定时间转成时间戳，分钟数转成秒数；将时间戳直接加上秒数，再将此时间戳转成时间格式即可
var start_time = "2018-07-03 16:24";
var munite_time = "10" //10分钟
var st_time = timest(start_time);
var starttime = parseInt(st_time) + parseInt(munite_time * 60); //加上秒数后的时间戳

starttime = formatTime(starttime,'Y-M-D h:m'); //转成年月日格式
starttime = new Date(starttime.replace(/-/g, "/")) //转成时间格式
// starttime.replace(/-/g, "/")  兼容ios