/*document.write("<h1>ยามามิย่า</h1>");

document.write("<p>java เบื้องต้น</p>");

alert("Hi");
console.error("sdf");*/
/*let Name ; //สร้างตัวแปรแต่ยังไม่กำหนด
let age = 20;*/
/*let Name = "for", age = 20; //เขียนรวม

const vat = 0.07; // เปลี่ยนค่าไม่ได้ เป็นค่าคงที่
console.log("Before =",vat)
vat = 0.08;
console.log("After = ",vat)*/
/*Name = "ดอกไม้"; //กำหนดข้อความลงไปเก็บในตัวแปร
console.log(Name);
document.write(Name);
console.log("อายุ = ",age);*/

/*let money = 500 ; //number(integer)
let price = 99.99 ; //number(float)
let message = "hi";
let name = "hui";

let checkname = false ;
let checkproduct = true; 

//let age = "20" ; //number หากใส่ "" จะกลายเป็น String หากใส่""ตามด้วย+ตัวเลขจะเป้นการ"20"+10=2010 
let age = parseInt("20.15"); //วิธีการแปลงเป็นnumber ใช้เป็น parseint/parse*/

/*console.log(typeof(money));
console.log(typeof(price));
console.log(typeof(message));
console.log(typeof(name));
console.log(typeof(checkname));
console.log(typeof(checkproduct));*/
/*console.log(age);
console.log(typeof(age))*/
/*//วิธีสร้างแบบที่ array 1
let myday = new Array();
myday[0] = 2000;
let number = new Array(100,"200",300,400.99,500,600,true)
// index เริ่มต้นที่เลข 0 หมายถึงสมาชิกตัวแรก
console.log(myday)
console.log(number)
console.log("ตัวที่2 =", number[1])*/
/*//วิธีที่สร้างแบบที่ array 2
let color = ["แดง","ม่วง"]
color[0]="ฟ้า";
console.log(color)*/

/*//ตัวดำเนินการ Operetor
console.log("ผลบวก = ", 5+10);*/

/*//ตัวดำเนินการเปรียบเทียบ
let a = 5, b = 10;
console.log(a==b);

//ตัดเกรด
// and => และ
// or => หรือ
// 70-80 => A
// 50-69 => B
// 49 => F

// and (true) => ซ้าย && ขวา ต้องเป็นจริงทั้งคู่ ผลลัพถึงเป็นจริง
// or (true) => ซ้าย || ขวา ต้องมีด้านใดด้านหนึ่งเป็นจริง ผลลัพต์ก็จะเป็นจริง
let score = 70;
console.log(score >=70 && score <=80,"A");
console.log(score >=50 && score <=69,"B");
console.log(score <=49,"F");*/
//การเพิ่มค่า
/*let a = 5, b = 10;
console.log("ค่าเริ่มต้น = ", a);
console.log("prefix = ",++a);
console.log("ค่าปัจจุบัน = ",a);

a=5; //reset
//เพิ่มค่าแบบ postfix
console.log("ค่าเริ่มต้น = ",a);
console.log("postfix = ",a++);
console.log("ค่าปัจจุบัน = ",a);

//ลดค่า
console.log("ค่าเริ่มต้น = ",b);
console.log("prefix = ",--b);
console.log("ค่าปัจจุบัน = ",b);

//ลดค่าแบบ postfix
b=10;
console.log("ค่าเริ่มต้น = ",b);
console.log("postfix = ",b--);
console.log("ค่าปัจจุบัน = ",b);*/
/*//compound assign
let x=10 , y=20;

console.log("ก่อน = ", x)
x+=y // x= x+y
console.log("หลัง = ",x)

x=10,y=20;

console.log("ก่อน = ",x);
x-=y
console.log("หลัง = ",x)

x=10,y=20;
console.log("ก่อน = ",x)
x*=y
console.log("หลัง = ",x)*/

/*//ลำดับความสำคัญตัวดำเนินการ
let a=5,b=8,c=9;

//ลำดับ*เป็นลำดับที่3 และ+ - เป็นลำดับที่ 4 จึงทำให้เป็น C*B แล้วจึงมา + A
console.log(a+b*c);
//ถ้าลำดับความสำคัญเท่ากันจะเป็นจากซ้ายไปขวา
console.log(10-4+2);
//()จะเป็นลำดับที่ 1 จึงทำให้ใน()เป็นตัวคำนวณก่อนนอก()
console.log(10-(2+1));
//จะดำเนินการคุณและหารให้เสร็จแล้วจึงค่อยลบ เนื่องจากคูณและหารเป็นลำดับที่ 3 ก่อน -(ลำดับที่4)
console.log(5*2-40/5);
//เป็นการนำ 8/2 ก่อนเนื่องจากเป็นลำดับที่ 3 ก่อน+ เป็นลำดับที่4
console.log(7+8/2+25);*/

/*//เงื่อนไข if statement 
age=31;

let result = (age >= 15 && age <=30); // true / false
//เงื่อนไขเป็นจริง
if(result){
    //คำสั่งให้ทำอะไร
    console.log("วัยรุ่น");
}
let result1 = (age >=31 && age <=50);
if(result1){
    console.log("ผู้ใหญ่");
}

//2เงื่อนไข ถ้าเป็นจริง1 เป็นเท็จ1
let balance = 5000 ;
let withdraw = 500 ;

if(withdraw<=balance){
    console.log("ยอดเงินปัจจุบัน = ",balance);
    console.log("ดำเนินการถอนเงิน = ",withdraw);
    balance = balance-withdraw;
    console.log("ยอดคงเหลือ = ",balance);
}
//เมื่อเงื่อนไขไม่ผ่าน/เป็นเท็จ
else{
    console.log("ยอดเงินของคุณไม่เพียงพอ");
}*/

/*//ถ้าหลายกรณี
let score = 30;
//มากกว่า 40 =>D มากกว่า 50 =>C มากกว่า 60 => B มากกว่า 70 => A
if(score>=70){
    console.log("เกรด A ");
}
else if(score>=60){
    console.log("เกรด B");
}
else if(score>=50){
    console.log("เกรด C");
}
else if(score>=40){
    console.log("เกรด D");
}
else{
    console.log("เกรด F");
}
let pass = score ? "ผ่านเกณฑ์": "ไม่ผ่านเกณฑ์"
console.log(pass)*/

/*// if ซ้อน If
let age = 14;

if(age<=15){
    if(age==15){
        console.log("ม.3");
    }else if(age==14){
        console.log("ม.2");
    }else if(age==13){
        console.log("ม.1");
    }else{
        console.log("ประถมศึกษา / อนุบาล")
    }
}else{
    console.log("ม.ปลาย / ปริญญา");
}*/
/*//switch case
let month = 2; //0ปิดไฟ //1เปิดไฟ
let name ;
/*if(status==0){
    light = "ปิดไฟ";
}else if (status==1){
    light = "เปิดไฟ";
}else{light="ไม่พบข้อมูล";}

switch(status){
    case 0 : light = "ปิดไฟ";
        break;
    case 1 :  light = "เปิดไฟ";
        break;
    default : light = "ไม่พบข้อมูล";
}
switch(month){
    case 1 : name = "มกรา";
        break;
    case 2 :  name = "กุมภา";
        break;
    default : name = "ไม่พบข้อมูล";
}
console.log(name);*/

/*//ตรวจสอบเลขคู่เลขคี่
let x=55;
if(x%2 == 0){
    console.log("เลขคู่");
}else{
    console.log("เลขคี่");
}*/

/*//โปรแกรมเปรียบเทียบตัวเลข
let x=100, y=100;

if (x>y) {
    console.log("x มีค่ามากที่สุด");
}else if (x<y) {
    console.log("y มีค่ามากที่สุด");
}else{
    console.log("มีค่าเท่ากัน");
}*/

/*//while Loop
let count = 1;
while (count <= 5) {
    console.log("ผลิดสินค้า = ",count);
    if(count==3){
        break;
    }
    count++;
}console.log("จบโปรแกรม");*/

/*//For Loop
for (let name = 1; name<=10; name++){
    if (name==5) continue;
    console.log(name);
}console.log("จบโปรแกรม");//ถ้าใช้ Continue ตรงกับช่องทางที่5 ก็จะข้ามไป*/

/*//Do..while ให้ลองทำก่อนแล้วค่อยทำซ้ำ /หากเป็น While ต้องผ่านเงื่อนไขจะทำเลย
let count = 1;

do{
    if (count==20) break;
    count++;
    console.log(count);
    
}while(count<=50);*/

//ฟังก์ชัน Function
/*//ฟังก์ชันแบบไม่มีการกำหนดค่ารับและส่ง

function header() {
    console.log("hello");
}

function message() {
    alert("hello");
}

function display() {
    document.write("hello");
}

header(); //เรียกใช้งานฟังก์ชัน
message();*/

/*//ฟังก์ชันแบบมีการกำหนดรับค่า
function plusnumber(x) {
    console.log("เลขที่ส่งมาคือ =",x);
}

function fullname(fname , lname,city) {
    console.log("ชื่อจริง = ",fname,"นามสกุล = ",lname,"ที่อยู่ = ",city);
}

fullname("อมเรศ","วรุตม์","baba")
//แบบรับค่าเข้ามาทำงาน
function summation(x,y) {
    let total = x+y;
    console.log("ผลรวม =",total);
}

summation(10,50);
summation(500,900);
let number = "สวัสดี";
plusnumber(number);

//แบบส่งค่าออกมา
function getTP() {
    return "127.0.0.1";
}
function getnumber() {
    return 100*100;
}
//สามารถกำหนดค่ารับในฟังก์ชันได้เลยโดยระบุตัวรับก่อนที่จะส่ง
function getmyadr() {
    let city = "ดอกทอง";
    return city;
}
//จะต้องกำหนดตัวค่าที่จะรับ
let myIP = getTP();
let total = getnumber();
console.log("IP = ",myIP);
console.log("ผลลัพธ์ = ",total);
console.log("ที่อยู่ = ",getmyadr());*/

/*//ฟังก์ชันที่มีการรับและส่งค่า
function setsalary(salary) {
    let bonus = 1000;
    return salary+bonus;
}

function summation(x,y) {
    return x+y;
}
let sum = summation(50,100);
console.log("ผลรวม",sum);

let a = setsalary(15000);
a-=500;
console.log("A เงินเดือนรวม =",a);
let b = setsalary(20000);
b-=600;
console.log("B เงินเดือนรวม =",b);

function getname(name,city) {
    return name + "" + city;
}
console.log(getname("ใจดี","ระนอง"));
console.log(getname("ตีควย"," ให้หัก"));*/

/*//ฟังก์ชันแบบกำหนดค่าเริ่มต้น
function fullname(fname,lname = "วรุต",city) {
    console.log("ชื่อ = ",fname,"สกุล = ",lname,"ที่อยู่ = ",city);
}
fullname("lala","","lala");//ถ้าไม่ได้มีการระบุใดๆก็จะใส่ค่าที่อยู่ใน parame ลงไปเป็นค่าเริ่มต้น*/

/*//ขอบเขตตัวแปร
let a = 100;// global จึงทำให้สามารถดำเนินการทั้งในและนอกฟังก์ชันได้

function display() {
    let b = 50;
    console.log("ตัวแปร(ในฟังก์ชัน) = ",a);
    console.log("ตัวอื่นๆ(ในฟังก์ชัน) = ",b);
}// ตัวแปร b อยู่ภายในฟังก์ชัน จะทำงานเฉพาะในฟังก์ชัน

//console.log("a (นอกฟังก์ชัน) = ",a); จะไม่สามารถแสดงนอกฟังก์ชันได้เนื่องจากไม่พบข้อมูล
console.log("global(นอกฟังก์ชัน) = ",a);
display();
//หากเป็นการตั้งชื่อเหมือนกัน จะดึงข้อมูลของฟังก์ชันที่อยู่ในกับอยู่นอกเท่านั้น*/

//Array Properties & Function
/*//สมาชิกและเรียงลำดับ
let color =["red","blue","yellow","green","purple"];
console.log("before = ",color);
let result = color.sort();//จะเรียงตามอักษร/จากน้อยไปมาก
console.log("after = ",color);

let fruit =["mango","apple","banana","meaw"]
console.log("before = ",fruit);
let re = fruit.reverse();
console.log("after = ",re);

//สมาชิกตัวแรกและตัวสุดท้าย
console.log(color[0]); 
console.log(color[color.length-1]); 

//เพิ่มสมาชิก
console.log("after",color);
color.push("grey","pink","black");
console.log("after =",color);
console.log(color.sort());

let number = [20,-5,-2,40,100,-500,150];
console.log(number.sort());//ถ้าใช้กับกลุ่มตัวเลขจะเรียงแค่เลขด้านหน้า แต่ไม่ได้เรียงจากน้อยไปมาก
number.sort(function(a,b) {
    return a-b;
});//ใช้เรียงจากน้อยไปมาก a ค่าตัวเลขลบจะถูกเรียงก่อน b ค่าตัวเลขบวกจะถูกเรียงทีหลัง
console.log(number);

let point = [20,-5,-2,40,100,-500,150];
console.log("จำนวนก่อนเรียง = ",point);
point.sort(function (a,b) {
    return b-a;  
});
console.log("จากมากไปน้อย = ",point);*/

/*//เข้าถึงสมาชิกด้วย For Loop
let color =["red","blue","yellow","green","purple"];

color.push("balck","grey")
for (let i = 0; i < color.length; i++) {
    console.log("ลำดับที่ =",(i+1),"มีค่า = ",color[i]);
}*/

/*//การเข้าถึงสมาชิกด้วย ForEach
let color =["red","blue","yellow","green","purple"];
color.forEach(mycolor);

function mycolor(colors) {
    console.log("color",colors);
}*/

/*//แปลง Array เป็น String
let color =["red","blue","yellow","green","purple"];
//let x = color.toString();
//let x = color.join(" | "); // เปลี่ยนเป็น String 
console.log(color);
let x = color.pop();//เก็บสมาชิกตัวสุดท้ายไว้ใน x
console.log(color);
console.log(x);*/

/*//วิธีการรวม Array
let a = ["ผักกาด","ผักชี"];
let b = ["ส้ม","องุ่น"];
let c = ["เม้าส์","คีย์บอร์ด"];

let carts = a.concat(b,c);
console.log(carts);*/

/*//Javascript Object
//let user={name : "Hui",age:20,city:"thai"};
//let fruit={name :"มะม่วง",price:200,category:"ผลไม้"};

//console.log(user.name,fruit.price);

let baba = {
    name :"มะม่วง",
    price:200,
    category:"ผลไม้",
    dada : function () {
        return "ชื่อสินค้า = " + this.name + " ราคาสินค้า = " + this.price + " หมวดหมู่สินค้า = " + this.category
    }
};

console.log(baba.dada());*/

/*//ยืนยันด้วย Confirm
function deletedata() {
    let result = confirm("คุณต้องการลบช้อมูลนี้ใช่หรือไม่");
    if (result) {
        console.log("ลบข้อมูลเรียบร้อย");
    } else {
        console.log("ยกเลิกการลบข้อมูล");
    }
};*/

/*//DOM
//let a = document.getElementsByTagName('p');
//console.log(a);
let a = document.getElementById('demo'); //อ้างอิง
//a.innerText="เรียน JavaScript เบื้องต้น"

let x = 10;
let y = 20;
function displaytext() {
    a.innerHTML=`แสดงข้อมูลตัวแปร x = ${x} ตัวแปร y = ${y}`; // แสดงผลเป็นข้อความ innertext ถ้าต้องการให้เป็นตัวหนาให้ใช้ innerhtml
}//``สัญลักษณ์ตัวหนอน
let b = document.querySelector('.domo');//เอาไว้ระบุคลาส
let c = document.querySelector('.doo'); //ถ้าต้องการให้แท็ก Pมาครบสามารถใช้เป็น Queryselectorall
//console.log(b);
console.log(c);
function displaytext() {
    a.innerHTML=`แสดงข้อมูลตัวแปร x = ${x} ตัวแปร y = ${y}`;
    b.innerHTML=`0sfsfdsa`;
    c.innerHTML=`doremefasol`;
}*/

/*//DOM Document เปลี่ยนข้อมูลหรือสไตล์ด้านใน
const demo = document.getElementById('demo');
const domo = document.querySelector('.domo');
const all = document.querySelectorAll('p');

const sodo = document.querySelector('.sodo');

//function displaytext() {
    //demo.style.color="skyblue";
    //demo.style.backgroundColor="black";
    //demo.style.fontSize="30px";
    //domo.setAttribute('class','hui')
    //sodo.setAttribute('class','dark');}

function lightmode() {
    sodo.setAttribute('class','sodo');
}
function darkmode() {
    sodo.setAttribute('class','dark');
}*/

//node list
/*const menu = document.getElementById('menu');
//let count = 1 ;
function additem() {
    const item = document.createElement('li');
    item.innerText = "item"+ (count++);
    menu.appendChild(item);
}
const menu = document.getElementById('menu');

const item = document.getElementById('item3');

const item2 = document.getElementById('item2');
const newitem = document.createElement("li");
newitem.innerText= "x" ;

function replace() {
    menu.replaceChild(newitem,item2);
}
//function deleteitem() {menu.removeChild(item); // ลบแค่อันที่ 3 }*/

/*//Dom CSS Add&Remove Class
const box = document.getElementById('box');

function addDarkmode() {
    box.classList.add("darkmode");
}
function removedarkmode() {
    box.classList.remove("darkmode");
}
function switchmode() {
    box.classList.toggle("darkmode");
    if(box.classList.contains("darkmode")){
        box.style.color="blue";
    }else{
        box.style.color="red";
    }
}*/

//Domevent
/*function welcome() {
    alert("ยินดีต้อนรับเข้าสู่หน้าเว็บของเรา");
}
function hightlight(Obj){
    Obj.style.background="salmon";
}
function unhightlight(obj){
    obj.style.background="skyblue";
}

function getmenu() {
    const menu = document.getElementById('menu');
    const display = document.getElementById('display')
    console.log(menu.value.toUpperCase());
    display.innerText = menu.value;
}
function hightlight(obj) {
    obj.style.background = 'salmon';
}
function unhl(obj) {
    obj.style.background = 'skyblue';
}*/

//eventlistener
//อัางอิง
const menu = document.getElementById('menu');
const display = document.getElementById('display');
const btn = document.getElementById('btn');

//event
menu.addEventListener('change',getmenu);
btn.addEventListener('click',showwelcome);

function showwelcome() {
    alert("ยินดีต้อนรับเข้าสู่หน้าเว็บ")
}

function getmenu() {
    display.innerText = menu.value;
    //console.log(menu.value);
}