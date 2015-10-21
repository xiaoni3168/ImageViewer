setTimeout(function() {
    document.getElementById('sourceImage').onclick = function(event) {
        var target = event.target;

        var image = new Image();
        image.src = target.src;

        var dom = document.createElement('div');
        // var img = document.createElement('img');
        var viewer = document.createElement('div');
        dom.setAttribute('id', 'viewPanel');
        dom.setAttribute('class', 'view-panel zoomIn');
        $(dom).css('transform-origin', event.clientX + 'px ' + event.clientY + 'px');
        // img.setAttribute('class', 'img-view');
        // img.style.margin = '-' + image.height / 2 + 'px 0 0 -' + image.width / 2 + 'px';
        // dom.onclick = function(event) {
        //     var _this = this;
        //     _this.setAttribute('class', 'view-panel zoomOut');
        //     var timer = setInterval(function() {
        //         document.body.removeChild(_this);
        //         clearInterval(timer);
        //     }, 350);
        // }
        dom.onclick = function(e1) {
            var _this = dom;
            _this.setAttribute('class', 'view-panel zoomOut');
            var timer = setInterval(function() {
                document.body.removeChild(_this);
                clearInterval(timer);
            }, 350);
        };
        // img.src = target.src;
        viewer.setAttribute('id', 'Image');
        dom.appendChild(viewer);
        document.body.appendChild(dom);
        // var timer = setInterval(function() {
        //     dom.style.webkitTransform = 'scale(1)';
        //     removeClass(dom, 'zoomIn');
        //     clearInterval(timer);
        // }, 350);
        setTimeout(function() {
            $('#Image').imageViewer(target.src);
        }, 10);
    }

}, 10);
// var removeClass = function(dom, cls) {
//     var test = dom.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
//     if(test) {
//         var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
//         dom.className = dom.className.replace(reg, ' ');
//     }
// }
