function ajax(param) {
    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open(param.method, param.url);
    xmlHttpRequest.send();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4) {
            param.success(this.responseText);
        }
    }
}