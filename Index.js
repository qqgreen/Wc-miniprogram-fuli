// 547's index.js
var start, end, sum; //定义起点数、终点数和求和结果三个全局变量
Page({
  startNum: function(e) {
    start = parseInt(e.detail.value); //将input组件value值转换为整数并赋值
    //inputvalues:""
  },
  endNum: function(e) {
    end = parseInt(e.detail.value); //将input组件value值转换为整数并赋值
  },
  calc: function() {
    sum = 0;
    for (var i = 1; i <= 5; i++) {
      //利用for循环求和
      sum = end * start*0.01+end;
      end = sum;
    }
    this.setData({
      sum: sum //将全局变量sum的值渲染到视图层
    })
  }
})
