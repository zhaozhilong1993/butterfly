const translation = {
  apiServer: 'API Сервер',
  apiKey: 'API Ключ',
  status: 'Статус',
  disabled: 'Отключено',
  ok: 'В работе',
  copy: 'Копировать',
  copied: 'Скопировано',
  play: 'Запустить',
  pause: 'Приостановить',
  playing: 'Запущено',
  loading: 'Загрузка',
  merMaid: {
    rerender: 'Перезапустить рендеринг',
  },
  never: 'Никогда',
  apiKeyModal: {
    apiSecretKey: 'Секретный ключ API',
    apiSecretKeyTips: 'Чтобы предотвратить злоупотребление API, защитите свой API ключ. Избегайте использования его в виде plain-текста во фронтенд-коде. :)',
    createNewSecretKey: 'Создать новый секретный ключ',
    secretKey: 'Секретный ключ',
    created: 'СОЗДАН',
    lastUsed: 'ПОСЛЕДНЕЕ ИСПОЛЬЗОВАНИЕ',
    generateTips: 'Храните этот ключ в безопасном и доступном месте.',
  },
  actionMsg: {
    deleteConfirmTitle: 'Удалить этот секретный ключ?',
    deleteConfirmTips: 'Это действие необратимо.',
    ok: 'ОК',
  },
  completionMode: {
    title: 'API приложения',
    info: 'Для высококачественной генерации текста, такой как статьи, резюме и переводы, используйте API completion-messages с пользовательским вводом. Генерация текста основана на параметрах модели и шаблонах подсказок, установленных в Butterfly Prompt Engineering.',
    createCompletionApi: 'Создать completion-message',
    createCompletionApiTip: 'Создайте completion-message для поддержки режима вопросов и ответов.',
    inputsTips: '(Необязательно) Укажите поля пользовательского ввода в виде пар ключ-значение, соответствующих переменным в Prompt Eng. Ключ - это имя переменной, Значение - это значение параметра. Если тип поля - Выбор, отправленное Значение должно быть одним из предустановленных вариантов.',
    queryTips: 'Текстовое содержимое пользовательского ввода.',
    blocking: 'Блокирующий тип, ожидает завершения выполнения и возвращает результаты. (Запросы могут быть прерваны, если процесс длительный)',
    streaming: ' Ответ в рамках потока. Реализация потоковой передачи ответов на основе SSE (Server-Sent Events).',
    messageFeedbackApi: 'Обратная связь по сообщению (лайк)',
    messageFeedbackApiTip: 'Оцените полученные сообщения от имени конечных пользователей с помощью лайков или дизлайков. Эти данные видны на странице Журналы и аннотации и используются для будущей тонкой настройки модели.',
    messageIDTip: 'Идентификатор сообщения',
    ratingTip: 'лайк или дизлайк, null - отмена',
    parametersApi: 'Получить информацию о параметрах приложения',
    parametersApiTip: 'Получить настроенные входные параметры, включая имена переменных, имена полей, типы и значения по умолчанию. Обычно используется для отображения этих полей в форме или заполнения значений по умолчанию после загрузки клиента.',
  },
  chatMode: {
    title: 'API приложения чата',
    info: 'Для универсальных диалоговых приложений, использующих формат вопросов и ответов, вызовите API chat-messages, чтобы начать диалог. Поддерживайте текущие разговоры, передавая возвращенный conversation_id. Параметры ответа и шаблоны зависят от настроек Butterfly Prompt Eng.',
    createChatApi: 'Создать сообщение чата',
    createChatApiTip: 'Создайте новое сообщение разговора или продолжите существующий диалог.',
    inputsTips: '(Необязательно) Укажите поля пользовательского ввода в виде пар ключ-значение, соответствующих переменным в Prompt Eng. Ключ - это имя переменной, Значение - это значение параметра. Если тип поля - Выбор, отправленное Значение должно быть одним из предустановленных вариантов.',
    queryTips: 'Содержимое пользовательского ввода/вопроса',
    blocking: 'Блокирующий тип, ожидает завершения выполнения и возвращает результаты. (Запросы могут быть прерваны, если процесс длительный)',
    streaming: 'потоковая передача возвращает. Реализация потоковой передачи возврата на основе SSE (Server-Sent Events).',
    conversationIdTip: '(Необязательно) Идентификатор разговора: оставьте пустым для первого разговора; передайте conversation_id из контекста, чтобы продолжить диалог.',
    messageFeedbackApi: 'Обратная связь конечного пользователя по сообщению, лайк',
    messageFeedbackApiTip: 'Оцените полученные сообщения от имени конечных пользователей с помощью лайков или дизлайков. Эти данные видны на странице Журналы и аннотации и используются для будущей тонкой настройки модели.',
    messageIDTip: 'Идентификатор сообщения',
    ratingTip: 'лайк или дизлайк, null - отмена',
    chatMsgHistoryApi: 'Получить историю сообщений чата',
    chatMsgHistoryApiTip: 'Первая страница возвращает последние `limit` строк, которые находятся в обратном порядке.',
    chatMsgHistoryConversationIdTip: 'Идентификатор разговора',
    chatMsgHistoryFirstId: 'Идентификатор первой записи чата на текущей странице. По умолчанию - нет.',
    chatMsgHistoryLimit: 'Сколько чатов возвращается за один запрос',
    conversationsListApi: 'Получить список разговоров',
    conversationsListApiTip: 'Получает список сеансов текущего пользователя. По умолчанию возвращаются последние 20 сеансов.',
    conversationsListFirstIdTip: 'Идентификатор последней записи на текущей странице, по умолчанию - нет.',
    conversationsListLimitTip: 'Сколько чатов возвращается за один запрос',
    conversationRenamingApi: 'Переименование разговора',
    conversationRenamingApiTip: 'Переименовать разговоры; имя отображается в многосессионных клиентских интерфейсах.',
    conversationRenamingNameTip: 'Новое имя',
    parametersApi: 'Получить информацию о параметрах приложения',
    parametersApiTip: 'Получить настроенные входные параметры, включая имена переменных, имена полей, типы и значения по умолчанию. Обычно используется для отображения этих полей в форме или заполнения значений по умолчанию после загрузки клиента.',
  },
  develop: {
    requestBody: 'Тело запроса',
    pathParams: 'Параметры пути',
    query: 'Запрос',
    toc: 'Содержание',
  },
  regenerate: 'Регенерировать',
}

export default translation
