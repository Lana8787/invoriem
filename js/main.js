$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    dots: false,
    margin: 48,
    loop: true,
  });
});

/* Video */
/* Находим кнопку */
const videoBtn = document.querySelector('#video-btn');

/* Находим картинку */

const videoPicture = document.querySelector('.video__picture');

const videoWrapper = document.querySelector('.video');

/* Находим видео */
const video = document.querySelector('#video-file');
/* На кнопку вешаем клик */
//videoBtn.addEventListener('click', function () {
//  videoPicture.classList.add('none');
/* Убираем оверлей*/
//  videoWrapper.classList.remove('video-overlay');
/* Скриваем кнопку когда играет видео */
//  videoBtn.classList.add('none');

/* проиграть видео */

//  if (video.paused) {
//    video.play();
//  }
//});

videoWrapper.addEventListener('click', function () {
  if (video.paused) {
    videoPicture.classList.add('none');
    videoWrapper.classList.remove('video-overlay');
    videoBtn.classList.add('none');
    video.play();
  } else {
    /* Добавляем оверлей и кнопку*/

    //videoPicture.classList.remove('none');
    videoWrapper.classList.add('video-overlay');
    videoBtn.classList.remove('none');
    video.pause();
  }
});
