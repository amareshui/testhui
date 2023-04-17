//ข้อมูลที่เป็นตัวเลข
const currency_1 = document.getElementById('currency1');
const currency_2 = document.getElementById('currency2');

const amount_1 = document.getElementById('amount-1');
const amount_2 = document.getElementById('amount-2');

//ตัวข้อมูลสลับ
const ratetext = document.getElementById('rate');
const swap = document.getElementById('btn');

currency_1.addEventListener('change',calculateMoney);
currency_2.addEventListener('change',calculateMoney);
amount_1.addEventListener('input',calculateMoney);
amount_2.addEventListener('input',calculateMoney);

function calculateMoney(){
    const one = currency_1.value;
    const two = currency_2.value;
    fetch(`https://v6.exchangerate-api.com/v6/abe9207ccadd206f010942a4/latest/${one}`)
    .then(res=>res.json()).then(data=>{
        const rate = data.conversion_rates[two];
        ratetext.innerText=`1=${one} = ${rate}${two}`;
        amount_2.value=(amount_1.value*rate).toFixed(2);
    })
}
swap.addEventListener('click',()=>{
    const temp = currency_1.value;
    currency_1.value = currency_2.value;
    currency_2.value = temp;
    calculateMoney();
})

calculateMoney();