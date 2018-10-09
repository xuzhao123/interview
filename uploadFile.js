function upload(param) {
    const data = new FormData();
    data.append('data', param.data);
    const xml = new XMLHttpRequest();
    xml.open('post', param.url);
    xml.send(data);
    xml.onreadystatechange = function () {
        if (this.readyState == 4) {
            param.success(this.responseText);
        }
    }
}