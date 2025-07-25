const translation = {
  knowledge: 'База знаний',
  documentCount: ' документов',
  wordCount: ' тыс. слов',
  appCount: ' связанных приложений',
  createDataset: 'Создать базу знаний',
  createDatasetIntro: 'Импортируйте свои собственные текстовые данные или записывайте данные в режиме реального времени через Webhook для улучшения контекста LLM.',
  deleteDatasetConfirmTitle: 'Удалить эту базу знаний?',
  deleteDatasetConfirmContent:
    'Удаление базы знаний необратимо. Пользователи больше не смогут получить доступ к вашей базе знаний, и все настройки подсказок и журналы будут безвозвратно удалены.',
  datasetUsedByApp: 'База знаний используется некоторыми приложениями. Приложения больше не смогут использовать эту базу знаний, и все настройки подсказок и журналы будут безвозвратно удалены.',
  datasetDeleted: 'База знаний удалена',
  datasetDeleteFailed: 'Не удалось удалить базу знаний',
  didYouKnow: 'Знаете ли вы?',
  intro1: 'Базу знаний можно интегрировать в приложение Butterfly ',
  intro2: 'в качестве контекста',
  intro3: ',',
  intro4: 'или ее ',
  intro5: 'можно создать',
  intro6: ' как отдельный плагин индекса ChatGPT для публикации',
  unavailable: 'Недоступно',
  unavailableTip: 'Модель встраивания недоступна, необходимо настроить модель встраивания по умолчанию',
  datasets: 'БАЗЫ ЗНАНИЙ',
  datasetsApi: 'ДОСТУП К API',
  retrieval: {
    semantic_search: {
      title: 'Векторный поиск',
      description: 'Создайте встраивания запросов и найдите фрагмент текста, наиболее похожий на его векторное представление.',
    },
    full_text_search: {
      title: 'Полнотекстовый поиск',
      description: 'Индексируйте все термины в документе, позволяя пользователям искать любой термин и извлекать соответствующий фрагмент текста, содержащий эти термины.',
    },
    hybrid_search: {
      title: 'Гибридный поиск',
      description: 'Выполняйте полнотекстовый поиск и векторный поиск одновременно, переранжируйте, чтобы выбрать наилучшее соответствие запросу пользователя. Пользователи могут выбрать установку весов или настройку модели переранжирования.',
      recommend: 'Рекомендуется',
    },
    invertedIndex: {
      title: 'Инвертированный индекс',
      description: 'Инвертированный индекс - это структура, используемая для эффективного поиска. Организованный по терминам, каждый термин указывает на документы или веб-страницы, содержащие его.',
    },
    change: 'Изменить',
    changeRetrievalMethod: 'Изменить метод поиска',
  },
  docsFailedNotice: 'документов не удалось проиндексировать',
  retry: 'Повторить попытку',
  indexingTechnique: {
    high_quality: 'HQ',
    economy: 'ECO',
  },
  indexingMethod: {
    semantic_search: 'ВЕКТОР',
    full_text_search: 'ПОЛНЫЙ ТЕКСТ',
    hybrid_search: 'ГИБРИД',
    invertedIndex: 'ИНВЕРТИРОВАННЫЙ',
  },
  mixtureHighQualityAndEconomicTip: 'Для смешивания высококачественных и экономичных баз знаний требуется модель переранжирования.',
  inconsistentEmbeddingModelTip: 'Модель переранжирования требуется, если модели встраивания выбранных баз знаний несовместимы.',
  retrievalSettings: 'Настройки поиска',
  rerankSettings: 'Настройки переранжирования',
  weightedScore: {
    title: 'Взвешенная оценка',
    description: 'Регулируя назначенные веса, эта стратегия переранжирования определяет, следует ли отдавать приоритет семантическому или ключевому соответствию.',
    semanticFirst: 'Семантика в первую очередь',
    keywordFirst: 'Ключевые слова в первую очередь',
    customized: 'Настраиваемый',
    semantic: 'Семантика',
    keyword: 'Ключевые слова',
  },
  nTo1RetrievalLegacy: 'Поиск N-к-1 будет официально прекращен с сентября. Рекомендуется использовать новейший многопутный поиск для получения лучших результатов.',
  nTo1RetrievalLegacyLink: 'Узнать больше',
  nTo1RetrievalLegacyLinkText: ' Поиск N-к-1 будет официально прекращен в сентябре.',
  defaultRetrievalTip: 'По умолчанию используется многоканальная проверка. Знания извлекаются из нескольких баз знаний, а затем повторно ранжируются.',
  editExternalAPIConfirmWarningContent: {
    end: 'внешних знаний, и эта модификация будет применена ко всем им. Вы уверены, что хотите сохранить это изменение?',
    front: 'Этот API внешних знаний связан с',
  },
  editExternalAPIFormWarning: {
    end: 'Внешние знания',
    front: 'Этот внешний API связан с',
  },
  deleteExternalAPIConfirmWarningContent: {
    title: {
      end: '?',
      front: 'Удалить',
    },
    content: {
      front: 'Этот API внешних знаний связан с',
      end: 'внешнее знание. Удаление этого API сделает их все недействительными. Вы уверены, что хотите удалить этот API?',
    },
    noConnectionContent: 'Вы уверены, что удалите этот API?',
  },
  selectExternalKnowledgeAPI: {
    placeholder: 'Выбор API внешних знаний',
  },
  connectDatasetIntro: {
    content: {
      link: 'Узнайте, как создать внешний API',
      front: 'Чтобы подключиться к внешней базе знаний, необходимо сначала создать внешний API. Пожалуйста, внимательно прочтите и обратитесь к',
      end: '. Затем найдите соответствующий идентификатор знания и заполните его в форме слева. Если вся информация верна, он автоматически перейдет к тесту извлечения в базе знаний после нажатия кнопки подключения.',
    },
    learnMore: 'Подробнее',
    title: 'Как подключиться к внешней базе знаний',
  },
  connectHelper: {
    helper2: 'Поддерживается только функция извлечения',
    helper3: '. Мы настоятельно рекомендуем вам',
    helper4: 'Ознакомьтесь с справочной документацией',
    helper5: 'Будьте внимательны перед использованием этой функции.',
    helper1: 'Подключение к внешним базам знаний через API и идентификатор базы знаний. В настоящее время',
  },
  externalKnowledgeForm: {
    connect: 'Соединять',
    cancel: 'Отмена',
  },
  externalAPIForm: {
    encrypted: {
      end: 'Технологии.',
      front: 'Ваш токен API будет зашифрован и сохранен с помощью',
    },
    cancel: 'Отмена',
    endpoint: 'Конечная точка API',
    save: 'Спасать',
    edit: 'Редактировать',
    name: 'Имя',
    apiKey: 'Ключ API',
  },
  externalKnowledgeNamePlaceholder: 'Пожалуйста, введите название базы знаний',
  externalTag: 'Внешний',
  learnHowToWriteGoodKnowledgeDescription: 'Узнайте, как написать хорошее описание знаний',
  externalAPIPanelTitle: 'API внешних знаний',
  externalKnowledgeDescription: 'Описание знаний',
  editExternalAPITooltipTitle: 'СВЯЗАННЫЕ ЗНАНИЯ',
  externalKnowledgeName: 'Имя внешнего базы знаний',
  createExternalAPI: 'Добавление API внешних знаний',
  externalKnowledgeIdPlaceholder: 'Пожалуйста, введите идентификатор знаний',
  externalKnowledgeDescriptionPlaceholder: 'Опишите, что входит в эту базу знаний (необязательно)',
  noExternalKnowledge: 'У нас еще нет External Knowledge API, нажмите здесь, чтобы создать',
  externalAPI: 'Внешний API',
  externalKnowledgeId: 'Внешний идентификатор базы знаний',
  createNewExternalAPI: 'Создание нового API внешних знаний',
  editExternalAPIFormTitle: 'Редактирование API внешних знаний',
  connectDataset: 'Подключение к внешней базе знаний',
  mixtureInternalAndExternalTip: 'Модель Rerank необходима для смешивания внутренних и внешних знаний.',
  allExternalTip: 'При использовании только внешних знаний пользователь может выбрать, следует ли включать модель повторного ранжирования. Если этот параметр не включен, полученные фрагменты будут сортироваться на основе баллов. Когда стратегии извлечения из разных баз знаний несовместимы, они будут неточными.',
  externalAPIPanelDocumentation: 'Узнайте, как создать API внешних знаний',
  externalAPIPanelDescription: 'Внешний API базы знаний используется для подключения к базе знаний за пределами Butterfly и извлечения знаний из этой базы знаний.',
  chunkingMode: {
    general: 'Общее',
    parentChild: 'Родитель-дочерний',
  },
  parentMode: {
    fullDoc: 'Полный документ',
    paragraph: 'Параграф',
  },
  batchAction: {
    enable: 'Давать возможность',
    delete: 'Удалить',
    selected: 'Выбранный',
    disable: 'Отключить',
    cancel: 'Отмена',
    archive: 'Архив',
  },
  preprocessDocument: '{{число}} Предварительная обработка документов',
  documentsDisabled: 'Документы {{num}} отключены - неактивны более 30 дней',
  localDocs: 'Местная документация',
  enable: 'Давать возможность',
  allKnowledge: 'Все знания',
  allKnowledgeDescription: 'Выберите, чтобы отобразить все знания в этой рабочей области. Только владелец рабочего пространства может управлять всеми знаниями.',
}

export default translation
