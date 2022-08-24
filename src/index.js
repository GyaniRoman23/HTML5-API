import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript HTML5 APIs</h1>';

const init = () => { };

console.dir(document.createElement('div'));
if ('dragglble' in document.createElement('div')) {
    init();
}
