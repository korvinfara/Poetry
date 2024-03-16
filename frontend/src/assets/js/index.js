const mobileMenuButton = document.querySelector('.button .mobile')
const body = document.body
console.log('>>', mobileMenuButton)
mobileMenuButton.onclick = function (event) {
  event.preventDefault()
  mobileMenuButton.classList.toggle('checked')
  body.classList.toggle('overflow')
  return null
}

const paintings = document.querySelectorAll('.item.painting')

paintings.forEach(function (painting) {
  const align = painting.querySelector('.align')
  const divs = align.querySelectorAll('div')
  const totalHeight = Array.from(divs).reduce((acc, div) => acc + div.offsetHeight, 0)

  const animationDuration = divs.length * 1.5

  align.style.transitionDuration = animationDuration + 's'

  painting.addEventListener('mouseenter', function () {
    align.style.transform = 'translateY(-' + totalHeight + 'px)'

    divs.forEach(function (div) {
      const rect = div.getBoundingClientRect()
      const textRect = painting.querySelector('.painting-text').getBoundingClientRect()
      if (rect.top <= textRect.top) {
        div.style.opacity = '1'
      }
    })
  })

  painting.addEventListener('mouseleave', function () {
    align.style.transform = 'none'
  })
})

//
// const video = document.querySelector('.banner.video');
// const preview = document.querySelector('.banner.video .preview');
// const frame = document.querySelector('.banner-video .frame');
//
// // Добавляем обработчик события на клик по элементу .preview
// video.addEventListener('click', function() {
//     // Получаем URL видео с имеющегося iframe
//     const videoUrl = frame.querySelector('iframe').src;
//
//     // Заменяем URL видео в iframe, добавляя параметр autoplay=1 для автоматического запуска
//     frame.querySelector('iframe').src = videoUrl + '&autoplay=1';
//
//     // Скрываем элемент .preview
//     preview.style.display = 'none';
// });

const moduleForewords = document.querySelectorAll('.module-foreword')
const forewords = document.querySelectorAll('.foreword')

for (let i = 0; i < moduleForewords.length; i++) {
  const linkMore = moduleForewords[i].querySelector('.link-more')
  const foreword = forewords[i]
  const closeBtn = foreword.querySelector('.close')
  const shadow = foreword.querySelector('.shadow')

  linkMore.addEventListener('click', function (event) {
    event.preventDefault()
    foreword.classList.add('active')
    document.body.classList.add('overflow')
  })

  document.addEventListener('click', function (event) {
    const target = event.target
    if (!target.closest('.foreword') && !target.closest('.module-foreword')) {
      foreword.classList.remove('active')
      document.body.classList.remove('overflow')
    }
  })

  closeBtn.addEventListener('click', function (event) {
    foreword.classList.remove('active')
    document.body.classList.remove('overflow')
  })

  shadow.addEventListener('click', function (event) {
    foreword.classList.remove('active')
    document.body.classList.remove('overflow')
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const eventPhotos = document.querySelectorAll('.event-photo img')
  const popups = document.querySelectorAll('.popup')
  const body = document.querySelector('body')

  eventPhotos.forEach(function (eventPhoto) {
    eventPhoto.addEventListener('click', function () {
      const popupClass = this.classList[0]
      const popup = document.querySelector(`.popup.${popupClass}`)
      popup.classList.add('active')
      body.classList.add('overflow')
    })
  })

  popups.forEach(function (popup) {
    const closeButton = popup.querySelector('.close')
    closeButton.addEventListener('click', function () {
      popup.classList.remove('active')
      body.classList.remove('overflow')
    })
  })
})
