// для nodejs
const axios = require('axios');

axios.get('https://vk.com');
.then(response => 
{
    console.log('Успех:', response.status);
})
.catch(error => 
{
    console.error('Ошибка:', error.message);
});
// GET запрос к vk.com 
// Успех: 200

axios.get('https://json.geoiplookup.io/');
.then(response => 
{
    console.log('Успех:', response.status);
})
.catch(error => 
{
    console.error('Ошибка:', error.message);
});
// GET запрос к geoiplookup.io
// Успех: 200
 
// запросы с Node.js будут выполнены без ограничений CORS
