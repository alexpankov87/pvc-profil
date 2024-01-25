let ok = false;
window.addEventListener('scroll', function () {
    if (ok === false) {
        ok = true;
        setTimeout(() => {
            let script = document.createElement('script');
            script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac5cd321607727c8771ccaa8704f138c993d7e14d44e15185ef6be48da358e3ec&amp;width=100%25&amp;height=525&amp;lang=en_FR&amp;scroll=false';
            document.getElementById('yamap').replaceWith(script);
        }, 1000)
    }
});