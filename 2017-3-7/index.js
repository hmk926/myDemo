/**
 * Created by hmk on 2017/3/7.
 */
flag=1;
function foo1() {
    alert("Yes. you are right,love u 2! ")
}
function foo2() {

    if(flag==1) {

        document.getElementById("btn2").style.top=90;
        document.getElementById("btn2").style.left=500;
        flag=2;
    } else if(flag==2) {
        console.log("123");
        document.getElementById("btn2").style.top=90;
        document.getElementById("btn2").style.left=180;
        flag=3;
    } else if(flag==3) {
        document.getElementById("btn2").style.top=235;
        document.getElementById("btn2").style.left=360;
        flag=1;
    }
}