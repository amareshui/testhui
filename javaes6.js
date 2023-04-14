//Arrow Function
/*//แบบเก่า 
function ชื่อ(ชื่อจริง,นามสกุล){
    return ชื่อจริง+นามสกุล
}
//แบบใหม่
ชื่อ=(ชื่อจริง,นามสกุล)=>ชื่อจริง+นามสกุล{หากมีข้อมูลหรือคำสั่งเพิ่มเติม}*/

//object
/*const customer = "Hui"
const age = 2
const address = "กทม"

const customer1 = {
    customer,
    age,
    address
}
console.log(customer1);*/

//string
/*const name1 = "jojo"

const address =`ชื่อลูกค้า : ${name1}
ที่อยู่ 555/123 เกกา เมือง จังหวังสี
เบอร์ติดต่อ 0321654987`

console.log(address);*/

// spred operator
/*//การใช้...นำหน้าจะเป็นการกระจายข้อมูลที่อยู่ใน Array นั้นๆเข้าไปในอันใหม่
const number = [100,200,300]
const newnb = [50,30,...number]

const nbnewer = [500,900]
//สามารถใช้คำสั่งได้เช่นกัน (ชื่อarray).push(...ชื่อArray)
newnb.push(...nbnewer)

console.log(newnb);*/

//rest parametor
/*//function sum(x,y) {return x+y}
//sum=(x,y)=>x+y
sum=(...number)=>{
    let total = 0
    for (let nb of number) total+=nb //ตัวเลขnb มาจาก number ซึ่งจะกำหนดในsum มา+กัน
    return total
}
console.log(sum(50,100));
console.log(sum(50,100,5000));*/

//Destructuring
/*//คือการจับคู่ข้อมูลให้กับข้อมูล
const color = ["แดง","เขียว","เหลือง"]
const [a,b,c] = color

console.log(a);
console.log(b);

const pd = {
    product : "คอมพิวเตอร์",
    price : 50000,
    stock : 10
}
const {product:pdname,price:pr,stock:st} = pd

console.log(pr);*/

//Default parameter
/*//แบบดังเดิม
getdata=(csname,csaddress)=>{
    if(!csaddress){
        csaddress = "bkk"
    }//เช็คว่ามีข้อมูลไหม ถ้าหากไม่มีจะเติม bkk ลงไปให้
    const address=`ชื่อลูกค้า : ${csname}
    ที่อยู่ : ${csaddress}`
    return address
}
console.log(getdata("Hui","bkk"));
console.log(getdata("Tee"));

//แบบใหม่ คือการนำข้อมูลใส่เข้าไปในparametor เลยจะทำให้เป็นค่าเริ่มต้นหากไม่มีข้อมูลใส่ไว้
getdata=(csname,csaddress="กทม")=>{
    const address=`ชื่อลูกค้า : ${csname}
    ที่อยู่ : ${csaddress}`
    return address
}
console.log(getdata("Hui","bkk"));
console.log(getdata("Tee"));*/

//join,concat
/*const data = [100,200,300]
const data2 = [400,500]
console.log(data);

//join แปลงค่า array เป็น string
//const result = data.join("|")
//console.log(result);

//concat
const alldata = data.concat(data2)
console.log(alldata);
const result = alldata.join("|")
console.log(result);*/

//push,pop,shift,unshift
/*// push เป็นการใส่ข้อมูลต่อท้ายเข้าไป
const data = [10,20,30]
data.push(...[500,300])
console.log(data);

//pop เป็นการลบข้อมูลหลังสุดออก
data.pop()
console.log(data);

//shift เป็นการดึงข้อมูลออกไปจากด้านหน้าสุด
data.shift()
console.log(data);

//unshiftเพิ่มข้อมูลใส่เข้าไปด้านหน้า
data.unshift(300)
console.log(data);*/

//Splice&slice 
/*//splice ตำแหน่งที่จะลบ(indexเริ่มต้น 0),จำนวนที่จะลบ,สมาชิกที่ต้องการแทรกเข้าไปในตำแหน่งที่
//slice เป็นการดึงสมาชิกเพื่อใช้งาน (ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)
const data1 = [10,20,30,40,50]
//data1.splice(1,3)//ลบindexที่1-3 (ตัว20 30 40)
console.log(data1);

const last = data1.slice(1,3) //ดึงข้อมูล index ที่ 1 ก่อนindex ที่3 (-1)
console.log(last);*/

//Loop Array
/*//For Loop , For each, ForOf

const data = [10,20,30,40,50]
//for Loop
for (let i = 0; i < data.length; i++) {
       if (data[i]>=30) break
        console.log(`ลำดับที่ ${i}= ${data[i]}`);
}

//for each จะไม่สามารใช้ break/continue ได้
data.forEach(e => {
    if(e>=30){console.log("hi");}//ถ้ามากกว่าหรือเท่ากับ 30 จะใส่ข้อมูลว่าhi
    console.log(`สมาชิกใน Array = ${e}`);
});

//For Of สามารใช้งาน break/continueได้
for (const Element of data) {
    if (Element>=40) break
    console.log(`สมาชิก data = ${Element}`);
}*/

//ค้นหาข้อมูลใน Array
/*//indexOf(ข้อมูล) => ผลการต้นหาจะได้ตำแหน่ง index ที่ค้นหาเจอ ถ้าหาไม่เจอได้-1
//find(ข้อมูล) =>ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอได้ undefined
//findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง index ที่ค้นเจอ ถ้าค้นไม่เจอได้-1

//indexOf(ข้อมูล)
const color = ["แดง","ม่วง","ขาว","เขียว"]
const index = color.indexOf("เขียว")
console.log(index);

//find/findindex(ข้อมูล)
const search = color.findIndex(element=>element==="เขียว")
console.log(search);*/

//Array Map เปลี่ยนแปลงค่า
/*const number = [10,20,30,40]
const sum = number.map(e=>e*e)
console.log(`number = ${number}`);
console.log(`array map = ${sum}`);

const data = ["ฝนตก","แดดร้อน","ฟ้าคะนอง"]
const result = data.map((e,i)=>{
    return `วันที่ ${i+1} , สภาพอากาศ = ${e}`
})
console.log(result);

const data1 = [
    {day:"1/6/64",weather:"แดดร้อน",temp:27},
    {day:"2/6/64",weather:"ฝนตก",temp:25},
    {day:"3/6/64",weather:"อบอ้าว",temp:30}
]
const sum = data1.map(e=>e.weather)
console.log(sum);*/

//Array filter ส่งค่าทางตรรกะศาสตร์ออกมา
/*const data = [10,20,30,40]
const sum = data.filter(e=>e>20)
console.log(sum);

const data = [
    {name:"ฮุย", salary:20000, depart:"programmer"},
    {name:"ตี๋", salary:15000, depart:"บัญชี"},
    {name:"C", salary:5000, depart:"แม่บ้าน"},
    {name:"จุ่ม", salary:3000, depart:"ขับรถ"},
    {name:"จิม", salary:10000, depart:"CS"}
];

console.log(data); 

const sum = data.filter(e => e.salary >= 10000);
console.log(sum);*/

//Array Reduce
/*//ทวนเรื่องmap
const data = [10,20,30,40,50]
const sum = data.map(e=>100)
console.log(sum);

//ทวนเรื่องfilter
const data = [10,20,30,40,50]
const sum = data.filter(e=>e>=20)
console.log(sum);

//reduce ส่งข้อมูลภายใน array เข้าไปทำงาน และส่งผลลัพต์ออกมาเป็นค่าแค่ค่าเดียว
//array.reduce((ค่าที่ถูกประมวลผล,e)=>{},ค่าเริ่มต้น) // value = 0 ค่าที่ถูกประมวลผล = ค่าเริ่มต้น

const data = [10,20,30,40,50]
const sum = data.reduce((value,e)=>e-value,0)
console.log(sum);

const cart = [
    {namepd:"กระเป๋า",price:500},
    {namepd:"กล้องถ่าย",price:10500},
    {namepd:"หนังสือ",price:150},
]
const sum = cart.reduce((value,e)=>e.price+value,0)
console.log(`ลูกค้าต้องชำระเงินทั้งหมด = ${sum} บาท`);*/