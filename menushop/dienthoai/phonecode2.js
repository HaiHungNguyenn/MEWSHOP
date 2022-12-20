
const phone2 = [
    {
        id:1,
        name:'Samsung Galaxy A53 (5G)',
        img:'/menushop/dienthoai/imgofdienthoai/dt13.webp',
        price:'8.490.000₫',
        ori_price:'',
        sale:'',
        category:'phone',
        brand:'Samsung',
        href:'#'
    },
    {
        id:2,
        name:'Samsung Galaxy A23',
        img:'/menushop/dienthoai/imgofdienthoai/dt14.webp',
        price:'4.890.000₫',
        ori_price:'5.690.000₫',
        sale:'Giảm 14%',
        category:'phone',
        brand:'Samsung',
        href:'#'
    },
    {
        id:3,
        name:'Samsung Galaxy A03s',
        img:'/menushop/dienthoai/imgofdienthoai/dt15.webp',
        price:'3.200.000₫',
        ori_price:'3.690.000₫',
        sale:'Giảm 13%',
        category:'phone',
        brand:'Samsung',
        href:'#'
    },
    {
        id:4,
        name:'Samsung Galaxy A73 128GB',
        img:'/menushop/dienthoai/imgofdienthoai/dt16.webp',
        price:'10.390.000₫',
        ori_price:'11.990.000₫',
        sale:'Giảm 13%',
        category:'phone',
        brand:'Samsung',
        href:'#'
    },
    {
        id:5,
        name:'Samsung Galaxy A03 (3GB - 64GB) ',
        img:'/menushop/dienthoai/imgofdienthoai/dt17.webp',
        price:'2.750.000₫',
        ori_price:'3.500.000₫',
        sale:'Giảm 21%',
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
                <a href=""><img src="${item.img}" alt="" class="imgphone"></a>
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
                <a href=""><img src="${item.img}" alt="" class="imgphone"></a>
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
                    <a href=""><img src="${item.img}" alt="" class="imgphone"></a>
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
                    <a href=""><img src="${item.img}" alt="" class="imgphone"></a>
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

