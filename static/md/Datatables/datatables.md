# 简介

Datatables是一款jquery表格插件。是一个高度灵活的工具，可以将任何HTML表格添加高级的交互功能。

## 特性

1. 分页，即时搜索和排序
2. 几乎支持任何数据源：DOM，javascript，Ajax和服务器处理
3. 支持不同主题DataTables,jQuery UI,Bootstrap......
4. 各种扩展：Editor,TableTools......
5. 丰富多样option和强大的API

# 安装

## 获取和载入

下载：Datatables在vendor。如果使用Datatables的页面比较多，根据需要将所用插件放到header.php。

```html
<link rel="stylesheet" href="../vendor/jquery/jquery.dataTables.css">
<link rel="stylesheet" href="../vendor/jquery/jquery.pager.css">
<script src="../vendor/jquery/jquery.min.js" type="text/javascript"></script>
<script src="../vendor/jquery/jquery.dataTables.js" type="text/javascript"></script>
<script src="../vendor/jquery/jquery.pager.js" type="text/javascript"></script>
<script src="../vendor/jquery/DataTables.js" type="text/javascript"></script>
```

## 使用示例(源码下载)

1.加载插件

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="../vendor/jquery/jquery.dataTables.css">

	<!-- page分页引用(配合dataTable使用) -->
	<link rel="stylesheet" href="../vendor/jquery/jquery.pager.css">
</head>
<body>
	<!-- 项目中获取配置，本例子中在js中写死colArray
	<script src="<?php echo $configFiles['addInstock_col.js']; ?>" type="text/javascript"></script> -->

	<script src="../vendor/jquery/jquery.min.js" type="text/javascript"></script>

	<!-- dataTable引用 -->
	<script src="../vendor/jquery/jquery.dataTables.js" type="text/javascript"></script>
	<script src="../vendor/jquery/DataTables.js" type="text/javascript"></script>

	<!-- page分页引用(配合dataTable使用) -->
	<script src="../vendor/jquery/jquery.pager.js" type="text/javascript"></script>

</body>
</html>
```

2.HTML中

```html
<div>
  <!-- dataTable 注入 -->
  <div id="dataTable"></div>
  <!--分页 注入-->
  <p id="pager"></p>
</div>
```

3.模拟配置字段（项目中从配置系统获取）及数据

```js
var colArray = [
	["审批单编号","approveNo","","input",['']],
  	["创建人","createUserName","","input",['']],
  	["创建时间","createTime","","input",['']],
  	["状态","flowStatus","","input",['']]
];
var result= {
	total: 5,
	dataList:[
		{
			approveChildCustomerId: "01.01.01.111",
			approveChildUnionId: 519246,
			approveName: "G201711201022发货信息审批",
			approveNo: "G201711201022",
			createDate: "2017-11-20",
			createTime: "2017-11-20 15:10:20",
			createUser: "01.01.01.111",
			createUserName: "我了个去的经销商",
			eventType: "0",
			eventTypeName: "审批申请",
			flowStatusName: "待审批",
			flowType: "delivery",
			flowStatus: "0",
			id: 409
		}
      	...
	],
	retCode: "200",
	status: "000", 
	retMsg: ""
}
```

4.自定义表格模板

```js
var dataTable_col = {	
  //显示字段：和配置一致
  //样式重写	
  approveNo : {
    "class":"center",
    render : function(row, type, data, meta) {
      var a = "<a href='javascript:toWorkFlowDetail(&quot;"+data.taskId+"&quot;)'  class='skin_font' >"
      + data.approveNo
      + "</a>";
      return a;
    }
  },
  //默认样式
  createUserName : {
    "class":"center",
    data : 'createUserName'
  },
  createTime : {
    "class":"center",
    data : 'createTime'
  }
};
```

5.渲染模板

```js
var tableConfig = {  		
  paging:true,//分页
  processing:true,//处理数据显示
  searching:false,//搜索框
  ordering:true,//排序
  autoWidth:true,//宽度自适应
  info:false,//是否显示页脚
  scrollX:true,
  order:[],//插件BUG，必须重写默认值，否则第一列会出现图标
};
dataList=result.dataList;
//传入参数：表头配置-模板-数据-表格配置(固定写法)
$("#dataTable").renderDatatables(colArray,dataTable_col,dataList,tableConfig);
```

