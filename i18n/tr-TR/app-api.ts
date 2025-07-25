const translation = {
  apiServer: 'API Sunucusu',
  apiKey: 'API Anahtarı',
  status: 'Durum',
  disabled: 'Devre Dışı',
  ok: 'Hizmette',
  copy: 'Kopyala',
  copied: 'Kopyalandı',
  play: 'Oynat',
  pause: 'Duraklat',
  playing: 'Oynatılıyor',
  loading: 'Yükleniyor',
  merMaid: {
    rerender: 'Yeniden İşleme',
  },
  never: 'Asla',
  apiKeyModal: {
    apiSecretKey: 'API Gizli Anahtar',
    apiSecretKeyTips: 'API suiistimalini önlemek için, API Anahtarınızı koruyunuz. Ön uç kodda düz metin olarak kullanmaktan kaçının. :)',
    createNewSecretKey: 'Yeni Gizli Anahtar Oluştur',
    secretKey: 'Gizli Anahtar',
    created: 'OLUŞTURULDU',
    lastUsed: 'SON KULLANIM',
    generateTips: 'Bu anahtarı güvenli ve erişilebilir bir yerde saklayın.',
  },
  actionMsg: {
    deleteConfirmTitle: 'Bu gizli anahtarı silmek istiyor musunuz?',
    deleteConfirmTips: 'Bu işlem geri alınamaz.',
    ok: 'Tamam',
  },
  completionMode: {
    title: 'Completion Uygulama API',
    info: 'Makale, özet ve çeviri gibi yüksek kaliteli metin üretimi için, completion-messages API\'sini kullanıcı girişi ile birlikte kullanın. Metin üretimi, Butterfly Prompt Engineering\'de ayarlanan model parametrelerine ve prompt şablonlarına dayanır.',
    createCompletionApi: 'Completion Mesajı Oluştur',
    createCompletionApiTip: 'Soru-cevap modunu desteklemek için bir Completion Mesajı oluşturun.',
    inputsTips: '(İsteğe bağlı) Prompt Eng\'deki değişkenlere karşılık gelen kullanıcı giriş alanlarını anahtar-değer çiftleri olarak sağlayın. Anahtar, değişken adıdır, Değer ise parametre değeridir. Alan türü Select ise, gönderilen Değer önceden ayarlanmış seçeneklerden biri olmalıdır.',
    queryTips: 'Kullanıcı giriş metni içeriği.',
    blocking: 'Bloke etme tipi, yürütmenin tamamlanmasını bekleyip sonuçları döndürme. (Süreç uzun sürerse istekler kesilebilir)',
    streaming: 'Streaming döndürmeleri. SSE (Sunucu Tarafından Gönderilen Etkinlikler) tabanlı streaming döndürme uygulaması.',
    messageFeedbackApi: 'Mesaj geri bildirimi (beğeni)',
    messageFeedbackApiTip: 'Son kullanıcılar adına beğeni veya beğenmeme ile alınan mesajları değerlendirin. Bu veriler, Günlükler ve Ek Açıklamalar sayfasında görünür ve gelecekteki model ince ayarları için kullanılır.',
    messageIDTip: 'Mesaj Kimliği',
    ratingTip: 'beğeni veya beğenmeme, null geri almaktır',
    parametersApi: 'Uygulama parametre bilgilerini al',
    parametersApiTip: 'Değişken adları, alan adları, türleri ve varsayılan değerler dahil olmak üzere yapılandırılmış Giriş parametrelerini alın. Genellikle bu alanları bir formda görüntülemek veya istemci yüklendikten sonra varsayılan değerleri doldurmak için kullanılır.',
  },
  chatMode: {
    title: 'Chat Uygulama API',
    info: 'Soru-Cevap formatını kullanan çok yönlü sohbet uygulamaları için, diyalogu başlatmak üzere chat-messages API\'sini çağırın. conversation_id\'yi ileterek devam eden konuşmaları sürdürün. Yanıt parametreleri ve şablonları, Butterfly Prompt Engineering ayarlarına bağlıdır.',
    createChatApi: 'Sohbet mesajı oluştur',
    createChatApiTip: 'Yeni bir konuşma mesajı oluşturun veya mevcut diyaloğu devam ettirin.',
    inputsTips: '(İsteğe bağlı) Prompt Eng\'deki değişkenlere karşılık gelen kullanıcı giriş alanlarını anahtar-değer çiftleri olarak sağlayın. Anahtar, değişken adıdır, Değer ise parametre değeridir. Alan türü Select ise, gönderilen Değer önceden ayarlanmış seçeneklerden biri olmalıdır.',
    queryTips: 'Kullanıcı girişi/soru içeriği',
    blocking: 'Bloke etme tipi, yürütmenin tamamlanmasını bekleyip sonuçları döndürme. (Süreç uzun sürerse istekler kesilebilir)',
    streaming: 'Streaming döndürmeleri. SSE (Sunucu Tarafından Gönderilen Etkinlikler) tabanlı streaming döndürme uygulaması.',
    conversationIdTip: '(İsteğe bağlı) Konuşma ID: ilk konuşma için boş bırakın; diyaloğu devam ettirmek için context\'ten conversation_id\'yi iletin.',
    messageFeedbackApi: 'Mesaj son kullanıcı geri bildirimi, beğeni',
    messageFeedbackApiTip: 'Son kullanıcılar adına beğeni veya beğenmeme ile alınan mesajları değerlendirin. Bu veriler, Günlükler ve Ek Açıklamalar sayfasında görünür ve gelecekteki model ince ayarları için kullanılır.',
    messageIDTip: 'Mesaj Kimliği',
    ratingTip: 'beğeni veya beğenmeme, null geri almaktır',
    chatMsgHistoryApi: 'Sohbet geçmişi mesajı al',
    chatMsgHistoryApiTip: 'İlk sayfa en son `limit` barını döndürür ve bu ters sıradadır.',
    chatMsgHistoryConversationIdTip: 'Konuşma ID',
    chatMsgHistoryFirstId: 'Mevcut sayfadaki ilk sohbet kaydının ID\'si. Varsayılan yok.',
    chatMsgHistoryLimit: 'Bir istekte kaç sohbet döndürüleceği',
    conversationsListApi: 'Konuşma listesini al',
    conversationsListApiTip: 'Mevcut kullanıcının oturum listesini alır. Varsayılan olarak, son 20 oturum döndürülür.',
    conversationsListFirstIdTip: 'Mevcut sayfadaki son kaydın ID\'si, varsayılan yok.',
    conversationsListLimitTip: 'Bir istekte kaç sohbet döndürüleceği',
    conversationRenamingApi: 'Konuşma yeniden adlandırma',
    conversationRenamingApiTip: 'Konuşmaları yeniden adlandırın; ad, çoklu oturum istemci arayüzlerinde görüntülenir.',
    conversationRenamingNameTip: 'Yeni isim',
    parametersApi: 'Uygulama parametre bilgilerini al',
    parametersApiTip: 'Değişken adları, alan adları, türleri ve varsayılan değerler dahil olmak üzere yapılandırılmış Giriş parametrelerini alın. Genellikle bu alanları bir formda görüntülemek veya istemci yüklendikten sonra varsayılan değerleri doldurmak için kullanılır.',
  },
  develop: {
    requestBody: 'Request Body',
    pathParams: 'Path Params',
    query: 'Query',
    toc: 'Içeriği',
  },
  regenerate: 'Yenilemek',
}

export default translation
