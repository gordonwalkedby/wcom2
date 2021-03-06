"use strict";

function Generate2CharsNumStr(b) { var a = b.toFixed(); if (b < 10) { a = "0" + a } return a }

function GetInputStr(c) { var b = document.getElementById(c); if (b == null) { return "" } var a = b; return a.value }

function GetInputNum(c) { var b = document.getElementById(c); if (b == null) { return 0 } var a = b; return parseInt(a.value) }

function GetInputBool(c) { var b = document.getElementById(c); if (b == null) { return false } var a = b; return a.checked }

function DownloadText(d, b) {
    var c = document.createElement("a");
    c.href = "data:text/plain;charset=utf-8," + encodeURIComponent(b);
    c.download = d;
    c.style.display = "none";
    document.body.appendChild(c);
    c.click();
    c.remove()
}
var ICSFileBuilder = (function() {
    function a() { this.Events = [] }
    a.prototype.AddEvent = function(c, b, d) { this.Events.push({ Name: c, Date: b, Yearly: d }) };
    a.prototype.ToString = function() {
        var b;
        var c = "BEGIN:VCALENDAR\nVERSION:2.0\n";
        for (b = 0; b < this.Events.length; b++) {
            var d = this.Events[b];
            c += "BEGIN:VEVENT\nDTSTART;VALUE=DATE:" + d.Date + "\n";
            if (d.Yearly) { c += "RRULE:FREQ=YEARLY\n" }
            c += "SEQUENCE:1\nSUMMARY:" + d.Name + "\nEND:VEVENT\n"
        }
        c += "END:VCALENDAR";
        return c
    };
    return a
}());

function GenerateICS(l, u, c, q, v, w, B) {
    if (l.trim().length < 1) { throw "输入文本不能为空" }
    if (u.trim().length < 1) { throw "正则表达式不能为空" }
    if (w.trim().length < 1) { throw "事件名添加前缀后缀 不能为空，最起码应该是 $0" }
    if (c < 1 || c > 9) { throw "错误的匹配位置：月" }
    if (q < 1 || q > 9) { throw "错误的匹配位置：日" }
    if (v < 1 || v > 9) { throw "错误的匹配位置：事件名" }
    var s = new ICSFileBuilder();
    var f = new RegExp(u, "gi");
    var p = [];
    while (true) {
        var n = f.exec(l);
        if (n == null) { break }
        p.push(n)
    }
    if (p.length < 1) { throw "没有一个可用正则，工作失败" }
    var e = (new Date).getFullYear();
    var o = e.toString();
    var x;
    for (x = 0; x < p.length; x++) {
        var n = p[x];
        if (n == null) { throw "不应该出现的 null ，index: " + x.toString() }
        var d = parseInt(n[c]);
        var b = parseInt(n[q]);
        var A = n[v];
        if (isNaN(b) || isNaN(d) || A.length < 1) { throw "不应该出现的匹配内容，数字或文本失败：" + n.toString() }
        A = w.replace(/\$0/gi, A);
        var a;
        if (B) {
            var h;
            for (h = 0; h < 10; h++) {
                var z = e + h;
                var g = solarlunar.lunar2solar(z, d, b);
                if (typeof(g.cYear) == "undefined") {
                    var t, k = false;
                    for (t = 1; t < 5; t++) {
                        var m = new Date(z, d, 1);
                        m.setDate(b - t);
                        g = solarlunar.lunar2solar(z, m.getMonth(), m.getDate());
                        if (typeof(g.cYear) != "undefined") { k = true; break }
                    }
                    if (!k) { throw "这个日期在农历没救了：" + z.toString() + " 年 " + d.toString() + " 月 " + b.toString() + " 日" }
                }
                a = g.cYear.toString() + Generate2CharsNumStr(g.cMonth) + Generate2CharsNumStr(g.cDay);
                s.AddEvent(A, a, false)
            }
        } else {
            a = o + Generate2CharsNumStr(d) + Generate2CharsNumStr(b);
            s.AddEvent(A, a, true)
        }
    }
    return s.ToString()
}

function ButClicked() {
    var b = "";
    try { b = GenerateICS(GetInputStr("inputText"), GetInputStr("regexEvent"), GetInputNum("regexMonth"), GetInputNum("regexDate"), GetInputNum("regexName"), GetInputStr("regexEventName"), GetInputBool("useLunarCalendar")) } catch (a) { alert("出错：" + a); return }
    var c = Math.floor((Math.random() * 7777 + 1111)).toString() + ".ics";
    DownloadText(c, b)
};