const balance = document.getElementById('balance');
const money_minus = document.getElementById('money-minus');
const money_plus = document.getElementById('money-plus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transaction=[];

function init() {
    list.innerHTML = '';
    transaction.forEach(adddatatolist);
    calculatemoney();
}



function adddatatolist(transaction) {
    const symbol = transaction.amount < 0 ?'-' : '+';
    const status = transaction.amount < 0 ?'minus' : 'plus';
    const item = document.createElement('li');
    result = formatNumber(Math.abs(transaction.amount));
    
    item.classList.add(status)
    item.innerHTML =`${transaction.text}<span>${symbol}${result}</span><button class="delete-btn" onclick="removeData(${transaction.id})">X</button>` ;
    list.appendChild(item);
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
function autoID() {
    return Math.floor(Math.random()*1000000)
}
 
function calculatemoney() {
    const amounts = transaction.map(transaction=>transaction.amount);
    //คำนวณยอดคงเหลือ
    const total = amounts.reduce((result,item)=>(result+=item),0).toFixed(2);
    //คำนวณรายรับ
    const income = amounts.filter(item=>item>0).reduce((result,item)=>(result+=item),0).toFixed(2);
    //คำนวณรายจ่าย
    const expense = (amounts.filter(item=>item<0).reduce((result,item)=>(result+=item),0)*-1).toFixed(2);
    

    //แสดงผล
    balance.innerText=`฿`+formatNumber(total);
    money_plus.innerText=`฿`+formatNumber(income);
    money_minus.innerText=`฿`+formatNumber(expense);
}
function removeData(id){
    transaction=transaction.filter(transaction=>transaction.id !==id);
    init();
}

function addtrasaction(e) {
    e.preventDefault();
    if(text.value.trim() === '' || amount.value.trim()=== ''){
        alert("กรุณากรอกข้อมูลให้ครบ");
    }else{
        const data = {
            id:autoID(),
            text: text.value,
            amount:+amount.value
        }
        transaction.push(data);
        adddatatolist(data);
        calculatemoney();
        text.value='';
        amount.value ='';
    }
}


form.addEventListener('submit',addtrasaction);
init();