const mainItemContainer = document.querySelectorAll('.main_item');

const btnClose = document.querySelector('.btnClose');

const modalWindow = document.querySelector('.modal');

const searchInput = document.querySelector('#search');


function closeModal() {
    btnClose.addEventListener('click', ()=>{
        modalWindow.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    })
}

mainItemContainer.forEach((mainItem, mainIndex)=>{
    const payContainer = mainItem.querySelector('.item_pay-container');
    
    const monoBox = payContainer.querySelectorAll('.mono');
    const racoonBox = payContainer.querySelectorAll('.bank_item');
    const privatBox = payContainer.querySelectorAll('.privat');
    const creditBox = payContainer.querySelectorAll('.part_credit');

    monoBox.forEach((item, index) => {
        item.addEventListener('click', ()=>{
            let paymantsQuantity = item.querySelector('.pay_part').textContent;
            let title = mainItem.querySelector('.item_title').textContent;
            let price = mainItem.querySelector('.item_price').textContent.replaceAll(' ', '').replaceAll('₴', '');
            console.log(paymantsQuantity, title, price);

            modalWindow.style.display = 'flex';
            document.querySelector('body').style.overflow = 'hidden';
            closeModal();

            let imgLink = mainItem.querySelector('.item_img').querySelector('img').src;

            if(paymantsQuantity === '3') {
                monthlyPayment = price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = ``;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }
            if(paymantsQuantity === '6') {
                monthlyPayment = price*0.005 + price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 0.5% від повної вартості товару.`;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }
            
                document.querySelector('.img-js').src = imgLink;
                document.querySelector('.title-js').textContent = title;
                document.querySelector('.price-js').textContent = `${price} ₴`;
                document.querySelector('.payments').textContent = paymantsQuantity;
                document.querySelector('.monthlyPayment').textContent = monthlyPayment;
                document.querySelector('.bankName').textContent = `Mono Bank`;

        })
    })

    racoonBox.forEach((item, index) => {
        item.addEventListener('click', ()=>{
            let paymantsQuantity = item.querySelector('.pay_part').textContent;
            let title = mainItem.querySelector('.item_title').textContent;
            let price = mainItem.querySelector('.item_price').textContent.replaceAll(' ', '').replaceAll('₴', '');
            console.log(paymantsQuantity, title, price);

            modalWindow.style.display = 'flex';
            document.querySelector('body').style.overflow = 'hidden';
            closeModal();

            let imgLink = mainItem.querySelector('.item_img').querySelector('img').src;

            if(paymantsQuantity === '3') {
                monthlyPayment = price*0.015 + price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 2% від повної вартості товару.`;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }    
                document.querySelector('.img-js').src = imgLink;
                document.querySelector('.title-js').textContent = title;
                document.querySelector('.price-js').textContent = `${price} ₴`;
                document.querySelector('.payments').textContent = paymantsQuantity;
                document.querySelector('.monthlyPayment').textContent = monthlyPayment;
                document.querySelector('.bankName').textContent = `Racoon Bank`;
        })
    })

    privatBox.forEach((item, index) => {
        item.addEventListener('click', ()=>{
            let paymantsQuantity = item.querySelector('.pay_part').textContent;
            let title = mainItem.querySelector('.item_title').textContent;
            let price = mainItem.querySelector('.item_price').textContent.replaceAll(' ', '').replaceAll('₴', '');
            console.log(paymantsQuantity, title, price);

            modalWindow.style.display = 'flex';
            document.querySelector('body').style.overflow = 'hidden';
            closeModal();

            let imgLink = mainItem.querySelector('.item_img').querySelector('img').src;

            if(paymantsQuantity === '6') {
                monthlyPayment = price*0.005 + price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 0.5% від повної вартості товару.`;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }
            if(paymantsQuantity === '9') {
                monthlyPayment = price*0.01 + price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 1% від повної вартості товару.`;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }
            if(paymantsQuantity === '12') {
                monthlyPayment = price*0.02 + price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 2% від повної вартості товару.`;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }
            
                document.querySelector('.img-js').src = imgLink;
                document.querySelector('.title-js').textContent = title;
                document.querySelector('.price-js').textContent = `${price} ₴`;
                document.querySelector('.payments').textContent = paymantsQuantity;
                document.querySelector('.monthlyPayment').textContent = monthlyPayment;
                document.querySelector('.bankName').textContent = `Privat Bank`;

        })
    })

    creditBox.forEach((item, index) => {
        item.addEventListener('click', ()=>{
            let paymantsQuantity = item.querySelector('.pay_part').textContent;
            let title = mainItem.querySelector('.item_title').textContent;
            let price = mainItem.querySelector('.item_price').textContent.replaceAll(' ', '').replaceAll('₴', '');
            console.log(paymantsQuantity, title, price);

            modalWindow.style.display = 'flex';
            document.querySelector('body').style.overflow = 'hidden';
            closeModal();

            let imgLink = mainItem.querySelector('.item_img').querySelector('img').src;

            if(paymantsQuantity === '6') {
                monthlyPayment = price*0.005 + price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 0.5% від повної вартості товару.`;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }
            if(paymantsQuantity === '9') {
                monthlyPayment = price*0.01 + price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 1% від повної вартості товару.`;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }
            if(paymantsQuantity === '12') {
                monthlyPayment = price*0.025 + price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 2.5% від повної вартості товару.`;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }
            if(paymantsQuantity === '15') {
                monthlyPayment = price*0.035 + price / paymantsQuantity;
                monthlyPayment = monthlyPayment.toFixed(2);
                document.querySelector('.percent_info').textContent = `Зверніть увагу, при оформленні розстрочки на ${paymantsQuantity} місяців до суми щомісячного платежу додається 3.5% від повної вартості товару.`;
                document.querySelector('.final_price').textContent = `${(monthlyPayment * paymantsQuantity).toFixed(2)}`;
            }
            
                document.querySelector('.img-js').src = imgLink;
                document.querySelector('.title-js').textContent = title;
                document.querySelector('.price-js').textContent = `${price} ₴`;
                document.querySelector('.payments').textContent = paymantsQuantity;
                document.querySelector('.monthlyPayment').textContent = monthlyPayment;
                document.querySelector('.bankName').textContent = `Credit Bank`;
        })
    })


})





function searchModel(){

    const modelContainer = document.querySelectorAll('.main_item');
    
    searchInput.addEventListener('keyup', (e)=>{
        const word = e.target.value.toLowerCase();
        
        modelContainer.forEach(container =>{
            container.querySelector('.item_title').textContent.toLowerCase().includes(word) ? container.style.display = 'block' : container.style.display = 'none';
        })
    })

}

searchModel();

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

