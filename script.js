const mainItemContainer = document.querySelectorAll('.main_item');

const btnClose = document.querySelector('.btnClose');
const btnCloseModal = document.querySelector('.btnCloseModal');

const modalWindow = document.querySelector('.modal');
const modalWindowBasket = document.querySelector('.modal_basket');
const deleteItemFromBasket = document.querySelector('.deleteItem');

const searchInput = document.querySelector('#search');

const mainBasket = document.querySelector('.main_basket');
const btnBuy = document.querySelectorAll('.btn_buy');

const btnMainBasket = document.querySelector('.basket_wrapper'); 

const basketTitle = document.querySelector('.basket_item-title');
const basketItemImg = document.querySelector('.basket_item-img');
const basketItem = document.querySelector('.basket_item');


btnCloseModal.addEventListener('click', ()=>{
    modalWindowBasket.style.display = 'none';
    document.querySelector('body').style.overflow = 'auto';
})

function closeModal() {
    btnClose.addEventListener('click', ()=>{
        modalWindow.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    })
}
function addInfoToCard(img, title, price, paymantsQuantity, monthlyPayment){
    document.querySelector('.img-js').src = img;
    document.querySelector('.title-js').textContent = title;
    document.querySelector('.price-js').textContent = `${price} ₴`;
    document.querySelector('.payments').textContent = paymantsQuantity;
    document.querySelector('.monthlyPayment').textContent = monthlyPayment;

}
function searchModel(){

    const modelContainer = document.querySelectorAll('.main_item');
    
    searchInput.addEventListener('keyup', (e)=>{
        const word = e.target.value.toLowerCase();
        
        modelContainer.forEach(container =>{
            container.querySelector('.item_title').textContent.toLowerCase().includes(word) ? container.style.display = 'block' : container.style.display = 'none';
        })
    })
}
function print(){
    if(i < text.length) {
      document.querySelector('.container').textContent += text.charAt(i);
      i++;
      setTimeout(print, speed);
    }
}
let text = '- з кожного замовлення 3% йде на ЗСУ!';
let speed = 100;
let i = 0;

print();



let productArray = [];

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
                document.querySelector('.bankName').textContent = `Mono Bank`;

                addInfoToCard(imgLink, title, price, paymantsQuantity, monthlyPayment);

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
                document.querySelector('.bankName').textContent = `Racoon Bank`;

                addInfoToCard(imgLink, title, price, paymantsQuantity, monthlyPayment);
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
                document.querySelector('.bankName').textContent = `Privat Bank`;

                addInfoToCard(imgLink, title, price, paymantsQuantity, monthlyPayment);

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
                document.querySelector('.bankName').textContent = `Credit Bank`;

                addInfoToCard(imgLink, title, price, paymantsQuantity, monthlyPayment);
        })
    })

    let btnCart = mainItem.querySelector('.btn_buy');
    btnCart.addEventListener('click', ()=>{
        productArray.push(mainItem);
        console.log(productArray);
        if(productArray.length > 0) {
            for(let i = 0; i<productArray.length; i++){

                let title = productArray[i].querySelector('.item_title').textContent;
                let img = productArray[i].querySelector('.item_img').querySelector('img').src;
                console.log(img)

                btnMainBasket.addEventListener('click', ()=>{
                    document.querySelector('.modal_basket').style.display = 'block';
                    document.querySelector('body').style.overflow = 'hidden';
                    basketTitle.textContent = title;
                    basketItemImg.src = img;
                })

                deleteItemFromBasket.addEventListener('click', ()=>{
                    basketItem.textContent = '';
                })
            }
        }

        mainBasket.style.display = 'block';
        mainBasket.textContent = productArray.length;

        

    })

    

})


searchModel();


