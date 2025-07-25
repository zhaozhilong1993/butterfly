const translation = {
  currentPlan: 'Planul curent',
  upgradeBtn: {
    plain: 'Actualizează planul',
    encourage: 'Actualizează acum',
    encourageShort: 'Actualizează',
  },
  viewBilling: 'Gestionează facturarea și abonamentele',
  buyPermissionDeniedTip: 'Vă rugăm să contactați administratorul dvs. de întreprindere pentru a vă abona',
  plansCommon: {
    title: 'Alegeți un plan potrivit pentru dvs.',
    yearlyTip: 'Obțineți 2 luni gratuite prin abonarea anuală!',
    mostPopular: 'Cel mai popular',
    planRange: {
      monthly: 'Lunar',
      yearly: 'Anual',
    },
    month: 'lună',
    year: 'an',
    save: 'Economisește ',
    free: 'Gratuit',
    currentPlan: 'Planul curent',
    contractSales: 'Contactați vânzările',
    contractOwner: 'Contactați managerul echipei',
    startForFree: 'Începe gratuit',
    getStartedWith: 'Începe cu ',
    contactSales: 'Contactați vânzările',
    talkToSales: 'Vorbiți cu vânzările',
    modelProviders: 'Furnizori de modele',
    teamMembers: 'Membri ai echipei',
    buildApps: 'Construiește aplicații',
    vectorSpace: 'Spațiu vectorial',
    vectorSpaceBillingTooltip: 'Fiecare 1MB poate stoca aproximativ 1,2 milioane de caractere de date vectorizate (estimat folosind OpenAI Embeddings, variază în funcție de modele).',
    vectorSpaceTooltip: 'Spațiul vectorial este sistemul de memorie pe termen lung necesar pentru ca LLM-urile să înțeleagă datele dvs.',
    documentsUploadQuota: 'Cotă de încărcare a documentelor',
    documentProcessingPriority: 'Prioritatea procesării documentelor',
    documentProcessingPriorityTip: 'Pentru o prioritate mai mare a procesării documentelor, vă rugăm să actualizați planul.',
    documentProcessingPriorityUpgrade: 'Procesați mai multe date cu o acuratețe mai mare și la viteze mai rapide.',
    priority: {
      'standard': 'Standard',
      'priority': 'Prioritate',
      'top-priority': 'Prioritate maximă',
    },
    logsHistory: 'Istoricul jurnalelor',
    customTools: 'Instrumente personalizate',
    unavailable: 'Indisponibil',
    days: 'zile',
    unlimited: 'Nelimitat',
    support: 'Asistență',
    supportItems: {
      communityForums: 'Forumuri comunitare',
      emailSupport: 'Asistență prin e-mail',
      priorityEmail: 'Asistență prioritară prin e-mail și chat',
      logoChange: 'Schimbarea logo-ului',
      SSOAuthentication: 'Autentificare SSO',
      personalizedSupport: 'Asistență personalizată',
      dedicatedAPISupport: 'Asistență API dedicată',
      customIntegration: 'Integrare și asistență personalizate',
      ragAPIRequest: 'Solicitări API RAG',
      bulkUpload: 'Încărcare în bloc a documentelor',
      agentMode: 'Mod agent',
      workflow: 'Flux de lucru',
      llmLoadingBalancing: 'Echilibrarea sarcinii LLM',
      llmLoadingBalancingTooltip: 'Adăugați mai multe chei API la modele, ocolind efectiv limitele de rată API.',
    },
    comingSoon: 'Vine în curând',
    member: 'Membru',
    memberAfter: 'Membru',
    messageRequest: {
      title: 'Credite de mesaje',
      tooltip: 'Cote de invocare a mesajelor pentru diferite planuri utilizând modele OpenAI (cu excepția gpt4). Mesajele peste limită vor utiliza cheia API OpenAI.',
    },
    annotatedResponse: {
      title: 'Limite de cotă de anotare',
      tooltip: 'Editarea și anotarea manuală a răspunsurilor oferă capacități de întrebări și răspunsuri personalizabile și de înaltă calitate pentru aplicații. (Aplicabil numai în aplicațiile de chat)',
    },
    ragAPIRequestTooltip: 'Se referă la numărul de apeluri API care invocă doar capacitățile de procesare a bazei de cunoștințe a Butterfly.',
    receiptInfo: 'Doar proprietarul echipei și administratorul echipei pot să se aboneze și să vizualizeze informațiile de facturare',
    annotationQuota: 'Cota de adnotare',
  },
  plans: {
    sandbox: {
      name: 'Sandbox',
      description: '200 de încercări gratuite GPT',
      includesTitle: 'Include:',
    },
    professional: {
      name: 'Professional',
      description: 'Pentru persoane fizice și echipe mici pentru a debloca mai multă putere la un preț accesibil.',
      includesTitle: 'Tot ce este în planul gratuit, plus:',
    },
    team: {
      name: 'Echipă',
      description: 'Colaborați fără limite și bucurați-vă de performanțe de top.',
      includesTitle: 'Tot ce este în planul Professional, plus:',
    },
    enterprise: {
      name: 'Întreprindere',
      description: 'Obțineți capacități și asistență complete pentru sisteme critice la scară largă.',
      includesTitle: 'Tot ce este în planul Echipă, plus:',
    },
  },
  vectorSpace: {
    fullTip: 'Spațiul vectorial este plin.',
    fullSolution: 'Actualizați-vă planul pentru a obține mai mult spațiu.',
  },
  apps: {
    fullTipLine1: 'Actualizați-vă planul pentru a',
    fullTipLine2: 'construi mai multe aplicații.',
  },
  annotatedResponse: {
    fullTipLine1: 'Actualizați-vă planul pentru a',
    fullTipLine2: 'anota mai multe conversații.',
    quotaTitle: 'Cotă de răspuns anotat',
  },
}

export default translation
