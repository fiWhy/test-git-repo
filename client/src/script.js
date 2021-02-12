import { div, get, a, img } from './utils';

get().then((data) => {
  const app = document.getElementById('app');
  let currentSlide = 0;

{/* <div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>; */}
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
        children: ['❯'],
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
        children: ['❮'],
      }),
      ...data.map((user, i) => {
        const card = div({
          classNames: ['mySlides', 'fade'],
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
        });

        return card;
      }),
    ],
  });

  console.log(wrapper);

  app.append(wrapper);
});
