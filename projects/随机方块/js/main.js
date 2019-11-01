// 生成10个方框

var container = document.querySelector('#container');
var arr = [];
for (let i = 0; i < 40; i++) {
    var box = new Box(container, {
        color: Tools.getRGB()
    });
    arr.push(box);
}

setInterval(() => {
    arr.forEach(element => {
        element.random();
    });
}, 500);