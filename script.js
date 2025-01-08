var food_arrays = [
    {
        name: "Bánh mì",
        image:"static/img/food/banh-mi.jpg",
        address: "https://maps.app.goo.gl/Z2ftUwajAWqFr7pQ7",
    },
    {
        name: "Phở bò",
        image:"static/img/food/pho.jpg",
        address: "https://maps.app.goo.gl/y3fJ5Qi1jUbdWmxKA",
    },
    {
        name: "Bún bò",
        image:"static/img/food/bun-bo.jpg",
        address: "https://maps.app.goo.gl/Pom8CF3iy7AMy9B67",
    },
    {
        name: "Hủ tiếu",
        image:"static/img/food/hu-tieu.jpg",
        address: "https://maps.app.goo.gl/eoasN6LJXkY3CeuR8",
    },
    {
        name: "Cơm tấm",
        image:"static/img/food/com-tam.jpg",
        address: "https://maps.app.goo.gl/QPJbyfCZPSuJ6U5QA",
    },
    {
        name: "Gỏi cuốn",
        image:"static/img/food/banh-cuon.jpg",
        address: "https://maps.app.goo.gl/6TgS3vHf87uLpYC2A",
    },
    {
        name: "Bánh ướt",
        image:"static/img/food/banh-uot.jpg",
        address: "https://maps.app.goo.gl/rJHcFEbWBPafpE9cA",
    },
    {
        name: "Bánh xèo",
        image:"static/img/food/banh-xeo.webp",
        address: "https://maps.app.goo.gl/6M7pyfRXbBGoCkD97 ",
    },
];

function createHTML(food){
    return `
    <div class="col-3">
        <a href="${food.address}" class="special" target="_blank">
            <div class="holder">
                <img src="${food.image}" alt="" class="food-pic">
                <div class="text-center">
                    <h4>${food.name}</h4>
                </div>
            </div>
        </a>
    </div>
    `;
}

function renderFood() {
    const listElement = document.getElementById('food');
    listElement.innerHTML = food_arrays.map(createHTML).join('');
}