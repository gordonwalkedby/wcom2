function CalcWhenLV6() {
    function z(A, y, i) { if (y === void 0) { y = 0 } if (i === void 0) { i = 99999 } if (A == NaN) { return y } if (A > i) { A = i } if (A < y) { A = y } return A }

    function a(A) { var y = document.querySelector("#" + A); if (y == null) { return 0 } var i = y.valueAsNumber; if (i == NaN) { return 0 } return i }

    function k(y) { var i = document.querySelector("#" + y); if (i == null) { return false } return i.checked }
    var u, p, l, n;
    var q, v, j, c;
    u = z(a("ex"), 100);
    p = z(a("coins"));
    q = k("doShare");
    n = k("doCoins");
    v = z(a("videocoins"));
    if (v > 0) { v *= z(a("videos")) }
    j = z(a("sends"));
    c = k("doLive");
    l = z(a("days"), 1, 31);
    var t = "根据以上你所填的，只要你从明天起：\n";
    t += "热爱B站，不做违规被封的事，不乱消费硬币\n";
    t += "并且，每个月有 " + l.toString() + " 天登录B站，观看视频，\n";
    if (n) { t += "投5个硬币给别人的作品，\n" }
    if (q) { t += "还要记得用手机APP分享视频给别人看，\n" }
    if (c) { t += "去B站直播开箱并把银瓜子拿来换一个硬币，\n" }
    if (j > 0) { t += "而且每月坚持花点B币充电或者承包番剧，\n" }
    if (v > 0) { t += "坚持投稿视频并获得一定数量硬币，\n" }
    t += "我推算出的你的号的未来情况：\n\n";
    var e = new Date;

    function g() { return e.getFullYear().toString() + "年" + (e.getMonth() + 1).toString() + "月" + e.getDate().toString() + "日" }
    var w = (p < 1);
    var d = [0, 200, 1500, 4500, 10800, 28800];
    var x = d.length;
    var m = 1,
        s;
    for (s = x; s > 1; s -= 1) { if (u > d[s - 1]) { m = s; break } }
    if (m == x) { t = "你已经满级了，没什么好算的了。" } else {
        t += "今天，你是 " + m.toString() + "级。\n";
        var f = 0;
        while (true) {
            e.setDate(e.getDate() + 1);
            if (e.getDate() == 1) {
                p += v / 10;
                u += v;
                u += j;
                f = 0;
                p = Math.round(p)
            }
            for (s = 100; s < 1001; s += 100) { var h = e.getFullYear(); var b = 2009 + s; if (h < b) { break } if (h == b) { if (e.getMonth() == 5) { if (e.getDate() == 26) { t += g() + "，B站建站 " + s.toString() + " 年。\n" } } } }
            f += 1;
            if (f <= l) {
                p += 1;
                u += 10;
                if (q) { u += 5 }
                if (c) { p += 1 }
                if (n) {
                    for (s = 1; s <= 5; s += 1) {
                        p -= 1;
                        u += 10;
                        if (p < 1) {
                            if (!w) {
                                w = true;
                                t += g() + "，你的硬币花完了。\n"
                            }
                            break
                        }
                    }
                }
                var o = false;
                for (s = x; s > m; s -= 1) {
                    if (u > d[s - 1]) {
                        t += g() + "，你到达了 " + s.toString() + " 级，这时你还有 " + p.toString() + " 个硬币。\n";
                        m = s;
                        if (s == x) { o = true; break }
                    }
                }
                if (o) { break }
            }
        }
        t += "\n以上结果仅供参考，可能会因为你的行为、B站活动、B站修改规则等情况而变化。"
    }
    var r = document.querySelector("#out");
    if (r == null) { return false }
    r.innerText = t
};