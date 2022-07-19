const addImage = (imgSrc) => {
  const prom = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      resolve(imgElem);
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () =>
      reject(new Error('Image load is failed'))
    );
  });

  return prom;
};

const img =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
const resultPromise = addImage(img);
resultPromise
  .then((imgElem) => {
    const { width, height } = imgElem;
    const sizeElem = document.querySelector('.image-size');

    sizeElem.textContent = `${width} x ${height}`;
  })
  .catch((error) => console.log(error));
// console.log(resultPromise);
