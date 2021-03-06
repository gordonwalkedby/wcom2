---
title: 简单介绍目前可用的免费静态站部署平台（Pages 服务）
date: 2021-03-09
tags: [杂]
---
下面戈登来介绍一下，目前互联网上几个现在还可以用的免费的静态站部署平台。  
我说的免费指的是把文件放进去，就能免费变成网站，域名不算在内。  
而且不会收取任何托管费用，服务器费用。   
国内老牌 Pages 服务提供平台 [Coding](https://coding.net/) 已经是腾讯云的附属产品，其 Pages 依然可以使用，但是实际上已是让用户[花钱买腾讯云的存储服务](https://help.coding.net/docs/pages/price.html)。手续麻烦，费用高昂。此处不介绍。    

# 列表比较：
下面我说的服务器位置，指的是本文发布的时候，从昆明市这边的中国移动宽带去 PING 他们的默认域名得到的IP的归属地区。  

<table>
<tr><th>平台</th><th>服务器位置</th><th>部署文件来源</th><th>网址模板</th><th>绑定自有域名</th></tr>
<tr><td>github</td><td>美国</td><td>仅公开仓库的现有文件</td><td>用户名.github.io</td><td>免费支持</td></tr>
<tr><td>gitee</td><td>上海腾讯云</td><td>仅公开仓库的现有文件</td><td>用户名.gitee.io</td><td>付费的企业版才支持</td></tr>
<tr><td>gitlab</td><td>美国</td><td>公开或私有仓库的现有文件<br>支持完全自定义的云端生成文件后再部署</td><td>用户名.gitlab.io</td><td>免费支持</td></tr>
<tr><td>CloudFlare</td><td>美国</td><td>公开或私有Github仓库的现有文件<br>支持官方模板的云端生成文件后再部署</td><td>自定义.pages.dev</td><td>免费支持</td></tr>
</table>

# 我的示例仓库
- [github](https://github.com/gordonwalkedby/gordonwalkedby.github.io)  
- [gitee](https://gitee.com/walkedby/walkedby)  
- [gitlab](https://gitlab.com/gordonwalkedby/gordonwalkedby.gitlab.io)   

# 本网址的镜像站
- [本体 walkedby.com](https://walkedby.com/)
- [github](https://gordonwalkedby.github.io/)  
- [gitlab](https://gordonwalkedby.gitlab.io/)  
- [gitee](https://walkedby.gitee.io/)  
- [CloudFlare Pages](https://wcom2.pages.dev/)

除非我把 github 仓库删了，否则 github 服务器就是出事也不会影响到 cloudFlare。  
各个镜像站只要我不删仓库都会一直良好运行。  
我已经设置了 push 的时候同时推给各个仓库。  

# 科普：持续开发、持续部署
持续开发的英文是 Continuous Integration ，简写就是 CI。  
持续部署的英文是 Continuous deployment ，简写就是 CD。  
以前的云端 git 对开发者来说就差不多是一个网盘，只是不停的上传文件就好了。  
现在还可以自动在云端测试你写的代码，还可以自动部署你的成品。  
一般我们都是说持续部署（CI）就好，因为大多数情况下，CI已经包括了CD。  
比如咱们 push 了源码，平台就会自动运行你预先设计的脚本，在云端的平台自己的服务器的虚拟机或者 Docker 容器里运行一遍，CI 的部分就是编译你的代码，也可能加上测试编译成品的部分。  
CD 就是在编译成功之后，自动地把编译的成品推送到某个地方，就是部署。比如说自动新建一个 Release 。  
github 的 CI 和 CD 是免费的，就是每个仓库都有的 github Actions 。   
gitlab 的也是免费的，就是每个仓库都有的 CI/CD 。   
gitee 是这三个里面最后推出 CI/CD 的，还是居然要收费的。    
虽然说是免费的云端服务器，可是他是有时间限制、性能限制、没有直接公网IP的，你敢拿来挖矿或者DDOS或者怎么样，被发现了马上号就没了。  

# 仓库、源文件管理
github 和 gitee 私有仓库的 Pages 需要付费升级才能使用。  
gitlab 和 CloudFlare 支持私有仓库。  

github 只支持从仓库的某一个分支的根目录或者这个分支的 docs 文件夹进行部署，不支持自定义文件夹名。     
gitee 支持从任意分支的任意的文件夹进行部署。   

有人想一边备份自己的生成前源文件，又想快速部署网站。  
网上有人提出的做法是在仓库建立两个分支，一个分支存储源文件一个分支存储生成后的网页。  
这样做太麻烦了。  
戈登的建议是：  
把生成文件夹的名字改成 docs ，这样在 git push 的时候就可以一次成型了。  
就是你在 push 之前一定要确保你已经使用了生成器生成好了文件放到 docs 文件夹里。    
选择 docs 是好处是方便迁移到 github，他只承认 docs 这个名字。  

如果你的网站里面使用了仅前端加密，那你一定不希望你的源文件直接暴露在公开仓库里，这时候只能把源文件存储到别的云端了。  
如果你选择不存储你的源文件到云端，那你自己保管好。   
我知道有很多什么 hexo 入门教程，并没有教你如何较好地管理你的源文件。  
电脑重装或者硬盘清理之后，文章源文件，自己修改过的主题，可能就全丢了。     

github 虽然有免费的持续开发 github Actions ，但是他里面不能作为部署源使用，你必须把你生成好的网页文件丢进仓库里。  
在 Actions 里生成好的文件要 push 到仓库里可不是一件容易的事情。是不被官方建议的。   

gitee 免费的持续开发额度少的和优惠券一样，我是不用那玩意。  
和 github 一样，老老实实把成品文件放进去就好。  

gitlab 部署 Pages 只支持持续开发（CI）这一个方式。  
他部署的最后一步是 artifacts ，意思是上传成品，接着他是把这个成品的内容作为网站的文件来部署的。  
就算你已经编译好了你的网页成品，那么接下来你也得在 `.gitlab-ci.yml` 里面把这个成品文件夹给上传上去。  
那么根据他的要求，他是只承认 `public` 文件夹作为成品的。  
那么比如说你的成品文件夹是 docs，那你可以在 yml 里面再写一句指令 `mv docs public` ，接着再上传就好了。   
[我的 gitlab CI yml 示范](https://gitlab.com/gordonwalkedby/gordonwalkedby.gitlab.io/-/blob/master/.gitlab-ci.yml)  

不要在部署的文件夹里面放不是网页直接相关的文件！  
很可能会导致 pages 部署失败，到时候你会收到邮件。  
如果你要丢一个 .PSD 或者 .7z 这类不常见的文件，直接放在源文件那或者别的地方最好，然后把 github 仓库的 raw 链接拿来即可。  

github 仓库设置里面的 Custom domain 设置，尽量不要在网页里直接填。  
他会在部署文件夹那创建一个 CNAME 文件，里面写了你的自定义域名。  
你点一下，然后你本地就必须同步 git pull 。    

# 仓库的名字
github 这边，只要你把自己的仓库的名字改成 用户名.github.io ，你的静态站的域名就可以是 用户名.github.io 本身。  
如果仓库名字是其他文件夹，那就会加一层文件夹的名字，就是 用户名.github.io/仓库名 。  

小白请注意， “/仓库名” 这一层文件夹有没有是很重要的，是需要你网页里的所有链接进行适配的。  
比如，"/favicon.ico" 对应的链接是 用户名.github.io/favicon.ico 。  
"/仓库名/favicon.ico" 对应的链接才是 用户名.github.io/仓库名/favicon.ico 。  
"favicon.ico“ 对应的链接是什么你自己试吧。  

gitlab 是要把仓库的名字改成 gordonwalkedby.gitlab.io 才能是 .io 域名本身。  

gitee 就比较特色了，仓库的名字和你的用户名一致就好。  
![](https://z3.ax1x.com/2021/03/09/68osJI.png)    

# CloudFlare Pages
这新出的功能，就NB。  
他就是绑定登录你的 github 账号，然后可以读取你的公开或私有仓库，接着直接部署到 cloudFlare 的全球 CDN 上。  
支持他自己的一些模板的持续生成，不支持自定义持续生成脚本。   
也许未来会支持也说不准。   

首先到 [CloudFlare 个人面板主页](https://dash.cloudflare.com/)，然后在网页右边有个选项叫“页面”，英文是 Pages 。  
这选项的中文简介翻译成了“在记录时间内部署前端应用程序”，就 NM 离谱。  
他的本意是他有超快的速度来部署你的静态站。  
点进去之后关联你的 github 账号，然后选一个仓库就好。  
后面那个“构建命令”就离谱，功能其实算少的，我自己的博客是 .NET Core 的生成器，他就没法运行。  
直接把成品 push 到 github 仓库，然后在“构建输出目录”填写成品文件夹的路径就好。  
你可以自定义一个 xx.pages.dev 这个根网址。  
也可以直接绑定到一个你自己的域名上，但是这个域名好像只能是DNS托管在 CloudFlare 上的才行。  

我看了他官方的构建说明，他说他支持 PHP ，PHP 不是动态脚本语言吗，你这是静态站啊。  
那肯定是什么 PHP 生成静态站的黑科技了。  
如果你会 Node.js 可以写一个 npm 项目来运行自定义功能，他构建是可以运行 npm build 的。    
他还支持 python，怎么 tm 版本是 2.7 卧槽。  

他这个生成的速度真的就慢的离谱，我这辈子没见过这么慢的。  
我就是把文件从仓库的 docs 文件夹里拿出来就好。  
他就做这一件事做了3分钟，而且是回回三分钟。  
看日志就知道，他 `Initializing build environment` 这个步骤做了三分钟。  
剩下就没几秒就搞定了。我日就离谱。  

他还有一个离谱的地方在于，他会存储历史部署。  
在部署情况页面可以看见你的历史部署，他都在你的域名的前面加了一段随机标识，然后这个链接还居然是一直生效的。  
就太离谱了。要是我删个文章，这个黑历史还会一直提供在线浏览，想想就恐怖。  

# 统计数据收集
我发现我这么多镜像站，都没有自有域名。  
那么网站的统计数据采集就会忽略这条数据，他觉得是别的网站的。 
然后我在 html 里放的统计组件只对 walkedby.com 本站生效。  

# 讨论本文章
- [技术宅的结界](https://www.0xaa55.com/thread-26401-1-1.html)  
- [知乎](https://zhuanlan.zhihu.com/p/355983053)  
