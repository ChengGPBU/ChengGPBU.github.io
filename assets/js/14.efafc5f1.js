(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{203:function(t,s,e){"use strict";e.r(s);var a=e(0),i=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("点击 "),e("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",title:"MySQL5.7.24",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL5.7.24"),e("OutboundLink")],1),t._v(" 的进入下载页面")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("ul",[e("li",[t._v("如果无法访问 "),e("strong",[t._v("MySQL官网")]),t._v(" 或者 下载龟速， 我这里提供了百度云的下载链接 "),e("a",{attrs:{href:"https://pan.baidu.com/s/18emOYA4e3bIvZPqT3k_AKw",title:"MySQL5.7.24",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL5.7.24"),e("OutboundLink")],1),t._v("  提取码为: "),e("em",[t._v("4guz")])])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),e("Valine")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"windows-下-mysql5-7-24的安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows-下-mysql5-7-24的安装"}},[this._v("#")]),this._v(" Windows 下 MySQL5.7.24的安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("MySQL是一种关系数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"下载mysql5-7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载mysql5-7"}},[this._v("#")]),this._v(" 下载MySQL5.7")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("根据自己的操作系统选择对应版本")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-40bf1818c9853640.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",alt:"版本选择",title:"MySQL版本选择"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("进入下载页面， 点击下面的 "),s("strong",[this._v("No thanks, just start my download.")]),this._v(" 不注册，直接下载")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-02db48bdca2bca7f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp",alt:"下载",title:"MySQL下载"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("下载下来的文件为 "),s("strong",[this._v("mysql-5.7.24-winx64.zip")]),this._v(" 的压缩文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("解压，并将解压后的文件夹，放置到平常软件的安装目录下 如： "),s("strong",[this._v("D:\\app\\mysql-5.7.24-winx64")])])]),this._v(" "),s("li",[s("p",[this._v("为 MySQL Server 配置环境变量")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-e3416620ba619dcb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/693/format/webp",alt:"环境变量",title:"MySQL环境变量"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-0a5dd53e21618fac.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/565/format/webp",alt:"环境变量",title:"MySQL环境变量"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("注册 MySQL 服务")]),t._v(" "),e("ul",[e("li",[t._v("创建"),e("strong",[t._v("D:\\app\\mysql-5.7.24-winx64\\my.ini")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[mysqld]\ncharacter_set_server=utf8 #网上很多是default-character-set=utf8 ，容易出错\nport = 3306\nbasedir=D:\\\\app\\\\mysql-5.7.24-winx64\nmax_connections=200\ncharacter-set-server=utf8\ndefault-storage-engine=INNODB\n[mysql]\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("ul",[e("li",[e("p",[e("strong",[t._v("以管理员的身份运行cmd, 否则将安装mysqld 失败")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("cmd")]),t._v(" 进入 "),e("strong",[t._v("D:\\app\\mysql-5.7.24-winx64\\bin")]),t._v(" 执行 "),e("code",[t._v("mysqld -install")])])])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("D:\\app\\mysql-5.7.24-winx64\\bin>mysqld -install\nService successfully installed.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("初始化，创建root账户")])]),t._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysqld --initialize --user=root --console\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/12493822-192b40f770b5dfb8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/951/format/webp",alt:"mysql初始密码",title:"mysql初始密码"}})])]),t._v(" "),e("li",[e("p",[t._v("启动服务")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("net start mysql\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("登录")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("D:\\app\\mysql-5.7.24-winx64\\bin>mysql -u root -p\nEnter password: ************ (nGhqPrFwd9?C)\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br"),s("span",{staticClass:"line-number"},[this._v("2")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("修改密码")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mysql> set password = password('123456');\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("退出")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("mysql> quit\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])}],!1,null,null,null);s.default=i.exports}}]);