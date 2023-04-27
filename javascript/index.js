//rem调整
var c = () => {
   // 获取设备的宽度
   let w = document.documentElement.clientWidth;
   let n = (16 * (w / 1400) > 40 ? 40 + "px" : (16 * (w / 1400) + "px"));
   document.documentElement.style.fontSize = n;
}
window.addEventListener("load", c);
window.addEventListener("resize", c);
// 分享按钮图标
const fx = document.querySelectorAll('.fx i')
const fximg = [{
   url: './image/QQ.png'
}, {
   url: './image/微博.png'
}, {
   url: './image/微信.png'
}]
for (let i = 0; i < fx.length; i++) {
   fx[i].style.backgroundImage = `url(${fximg[i].url})`
}
// 合作伙伴图片1
const hzhb1 = document.querySelectorAll('.box2-Img0 i')
const hzhbimg1 = [{
   url: "./image/卡车之家.png"
}, {
   url: "./image/卡车之家.png"
}, {
   url: "./image/卡车之家.png"
}, {
   url: "./image/卡车之家.png"
}]
for (let i = 0; i < hzhb1.length; i++) {
   hzhb1[i].style.backgroundImage = `url(${hzhbimg1[i].url})`
}
// 合作伙伴图片2
const hzhb2 = document.querySelectorAll('.box2-Img1 i')
const hzhbimg2 = [{
   url: "./image/Github.png"
}, {
   url: "./image/Github.png"
}, {
   url: "./image/Github.png"
}, {
   url: "./image/Github.png"
}]
for (let i = 0; i < hzhb2.length; i++) {
   hzhb2[i].style.backgroundImage = `url(${hzhbimg2[i].url})`
}
// 合作伙伴图片3
const hzhb3 = document.querySelectorAll('.box2-Img2 i')
const hzhbimg3 = [{
   url: "./image/阿里云官方-中文LOGO.png"
}, {
   url: "./image/阿里云官方-中文LOGO.png"
}, {
   url: "./image/阿里云官方-中文LOGO.png"
}, {
   url: "./image/阿里云官方-中文LOGO.png"
}]
for (let i = 0; i < hzhb3.length; i++) {
   hzhb3[i].style.backgroundImage = `url(${hzhbimg3[i].url})`
}
//轮播图
const lbtxd = document.querySelectorAll('.box2 ul li')
let i = 0
setInterval(function () {
   i++
   if (i >= 3) {
      i = 0
   }
   document.querySelector('.active2').classList.remove("active2")
   let lbtbt = document.querySelector(`.box2-Img${i}`)
   lbtbt.classList.add('active2')
   document.querySelector('.active').classList.remove("active")
   lbtxd[i].classList.add('active')
}, 1000)
//滑动卡片
const leftbutton = document.querySelector('.leftbutton')
const rightbutton = document.querySelector('.rightbutton')
const box5flex = document.querySelector('.box5flex')
const box5jdt = document.querySelector('.box5hx p')
let offsetLeft = 0;
leftbutton.addEventListener('click', function () {
   let originalWidth = box5jdt.offsetWidth
   offsetLeft -= 340;
   console.log(box5jdt.offsetWidth)
   if (offsetLeft < -1000) {
      offsetLeft = 300
   }
   if(originalWidth/16<=26.25){
      let newWidth = (originalWidth/16 + 8.75) + 'rem';
      box5jdt.style.width = newWidth;
   }
   if(originalWidth/16>=35){
      box5jdt.style.width =17.5+'rem'
   }
   box5flex.style.left = `${offsetLeft}px`;
});
rightbutton.addEventListener('click', function () {
   offsetLeft += 340
   if (offsetLeft > 980) {
      offsetLeft = 300
   }
   let originalWidth = box5jdt.offsetWidth/16
   if(originalWidth>0){
      let newWidth = (originalWidth - 8.75) + 'rem';
      box5jdt.style.width = newWidth;
   }
   if(originalWidth<=0){
      box5jdt.style.width =17.5+'rem'
   }
   box5flex.style.left = `${offsetLeft}px`;
})
// 卡片鼠标浮动
const box6x = document.querySelectorAll('.box6flexbj')
const box6flexright = document.querySelectorAll('.box6flexright')
for (let i = 0; i < box6x.length; i++) {
   box6x[i].addEventListener('mousemove', function () {
      document.querySelector(".box6flexkz").classList.remove('box6flexkz')
      document.querySelector(".box6flexbjbs").classList.remove('box6flexbjbs')
      box6x[i].classList.add('box6flexbjbs')
      box6flexright[i].classList.add('box6flexkz')
   })
}
//校区地址和图片
const sz = [[{ address: '浙江省杭州市拱墅区祥符街道天目山路888号',img1:"./image/杭州1.jpg",img2:"./image/杭州2.jpg"}, { address: '上海市虹口区武进路568号',img1:"./image/上海1.jpg",img2:"./image/上海2.jpg" }, { address: '宁波市海曙区珠江路999号',img1:"./image/宁波1.jpg",img2:"./image/宁波2.jpg" }, { address: '南京市秦淮区华侨路888号',img1:"./image/南京1.jpg",img2:"./image/南京2.jpg" }], [ { address: '北京市朝阳区建国门外大街666号',img1:"./image/北京1.jpg",img2:"./image/北京2.jpg" },{ address: '石家庄市长安区裕华东路777号',img1:"./image/石家庄1.jpg",img2:"./image/石家庄2.jpg" }], [{ address: '广州市天河区龙口西路666号',img1:"./image/广州1.jpg",img2:"./image/广州2.jpg" },{ address: '深圳市福田区红荔路999号',img1:"./image/深圳1.jpg",img2:"./image/深圳2.jpg" }, { address: '惠州市惠城区麦地路777号',img1:"./image/惠州1.jpg",img2:"./image/惠州2.jpg" }], [{ address: '成都市锦江区浆洗街666号',img1:"./image/成都1.jpg",img2:"./image/成都2.jpg" }, { address: '重庆市渝中区大礼堂街888号',img1:"./image/杭州1.jpg",img2:"./image/杭州2.jpg" }]];
const allULs = document.querySelectorAll('.box7zi1zi ul')
const address = document.querySelector(".box7zi2 span p")
const img1 = document.querySelector(".bo7zi2img .img1")
const img2 = document.querySelector(".bo7zi2img .img2")
for (let j = 0; j < allULs.length; j++) {
   const lis = allULs[j].querySelectorAll('li');
   for (let i = 1; i < lis.length; i++) {
      const currentLi = lis[i];
      currentLi.addEventListener('click', function () {
         address.innerHTML = sz[j][i - 1].address
         console.log(sz[j][i-1].img1)
         img1.style.backgroundImage=`url(${sz[j][i-1].img1})`
         img2.style.backgroundImage=`url(${sz[j][i-1].img2})`
      });
   }
}
//box5的图片和文字赋值
const box5img=document.querySelectorAll('.box5ls i')
const box5zi =document.querySelectorAll(".box5lszi span")
const bimg=[{url:"./image/人物1.jpg",zi:"B站知名前端up主,《零基础必看的HTML+CSS3》等课程播放量达到1000W+.热情独特教学风格深受学生喜爱"},{url:"./image/人物2.jpg",zi:"5年一线IT培训讲师经验,丰富的互联网服务端开发经验.曾主导研发CRM系统、金融交易平台、物联网等大型项目."},{url:"./image/人物3.jpg",zi:"11年互联网工作经验,华为HCSI认证讲师,360官方安全认证讲师。曾参与五星级国企酒店网络安全架构设计."},{url:"./image/人物4.jpg",zi:"18年互联网从业经验,持有CISP等行业认证.曾就职百度、美敦力."},{url:"./image/人物5.jpg",zi:"4年互联网从业经验,高级运维工程师,精通Linux系统,具有红帽RHCE/华为HCIP等行业资质."}]
for(let i =0;i<box5img.length;i++){
   box5img[i].style.backgroundImage=`url(${bimg[i].url})`
   box5zi[i].innerHTML=`${bimg[i].zi}`
   console.log(bimg[i].url)
}
const button1 = document.querySelector('.button1')
button1.addEventListener('click',function(){
   window.location.href = './regerist.html';
})