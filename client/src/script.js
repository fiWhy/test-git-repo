import { div, get } from './utils';

get().then((data) => {
  const app = document.getElementById('app');
  let currentSlide = 0;
  const wrapper = div({
    classNames: ['gallery'],
    children: [
      div({
        classNames: ['gellery__prev__wrapper'],
        listeners: {
          click: () => (currentSlide = !currentSlide ? 0 : currentSlide - 1),
        },
        children: ['<'],
      }),
      div({
        classNames: ['gellery__next__wrapper'],
        listeners: {
          click: () =>
            (currentSlide =
              currentSlide === data.length ? data.length : currentSlide + 1),
        },
        children: ['>'],
      }),
      div({
        classNames: ['gallery__cards__wrapper'],
        children: data.map((user) => {
          const card = div({
            classNames: ['card'],
            children: [
              div({
                classNames: ['card__header'],
                children: [user.name],
              }),
              div({
                classNames: ['card__body'],
                children: [user.level],
              }),
            ],
          });

          return card;
        }),
      }),
    ],
  });

  app.append(wrapper);
});
