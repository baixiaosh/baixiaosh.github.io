title: 柏小生
---
这是本人没事的时候捣鼓的博客。

## 第一步：了解

了解[github](https://github.com)，了解github的命令，以及客户端的使用。
了解[hexo](http://hexo.io)，安装，运行，以及简单的命令。

## 第二步：实现本地访问

打开的你git bash，切换到你想要的文件目录，以此输入一下命令：
``` bash
$ npm install hexo -g
$ hexo init blog
$ cd blog
$ npm install
$ hexo server
```
然后访问[localhost:4000](http://localhost:4000)，就可以看到一个简单的页面。

## 第三步：上传到github

输入命令
``` bash
$ hexo generate
```
就可以在你的blog文件夹下看到有个public的文件夹，里面就是你需要上传到[github](https://github.com)上面的文件和文件夹。然后注册或登录[github](https://github.com)，新建一个repository，取名为username.github.io(username为你注册或登录的名字)，然后把public中的文件上传到这个repository(username.github.io)里，我上传到[github](https://github.com)上是用的[TortoiseGit](http://download.tortoisegit.org)客户端，我这里不做介绍了。需要注意的是：需要使用master分支上传。

完了过后就能访问了，地址就是：http://username.github.io

如果你还想把域名绑定到这个项目上，就接着看下面。

新建一个文件命名为CNAME，里面的内容是你的域名。

然后参考这个链接[https://help.github.com/articles/tips-for-configuring-an-a-record-with-your-dns-provider/](https://help.github.com/articles/tips-for-configuring-an-a-record-with-your-dns-provider/)，在你的域名解析记录里绑定IP地址。
