const addImage = (imgSrc) => {
  const prom = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () =>
      rejectCb(new Error('Image load is failed'))
    );
  });

  return prom;
};

// callack function
// const onImageLoaded = (error, imgElem) => {
//   if (error) {
//     console.log(error);
//     return;
//   }

//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');

//   sizeElem.textContent = `${width} x ${height}`;
// };
const img =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
const resultPromise = addImage(img);
// resultPromise.then((data) => console.log(data));
resultPromise.catch((data) => console.log(data));
// console.log(resultPromise);
