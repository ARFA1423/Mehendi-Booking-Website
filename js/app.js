// Load gallery items from local storage with fallback default assets
const defaultGallery = [
    { type: "image/jpeg", src: "images/1.jpeg" },
    { type: "image/jpeg", src: "images/2.jpeg" },
    { type: "image/jpeg", src: "images/3.jpeg" },
    { type: "image/jpeg", src: "images/4.jpeg" },
    { type: "image/jpeg", src: "images/5.jpeg" },
    { type: "image/jpeg", src: "images/1.jpeg" }
];

let gallery = JSON.parse(localStorage.getItem("gallery"));
if (!gallery || gallery.length === 0) {
    gallery = defaultGallery;
}

const container = document.getElementById("galleryContainer");

if (container) {
    gallery.forEach(item => {
        if (item.type.startsWith("image")) {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = "Mehendi Design";
            container.appendChild(img);
        } else {
            const video = document.createElement("video");
            video.src = item.src;
            video.controls = true;
            container.appendChild(video);
        }
    });
}
