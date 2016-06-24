function getCookie(Name) { // 쿠키 불러오는 함수
	var search = Name + "=";
	if (document.cookie.length > 0) { // if there are any cookies
		offset = document.cookie.indexOf(search);
		if (offset != -1){ // if cookie exists
			offset += search.length; // set index of beginning of value
			end = document.cookie.indexOf(";", offset); // set index of end of cookie value
			if (end == -1)
				end = document.cookie.length;
			return unescape(document.cookie.substring(offset, end));
		}
	}
}

function autoId(){
		if (getCookie("id")) { // getCookie함수로 id라는 이름의 쿠키를 불러와서 있을경우
            document.flogin.mb_id.value = getCookie("id"); //input 이름이 id인곳에 getCookie("id")값을 넣어줌
            document.flogin.autoLogin.checked = true; // 체크는 체크됨으로
        }

     }
     alert("<?=$COOKIE['id']?>");
     autoId();