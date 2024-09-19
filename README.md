# [首页查询更多项目](https://github.com/GraduationProject-weixin) 包安装运行


# 50122wxapp无中介租房系统

![picture](https://raw.githubusercontent.com/GraduationProject-springboot/.github/main/img/wx.png)

### 点击播放视频 ▼
[![Watch the video](https://i.sstatic.net/Vp2cE.png)](https://www.bilibili.com/video/BV1BPtKekEv3?p=125)


# 第1章  绪论
## 1.1研究背景
随着移动互联网的飞速发展，使得微信应用客户端日益的广泛。根据去年公布的一组数据中可知，微信去年最高用户量达到10亿多；而建立在微信平台基础上的小程序凭着它不用安装、不占内存、使用便捷、用完即走等众多优点，随着微信的发展，其体系越来越完善，微信公众平台的开发，更是给企业、个人带来了许多商机，越来越多人开始关注通过微信平台进行营销。微信以其发送信息快、及时的特点，能够大大提高商家营业额。微信支付体系的完善，也促进了基于微信平台的程序的发展。

基于以上微信的优势和普及，在开发本无中介租房系统时，选择基于微信小程序进行开发设计，此系统与传统租房方式相比有着足够的优点，传统实体店进行租房，有时间和地点限制。如今智能手机的普及，微信支付平台的成熟，在微信营销的冲击下，实体店租房更大不如前，而开发了的基于微信小程序的无中介租房系统不仅可以满足用户足不出户就能进行租房，给用户带来便利，同时促进了房屋租赁行业的发展，提高房屋租赁效率。
## 1.2设计原则
在开始开发项目之前，必须要先考虑项目的实用性、科学性，以及该项目是否能够真正让用户受益并尽可能的发挥项目的作用。因此，在开发前，通过以下几条原则对项目进行判断：

（1）可行性原则。项目需要保证经济可行性和技术可行性，这包括了项目在浏览端、服务端等方面上的经济和技术上是可以达成的。

（2）适应性原则。项目要保证可维护性和可扩展性，这是每个非短期项目都需要考虑的，并且不论是维护还是扩展，都必须要建立在适应用户的正常需求的基础上。

（3）安全性及保密性原则。要充分保证用户信息的安全性和保密性，不能因为开发上的疏忽，导致用户的信息泄露。

（4）系统工程原则。为了确保项目的整体性，在项目调查、项目分析、项目设计、项目开发的过程中，都需遵从项目工程的方法和步骤逐步进行。

（5）统一规划、分期实施、逐步完善原则。项目开发的过程中，要按照规划、分期实施，特别是要注意在项目开发过程中要有条理，从点到面，一步步完善，不要贪图进度，要循环渐进的对项目进行开发。
## 1.3论文组织结构
本基于微信小程序的无中介租房系统在开发技术的选择上，使用WXML 、WXS、JS小程序编写语言和MYSQL数据库开发。本论文的组织结构如下：

第1章绪论。阐述论文工作的研究背景和设计原则。

第2章系统关键技术介绍。介绍构建基于微信小程序的无中介租房系统进的相关技术。

第3章系统分析。分析基于微信小程序的无中介租房系统的需求，包括系统性能分析、系统功能分析以及系统流程分析等。

第4章系统设计。根据需求分析对系统进行功能模块划分和数据库设计，并构建系统结构图以及数据库E-R图等。

第5章系统的实现。对系统主要功能模块进行界面展示。

第6章系统测试。对系统进行测试工作，发现系统bug，进行修改，确保系统正常稳定的运行。

第7章结论。总结论文的主要工作，提出进一步完善基于微信小程序的无中介租房系统的目标和明确方向。


#
29

第2章 关键技术简介
# 第2章  关键技术简介
## 2.1 微信小程序
微信小程序，简称小程序，英文名Mini Program，是一种全新的连接用户与服务的方式，可以快速访问、快速传播，并具有良好的使用体验。

小程序的主要开发语言是JavaScript，它与普通web的开发有很多相似之处。小程序和普通网页开发并不是相同的东西，是有差异的。网页开发的渲染线程和脚本线程是互斥的，而在小程序中，确实分开的，分别在不同的线程之中运行。网页开发的工作者可以运用各种浏览器暴露出来的DOM API，进行DOM选中和操作，但小程序不行，它并没有一个完整的浏览器对象，因此缺失DOM API和BOM API。这样的差别使得前端开发中经常用到的一些库是无法在小程序中运行的。另外，网页开发的工作者在开发网页时所要面对的环境是在各式各样系统上运行的各式各样的浏览器，，而小程序只，只需面对iOS和Android这两道操作系统下的微信就足够了。

小程序和传统的APP相比，有着开发成本更低，获客成本更低，开发周期更短，发展空间更大等的优点。不过，为了体现“用完即走”、“无需安装”等理念，小程序的功能、性能还有大小都受到了制约，可以说是各有利弊。
## 2.2 微信开发者工具
为了能够让微信小程序的开发人员有根家优秀的开发环境，腾讯在原有的公众号网页调试工具的基础上，推出了全新的微信web开发者工具。

微信web开发者工具具备编辑、调试、项目、编译、关闭、后台和缓存这七个选项卡，让开发者能够更方便的进行开发和调试，节省开发所耗费的时间。
## 2.3微信小程序API接口
微信小程序API接口是腾讯公司为了微信小程序和微信公众号提供的接口文档，里面包含了各种需要使用的接口技术[7]，例如本项目用到的获取微信用户信息(wx.getUserInfo)、蓝牙通讯传输功能、网络请求(wx.request)、定位功能等，总的来说，小程序API是满足一个程序开发的大部分接口。
## 2.5 JavaScript简介
Javascript是一种早期在Web网页上使用，用来给Web网页添加交互的脚本语言。也做为独立的.js文件独立管理，不内嵌在.html文件中，但是也需要用<script>标签在html文件中加入src的属性，否则访问不到js。

JavaScript是一种在现在都极为流行极为热门的脚本语言，最早是在HTML网页上被使用，使用JavaScript，我们可以给HTML网页添加更是各样的动态功能，并且给这些功能设置好不同的触发动作，通过用户在浏览器上的各种操作进行触发。

随着时代的发展，JavaScript的用途也越来越多，例如：将动态文字嵌入到HTML页面之中，读写HTML元素、在数据被提交到服务器之前检验数据等等。而且，不同于服务器端脚本语言，JavaScript并不依赖于操作系统，无需访问数据库，只需要浏览器的支持，有效的减轻了服务器的负担。
## 2.6 MYSQL数据库
MySQL 是关系型数据库管理系统的代表，它是属于 Oracle 旗下产品，使用C语言和C++语言编写的，使用了多种技术，由于它体积小，易使用，成本低，灵活性[2]，该数据库在中小企业比较受欢迎。MySQL的灵活性体现在非常多方面，可是适应高要求的环境，通过不同配置适应各种硬件，同时支持各种不同的数据。因为MySQL是其免费开源的，而且MySQL的功能已经足够用对于学习和中小型企业来讲，所以开发中小型网站都会选择MySQL作为网站的数据库。[5]

#
第3章 系统分析
# 第3章  系统分析
## 3.1 可行性分析
需要使用大部分精力开发的基于微信小程序的无中介租房系统为了充分降低开发风险，特意在开发之前进行可行性分析这个验证系统开发是否可行的步骤。本文就会从技术角度，经济角度，还有操作角度等进行综合阐述。
### 3.1.1技术可行性
本基于微信小程序的无中介租房系统采用Java技术，基于微信小程序，采用MYSQL数据库进行开发的。

（1）Java提供了稳定的性能、优秀的升级性、更快速的开发、更简便的管理、全新的语言以及服务。整个系统帮用户做了大部分不重要的琐碎的工作。

（2）基于微信小程序的系统的开发已发展日趋成熟。

（3）作为计算机专业的学生，对数据库比较熟悉，掌握了MYSQL数据库，建立这样一个系统应该在能力范围之内

综上所述：基于微信小程序的无中介租房系统的开发技术具有很高可行性。
### 3.1.2 经济可行性
该系统的开发工具使用的都是免费的开发工具，且内容较为简单，一台计算机便可以开发出这个系统，且后期的维护，修改等对本系统的改动，都可以只通过一台计算机实现，因此开发该系统的成本在有计算机的情况下基本为0，所以本系统在经济上是可行的。
### 3.1.3 操作可行性
本系统操作页面简洁明了，操作极其容易，用户登陆后一眼便可看到自己所需要的信息，而管理员的操作也十分轻松便捷，只要操作人员具有一定的文字水平以及简单的逻辑思维，就可以轻松操作本系统，因此本系统在操作上是可行的。
### 3.1.4时间可行性
从2020年11月份我们在学校就没有课程了，同学们大部分选择找工作实习了，我也是在其中。一边找工作的同时，一边忙着完成毕业设计工作。对于我本人来讲，目前的情况是白天我要上班参加实习工作，只有晚上我才有时间完成论文编写工作。论文答辩是在2021年5月份左右，将近半年时间来完成毕业设计，时间上还是很充分。

综上可以看出，本基于微信小程序的无中介租房系统的开发在技术、经济、操作以及时间四个方面都具有很高的可行性，开发本程序可行。
## 3.2 系统性能分析
随着互联网的发展，微信小程序越来越完善，现在的生活中充斥着微信小程序，由于小程序方便快捷，基于微信这个大平台，小程序发展是高速的，吃饭可以通过小程序点餐，出去玩可以用小程序打车，因此租房也可以使用小程序。系统性能需求如下：

（1）软件功能清晰明了，尽量多用列表的展示简化用户操作，提升使用者体验，减少下拉菜单这种降低体验的操作。

（2）软件的功能要尽量完整，也要全面。

（3）经常的在以后版本更新完善软件，使得软件保持一个新鲜度，也可以做一些活动来促进用户使用软件。

（4）减少软件使用过程中出错，做好优化，遵循开发逻辑，降低bug的产生率以提升用户体验。
## 3.3 系统功能分析
本基于微信小程序的无中介租房系统满足了不同用户的功能需求，包括房东、用户以及管理员，下面对这不同用户的功能需求进行简介。

（1）管理员功能分析

管理员可进行后台进行管理，包含个人中心、租客管理、房东管理、房屋信息管理、房屋类型管理、租赁合同管理、租金信息管理和系统管理。

管理员用例图如图3.1所示。

![](/md/blog.002.png)

图 3.1 管理员用例图

（2）房东功能分析

房东登录后主要功能模块包括房屋信息管理、房屋类型管理、租赁合同管理以及租金信息管理。

房东用例图如图3.2所示。

![](/md/blog.003.png)

图 3.2 房东用例图

（3）租客功能分析

租客注册登录后主要功能模块包括首页、房屋信息、交流区以及我的（租赁合同、租金信息、我的收藏管理、我要发帖、我的发帖）。

租客用例图如图3.3所示。

![](/md/blog.004.png)

图 3.3 租客用例图
## 3.4 系统流程分析
### 3.4.1注册登录流程
没有账号的租客可进行注册，注册后可进行登录系统，注册登录流程图如图3.4所示。

![](/md/blog.005.png)

图3.4注册登录流程图
### 3.4.2添加信息流程
管理员、房东以及租客登录后均可添加信息，下面是添加信息的时候的流程图，如图3.5所示

![](/md/blog.006.png)

图3.5 添加信息流程图
## 3.5系统界面分析
用户界面指的是用户直接看到的图形界面也称为前端设计。用户界面的好坏直接影响到用户操作时的体验、效率，愉快性，而且用户界面设计不当还会导致无法很好的发挥出系统的性能。

1．界面元素

常见的用户界面都会包括：整体页面的主颜色，字体的大小，字体的颜色，整体页面的布局，主要功能在页面上的布局位置，重要的输入界面和输出界面，人机交互界面。用户界面采用的主颜色，还有整体的布局的美观和功能布局的位置是否符合人性的设计都会直接的影响到用户对本系统软件的认同度。

2．用户角色

界面的设计必须建立在用户的角度，只有把自己当作用户思考人们的使用习惯和爱好的时候，才能开发出一个围绕用户的界面。通过调查用户的操作习惯，并将收集而来的纷乱复杂信息，进行总结，抽象得出满足用户的用户界面模型。

3．需求变化

人们的审美和习惯爱好，总是在不断的改变着。故要根据不同用户的喜好，操作习惯作不同的需求设计分析，作出更加符合的用户口味的操作界面。从而得到用户的认可。

4．界面原型

设计的前期通过快速的创建界面原型，通过同学的建议一点一点的改进用户界面从快速的达到理想的效果。用户界面的设计原则要满足以下几点：

（1）页面简洁，操作简单。

（2）对于用户而言，浏览信息比记忆信息更友好。

（3）从用户的角度思考，才能让用户更好的接纳。

（4）利用当今已经流行的页面设计，让用户快速的学会操作。

5．安全性问题

安全性问题应该是人们最看重的。用户界面上输入的信息不会被别人窃取，还有若输入的时候出现错误页面必须能够回退。

#
第4章 系统设计
# 第4章  系统设计
## 4.1系统结构设计
本基于微信小程序的无中介租房系统主要实现了房东功能模块、租客功能模块和管理员功能模块三大部分，系统结构图如图4-1所示。

![](/md/blog.007.png)

图4.1系统功能结构图
## 4.2系统顺序图设计
### 4.2.1登录模块顺序图
登录模块主要满足了管理员、房东和租客的权限登录，登录模块的顺序图如图 4.2 所示。

![](/md/blog.008.png)

图4.2登录顺序图
### 4.2.2添加信息模块顺序图
管理员、租客自己房东登录后均可进行信息的添加操作，添加信息顺序图如图4.3所示

![](/md/blog.009.png)

图4.3添加信息顺序图
## 4.3系统数据库设计
### 4.3.1 数据库E-R图设计
系统E-R图就是系统的实体关系图，它是用来描述某一组织(单位)的概念模型，提供了表示实体、属性和联系的方法。构成E-R图的基本要素是实体、属性和关系。实体是指客观存在并可相互区分的事特；属性指指实体所具有的每一个特性。根据数据库中的几个表分别绘制数据库的实体图。以下给出本系统中比较重要的实体E-R图。

（1）房屋信息实体E- R图，如图4.4所示

![](/md/blog.010.png)

图4.4 房屋信息实体属性图

（2）房屋类型信息实体E- R图，如图4.5所示

![](/md/blog.011.png)

图4.5 房屋类型信息实体属性图

（3）管理员信息实体E- R图，如图4.6所示

![](/md/blog.012.png)

图4.6  管理员信息实体属性图

（4）租客信息实体E- R图，如图4.7所示

![](/md/blog.013.png)

图4.7 租客信息实体属性图

（5）房东信息实体E- R图，如图4.8所示

![](/md/blog.014.png)

图4.8 房东信息实体属性图
### 4.3.2 数据库表设计
本基于微信小程序的无中介租房系统在开发过程中使用MySQL数据库系统进行系统数据的储存，以下是本系统的主要数据库表信息。

表4.1  fangwuxinxi房屋信息表

|序号|字段|描述|类型和长度|主键|是否可空|
| :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|编号|bigint(20)|是|不允许|
|2|addtime|添加时间|timestamp|否|允许|
|3|fangwumingcheng|房屋名称|varchar(200)|否|允许|
|4|fangwuleixing|房屋类型|varchar(200)|否|允许|
|5|zhuangtai|状态|varchar(200)|否|允许|
|6|tupian|图片|varchar(200)|否|允许|
|7|mianji|面积|varchar(200)|否|允许|
|8|zujin`|租金|int(11)|否|允许|
|9|suozaiquyu|所在区域|varchar(200)|否|允许|
|10|xiangxidizhi|详细地址|varchar(200)|否|允许|
|11|xiangqing`|详情|longtext|否|允许|
|12|fangdongzhanghao|房东账号|varchar(200)|否|允许|
|13|fangdongxingming|房东姓名|varchar(200)|否|允许|
|14|lianxishouji|联系手机|varchar(200)|否|允许|
|15|sfsh`|是否审核|varchar(200)|否|允许|
|16|shhf|审核回复|longtext|否|允许|
|17|`clicktime|最近点击时间|datetime|否|允许|
|18|clicknum|点击次数|int(11)|否|允许|

表4.2  fangwuleixing房屋类型信息表

|序号|字段|描述|类型和长度|主键|是否可空|
| :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|编号|bigint(20)|是|不允许|
|2|addtime|添加时间|timestamp|否|允许|
|3|fangwuleixing|房屋类型|varchar(200)|否|允许|
|4|jianjie|简介|longtext|否|允许|

表4.3   users管理员信息表

|序号|字段|描述|类型和长度|主键|是否可空|
| :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|编号|bigint(20)|是|不允许|
|2|username|用户名|varchar(100)|否|允许|
|3|password|密码|varchar(100)|否|允许|
|4|role|角色|varchar(100)|否|允许|
|5|addtime|添加时间|timestamp|否|允许|

表4.4  zuke租客信息表

|序号|字段|描述|类型和长度|主键|是否可空|
| :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|编号|bigint(20)|是|不允许|
|2|addtime|添加时间|timestamp|否|允许|
|3|yonghuming|用户名|varchar(200)|否|允许|
|4|mima|密码|varchar(200)|否|允许|
|5|zukexingming|租客姓名|varchar(200)|否|允许|
|6|xingbie|性别|varchar(200)|否|允许|
|7|touxiang|头像|varchar(200)|否|允许|
|8|nianling|年龄|varchar(200)|否|允许|
|9|zhiye|职业|varchar(200)|否|允许|
|10|shenfenzheng|身份证|varchar(200)|否|允许|
|11|shouji|手机|varchar(200)|否|允许|
|12|jiatingdizhi|家庭地址|varchar(200)|否|允许|

表4.5  fangdong房东信息表

|序号|字段|描述|类型和长度|主键|是否可空|
| :-: | :-: | :-: | :-: | :-: | :-: |
|1|id|编号|bigint(20)|是|不允许|
|2|addtime|添加时间|timestamp|否|允许|
|3|fangdongzhanghao|房东账号|varchar(200)|否|允许|
|4|mima|密码|varchar(200)|否|允许|
|5|fangdongxingming|房东姓名|varchar(200)|否|允许|
|6|xingbie|性别|varchar(200)|否|允许|
|7|touxiang`|头像|varchar(200)|否|允许|
|8|shenfenzheng|身份证|varchar(200)|否|允许|
|9|`lianxishouji|联系手机|varchar(200)|否|允许|
|10|nianling|年龄|varchar(200)|否|允许|
|11|sfsh|是否审核|varchar(200)|否|允许|
|12|shhf`|审核回复|longtext|否|允许|


#
第5章 系统的实现
# 第5章 系统的实现
## 5.1微信端功能模块的实现
### 5.1.1注册登录界面
没有账号的租客用户可进行注册操作，注册后可进行登录系统，租客注册登录界面展示如图5.1所示。

![](/md/blog.015.png)![](/md/blog.016.png)

图5.1 租客注册登录界面
### 5.1.2首页界面
租客登录后可进入首页查看房屋信息，首页界面展示如图5.2所示。

![](/md/blog.017.png)

图5.2首页界面
### 5.1.3房屋信息界面
租客在房屋信息界面可查看所有房屋信息，并可选择查看详情，房屋信息界面展示如图5.3所示。

![](/md/blog.018.png)![](/md/blog.019.png)

图5.3 房屋信息界面
### 5.1.4租金信息界面
租客登录后可管理、添加租金信息，租金信息界面展示如图5.4所示。

![](/md/blog.020.png)![](/md/blog.021.png)

图5.4  租金信息界面
### 5.1.5我要发帖界面
租客可进入我要发帖界面进行发布帖子，我要发帖界面展示如图5.5所示。

![](/md/blog.022.png)

图5.5 我要发帖界面
### 5.1.6交流区界面
租客在交流区可查看所有帖子，并可查看帖子详情，交流区界面展示如图5.6所示。

![](/md/blog.023.png)![](/md/blog.024.png)

图5.6 交流区界面
## 5.2服务端功能模块的实现
### 5.2.1服务端登录界面
要想进入系统后台对系统进行管理操作，必须进行登录，服务端登录界面展示如图5.7所示。

![](/md/blog.025.png)

图5.7 管理员登录界面
### 5.2.2租客管理界面
管理员登录后可添加、修改和删除租客信息，租客管理界面如图5.8所示。

![](/md/blog.026.png)

图5.8 租客管理界面
### 5.2.3房东管理界面
管理员在房东管理界面可查看所有房东信息，对已有房东信息可进编辑和删除操作，房东管理界面如图5.9所示。

![](/md/blog.027.png)

图5.9  房东管理界面
### 5.2.4房屋信息管理界面
房东可增删改查个人房屋信息，管理员可管理审核房屋信息，添加房屋信息界面展示如图5.10所示。

![](/md/blog.028.png)

图5.10  添加房屋信息界面
### 5.2.5租金信息管理界面
房东可查看租客租金信息，并可对其进行审核操作，租金信息管理界面展示如图5.11所示。

![](/md/blog.029.png)

图5.11 租金信息管理界面


第6章 系统测试











