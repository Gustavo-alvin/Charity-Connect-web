const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageText = "Escolher imagem";
pictureImage.innerHTML = pictureImageText;

inputFile.addEventListener('change', function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function(e) {
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src =readerTarget.result;
            img.classList.add('picture__img');

            pictureImage.appendChild(img)
        });

        reader.readAsDataURL(file);
    }else {
        pictureImage.innerHTML = pictureImageText;
    }
})