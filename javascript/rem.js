//rem调整
var c = () => {
    // 获取设备的宽度
    let w = document.documentElement.clientWidth;
    let n = (16 * (w / 1400) > 40 ? 40 + "px" : (16 * (w / 1400) + "px"));
    document.documentElement.style.fontSize = n;
 }
 window.addEventListener("load", c);
 window.addEventListener("resize", c);