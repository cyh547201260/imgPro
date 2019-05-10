var mainVue = new Vue({
	el:'#main-box',
	data:{
		imageList:'',
	},
	created:function(){
		
	},
	mounted:function(){
		this.getImagesList();
	},
	methods:{
		//获取图片列表
		getImagesList:function(){
			var _this = this;
			$.ajax({
				type:"post",
				url:"api.php",
				async:true,
				data:{
					
				},
				success:function(res){
					console.log(res)
					_this.imageList = JSON.parse(res);
				},
				error:function(err){
					console.log(err)
				}
			});
		},
		//js 获取图片列表
	}
})

function getImageList(){
	$.ajax({
		type:"post",
		url:"api.php",
		async:true,
		data:{
			
		},
		success:function(res){
			console.log(res)
			var obj = JSON.parse(res);
			var html = '';
			for(var i = 0; i < obj.length; i++){
				html += createEle(obj[i]);
			}
			innerEle('#image-box',html);
			innerEle('#image-box2',html);
		},
		error:function(err){
			console.log(err)
		}
	});
}

//将字符串写入html
function innerEle(target,str){
	$(target).html(str);
}

//字符串拼接
function createEle(item){
	var html = '';
	html += '<div  style="float: left;width: 100px; text-align: center;">'
	html +=	'<img style="width: 100%;" src="'+item.url+'"/>'
	html +=	'<p>'+item.title+'</p>'
	html += '</div>'
	
	return html;
}
//getImageList();