(function (doc, win) {
          var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
              var clientWidth = docEl.clientWidth;
              if (!clientWidth) return;
              docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            };

          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);

//列表循环单选
function selectSigle(obj){
	for(var i = 0; i<obj.length;i++)
	{
		obj[i].addEventListener("tap",function(){
			for(var k = 0; k<obj.length;k++)
			{
				obj[k].setAttribute("class","");
			}
			this.setAttribute("class","act");
		},false);
	}
}