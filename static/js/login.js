var loginVue = new Vue({
	el:'#login-page',
	data:{
		username:'',
		userpassword:'',
	},
	created:function(){
		
	},
	mounted:function(){
		
	},
	methods:{
		sendUserMassage:function(){
			var _this = this;
			$.ajax({
				type:"post",
				url:"api.php",
				async:true,
				data:{username:_this.username,password:_this.userpassword},
				success:function(res){
					console.log("成功")
				},
				error:function(err){
					console.log("失败")
				}
			});
		},
	}
})