# biyangjun-audition


环境|版本
---|---
操作系统|macOS 10.14.4
Node|v10.14.2
Vue|3.5.1
vue-cli|3.7

### Project setup
执行 `npm install`

执行 `npm run serve`

使用默认端口号：8080

### 亮点

1. 根据设备像素密度比区分使用 2倍图与3倍图 使用了雪碧图
2. 使用`vuex`的`actions`模拟接口返回数据
3. 使用了`scss`的`mixin`与`for`循环
4. 手写 加载动画组件
5. 组件化开发+还原设计稿
6. 使用rem做移动端的适配
7. 记录用户上次浏览的列表，时间为1天，下次打开可直接定位到上次访问。
8. 配合使用`v-touch`，监听用户左右滑动手势，进行卡片切换

### 待优化

1. 做列表数据的缓存

### 效果图

![图](https://github.com/BiYangJun/biyangjun-audition/raw/master/img.png)