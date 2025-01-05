var food_arrays = [
    {
        name: "Bánh mì",
        image:"static/img/food/banh-mi.jpg",
        address: "26 Lê Thị Riêng, Phạm Ngũ Lão, Quận 1",
    },
    {
        name: "Phở bò",
        image:"static/img/food/pho.jpg",
        address: "260C Pasteur, Phường 8, Quận 3",
    },
    {
        name: "Bún bò",
        image:"static/img/food/bun-bo.jpg",
        address: "169 Cao Thắng, phường 11, Quận 10",
    },
    {
        name: "Hủ tiếu",
        image:"static/img/food/hu-tieu.jpg",
        address: "26 Lê Thị Riêng, Phạm Ngũ Lão, Quận 1",
    },
    {
        name: "Cơm tấm",
        image:"static/img/food/com-tam.jpg",
        address: "167 Nguyễn Văn Cừ, phường 2, quận 5",
    },
    {
        name: "Gỏi cuốn",
        image:"static/img/food/banh-cuon.jpg",
        address: "424 Lạc Long Quân, Quận 11",
    },
    {
        name: "Bánh ướt",
        image:"static/img/food/banh-uot.jpg",
        address: "115 Nguyễn Thị Nhỏ, Quận Tân Bình",
    },
    {
        name: "Bánh xèo",
        image:"static/img/food/banh-xeo.webp",
        address: "BB13 Trường Sơn, phường 15, quận 10",
    },
];

function createHTML(food){
    return `
        <div class="col-3">
            <div class="p-2 holder">
                <img src="${food.image}" alt="" class="food-pic">
                <h4>${food.name}</h4>
                <p>${food.address}</p>
            </div>
        </div>
    `;
}

function renderFood() {
    const listElement = document.getElementById('food');
    listElement.innerHTML = food_arrays.map(createHTML).join('');
}