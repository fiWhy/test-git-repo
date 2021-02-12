import { div, get, a, img, span } from './utils';

get().then((data) => {
  const app = document.getElementById('app');
  let currentSlide = 0;

  let cards, points;

  const wrapper = div({
    classNames: ['slideshow-container'],
    children: [
      a({
        classNames: ['prev'],
        listeners: {
          click: () => {
            currentSlide = !currentSlide ? 0 : currentSlide - 1;
            console.log(currentSlide);
          },
        },
        children: ['❮'],
      }),
      a({
        classNames: ['next'],
        listeners: {
          click: () => {
            currentSlide =
              currentSlide === data.length ? data.length : currentSlide + 1;
            console.log(currentSlide);
          },
        },
        children: ['❯'],
      }),
      ...(cards = data.map((user, i) =>
        div({
          classNames: ['mySlides', 'fade', !i ? 'active' : 'hide'],
          children: [
            div({
              classNames: ['numbertext'],
              children: [`${i + 1}/${data.length}`],
            }),
            img({
              classNames: ['slider-image'],
              src: '',
            }),
            div({
              classNames: ['text'],
              children: [user.name],
            }),
          ],
        })
      )),
    ],
  });

  const dotsWrapper = div({
    classNames: ['dots-wrapper'],
    children: (points = data.map((_, i) =>
      span({
        classNames: ['dot'],
      })
    )),
  });

  app.append(wrapper);
  app.append(dotsWrapper);
});
