// 照片的路徑列表
const photos = [
    'images/random1.jpg',
    'images/random2.jpg',
    'images/random3.jpg',
    'images/random4.jpg',
    'images/random5.jpg',
    'images/random6.jpg',
    'images/random7.jpg',
    'images/random8.jpg',
    'images/random9.jpg',
    'images/random10.jpg',
    'images/random11.jpg',
    'images/random12.jpg',
    'images/random13.jpg',
    'images/random14.jpg',
    'images/random15.jpg',
    'images/random16.jpg',
    'images/random17.jpg',
    'images/random18.jpg',
    'images/random19.jpg',
    'images/random20.jpg',
    'images/random21.jpg',
    'images/random22.jpg',
    'images/random23.jpg',
    'images/random24.jpg',
    'images/random25.jpg',
    'images/random26.jpg',

    // 添加更多照片路徑
];

// 隨機顯示照片的函數
function showRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    const photoElement = document.getElementById('photo');
    photoElement.src = photos[randomIndex];
}

// 點擊朋友照片時隨機更換照片
document.getElementById('photo').addEventListener('click', showRandomPhoto);

// 頁面加載時顯示一張隨機照片
window.onload = showRandomPhoto;

// 朋友照片的路徑列表
const friendPhotos = [
    'images//林姝辰/林姝辰1.jpg',
    'images//林姝辰/林姝辰2.jpg',

];

// 隨機顯示朋友照片的函數
function showRandomFriendPhoto() {
    const randomIndex = Math.floor(Math.random() * friendPhotos.length);
    const friendPhotoElement = document.getElementById('friend-photo');
    friendPhotoElement.src = friendPhotos[randomIndex];
}

// 頁面加載時顯示一張隨機朋友照片
window.onload = function() {
    showRandomPhoto();
    showRandomFriendPhoto();
};
