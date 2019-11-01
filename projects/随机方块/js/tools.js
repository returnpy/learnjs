var Tools = {
    getRandom: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getRGB: function () {
        let r = Tools.getRandom(100, 255);
        let g = Tools.getRandom(100, 255);
        let b = Tools.getRandom(100, 255);
        let rgb = `rgb(${r},${g},${b})`
        return rgb;
    }
}

