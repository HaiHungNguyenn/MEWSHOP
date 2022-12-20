const laptop = [
    {
        id:1,
        name:'Macbook Pro 14 M1 Pro 8 CPU',
        img:'/menushop/laptop/imgoflaptop/macbook-pro-2021-004-1-1-1.webp',
        price:'32.850.000₫<',
        ori_price:'',
        sale:'',
        category:'laptop',
        brand:'Apple',
        href:'/detail lap top/laptop1.html'
    },
    {
        id:2,
        name:'Macbook Pro 14 M1 Pro 10 1TB 2021',
        img:'/menushop/laptop/imgoflaptop/laptop2.webp',
        price:'57.590.000 ₫',
        ori_price:'',
        sale:'',
        category:'laptop',
        brand:'Apple',
        href:'/detail lap top/laptop2.html'
    },
    {
        id:3,
        name:'Macbook Pro 14 M1 Pro 10 CPU - 16 GPU 32GB 512GB 2021',
        img:'/menushop/laptop/imgoflaptop/laptop3.webp',
        price:'61.590.000₫<',
        ori_price:'75.000.000₫',
        sale:'Giảm 18%',
        category:'laptop',
        brand:'Apple',
        href:'/detail lap top/laptop2.html'
    },
    {
        id:4,
        name:'Macbook Pro 14 inch 2021 M1 Pro 10 CPU ',
        img:'/menushop/laptop/imgoflaptop/laptop4.webp',
        price:'77.590.000 ₫',
        ori_price:'',
        sale:'',
        category:'laptop',
        brand:'Apple',
        href:'/detail lap top/laptop4.html'
    },
    {
        id:5,
        name:'Macbook Pro 14 inch 2021 M1 Pro 8 CPU - 14 GPU',
        img:'/menushop/laptop/imgoflaptop/laptop5.webp',
        price:'57.590.000₫<',
        ori_price:'65.000.000 ₫',
        sale:'Giảm 11%',
        category:'laptop',
        brand:'Apple',
        href:'#'
    },
    {
        id:6,
        name:'Apple Macbook Air M2 2022 8GB 256GB',
        img:'/menushop/laptop/imgoflaptop/laptop6.webp',
        price:'31.590.000 ₫',
        ori_price:'',
        sale:'',
        category:'laptop',
        brand:'Apple',
        href:'#'
    },
    {
        id:7,
        name:'Apple Macbook Pro 13 M2 2022 8GB 256GB',
        img:'/menushop/laptop/imgoflaptop/laptop7.webp',
        price:'31.590.000 ₫',
        ori_price:'',
        sale:'',
        category:'laptop',
        brand:'Apple',
        href:'#'
    },
    {
        id:8,
        name:'Apple Macbook Air M2 2022 8GB 512GB',
        img:'/menushop/laptop/imgoflaptop/laptop8.webp',
        price:'38.990.000₫',
        ori_price:'',
        sale:'',
        category:'laptop',
        brand:'Apple',
        href:'#'
    },
    {
        id:9,
        name:'Apple MacBook Pro 13 Touch Bar M1 16GB',
        img:'/menushop/laptop/imgoflaptop/laptop9.webp',
        price:'36.990.000 ₫',
        ori_price:'',
        sale:'',
        category:'laptop',
        brand:'Apple',
        href:'#'
    },
    {
        id:10,
        name:'Macbook Pro M1 Pro 16 10 CPU - 16 GPU',
        img:'/menushop/laptop/imgoflaptop/laptop10.jpg',
        price:'61.990.000 ₫',
        ori_price:'',
        sale:'',
        category:'laptop',
        brand:'Apple',
        href:'#'
    },
    {
        id:11,
        name:'Macbook Pro 14 inch 2021',
        img:'/menushop/laptop/imgoflaptop/laptop111.jpg',
        price:'48.990.000 ₫',
        ori_price:'',
        sale:'',
        category:'laptop',
        brand:'Apple',
        href:'#'
    },
    
]
function renderLaptop(products, id){
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
renderLaptop(laptop,'laptop_product')
function FilerByBrand(products, id,brand){
    const elProduct = document.getElementById(`${id}`);
    console.log('elProduct: ', elProduct);
    let content ='' ;
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