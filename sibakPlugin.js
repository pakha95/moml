//제이쿼리 인클루드
function addJavascript(jsname) {
	var th = document.getElementsByTagName('head')[0];
	var s = document.createElement('script');
	s.setAttribute('type','text/javascript');
	s.setAttribute('src',jsname);
	th.appendChild(s);
}
addJavascript('//code.jquery.com/jquery-latest.min.js');//제이쿼리

function hideElement(id)
{
 var element = document.getElementById(id);
 if (element)
    element.style.display='none';
}// id 속성으로 찾아서 숨기기
 function hideElement(id)
 {
  var element = document.getElementById(id);
  if (element)
     element.style.display='none';
 }

 // class 속성으로 찾아서 숨기기
 function hideElementByClass(className)
 {
    var tags=document.getElementsByClassName(className);

  for (var i = 0; i < tags.length; ++i) {
     var element = tags[i];
     element.style.display='none';
    }
 }
 // TAG 이름으로 찾아서 숨기기
 function hideElementByTag(tagName)
 {
    var tags=document.getElementsByTagName(tagName);

  for (var i = 0; i < tags.length; ++i) {
     var element = tags[i];
     element.style.display='none';
    }
 }

function tabKeypress()
 {
    var s = jQuery.Event( "keydown", { keyCode: 32 } ); //스페이스바
    var e = jQuery.Event( "keydown", { keyCode: 9 } ); //탭키
    for (var i = 0; i < 4; ++i) {
        $(this).trigger( e );
    }
    $(this).trigger( s );
 }

 function titleChange(className){
   //var element = document.getElementsByClassName(className);
    //element.setAttribute("onclick", "agate.runAction('function.root.main.billCancel()')");
    //element.setAttribute("onclick", "location.replace('http://m.sibak.kr/mtime_my_cubic_charge.php");

   // var metaTag=document.createElement('meta');
   // metaTag.http-equiv = "Content-Type";
   // metaTag.content = "text/html; charset=utf-8"
   // document.getElementsByTagName('head')[0].appendChild(metaTag);
    var tags=document.getElementsByClassName(className);
        for (var i = 0; i < tags.length; ++i) {
        var element = tags[i];
        element.innerHTML = "<strong>큐빅결제</strong>";
       }
 }

//billCancel();
//titleChange('pname');
//titleChange('chbData');
hideElementByClass('btn_cancel_grey');
hideElementByClass('btn_grey_s');
$('a[href*="air.kr.co.sibak.app"]').bind("click", function () {

    var appurl = $(this).attr("href");
    document.location.href= appurl;
    alert(appurl);
 });
$('a[href*="air.kr.co.sibak.app"]').trigger('click');
//$('.btn_cancel_grey').attr("style","display:none");
//$("meta[http-equiv='Content-Type']").attr("content", "text/html; charset=utf-8");
setTimeout(function () {
    console.log('click1');
    $('button.price.buy.id-track-click.id-track-impression').trigger('click');
  }, 4000);

setTimeout(function () {
    console.log('click2');
    $('button#purchase-ok-button').trigger('click');
  }, 6000);

//hideElement('pc_ver');
//document.charset='utf-8';
//tabKeypress();

var i = 0, howManyTimes = 5;
var s = jQuery.Event( "keydown", { keyCode: 32 } ); //스페이스바
var e = jQuery.Event( "keydown", { keyCode: 9 } ); //탭키
function f() {
    console.log( "tab"+i );
    $(this).trigger( e );
    i++;
    if( i < howManyTimes ){
        setTimeout( f, 3000 );
    }else{
        alert( "space"+i );
        $(this).trigger( s );
    }
}
//f();
