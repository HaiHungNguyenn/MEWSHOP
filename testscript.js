data=[
    {
        id:'1',
        name:'iphone',
        img:'/asset/img/phone/iphone-13-01-4.jpg',
        newprice:'23.000.000',
        oldprice:'25.000.000',
        category:'phone',
        brand:'apple',
    },
    {
        id:'2',
        name:'iphone',
        img:'/asset/img/phone/iphone-13-01-4.jpg',
        newprice:'23.000.000',
        oldprice:'25.000.000',
        category:'phone',
        brand:'apple',
    },
    {
        id:'3',
        name:'iphone',
        img:'/asset/img/phone/iphone-13-01-4.jpg',
        newprice:'23.000.000',
        oldprice:'25.000.000',
        category:'phone',
        brand:'apple',
    },
    {
        id:'4',
        name:'iphone',
        img:'/asset/img/phone/iphone-13-01-4.jpg',
        newprice:'23.000.000',
        oldprice:'25.000.000',
        category:'phone',
        brand:'apple',
    },
    {
        id:'5',
        name:'iphone',
        img:'/asset/img/phone/iphone-13-01-4.jpg',
        newprice:'23.000.000',
        oldprice:'25.000.000',
        category:'phone',
        brand:'apple',
    }
]
function renderProduct(products, id){
    const elProduct = document.getElementById(`${id}`);
    console.log('elProduct: ', elProduct);
    let content ='' ;
    products.forEach(item => {
        let temp = `
                <div class="sub_list-item">
                    <img src="${item.img}" alt="">
                    <div class="item_text">
                        <h2>${item.name}</h2>
                        <d>${item.newprice}₫ <del class="oldprice">${item.oldprice}₫</del></d>
                    </div>
                </div>
        `;
        content += temp; 
    });

    elProduct.innerHTML = content;
}
renderProduct(data,'product');