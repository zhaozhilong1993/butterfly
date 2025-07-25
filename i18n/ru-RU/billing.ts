const translation = {
  currentPlan: 'Текущий тарифный план',
  upgradeBtn: {
    plain: 'Обновить тарифный план',
    encourage: 'Обновить сейчас',
    encourageShort: 'Обновить',
  },
  viewBilling: 'Управление счетами и подписками',
  buyPermissionDeniedTip: 'Пожалуйста, свяжитесь с администратором вашей организации, чтобы подписаться',
  plansCommon: {
    title: 'Выберите тарифный план, который подходит именно вам',
    yearlyTip: 'Получите 2 месяца бесплатно, подписавшись на год!',
    mostPopular: 'Самый популярный',
    planRange: {
      monthly: 'Ежемесячно',
      yearly: 'Ежегодно',
    },
    month: 'месяц',
    year: 'год',
    save: 'Сэкономить ',
    free: 'Бесплатно',
    currentPlan: 'Текущий тарифный план',
    contractSales: 'Связаться с отделом продаж',
    contractOwner: 'Связаться с руководителем команды',
    startForFree: 'Начать бесплатно',
    getStartedWith: 'Начать с ',
    contactSales: 'Связаться с отделом продаж',
    talkToSales: 'Поговорить с отделом продаж',
    modelProviders: 'Поставщики моделей',
    teamMembers: 'Участники команды',
    annotationQuota: 'Квота аннотаций',
    buildApps: 'Создать приложения',
    vectorSpace: 'Векторное пространство',
    vectorSpaceBillingTooltip: 'Каждый 1 МБ может хранить около 1,2 миллиона символов векторизованных данных (оценка с использованием Embeddings OpenAI, варьируется в зависимости от модели).',
    vectorSpaceTooltip: 'Векторное пространство - это система долговременной памяти, необходимая LLM для понимания ваших данных.',
    documentsUploadQuota: 'Квота загрузки документов',
    documentProcessingPriority: 'Приоритет обработки документов',
    documentProcessingPriorityTip: 'Для более высокого приоритета обработки документов, пожалуйста, обновите свой тарифный план.',
    documentProcessingPriorityUpgrade: 'Обрабатывайте больше данных с большей точностью и на более высоких скоростях.',
    priority: {
      'standard': 'Стандартный',
      'priority': 'Приоритетный',
      'top-priority': 'Высокий приоритет',
    },
    logsHistory: 'История журналов',
    customTools: 'Пользовательские инструменты',
    unavailable: 'Недоступно',
    days: 'дней',
    unlimited: 'Неограниченно',
    support: 'Поддержка',
    supportItems: {
      communityForums: 'Форумы сообщества',
      emailSupport: 'Поддержка по электронной почте',
      priorityEmail: 'Приоритетная поддержка по электронной почте и в чате',
      logoChange: 'Изменение логотипа',
      SSOAuthentication: 'SSO аутентификация',
      personalizedSupport: 'Персональная поддержка',
      dedicatedAPISupport: 'Выделенная поддержка API',
      customIntegration: 'Пользовательская интеграция и поддержка',
      ragAPIRequest: 'Запросы RAG API',
      bulkUpload: 'Массовая загрузка документов',
      agentMode: 'Режим агента',
      workflow: 'Рабочий процесс',
      llmLoadingBalancing: 'Балансировка нагрузки LLM',
      llmLoadingBalancingTooltip: 'Добавьте несколько ключей API к моделям, эффективно обходя ограничения скорости API.',
    },
    comingSoon: 'Скоро',
    member: 'Участник',
    memberAfter: 'Участник',
    messageRequest: {
      title: 'Кредиты на сообщения',
      tooltip: 'Квоты вызова сообщений для различных тарифных планов, использующих модели OpenAI (кроме gpt4). Сообщения, превышающие лимит, будут использовать ваш ключ API OpenAI.',
    },
    annotatedResponse: {
      title: 'Ограничения квоты аннотаций',
      tooltip: 'Ручное редактирование и аннотирование ответов обеспечивает настраиваемые высококачественные возможности ответов на вопросы для приложений. (Применимо только в чат-приложениях)',
    },
    ragAPIRequestTooltip: 'Относится к количеству вызовов API, вызывающих только возможности обработки базы знаний Butterfly.',
    receiptInfo: 'Только владелец команды и администратор команды могут подписываться и просматривать информацию о выставлении счетов',
  },
  plans: {
    sandbox: {
      name: 'Песочница',
      description: '200 бесплатных пробных использований GPT',
      includesTitle: 'Включает:',
    },
    professional: {
      name: 'Профессиональный',
      description: 'Для частных лиц и небольших команд, чтобы разблокировать больше возможностей по доступной цене.',
      includesTitle: 'Все в бесплатном плане, плюс:',
    },
    team: {
      name: 'Команда',
      description: 'Сотрудничайте без ограничений и наслаждайтесь высочайшей производительностью.',
      includesTitle: 'Все в профессиональном плане, плюс:',
    },
    enterprise: {
      name: 'Корпоративный',
      description: 'Получите полный набор возможностей и поддержку для крупномасштабных критически важных систем.',
      includesTitle: 'Все в командном плане, плюс:',
    },
  },
  vectorSpace: {
    fullTip: 'Векторное пространство заполнено.',
    fullSolution: 'Обновите свой тарифный план, чтобы получить больше места.',
  },
  apps: {
    fullTipLine1: 'Обновите свой тарифный план, чтобы',
    fullTipLine2: 'создавать больше приложений.',
  },
  annotatedResponse: {
    fullTipLine1: 'Обновите свой тарифный план, чтобы',
    fullTipLine2: 'аннотировать больше разговоров.',
    quotaTitle: 'Квота ответов аннотаций',
  },
}

export default translation
