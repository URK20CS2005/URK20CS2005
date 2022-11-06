function Currenttime(){
    var l = new Date();
    var a = l.getHours();
    var b = l.getMinutes();
    var c = l.getSeconds();
    var period="AM";
    if (a > 12) {
        period = "PM";
    }
    var time = a+ ":" + b + ":" + c +""+period;
    document.getElementById('time').innerHTML = time;
}
function start(){
    setInterval("Currenttime()", 1000);
}
function color_ch() {
    var red = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var color = "rgb(" + red + "," + green + "," + blue + ")";

    document.getElementsByClassName("dynamic_bg")[0].style = "background-color:" + color;
    setTimeout(color_ch, 2000);
}
color_ch();

function incSize() {
    document.getElementById('para1').style.fontSize = "28px";
}
function decSize() {
    document.getElementById('para1').style.fontSize = "15px";
}

function init() {
    imgobj = document.getElementById('c-img');
    imgobj.style.left = '0px';
}
function moveRight() {
    imgobj.style.left = parseInt(imgobj.style.left) + 1 + 'px';
    animate = setTimeout('moveRight()', 10);

    if (parseInt(imgobj.style.left) >= 1300) {
        stop();
    }
}
function stop() {
    clearTimeout(animate);
    imgobj.style.left = '0px';
}
function student() {
    var stu_obj = [
        { name: 'Rohan', r_num: '123', dob: '31-aug-2003' },
        { name: 'Jascar', r_num: '456', dob: '24-aug-2003' },
        { name:'Vino',r_num:'789',dob:'06-apr-2003'}
    ];
    var str = ''
    for (var i = 0; i < stu_obj.length; i++) {
        var n = stu_obj[i].name;
        var r = stu_obj[i].r_num;
        var d = stu_obj[i].dob;
        if ( parseInt(d.slice(7,11))> 2000){
        str = str + "<br>" + "Name: " + n + "<br>" + "Register Number: " + r + "<br>" + "Date Of Birth: " + d + "<br>";
        document.getElementById('stu1').innerHTML = str;
        }
        else{
        var llr = "<br>" + "Name: " + n + "<br>" + "Register Number: " + r + "<br>" + "Date Of Birth: " + d + "<br>";
        document.getElementById('stu2').innerHTML = llr;
        }
    }
}