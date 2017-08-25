
/*
	第一层的id为 0
	
	每一个文件是一个对象，这个对象包含的是一个文件的信息

	{
		id:0,          文件的id
		pid:-1,        父数据的id
		title:"微云",  文件的名
		type:"file"    文件的类型
	}

*/



var data = {
	files:[
		{
			id:0,
			pid:-1,
			title:"微云",
			type:"file",
			status:false
		},
		{
			id:1,
			pid:0,
			title:"我的文档",
			type:"file",
			status:false
		},
		{
			id:600000,
			pid:0,
			title:"我的视频",
			type:"file",
			status:false
		},
		{
			id:2,
			pid:0,
			title:"我的音乐",
			type:"file",
			status:false
		},
		{
			id:3,
			pid:2,
			title:"周杰伦",
			type:"file",
			status:false
		},
		{
			id:4000,
			pid:2,
			title:"王杰",
			type:"file",
			status:false
		},
		{
			id:4,
			pid:3,
			title:"发如雪",
			type:"file",
			status:false
		},
		{
			id:600,
			pid:3,
			title:"夜曲",
			type:"file",
			status:false
		},
		{
			id:3000,
			pid:0,
			title:"我的目标",
			type:"file",
			status:false
		},
		{
			id:9000,
			pid:3000,
			title:"前端菜鸟",
			status:false
		},
		{
			id:8000,
			pid:3000,
			title:"前端初级开发",
			status:false
		},
		{
			id:984744,
			pid:3000,
			title:"前端中级开发",
			status:false
		},
		{
			id:920485,
			pid:3000,
			title:"前端大牛",
			status:false
		}
	]
}
