 function setLanguage(language) {
            localStorage.setItem('language', language);
            applyLanguage(language);
        }

        function applyLanguage(language) {
            const textElements = document.querySelectorAll('[data-lang-ru], [data-lang-kz]');
            textElements.forEach(element => {
                const text = element.getAttribute(`data-lang-${language}`);
                if (text) {
                    element.innerHTML = text;
                }
            });

            const imgElements = document.querySelectorAll('img[data-alt-ru], img[data-alt-kz]');
            imgElements.forEach(element => {
                const altText = element.getAttribute(`data-alt-${language}`);
                const titleText = element.getAttribute(`data-title-${language}`);
                if (altText) {
                    element.alt = altText;
                }
                if (titleText) {
                    element.title = titleText;
                }
            });

            const inputElements = document.querySelectorAll('input[data-placeholder-ru], input[data-placeholder-kz]');
            inputElements.forEach(element => {
                const placeholderText = element.getAttribute(`data-placeholder-${language}`);
                if (placeholderText) {
                    element.placeholder = placeholderText;
                }
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            const language = localStorage.getItem('language') || 'ru';
            applyLanguage(language);
        });