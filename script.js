//Stores text a and button in variables
const textElement = document.querySelector("#text");
const changeColorButton = document.querySelector("#changeColorButton");

function changeTextColor(){
    const colors = ["red", "yellow", "green", "orange", "black", "blue", "hotpink", "white"];
    changeColorButton.addEventListener("click", () => {
        const randomColor = colors[Math.floor(Math.random()* colors.length)];
        textElement.style.color = randomColor; 
    });
}

changeTextColor();

//-------------------------------------------------------------------------------------------------------------------//

const pictureElement = document.getElementById("toggle-image");
function changePicture(){
    const images = [
        "https://cdn.mos.cms.futurecdn.net/wg5APDpFjbdkYycmbhTibK-1200-80.jpg",
        "https://img.taste.com.au/X245vmu9/taste/2024/09/grimace-holding-shake-202790-1.jpg",
        "https://mascothalloffame.com/wp-content/uploads/bb-plugin/cache/Ronald-e1705085264737-circle.webp",
        "https://yt3.googleusercontent.com/I-w7_LZCmcihCFoopUg1MKA9vJqiQGk9TgP6vrYygQIUEBVAwT1CE1-mZ8wlZXiRkpAo0EmuSQ=s900-c-k-c0x00ffffff-no-rj",
        "https://www.samys.com/images/product/main/S-008607x1000.jpg"
    
    ];
    
    let currentIndex = 0;
    
    pictureElement.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        pictureElement.src = images[currentIndex];
    
    });
}
changePicture();