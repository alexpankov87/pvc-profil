function setLanguage(language) {
                // Получаем все элементы с атрибутами data-lang-en и data-lang-ru
                const elements = document.querySelectorAll('[data-lang-kz], [data-lang-ru]');

                elements.forEach(element => {
                    // Получаем текст для выбранного языка
                    const text = element.getAttribute(`data-lang-${language}`);
                    if (text) {
                        // Устанавливаем текст элемента
                        element.innerHTML = text;
                    }
                });

                    const imgElements = document.querySelectorAll('img[data-alt-ru], img[data-alt-kz]');
                imgElements.forEach(element => {
                    const altText = element.getAttribute(`data-alt-${language}`);
                    const titleText = element.getAttribute(`data-title-${language}`);
                    if (altText) {
                        element.alt = altText; // Обновляем alt текст
                    }
                    if (titleText) {
                        element.title = titleText; // Обновляем title текст
                    }
                });

                 const inputElements = document.querySelectorAll('input[data-placeholder-ru], input[data-placeholder-kz]');
            inputElements.forEach(element => {
                const placeholderText = element.getAttribute(`data-placeholder-${language}`);
                if (placeholderText) {
                    element.placeholder = placeholderText; // Обновляем placeholder текст
                }
            });

            }

            // Устанавливаем начальный язык при загрузке страницы
            document.addEventListener('DOMContentLoaded', () => {
                const language = localStorage.getItem('language') || 'ru';
                setLanguage(language);
            });