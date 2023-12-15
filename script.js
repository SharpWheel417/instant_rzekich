function toggleDropdown(event, dropdown) {
    var dropdown = document.getElementById(dropdown);
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
    
    if (dropdown.style.display === "block") {
      var targetElement = event.target;
      var rect = targetElement.getBoundingClientRect();
      dropdown.style.top = rect.bottom + "px";
      dropdown.style.left = rect.left + "px";
    }
  }

  const imagePaths = [
    './memes/it/1.jpg',
    './memes/it/2.jpg',
    './memes/it/3.jpg',
    './memes/it/4.jpg',
    './memes/it/5.jpg',
    './memes/it/6.jpg',
    './memes/it/7.jpg',
    './memes/it/8.jpg',
    './memes/it/9.jpg',
    './memes/it/10.jpg',
    './memes/it/11.jpg',
    // Добавьте остальные пути к изображениям
  ];
  

  const maxImageWidth = 400; // Максимальная ширина изображения
  const maxImageHeight = 200; // Максимальная высота изображения
  
  const container = document.getElementById('container'); // Получаем элемент контейнера, в котором будут отображаться изображения

  imagePaths.forEach(function(imagePath) {
    const imgElement = document.createElement('img'); // Создаем элемент img
  
    imgElement.onload = function() {
      if (imgElement.naturalWidth > maxImageWidth || imgElement.naturalHeight > maxImageHeight) {
        const aspectRatio = imgElement.naturalWidth / imgElement.naturalHeight;
        if (aspectRatio > maxImageWidth / maxImageHeight) {
          imgElement.style.maxWidth = `${maxImageWidth}px`;
          imgElement.style.maxHeight = 'none';
        } else {
          imgElement.style.maxWidth = 'none';
          imgElement.style.maxHeight = `${maxImageHeight}px`;
        }
      }

      imgElement.classList.add('image');
  
      imgElement.addEventListener('click', function() {
        imgElement.classList.toggle('fullscreen');
        imgElement.classList.toggle('active'); // Добавляем/удаляем класс 'fullscreen' при клике на изображение
        if (imgElement.classList.contains('fullscreen')) {
            imgElement.style.maxWidth = '100%';
            imgElement.style.maxHeight = '100vh';
          } else {
            imgElement.style.maxWidth = `${maxImageWidth}px`;
            imgElement.style.maxHeight = `${maxImageHeight}px`;
          }
      });
      container.appendChild(imgElement); // Добавляем изображение в контейнер
    };
  
    imgElement.src = imagePath; // Устанавливаем путь к изображению
  });