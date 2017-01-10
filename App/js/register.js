var getCode = document.getElementById("getCode");
			var sendBtn = document.getElementById("sendPost");
			var toLogin = document.getElementById("toLogin");
			var phoneNum = document.getElementById("tel");
			var captcha = document.getElementById("captcha");
			var passwordVal = document.getElementById("password");
			var situation = 0;
			toLogin.addEventListener('touchend',function(){
				plus.webview.close('registerFrame','slide-out-right');
				plus.webview.create('registerFrame.html','registerFrame',{});
			},false);

function checkInput(){
				if(phoneNum.value != "" && captcha.value != "" && passwordVal.value != "")
				{
					sendBtn.style.background = "#43A854";
					sendBtn.setAttribute("type",1);
				}
				else{
					sendBtn.style.background = "#A7A7A7";
					sendBtn.setAttribute("type",0);
				}
			}