/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyMovies: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?", "");
            
            while (a === "" || a === null || a.length > 50) {
                a = prompt("Один из последних просмотренных фильмов?", "");
            }
        
            const b = +prompt("На сколько оцените его?", "");
            
            personalMovieDB.movies[a] = b;
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function() {
        if (!personalMovieDB.private) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre = prompt("Ваш любимый жанр #" + i);
            while (genre === "", genre === null) {
                genre = prompt("Ваш любимый жанр #" + i);
            }
            personalMovieDB.genres.push(genre);
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        personalMovieDB.private ? personalMovieDB.private = false : personalMovieDB.private = true;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyMovies();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();


