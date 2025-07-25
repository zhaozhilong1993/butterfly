const translation = {
  currentPlan: 'Поточний план',
  upgradeBtn: {
    plain: 'Оновити план',
    encourage: 'Оновити зараз',
    encourageShort: 'Оновити',
  },
  viewBilling: 'Керувати рахунками та підписками',
  buyPermissionDeniedTip: 'Зв\'яжіться з адміністратором вашого підприємства, щоб оформити підписку',
  plansCommon: {
    title: 'Виберіть план, який підходить саме вам',
    yearlyTip: 'Отримайте 2 місяці безкоштовно, оформивши річну підписку!',
    mostPopular: 'Найпопулярніший',
    planRange: {
      monthly: 'Щомісяця',
      yearly: 'Щорічно',
    },
    month: 'місяць',
    year: 'рік',
    save: 'Зберегти ',
    free: 'Безкоштовно',
    currentPlan: 'Поточний план',
    contractSales: 'Зв\'язатися з відділом продажів',
    contractOwner: 'Зв\'язатися з керівником команди',
    startForFree: 'Почніть безкоштовно',
    getStartedWith: 'Почніть роботу з ',
    contactSales: 'Зв\'язатися з відділом продажів',
    talkToSales: 'Поговоріть зі службою продажів',
    modelProviders: 'Постачальники моделей',
    teamMembers: 'Члени команди',
    buildApps: 'Створювати додатки',
    vectorSpace: 'Векторний простір',
    vectorSpaceBillingTooltip: 'Кожен 1 МБ може зберігати близько 1,2 мільйона символів векторизованих даних (оцінка з використанням OpenAI Embeddings, відрізняється в залежності від моделей).',
    vectorSpaceTooltip: 'Векторний простір – це система довгострокової пам\'яті, необхідна LLM для розуміння ваших даних.',
    documentProcessingPriority: 'Пріоритет обробки документів',
    documentProcessingPriorityTip: 'Для вищого пріоритету обробки документів оновіть свій план.',
    documentProcessingPriorityUpgrade: 'Обробляйте більше даних із вищою точністю та на більших швидкостях.',
    priority: {
      'standard': 'Стандартний',
      'priority': 'Пріоритетний',
      'top-priority': 'Найвищий пріоритет',
    },
    logsHistory: 'Історія журналів',
    customTools: 'Користувальницькі інструменти',
    unavailable: 'Недоступний',
    days: 'днів',
    unlimited: 'Безлімітний',
    support: 'Підтримка',
    supportItems: {
      communityForums: 'Форуми спільноти',
      emailSupport: 'Підтримка електронною поштою',
      priorityEmail: 'Пріоритетна підтримка електронною поштою та в чаті',
      logoChange: 'Зміна логотипу',
      SSOAuthentication: 'Автентифікація SSO',
      personalizedSupport: 'Персоналізована підтримка',
      dedicatedAPISupport: 'Спеціальна підтримка API',
      customIntegration: 'Вбудована інтеграція та підтримка',
      ragAPIRequest: 'RAG API запити',
      agentMode: 'Режим агента',
      workflow: 'Робочий процес',
      bulkUpload: 'Масове завантаження документів',
      llmLoadingBalancing: 'Балансування навантаження LLM',
      llmLoadingBalancingTooltip: 'Додавайте кілька ключів API до моделей, ефективно обходячи обмеження швидкості API.',
    },
    comingSoon: 'Скоро',
    member: 'Учасник',
    memberAfter: 'учасника',
    messageRequest: {
      title: 'Кредити повідомлень',
      tooltip: 'Квоти на виклик повідомлень для різних планів з використанням моделей OpenAI (крім gpt4). Повідомлення понад ліміт використовуватимуть ваш ключ API OpenAI.',
    },
    annotatedResponse: {
      title: 'Ліміти квоти відповідей з анотаціями',
      tooltip: 'Ручне редагування та анотування відповідей забезпечує налаштовувані високоякісні можливості відповідей на запитання для програм. (Застосовується лише в чат-програмах)',
    },
    ragAPIRequestTooltip: 'Відноситься до кількості викликів API, що викликають лише можливості обробки бази знань Butterfly.',
    receiptInfo: 'Лише власник команди та адміністратор команди можуть підписуватися та переглядати інформацію про виставлення рахунків',
    annotationQuota: 'Квота анотацій',
    documentsUploadQuota: 'Квота завантаження документів',
  },
  plans: {
    sandbox: {
      name: 'Пісочниця',
      description: '200 безкоштовних пробних версій GPT',
      includesTitle: 'Включає в себе:',
    },
    professional: {
      name: 'Професійний',
      description: 'Щоб окремі особи та невеликі команди могли отримати більше можливостей за доступною ціною.',
      includesTitle: 'Все у безкоштовному плані, плюс:',
    },
    team: {
      name: 'Команда',
      description: 'Співпрацюйте без обмежень і користуйтеся продуктивністю найвищого рівня.',
      includesTitle: 'Все, що входить до плану Professional, плюс:',
    },
    enterprise: {
      name: 'Ентерпрайз',
      description: 'Отримайте повні можливості та підтримку для масштабних критично важливих систем.',
      includesTitle: 'Все, що входить до плану Team, плюс:',
    },
  },
  vectorSpace: {
    fullTip: 'Векторний простір заповнений.',
    fullSolution: 'Оновіть свій план, щоб отримати більше місця.',
  },
  apps: {
    fullTipLine1: 'Оновіть свій план, щоб',
    fullTipLine2: 'створити більше програм.',
  },
  annotatedResponse: {
    fullTipLine1: 'Оновіть свій план, щоб',
    fullTipLine2: 'анотувати більше розмов.',
    quotaTitle: 'Квота на анотовані відповіді',
  },
}

export default translation
