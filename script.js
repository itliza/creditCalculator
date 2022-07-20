const mainItemContainer = document.querySelectorAll('.main_item');

const btnClose = document.querySelector('.btnClose');

const modalWindow = document.querySelector('.modal');

const searchInput = document.querySelector('#search');

// const payContainer = document.querySelectorAll('.item_pay-container');


// let btnMonoContainer = document.querySelectorAll('.mono');
// let btnPrivatContainer = document.querySelectorAll('.privat');
// let btnCreditContainer = document.querySelectorAll('.part_credit');
// let btnRacoonContainer = document.querySelectorAll('.bank_item');



function closeModal() {
    btnClose.addEventListener('click', ()=>{
        modalWindow.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    })
}

mainItemContainer.forEach((mainItem, mainIndex)=>{

    

    function getData(title, price){
        const titleBox = mainItem.querySelector(title);

        const titleProduct = titleBox.textContent;
        console.log(titleProduct);
    
        const itemPrice = mainItem.querySelector(price);
        const priceProduct = itemPrice.textContent.replaceAll(' ', '').replaceAll('₴', '');
        console.log(priceProduct);
        
        const bankInfo = document.querySelector('.pay_part').textContent;
        console.log(bankInfo);

        



         
    }

    

    const payContainer = mainItem.querySelector('.item_pay-container');
    
    const liBox = payContainer.querySelectorAll('li');


    liBox.forEach((liItem, liIndex)=>{

        const racoonBank = liItem.classList.contains('bank_item');
        const monoBank = liItem.classList.contains('mono');
        const privatBank = liItem.classList.contains('privat');
        const creditBank = liItem.classList.contains('part_credit');


        if(racoonBank){
            // getData('.item_title', '.item_price');

            const racoonBtnBox = document.querySelectorAll('.bank_item');
            racoonBtnBox.forEach(racoonBtn =>{
                racoonBtn.addEventListener('click', ()=>{
                    getData('.item_title', '.item_price');
    
                })
            })
        }
        else if(monoBank){
            // getData('.item_title', '.item_price');

            const monoBtnBox = document.querySelectorAll('.mono');
            monoBtnBox.forEach(monoBtn =>{
                monoBtn.addEventListener('click', ()=>{
                    getData('.item_title', '.item_price');
                })
            })
        }
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