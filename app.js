const menuItem = [
    {
        id:1,
        item:"Food Item1",
        oneliner: "One: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias, repellat esse tempora sapiente dolores aspernatur deserunt praesentium ipsam iure atque fugiat maiores cumque animi aperiam quaerat officia quisquam eaque?",
        img: "images/food1.jpg",
        hotel: "Hotel Name1",
        desc: "one: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias, repellat esse tempora sapiente dolores aspernatur deserunt praesentium ipsam iure atque fugiat maiores cumque animi aperiam quaerat officia quisquam eaque?"
    },

    {
        id:2,
        item:"Food Item2",
        oneliner: "Two: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias, repellat esse tempora sapiente dolores aspernatur deserunt praesentium ipsam iure atque fugiat maiores cumque animi aperiam quaerat officia quisquam eaque?",
        img: "images/food2.jpg",
        hotel: "Hotel Name2",
        desc: "Two: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias, repellat esse tempora sapiente dolores aspernatur deserunt praesentium ipsam iure atque fugiat maiores cumque animi aperiam quaerat officia quisquam eaque?"
    },

    {
        id:3,
        item:"Food Item3",
        oneliner: "three: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias, repellat esse tempora sapiente dolores aspernatur deserunt praesentium ipsam iure atque fugiat maiores cumque animi aperiam quaerat officia quisquam eaque?",
        img: "images/food3.jpg",
        hotel: "Hotel Name3",
        desc: "three: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias, repellat esse tempora sapiente dolores aspernatur deserunt praesentium ipsam iure atque fugiat maiores cumque animi aperiam quaerat officia quisquam eaque?"
    },

    {
        id:3,
        item:"Food Item4",
        oneliner: "four: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias, repellat esse tempora sapiente dolores aspernatur deserunt praesentium ipsam iure atque fugiat maiores cumque animi aperiam quaerat officia quisquam eaque?",
        img: "images/food4.jpg",
        hotel: "Hotel Name4",
        desc: "four: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias, repellat esse tempora sapiente dolores aspernatur deserunt praesentium ipsam iure atque fugiat maiores cumque animi aperiam quaerat officia quisquam eaque?"
    }
]

const item = document.getElementById('item')
const oneLiner = document.getElementById('oneLiner')
const img = document.getElementById('img')
const hotel = document.getElementById('hotel')
const desc = document.getElementById('desc')
const prev = document.getElementById('prev')
const random = document.getElementById('random')
const next = document.getElementById('next')

let currentMenu = 0;

window.addEventListener('DOMContentLoaded', function () {
    // let menu = menuItem[currentMenu];
    // item.textContent = menu.item;
    // oneLiner.textContent = menu.oneliner;
    // img.scr = menu.img;
    // hotel.textContent = menu.hotel;
    // desc.textContent = menu.desc;
    allMenu(currentMenu);
});

const allMenu = () => {
    let menu = menuItem[currentMenu];
    item.textContent = menu.item;
    oneLiner.textContent = menu.oneliner;
    img.src = menu.img;
    hotel.textContent = menu.hotel;
    desc.textContent = menu.desc;
};

// Random Menu 
random.addEventListener('click', () => {
    currentMenu = Math.floor(Math.random() * menuItem.length);
    // console.log(currentMenu);

    allMenu(currentMenu);
})

//prevbtn

prev.addEventListener('click', () => {
    currentMenu --;
    if (currentMenu < 0) {
        currentMenu = menuItem -1;
    }
    allMenu(currentMenu);
});

next.addEventListener('click', () => {
    currentMenu ++;
    if (currentMenu > menuItem.length -1) {
        currentMenu = 0
    }
    allMenu(currentMenu)
})