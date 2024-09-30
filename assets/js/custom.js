function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

document.addEventListener("DOMContentLoaded", function () {
  const responses = {
    gender: null,
    age: null,
    familySize: null,
    boughtiPhone: null,
  };

  // Обработчик для выбора пола
  document.querySelectorAll(".bq1").forEach((button) => {
    button.addEventListener("click", function () {
      responses.gender = this.innerText; // Сохраняем выбранный ответ
    });
  });

  // Обработчик для выбора возраста
  document.querySelectorAll(".bq2").forEach((button) => {
    button.addEventListener("click", function () {
      responses.age = this.innerText; // Сохраняем выбранный ответ
    });
  });

  // Обработчик для выбора размера семьи
  document.querySelectorAll(".bq3").forEach((button) => {
    button.addEventListener("click", function () {
      responses.familySize = this.innerText; // Сохраняем выбранный ответ
    });
  });

  // Обработчик для выбора ответа на вопрос о покупке iPhone
  document.querySelectorAll(".bq4").forEach((button) => {
    button.addEventListener("click", function () {
      responses.boughtiPhone = this.innerText; // Сохраняем выбранный ответ
    });
  });

  // Обработчик нажатия кнопки "OK" в модальном окне
  const pModalButton3 = document.getElementById("p_modal_button3");
  const pModal3 = document.getElementById("p_modal3");

  pModalButton3.addEventListener("click", function (e) {
    e.stopPropagation(); // Остановка всплытия события

    // Закрытие модального окна
    pModal3.classList.remove("show");
    pModal3.setAttribute("aria-hidden", "true");
    pModal3.style.display = "none";

    // Вывод всех собранных данных в консоль
    console.log("Ответы пользователя:", responses);
  });

  document
    .getElementById("publishComment")
    .addEventListener("click", function () {
      // Получаем значение из поля ввода
      let commentText = document.getElementById("commentInput").value;

      // Проверяем, чтобы поле ввода не было пустым
      if (commentText.trim() === "") {
        alert("Комментарий не может быть пустым!");
        return;
      }

      // Создаем новый элемент для комментария
      let newComment = document.createElement("div");
      newComment.classList.add("comments");
      newComment.innerHTML = `
                    <div style="display: block">
                <div class="profile">
                  <img src="assets/images/1.gif" />
                </div>
                <div class="comment-content">
                  <p class="name">
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">Inês</font>
                    </font>
                  </p>
                  <p>
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit"
                        >${commentText}</font
                      >
                    </font>
                  </p>
                </div>
                <div class="clr"></div>
                <div class="comment-status">
                  <span>
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">Curte·comente</font>
                    </font>
                    <img src="assets/images/3.jpg" width="15px" height="15px" />
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">29</font>
                    </font>
                  </span>
                  <font style="vertical-align: inherit">
                    <small>
                      <font style="vertical-align: inherit">·</font>
                    </small>

                    <small>
                      <u>
                        <font style="vertical-align: inherit"
                          >4 minutos antes</font
                        >
                      </u>
                    </small>
                  </font>
                  <small>
                    <font style="vertical-align: inherit"></font>
                    <u>
                      <font style="vertical-align: inherit"></font>
                    </u>
                  </small>
                </div>
              </div>
    `;

      // Находим секцию с комментариями и добавляем новый комментарий в начало
      let commentsSection = document.querySelector(".comments_face");
      //element.parentNode.insertBefore(newElement, element.nextSibling);
      //commentsSection.insertAdjacentElement(
      //  "afterend",
      //  newComment,
      //  commentsSection.firstChild
      //);
      commentsSection.insertBefore(newComment, commentsSection.lastChild);
      // Очищаем поле ввода после публикации комментария
      document.getElementById("commentInput").value = "";
    });
});
