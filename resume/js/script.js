var c=document.getElementById("c");
			var	ctx=c.getContext("2d");
				c.width=window.innerWidth;
				c.height=window.innerHeight;
			// var c=document.getCSSCanvasContext("2d", "identifier", window.innerWidth, window.innerHeight);
//				ctx.fillRect(0,0,100,100);
//				a,b,c,d分别代表x方向偏移,y方向偏移,宽，高
			var string1 = "abcdefghijklmnopqrstuvwxyz";
				string1.split("");
			var fontsize=20;
				columns=c.width/fontsize;
			var drop = [];
			for(var x=0;x<columns;x++)
			{
				drop[x]=0;
			}
		function drap(){
			ctx.fillStyle="rgba(0,0,0,0.07)";
			ctx.fillRect(0,0,c.width,c.height);
			ctx.fillStyle="#0F0";
			ctx.font=fontsize+"px arial";
			for(var i=0;i<drop.length;i++){
				var text1=string1[Math.floor(Math.random()*string1.length)];
				ctx.fillText(text1,i*fontsize,drop[i]*fontsize);
				drop[i]++;
				if(drop[i]*fontsize>c.height&&Math.random()>0.9){//90%的几率掉落
					drop[i]=0;
				}
			}
		}
		setInterval(drap,20);