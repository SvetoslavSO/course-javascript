/* ДЗ 5 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунд

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
  return new Promise((resolve) =>{
    setTimeout(()=>{
      resolve();
    }, seconds*1000);
  })
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
async function loadAndSortTowns() {
  const post = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
  const towns = await fetch(post).then(response => response.json());
  const sortTowns = towns.sort((a,b)=>{return a.name > b.name ? 1 : -1});
  return sortTowns;
  /*return new Promise(function (resolve, reject){
      const post = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
      async function request(url, method = 'GET'){
        const response = await fetch(url).then(response => response.json());
      return response;
    }
    request(post).then(towns => {let sortTowns = towns.sort((a,b)=>{return a.name > b.name ? 1 : -1})
      resolve(sortTowns);
    }).catch((e)=> reject(e));
  })*/
}

export { delayPromise, loadAndSortTowns };
