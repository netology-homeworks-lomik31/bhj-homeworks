document.getElementById("form").onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем отправку формы стандартным способом
  
    const fileInput = document.getElementById("file");
    const progress = document.getElementById("progress");
  
    // Проверяем, выбран ли файл
    if (fileInput.files.length === 0) {
      alert("Выберите файл для загрузки!");
      return;
    }
  
    const file = fileInput.files[0]; // Получаем файл
    const formData = new FormData(); // Создаем объект FormData
    formData.append("file", file); // Добавляем файл в FormData
  
    const xhr = new XMLHttpRequest(); // Создаем объект XMLHttpRequest
  
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload"); // Открываем соединение
  
    // Отслеживаем прогресс загрузки
    xhr.upload.onprogress = function(event) {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total).toFixed(2); // Вычисляем процент
        progress.value = percentComplete; // Устанавливаем значение прогресса
      }
    };
  
    // Обрабатываем завершение запроса
    xhr.onload = function() {
      if (xhr.status === 201) {
        alert("Файл успешно загружен!");
        progress.value = 1.0; // Устанавливаем прогресс на 100% по завершении
      } else {
        alert("Ошибка загрузки файла!");
      }
    };
  
    // Обрабатываем ошибки
    xhr.onerror = function() {
      alert("Произошла ошибка при отправке файла.");
    };
  
    // Отправляем данные формы
    xhr.send(formData);
  };