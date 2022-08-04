'use strict'
const textQuote = document.querySelector('#quote'),
   textAuthor = document.querySelector('#author'),
   btn = document.querySelector('#btn');


btn.addEventListener('click', function generateQuote() {

   let objQuote = {
      'Карл Ван Лун': 'Не совершай классическую ошибку всех умников: не думай, что нет людей умнее тебя.',
      'Иоганн Вольфганг фон Гёте': 'Ничто так не выдает человека, как то, над чем он смеётся.',
      'Фредерик Бегбедер': 'Каждому человеку нужно какое-нибудь хобби — якобы с целью «выйти из стресса», — но ты-то прекрасно понимаешь, что на самом деле люди попросту пытаются выжить и не сойти с ума.',
      'Джонни Депп': 'Ты — это то, что ты делаешь. Ты — это твой выбор. Тот, в кого себя превратишь.',
      'Бертран Рассел': 'Проблема этого мира в том, что глупцы и фанатики слишком уверены в себе, а умные люди полны сомнений.',
      'Иммануил Кант': 'Дайте человеку всё, чего он желает, и в ту же минуту он почувствует, что это всё не есть всё.',
      'Рэй Брэдбери': 'У людей теперь нет времени друг для друга.',
   }
   let authors = Object.keys(objQuote),
      author = authors[Math.floor(Math.random() * authors.length)],
      quote = objQuote[author];

   textAuthor.textContent = author;
   textQuote.textContent = quote;


});

