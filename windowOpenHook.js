function woh_open(url, target, feature, replace) {
    // alert(url)
    if (url.indexOf("timeauction.co.kr/") < 0) { // <- 여기에 새창 띄우기를 후킹할 페이지를 적어줍니다.
        var iframe = document.createElement("IFRAME");
        iframe.src = url;
        iframe.frameborder = "0";
        iframe.style.position = "fixed";
        iframe.style.top = "0px";
        iframe.style.left = "0px";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.background = "#ffffff";
        document.body.appendChild(iframe);
        iframe.contentWindow.opener = window;
        iframe.contentWindow.close = function () {
            this.opener.document.body.removeChild(iframe);
        }
        return;
    }
    return window.__oldOpen(url, target, feature, replace);
}
function woh_installHook() {
    if (typeof(window.__oldOpen) == "undefined") {
        window.__oldOpen = window.open;
        window.open = woh_open;
    }
}
woh_installHook()();