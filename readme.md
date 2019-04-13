# git笔记
仅自学复习之用
###date:2019/4/13
 
 > . git是什么
 > . github及名词概念
 > . git常用命令
 > . 软件及连接
 
---------

##一.git是什么##

**git**是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。
![流程图1][1]
![流程图2][2]

---
##二.github及名词概念##


gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。正是Github，让社会化编程成为现实。

 - **数据库 (Repository)** 是记录文件或目录状态的地方，存储着内容修改的历史记录。在数据库的管理下，把文件和目录修改的历史记录放在对应的目录下。
 
 - **远程数据库**: 配有专用的服务器，为了多人共享而建立的数据库。
 - **本地数据库**: 为了方便用户个人使用，在自己的机器上配置的数据库。
 - **提交**:若要把文件或目录的添加和变更保存到数据库，就需要进行**提交**。执行提交后，数据库中会生成上次提交的状态与当前状态的差异记录（也被称为revision）。
>*提交信息的注解：(此处为注解标签)*
第1行：提交修改内容的摘要
第2行：空行
第3行以后：修改的理由
 - **推送(push)**:为了将本地数据库的修改记录共享到远程数据库，必须上传本地数据库中存储的修改记录。
 - **克隆(Clone)**复制远程数据库到本地(从无创建新的数据库，包括更新记录)
 - **拉取(Pull)**可以把远程数据库的内容更新到本地数据库。
 - **冲突**在执行pull之后，进行下一次push之前，如果其他人进行了推送内容到远程数据库的话，那么你的push将被拒绝。发生冲突的部分会用<<<<>>>>>标注，须手动解决冲突。
 - **分支**是为了将修改记录的整体流程分叉保存。分叉后的分支不受其他分支的影响，所以在同一个数据库里可以同时进行多个修改。
![分支图解][3]
 - **master**在数据库进行最初的提交后, Git会创建一个名为master的分支。因此之后的提交，在切换分支之前都会添加到master分支里。
 - **Merge分支**和**Topic分支**:Merge分支,随时发布release而创建的分支,稳定第一。通常使用master分支替代。Topic分支是为了开发新功能或修复Bug等任务而建立的分支。若要同时进行多个的任务，创建多个的Topic分支，完成任务后合并回master。
 - **checkout**:切换分支。
 - **HEAD**指向的是现在使用中的分支的最后一次更新。通常默认指向master分支的最后一次更新。通过移动HEAD，就可以变更使用的分支。
 - **stash**:临时保存文件修改内容的区域。stash可以暂时保存工作树和索引里还没提交的修改内容，您可以事后再取出暂存的修改，应用到原先的分支或其他的分支上。
 - **分支的合并**:merge或rebase。merge保持修改内容的历史记录，但是历史记录会很复杂。rebase历史记录简单，是在原有提交的基础上将差异内容反映进去。因此可能导致冲突需手动解决冲突。向merge分支导入topic分支的话，先使用rebase，再使用merge。
***merge***
![merge][4]*
***rebase***
![rebase][5]
 - 4种分支：**master**、**develop**、**hotFix**、**elease**。

 > - **master**分支只负责管理发布的状态。在提交时使用标签记录发布版本号
 > - **develop**分支是针对发布的日常开发分支，有合并分支的功用
 > - **release**通常会在分支名称的最前面加上release-。release前需要在这个分支进行最后的调整，而且为了下一版release开发用develop分支的上游分支。
 > - **hotFix**产品需要紧急修正时，最好选择从master分支直接创建分支进行修改，然后合并分支。通常会在分支名称的最前面加上 hotfix-。
 
![四种分支][6]

 - **fetch**可以取得远程数据库的最新历史记录。取得的提交会导入到没有名字的分支，这个分支可以从名为FETCH_HEAD的退出。pull=fetch + merge.
 - **标签**：标签是为了更方便地参考提交，分为**轻标签**与**注解标签**。
 - **amend**:修改同一个分支最近的提交内容和注解。
 - **revert**可以取消指定的提交内容，不能随便删除已经发布的提交，这时需要通过revert创建要否定的提交。
 - **reset**可以遗弃不再使用的提交。
 - **cherry-pick**:从其他分支复制指定的提交，然后导入到现在的分支。
 - **改写提交**：rebase的i选项可以改写、替换、删除或合并提交。
 - **汇合提交**:merge的选项squash汇合主题分支的提交到一个节点，然后合并提交到目标分支。

---
##三. git常用命令##

基本
``` git
git --version   //查看git的版本信息
git config --global user.name   //获取当前登录的用户
git config --global user.email  //获取当前登录用户的邮箱
```
登录git
```
/* 如果刚没有获取到用户配置，则只能拉取代码，不能修改  要是使用git，你要告诉git是谁在使用*/
 
git config --global user.name 'userName'    //设置git账户，userName为你的git账号，
git config --global user.email 'email'
```
创建文件夹
```
mkdir XXX    //创建文件夹XXX
cd XXX       //切换到XXX目录下
```
初始化git仓库
```
git init //在当前位置初始化一个仓库（会生成一个.git隐藏文件夹）
```
查看目录
```
ls  //查看当前文件夹目录的内容
```
查看目录
```
ls  //查看当前文件夹目录的内容
```
将变更增加到stage（暂存区）
```
git add . //把本地的修改加到stage中
git add -A      //全部添加到缓存区
```
增加到版本库中
```
git commit -m '备注信息'
git commit -a //跳过stage缓存区，直接提交
```
比较差异
```
git diff     //比较的是暂存区和工作区的差异
git diff --cached   //比较的是暂存区和历史区的差异
git diff master   //比较的是历史区和工作区的差异（修改）
```
撤回内容
```
git checkout index.html //用暂存区或者版本库中的内容覆盖掉工作区
```
目录状态
```
git status //显示目录有没有添加或者修改文件
```
删除本地文件
```
rm fileName
```
只删除暂存区的内容
```
git rm index.html --cached //保证当前工作区中没有该文件
```
回滚版本
```
git reset --hard HEAD/commit_id  //回滚最近的一个版本 git log
```
撤销回滚
```
git reflog
```
分支管理
```
git branch dev //创建分支
git checkout -b dev //创建并切换分支
git branch -d dev //删除分支
git commit -a -m 'dev1' //在分支上提交新的版本
git merge dev //merge合并分支
git log --oneline --graph --decorate //分支的合并后显示log
```
临时切换其他分支
```

git stash //保留当前内容
git stash apply  //在次切换分之后需要应用一下保留的内容
git stash drop  //丢掉保存的内容
git stash pop  //使用并丢掉？？？
git stash list //Git栈信息
git stash clear //清空Git栈
```
最佳分支
```
git rebase //合并分支把树杈掰到主干上
```
远程仓库
```
git push origin master -u   //获取最新代码
git remote add origin //仓库的地址
git remote -v //查看远程仓库
git remote rm origin //删除远程仓库
```
###git常用命令
##安装及配置：
Ubuntu下安装：sudo apt-get install git
配置用户名：git config --global user.name "你的名字"
配置e-mail：git config --global user.email "你的邮箱@xx.com"

##与添加有关的：
将当前目录变为仓库：git init
将文件添加到暂存区：git add 文件名 [可选：另一个文件名]
将暂存区提交到仓库：git commit –m "描述"

##与查询有关的：
查询仓库状态：git status
比较文件差异（请在git add之前使用）：git diff 文件名
查看仓库历史记录(详细)：git log
查看仓库历史记录(单行)：git log --pretty=online 或 git log --online
查看所有版本的commit ID：git reflog

##与撤销有关的：
撤销工作区的修改：git checkout -- 文件名
撤销暂存区的修改：git reset HEAD 文件名
回退到历史版本：git reset --hard 该版本ID
回退到上个版本：git reset --hard HEAD^
上上版本是HEAD^^，也可用HEAD~2表示，以此类推

##与标签有关的：
为当前版本打标签：git tag 标签名
为历史版本打标签：git tag 标签名 该版本ID
指定标签说明：git tag –a 标签名 –m "标签说明" [可选：版本ID]
查看所有标签：git tag
查看某一标签：git show 标签名
删除某一标签：git tag –d 标签名

##与GitHub有关的：
先有本地库，后有远程库，将本地库push到远程库

关联本地仓库和GitHub库：git remote add origin 网站上的仓库地址
第一次将本地仓库推送到GitHub上：git push –u origin master

先有远程库，后有本地库，从远程库clone到本地库

从远程库克隆到本地：git clone 网站上的仓库地址

网站地址可以选择HTTPS协议（https://github.com...）、SSH协议（git@github.com...）。
如果选择SSH协议，必须将Ubuntu的公钥添加到GitHub上。见下一步

##SSH Key

生成SSH Key：ssh-keygen –t rsa –C "你的邮箱@xx.com"
生成Key时弹出选项，回车选择默认即可。
Key保存位置：/root/.ssh
登陆GitHub，创建new SSH key，其内容为/root/.ssh/id_rsa.pub中文本

###已经有了本地库和远程库，二者实现同步

本地库的改动提交到远程库：git push origin master
更新本地库至远程库的最新改动：git pull

---

##四. 软件及连接##

[msysgit下载地址][5]

资料来源：
1.https://www.cnblogs.com/libin-1/p/5918468.html
2.https://backlog.com/git-tutorial/cn/
3.https://blog.csdn.net/tomatozaitian/article/details/73515849


  [1]: https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0=baike92,5,5,92,30/sign=da38bc6e1a4c510fbac9ea4801304e48/a71ea8d3fd1f4134ca7667d8251f95cad0c85ed6.jpg
  [2]: https://backlog.com/git-tutorial/cn/img/post/intro/capture_intro1_2_2.png
  [3]: https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_1_1.png
  [4]: https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_5.png
  [5]: https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_4_8.png
  [6]: https://backlog.com/git-tutorial/cn/img/post/stepup/capture_stepup1_5_6.png