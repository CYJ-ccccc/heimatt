# 头条号
    基于Vue+vant的前台移动端及后台管理系统解决方案

## 项目内容
+ 登录页面
+ 首页
+ 搜索页面
+ 搜索结果
+ 文章详情
+ 我的页面
+ 个人信息
+ 小智机器人

## 主要技术选型
+ 1.搭建项目结构：vue-cli
+ 2.管理路由：vue-router
+ 3.管理页面的全局数据：vuex
+ 4.发送网络请求：axios
+ 5.完成页面结构的搭建：vant
+ 6...
## 使用Standard开发规范，
+ 1.0 缩进使用两个空格

+ 2.0 字符串使用单引号

+ 3.0 句未不能以分号结尾

+ 4.0 行首不要以 (, [ 开头

+ 5.0 关键字后面必须加空格

+ 6.0 函数名后面必须加空格

+ 7.0 不要有冗余的变量

+ 8.0 使用 `===` 替换 `==`

+ 9.0 使用浏览器全局变量时加上 window 前辍

+ 10.0 注释的双斜杠后面必须加一个空格

+ 11.0 行未千万不加空格

+ 12.0 每个文件结束之后必须添加一个新的换行

+ 13.0 空行不能同时存在多个

## 项目的运行流程
   ### 静态页面：
       public/index.html:用来显示内容，提供了一个id=app的容器\
   ### 逻辑代码
       入口：src/main.js
            1.导入了Vue & App.vue & router & store
            2.创建了一个Vue实例
                挂载了router
                挂载了store
                讲App根据组件渲染到了Vue实例中
                将vue实例挂载到页面上id=App的容器中
       根组件： src/App.vue
       路由： src/router/index.js
       仓库： src/store/index.js
    























## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
