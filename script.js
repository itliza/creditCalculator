const mainItemContainer = document.querySelectorAll('.main_item');

const btnClose = document.querySelector('.btnClose');

const modalWindow = document.querySelector('.modal');

const searchInput = document.querySelector('#search');


function closeModal() {
    btnClose.addEventListener('click', ()=>{
        modalWindow.style.display = 'none';
    })
}

mainItemContainer.forEach((mainItem, mainIndex) =>{
    
    let btnMonoContainer = document.querySelectorAll('.mono');
    let btnPrivatContainer = document.querySelectorAll('.privat');
    let btnCreditContainer = document.querySelectorAll('.part_credit');
    let btnRacoonContainer = document.querySelectorAll('.bank_item');

    console.log(btnRacoonContainer);


    let itemName = mainItem.querySelector('.item_title').textContent;


    btnMonoContainer.forEach((btnMono, monoIndex)=>{
        if(mainIndex === monoIndex) {
            btnMono.addEventListener('click', ()=>{
                let priceItem = mainItem.querySelector('.item_price-js').textContent;
                priceItem = priceItem.replace(' ', '');

                modalWindow.style.display = 'flex';
                closeModal();

                let paymantsQuantity = btnMono.querySelector('.pay_part').textContent;
                let imgLink = mainItem.querySelector('.item_img').querySelector('img').src;


                if(paymantsQuantity === '3') {
                    monthlyPayment = priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = '';
                    document.querySelector('.final_price').textContent = `${priceItem} ₴`;
                } 
                else if(paymantsQuantity === '6') {
                    monthlyPayment = priceItem * 0.005 + priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 0.5% від повної вартості товару.`;
                    document.querySelector('.final_price').textContent = `${monthlyPayment * paymantsQuantity} ₴`;

                }


                document.querySelector('.title-js').textContent = itemName;
                document.querySelector('.price-js').textContent = priceItem + ' ₴';
                document.querySelector('.img-js').src = imgLink;
                document.querySelector('.bankName').textContent = 'Моно Банк';
                document.querySelector('.payments').textContent = paymantsQuantity;
                document.querySelector('.monthlyPayment').textContent = monthlyPayment;
                console.log(imgLink);


            })
        }






    })


    btnPrivatContainer.forEach((btnPrivat, privatIndex)=>{
        if(mainIndex === privatIndex) {
            btnPrivat.addEventListener('click', ()=>{
                let priceItem = mainItem.querySelector('.item_price-js').textContent;
                priceItem = priceItem.replace(' ', '');

                modalWindow.style.display = 'flex';
                closeModal();

                let paymantsQuantity = btnPrivat.querySelector('.pay_part').textContent;
                let imgLink = mainItem.querySelector('.item_img').querySelector('img').src;


                if(paymantsQuantity === '6') {
                    monthlyPayment = priceItem * 0.005 + priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 0.5% від повної вартості товару.`;
                    document.querySelector('.final_price').textContent = `${monthlyPayment * paymantsQuantity} ₴`;

                }
                else if(paymantsQuantity === '9') {
                    monthlyPayment = priceItem * 0.01 + priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 1% від повної вартості товару.`;
                    document.querySelector('.final_price').textContent = `${monthlyPayment * paymantsQuantity} ₴`;

                }
                else if(paymantsQuantity === '12') {
                    monthlyPayment = priceItem * 0.02 + priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 2% від повної вартості товару.`;
                    document.querySelector('.final_price').textContent = `${monthlyPayment * paymantsQuantity} ₴`;

                }


                document.querySelector('.title-js').textContent = itemName;
                document.querySelector('.price-js').textContent = priceItem + ' ₴';
                document.querySelector('.img-js').src = imgLink;
                document.querySelector('.bankName').textContent = 'ПриватБанк';
                document.querySelector('.payments').textContent = paymantsQuantity;
                document.querySelector('.monthlyPayment').textContent = monthlyPayment;
                console.log(imgLink);


            })
        }

    })


    btnCreditContainer.forEach((btnCredit, creditIndex)=>{
        if(mainIndex === creditIndex) {
            btnCredit.addEventListener('click', ()=>{
                let priceItem = mainItem.querySelector('.item_price-js').textContent;
                priceItem = priceItem.replace(' ', '');

                modalWindow.style.display = 'flex';
                closeModal();

                let paymantsQuantity = btnCredit.querySelector('.pay_part').textContent;
                let imgLink = mainItem.querySelector('.item_img').querySelector('img').src;


                if(paymantsQuantity === '6') {
                    monthlyPayment = priceItem * 0.005 + priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 0.5% від повної вартості товару.`;
                    document.querySelector('.final_price').textContent = `${monthlyPayment * paymantsQuantity} ₴`;

                }
                else if(paymantsQuantity === '9') {
                    monthlyPayment = priceItem * 0.01 + priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 1% від повної вартості товару.`;
                    document.querySelector('.final_price').textContent = `${monthlyPayment * paymantsQuantity} ₴`;

                }
                else if(paymantsQuantity === '12') {
                    monthlyPayment = priceItem * 0.02 + priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 2% від повної вартості товару.`;
                    document.querySelector('.final_price').textContent = `${monthlyPayment * paymantsQuantity} ₴`;

                }
                else if(paymantsQuantity === '15') {
                    monthlyPayment = priceItem * 0.035 + priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 3.5% від повної вартості товару.`;
                    document.querySelector('.final_price').textContent = `${monthlyPayment * paymantsQuantity} ₴`;

                }


                document.querySelector('.title-js').textContent = itemName;
                document.querySelector('.price-js').textContent = priceItem + ' ₴';
                document.querySelector('.img-js').src = imgLink;
                document.querySelector('.bankName').textContent = 'Credit Банк';
                document.querySelector('.payments').textContent = paymantsQuantity;
                document.querySelector('.monthlyPayment').textContent = monthlyPayment;
                console.log(imgLink);


            })
        }

    })


    btnRacoonContainer.forEach((btnRacoon, racoonIndex)=>{
        if(mainIndex === racoonIndex) {
            btnRacoon.addEventListener('click', ()=>{
                let priceItem = mainItem.querySelector('.item_price-js').textContent;
                priceItem = priceItem.replace(' ', '');

                modalWindow.style.display = 'flex';
                closeModal();

                let paymantsQuantity = btnRacoon.querySelector('.pay_part').textContent;
                let imgLink = mainItem.querySelector('.item_img').querySelector('img').src;


                if(paymantsQuantity === '3') {
                    monthlyPayment = priceItem * 0.015 + priceItem / paymantsQuantity;
                    monthlyPayment = monthlyPayment.toFixed(2);
                    document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 1.5% від повної вартості товару.`;
                    document.querySelector('.final_price').textContent = `${monthlyPayment * paymantsQuantity} ₴`;

                }


                document.querySelector('.title-js').textContent = itemName;
                document.querySelector('.price-js').textContent = priceItem + ' ₴';
                document.querySelector('.img-js').src = imgLink;
                document.querySelector('.bankName').textContent = 'Racoon Банк';
                document.querySelector('.payments').textContent = paymantsQuantity;
                document.querySelector('.monthlyPayment').textContent = monthlyPayment;
                console.log(imgLink);


            })
        }

    })
})


function searchModel(){

    const modelContainer = document.querySelectorAll('.main_item');
    
    searchInput.addEventListener('keyup', (e)=>{
        const word = e.target.value.toLowerCase();
        
        modelContainer.forEach(container =>{
            container.querySelector('.item_title').textContent.toLowerCase().includes(word) ? container.style.display = 'block' : container.style.display = 'none'
        })
    })

}

searchModel();

// function typeWords(text, par){
//     let speed = 100;
//     let i = 0;
//     if(i < text.length) {
//         par.textContent += text.charAt(i);
//         i++;
//         setTimeout(typeWords, speed);
//       }
// }

 
// let wordToMove = '- з кожного замовлення 3% йде на ЗСУ!';
// let addTo = document.querySelector('.container');

// typeWords(wordToMove, addTo); 

let text = '- з кожного замовлення 3% йде на ЗСУ!';
let speed = 100;
let i = 0;

function print(){
  if(i < text.length) {
    document.querySelector('.container').textContent += text.charAt(i);
    i++;
    setTimeout(print, speed);
  }
}

print();