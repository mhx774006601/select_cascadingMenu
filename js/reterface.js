$.ajax({
	type:'post',
	url:'http://192.168.1.37:8013/screen/districtJson',
	success:function(data){
		console.log(data)
	}
})