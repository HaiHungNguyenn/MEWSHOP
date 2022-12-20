
const watch = [
    {
        id:1,
        name:'Apple Watch SE 44mm (GPS) Viền Nhôm',
        img:'/menushop/dongho/imgofdongho/dh1.webp',
        price:'6.890.000₫',
        ori_price:'7.500.000 ₫',
        sale:'Giảm 8%',
        category:'watch',
        brand:'Apple'
        ,href:'/detail dong ho/DH1-Apple Watch SE 44mm.html'
    },
    {
        id:2,
        name:'Apple Watch SE 40mm (GPS) Viền Nhôm',
        img:'/menushop/dongho/imgofdongho/dh2.webp',
        price:'6.790.000₫',
        ori_price:'7.500.000₫',
        sale:'Giảm 9%',
        category:'watch',
        brand:'Apple'
        ,href:'/detail dong ho/DH1-Apple Watch SE 44mm.html'
    },
    {
        id:3,
        name:'Đồng hồ thông minh Huawei Watch GT3',
        img:'/menushop/dongho/imgofdongho/dh3.webp',
        price:'5.490.000₫',
        ori_price:'6.500.000₫',
        sale:'Giảm 16%',
        category:'watch',
        brand:'Huawei'
        ,href:'#'
    },
    {
        id:4,
        name:'Đồng hồ thông minh Xiaomi Redmi Watch 2 Lite',
        img:'/menushop/dongho/imgofdongho/dh44.webp',
        price:'1.190.000₫',
        ori_price:'1.500.000₫',
        sale:'Giảm 21%',
        category:'watch',
        brand:'Xiaomi'
        ,href:'/detail dong ho/DH4-Đồng hồ thông minh Xiaomi Redmi Watch 2 Lite .html'
    },
    {
        id:5,
        name:'Vòng đeo tay thông minh Xiaomi Mi Band 7',
        img:'/menushop/dongho/imgofdongho/dh5.webp',
        price:'1.190.000₫ ',
        ori_price:'1.900.000₫',
        sale:'Giảm 37%',
        category:'watch',
        brand:'Xiaomi'
        ,href:'#'
    },
    {
        id:6,
        name:'Đồng hồ Myalo KidsPhone K84',
        img:'/menushop/dongho/imgofdongho/dh6.webp',
        price:'2.790.000₫<',
        ori_price:'',
        sale:'',
        category:'watch',
        brand:'Myalo'
        ,href:'/detail dong ho/DH2-Xiaomi-mi-band-7.html'
    },
    {
        id:7,
        name:'Đồng hồ thông minh Huawei Watch Fit 2',
        img:'/menushop/dongho/imgofdongho/dh7.webp',
        price:'6.500.000 ₫',
        ori_price:'',
        sale:'',
        category:'watch',
        brand:'Huawei'
        ,href:'#'
    },
    {
        id:8,
        name:'Samsung Galaxy Watch4',
        img:'/menushop/dongho/imgofdongho/dh8.webp',
        price:'5.600.000₫<',
        ori_price:'7.500.000₫',
        sale:'Giảm 25%',
        category:'watch',
        brand:'Samsung'
        ,href:'#'
    },
    {
        id:9,
        name:'Đồng hồ thông minh Huawei Watch GT3',
        img:'/menushop/dongho/imgofdongho/dh9.webp',
        price:'7.990.000₫ ',
        ori_price:'8.450.000₫',
        sale:'Giảm 5%',
        category:'watch',
        brand:'Huawei'
        ,href:'#'
    },
    {
        id:10,
        name:'Đồng hồ thông minh Huawei Watch Fit',
        img:'/menushop/dongho/imgofdongho/dh10.webp',
        price:'4.500.000 ₫',
        ori_price:'',
        sale:'',
        category:'watch',
        brand:'Huawei'
        ,href:'#'
    },
    {
        id:11,
        name:'Đồng hồ Huami Amazfit GTS 2',
        img:'/menushop/dongho/imgofdongho/dh11.webp',
        price:'3.090.000 ₫',
        ori_price:'',
        sale:'',
        category:'watch',
        brand:'Huami'
        ,href:'#'
    },
    
]
function renderWatch(products, id){
    const elProduct = document.getElementById(`${id}`);
    console.log('elProduct: ', elProduct);
    let content ='' ;
    products.forEach(item => {
        
        if(item.sale.toString().length == 0){
            let temp = `
            <div class="boxofphone">
                <a href="${item.href}"><img src="${item.img}" alt="" class="imgphone"></a>
                <div class="boxofcontent">
                    <p class="nameofphone">${item.name}</p>
                    <span class="priceofphone">${item.price}</span><br>
                    <input type="radio"> So sánh
                </div>
            </div>
                `;
                content += temp
        }else{
            let temp = `
            <div class="boxofphone">
                <a href="${item.href}"><img src="${item.img}" alt="" class="imgphone"></a>
                <div class="boxofcontent">
                    <p class="nameofphone">${item.name}</p>
                    <span class="priceofphone">${item.price} <s class="oldprice">${item.ori_price}</s></span><br>
                    <input type="radio"> So sánh
                </div>
                <div class="sales">${item.sale}</div>
            </div>
            `;
            content += temp;
        }
            
    });
    elProduct.innerHTML = content;
}
renderWatch(watch,'watch_product');
function FilerByBrand(products, id,brand){
    const elProduct = document.getElementById(`${id}`);
    console.log('elProduct: ', elProduct);
    let content ='' ;
    console.log(watch)
    products.forEach(item => {
        if(item.brand==`${brand}`){
            
            if(item.sale.toString().length == 0){
                let temp = `
                <div class="boxofphone">
                    <a href="${item.href}"><img src="${item.img}" alt="" class="imgphone"></a>
                    <div class="boxofcontent">
                        <p class="nameofphone">${item.name}</p>
                        <span class="priceofphone">${item.price}</span><br>
                        <input type="radio"> So sánh
                    </div>
                </div>
                    `;
                    content += temp
            }else{
                let temp = `
                <div class="boxofphone">
                    <a href="${item.href}"><img src="${item.img}" alt="" class="imgphone"></a>
                    <div class="boxofcontent">
                        <p class="nameofphone">${item.name}</p>
                        <span class="priceofphone">${item.price} <s class="oldprice">${item.ori_price}</s></span><br>
                        <input type="radio"> So sánh
                    </div>
                    <div class="sales">${item.sale}</div>
                </div>
                `;
                content += temp;
            }
                
        }
    });
    elProduct.innerHTML = content;
}

