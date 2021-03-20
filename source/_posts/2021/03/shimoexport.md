---
title: 石墨文档批量导出脚本
date: 2021-03-19
tags: [我的软件]
---
这是一个 Tampermonkey 脚本。  

石墨文档无疑是我用过的最好用的在线文档之一。  
但是他不提供批量导出功能，提高了自备份数据、转移数据的门槛。   
（说实话国内一堆网站都这幅德行，数据不方便备份的话，一旦账号被封或者服务器异常，抢救会很困难）   

我写了这个脚本，虽然可以一键导出，但是**因为石墨官方的限制，速度完全不合理**。    
石墨官方的速度限制是一分钟内最多可以导出6个文件。   
当你导出第一个文件的时候，他就会开始监测，当你导出6个，试着导出第7个的时候，他会说：“请你等待xx秒。”    
既然官方有限制，我就尽量模拟真人操作，每导出一个就会暂停3秒。   

你手动点导出也一样，你很快就导出了6个，然后再点导出什么都不发生了，得等几十秒之后才行。  

# 源码、下载
[github](https://github.com/gordonwalkedby/shimo-export)   

# 截图
![截图afda](https://s3.ax1x.com/2021/03/19/6R7YkV.png)   
![截图gfdfhd](https://s3.ax1x.com/2021/03/19/6RhDmV.png)  
![截图0dfhgdh2](https://s3.ax1x.com/2021/03/19/6RhPQ1.png)    
![截图gfhhte3](https://s3.ax1x.com/2021/03/19/6RhtYQ.png)   