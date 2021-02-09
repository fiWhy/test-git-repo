import { div, get } from './utils';

get().then((data) => {
  const app = document.getElementById('app');
  data.map((user) => {
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

    app.append(card);
  });
});
