const phone = [
    {
    id:1,
    name:'Samsung Galaxy S22 Ultra (12GB-512GB)',
    img:'/menushop/dienthoai/imgofdienthoai/dt1.webp',
    price:'32.850.000₫',
    ori_price:'',
    sale:'',
    category:'phone',
    brand:'Samsung',
    href:'/detail dien thoai/dienthoai1.html'
    },
    {
    id:2,
    name:'Samsung Galaxy S22 Ultra (12GB-1TB)',
    img:'/menushop/dienthoai/imgofdienthoai/dt2.webp',
    price:'29.950.000₫',
    ori_price:'32.000.000₫',
    sale:'Giảm 6%',
    category:'phone',
    brand:'Samsung',
    href:'/detail dien thoai/dienthoai2.html'
    },
    {
    id:3,
    name:'Samsung Galaxy S22 Ultra (8GB-128GB)',
    img:'/menushop/dienthoai/imgofdienthoai/dt3.webp',
    price:'27.050.000₫',
    ori_price:'32.000.000₫',
    sale:'Giảm 15%',
    category:'phone',
    brand:'Samsung',
    href:'/detail dien thoai/dienthoai3.html'
    },
    {
    id:4,
    name:'OPPO Reno6 Z 5G',
    img:'/menushop/dienthoai/imgofdienthoai/dt4.webp',
    price:'6.890.000₫',
    ori_price:'8.500.000₫',
    sale:'Giảm 19%',
    category:'phone',
    brand:'OPPO',
    href:'/detail dien thoai/dienthoai4.html'
    },
    {
    id:5,
    name:'Xiaomi Redmi Note 11 Pro Plus 5G',
    img:'/menushop/dienthoai/imgofdienthoai/dt5.webp',
    price:'8.890.000₫',
    ori_price:'9.500.000₫',
    sale:'Giảm 6%',
    category:'phone',
    brand:'Xiaomi',
    href:'#'
    },
    {
    id:6,
    name:'Samsung Galaxy A73',
    img:'/menushop/dienthoai/imgofdienthoai/dt6.webp',
    price:'10.390.000₫',
    ori_price:'',
    sale:'',
    category:'phone',
    brand:'Samsung',
    href:'#'
    },
    {
    id:7,
    name:'iPhone 13 512GB',
    img:'/menushop/dienthoai/imgofdienthoai/dt7.webp',
    price:'25.590.000₫',
    ori_price:'33.990.000₫',
    sale:'Giảm 25%',
    category:'phone',
    brand:'Apple',
    href:'/detail dien thoai/dienthoai ip3.html'
    },
    {
    id:8,
    name:'iPhone 13 256GB',
    img:'/menushop/dienthoai/imgofdienthoai/dt8.webp',
    price:'22.590.000₫',
    ori_price:'27.990.000₫',
    sale:'Giảm 19%',
    category:'phone',
    brand:'Apple',
    href:'/detail dien thoai/dienthoai ip2.html'
    },
    {
    id:9,
    name:'iPhone 13 128GB',
    img:'/menushop/dienthoai/imgofdienthoai/dt9.webp',
    price:'22.590.000₫',
    ori_price:'27.990.000₫',
    sale:'Giảm 19%',
    category:'phone',
    brand:'Apple',
    href:'/detail dien thoai/dienthoai ip1.html'
    },
    {
    id:10,
    name:'Samsung Galaxy Tab S7 SE',
    img:'/menushop/dienthoai/imgofdienthoai/dt10.webp',
    price:'11.190.000₫',
    ori_price:'',
    sale:'',
    category:'phone',
    brand:'Samsung',
    href:'#'
    },
    {
    id:11,
    name:'Samsung Galaxy A73 (5G) 256GB',
    img:'/menushop/dienthoai/imgofdienthoai/dt11.webp',
    price:'10.690.000₫',
    ori_price:'12.990.000₫',
    sale:'Giảm 18%',
    category:'phone',
    brand:'Samsung',
    href:'#'
    },
    {
    id:12,
    name:'Samsung Galaxy A13 (4G)',
    img:'/menushop/dienthoai/imgofdienthoai/dt12.webp',
    price:'3.950.000₫',
    ori_price:'4.690.000₫',
    sale:'Giảm 16%',
    category:'phone',
    brand:'Samsung',
    href:'#'
    },
]

function renderPhone(products, id){
    const elProduct = document.getElementById(`${id}`);
    console.log('elProduct: ', elProduct);
    let content ='' ;
    console.log(phone)
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
renderPhone(phone,'phone_product');
renderPhone(phone2,'phoneProduct');
function FilerByBrand(products, id,brand){
    const elProduct = document.getElementById(`${id}`);
    console.log('elProduct: ', elProduct);
    let content ='' ;
    console.log(phone)
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

