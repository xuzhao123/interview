function jsonP(param) {
    var script = document.createElement('script');
    script.src = param.url + '&callback=' + param.type;
    script.async = true;
    script.type = 'text/javascript';
    window[param.type] = function (data) {
        param.success(data);
    }
    document.body.appendChild(script);
}

jsonP({
    url: '',
    type: 'callback',
    success: function () {

    }
})