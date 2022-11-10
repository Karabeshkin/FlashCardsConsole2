class Model {
  // Сначала приложение находится на стартовой странице выбора темы.
  // Подумай, какие ещё страницы будут в твоём приложении?
  #page = 'select-topic';

  // Подумай какие данные будут нужны View, чтобы рендерить эти страницы.
  // Исходя из этих данных определись какие поля будет содержать модель.

  getPage() {
    return this.#page;
  }

  chooseTopic(topic) {
    // Тема выбрана, сделай необходимые изменения в модели (в т.ч. измени this.page).
    // Чтобы сделать эти изменения подумай какая следующая страница будет отображена
    // и какие данные нужны View, чтобы отрендерить эту страницу
    // ...
  }
}

module.exports = Model;