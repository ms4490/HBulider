var showP = document.getElementById("show");
			var hideP = document.getElementById("hide");
			var p = document.getElementById("password");
			
			showP.addEventListener("touchend",function(){
				hideP.style.display = "block";
				showP.style.display = "none";
				p.setAttribute("type","password");
			});
			
			hideP.addEventListener("touchend",function(){
				showP.style.display = "block";
				hideP.style.display = "none";
				p.setAttribute("type","text");
			});