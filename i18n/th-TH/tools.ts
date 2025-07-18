const translation = {
  title: 'เครื่อง มือ',
  createCustomTool: 'สร้างเครื่องมือที่กําหนดเอง',
  customToolTip: 'เรียนรู้เพิ่มเติมเกี่ยวกับเครื่องมือแบบกําหนดเองของ Butterfly',
  type: {
    all: 'ทั้งหมด',
    builtIn: 'ในตัว',
    custom: 'ธรรมเนียม',
    workflow: 'เวิร์กโฟลว์',
  },
  contribute: {
    line1: 'ฉันสนใจใน',
    line2: 'เครื่องมือที่มีส่วนร่วมใน Butterfly',
    viewGuide: 'ดูคู่มือ',
  },
  author: 'โดย',
  auth: {
    unauthorized: 'การอนุญาต',
    authorized: 'อนุญาต',
    setup: 'ตั้งค่าการให้สิทธิ์เพื่อใช้',
    setupModalTitle: 'ตั้งค่าการให้สิทธิ์',
    setupModalTitleDescription: 'หลังจากกําหนดค่าข้อมูลประจําตัวแล้ว สมาชิกทั้งหมดภายในพื้นที่ทํางานสามารถใช้เครื่องมือนี้เมื่อประสานงานแอปพลิเคชันได้',
  },
  includeToolNum: '{{num}} รวมเครื่องมือ',
  addTool: 'เพิ่มเครื่องมือ',
  addToolModal: {
    type: 'ประเภท',
    category: 'ประเภท',
    add: 'เพิ่ม',
    added: 'เพิ่ม',
    manageInTools: 'จัดการในเครื่องมือ',
    emptyTitle: 'ไม่มีเครื่องมือเวิร์กโฟลว์',
    emptyTip: 'ไปที่ "เวิร์กโฟลว์ -> เผยแพร่เป็นเครื่องมือ"',
    emptyTitleCustom: 'ไม่มีเครื่องมือที่กําหนดเอง',
    emptyTipCustom: 'สร้างเครื่องมือแบบกําหนดเอง',
  },
  createTool: {
    title: 'สร้างเครื่องมือที่กําหนดเอง',
    editAction: 'กําหนดค่า',
    editTitle: 'แก้ไขเครื่องมือที่กําหนดเอง',
    name: 'ชื่อ',
    toolNamePlaceHolder: 'ป้อนชื่อเครื่องมือ',
    nameForToolCall: 'ชื่อการเรียกเครื่องมือ',
    nameForToolCallPlaceHolder: 'ใช้สําหรับจดจําเครื่อง เช่น getCurrentWeather list_pets',
    nameForToolCallTip: 'รองรับเฉพาะตัวเลข ตัวอักษร และขีดล่างเท่านั้น',
    description: 'คำอธิบาย',
    descriptionPlaceholder: 'คําอธิบายสั้น ๆ เกี่ยวกับวัตถุประสงค์ของเครื่องมือ เช่น รับอุณหภูมิสําหรับตําแหน่งเฉพาะ',
    schema: 'แผนการ',
    schemaPlaceHolder: 'ป้อนสคีมา OpenAPI ของคุณที่นี่',
    viewSchemaSpec: 'ดูข้อมูลจําเพาะของ OpenAPI-Swagger',
    importFromUrl: 'นําเข้าจาก URL',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'โปรดป้อน URL ที่ถูกต้อง',
    examples: 'ตัว อย่าง เช่น',
    exampleOptions: {
      json: 'สภาพอากาศ(JSON)',
      yaml: 'ร้านขายสัตว์เลี้ยง (YAML)',
      blankTemplate: 'เทมเพลตเปล่า',
    },
    availableTools: {
      title: 'เครื่องมือที่มี',
      name: 'ชื่อ',
      description: 'คำอธิบาย',
      method: 'วิธี',
      path: 'ทาง',
      action: 'การดําเนินการ',
      test: 'ทดสอบ',
    },
    authMethod: {
      title: 'วิธีการอนุญาต',
      type: 'ชนิดการอนุญาต',
      keyTooltip: 'Http Header Key คุณสามารถปล่อยให้เป็น "การอนุญาต" ได้หากคุณไม่รู้ว่ามันคืออะไรหรือตั้งค่าเป็นค่าที่กําหนดเอง',
      types: {
        none: 'ไม่มีใคร',
        api_key: 'คีย์ API',
        apiKeyPlaceholder: 'ชื่อส่วนหัว HTTP สําหรับคีย์ API',
        apiValuePlaceholder: 'ป้อนคีย์ API',
      },
      key: 'กุญแจ',
      value: 'ค่า',
    },
    authHeaderPrefix: {
      title: 'ประเภทการรับรองความถูกต้อง',
      types: {
        basic: 'พื้นฐาน',
        bearer: 'ผู้ถือ',
        custom: 'ธรรมเนียม',
      },
    },
    privacyPolicy: 'นโยบายความเป็นส่วนตัว',
    privacyPolicyPlaceholder: 'กรุณากรอกนโยบายความเป็นส่วนตัว',
    toolInput: {
      title: 'อินพุตเครื่องมือ',
      name: 'ชื่อ',
      required: 'ต้องระบุ',
      method: 'วิธี',
      methodSetting: 'ฉาก',
      methodSettingTip: 'ผู้ใช้กรอกข้อมูลในการกําหนดค่าเครื่องมือ',
      methodParameter: 'พารามิเตอร์',
      methodParameterTip: 'การเติม LLM ระหว่างการอนุมาน',
      label: 'ในตอนกลางวัน',
      labelPlaceholder: 'เลือกแท็ก (ไม่บังคับ)',
      description: 'คำอธิบาย',
      descriptionPlaceholder: 'คําอธิบายความหมายของพารามิเตอร์',
    },
    customDisclaimer: 'ข้อจํากัดความรับผิดชอบที่กําหนดเอง',
    customDisclaimerPlaceholder: 'โปรดป้อนข้อจํากัดความรับผิดชอบที่กําหนดเอง',
    confirmTitle: 'ยืนยันการบันทึก ?',
    confirmTip: 'แอปที่ใช้เครื่องมือนี้จะได้รับผลกระทบ',
    deleteToolConfirmTitle: 'ลบเครื่องมือนี้?',
    deleteToolConfirmContent: 'การลบเครื่องมือนั้นไม่สามารถย้อนกลับได้ ผู้ใช้จะไม่สามารถเข้าถึงเครื่องมือของคุณได้อีกต่อไป',
  },
  test: {
    title: 'ทดสอบ',
    parametersValue: 'พารามิเตอร์และค่า',
    parameters: 'พารามิเตอร์',
    value: 'ค่า',
    testResult: 'ผลการทดสอบ',
    testResultPlaceholder: 'ผลการทดสอบจะแสดงที่นี่',
  },
  thought: {
    using: 'ใช้',
    used: 'ใช้แล้ว',
    requestTitle: 'ขอร้อง',
    responseTitle: 'การตอบสนอง',
  },
  setBuiltInTools: {
    info: 'ข้อมูล',
    setting: 'ฉาก',
    toolDescription: 'คําอธิบายเครื่องมือ',
    parameters: 'พารามิเตอร์',
    string: 'เชือก',
    number: 'เลข',
    required: 'ต้องระบุ',
    infoAndSetting: 'ข้อมูลและการตั้งค่า',
    file: 'แฟ้ม',
  },
  noCustomTool: {
    title: 'ไม่มีเครื่องมือที่กําหนดเอง!',
    content: 'เพิ่มและจัดการเครื่องมือที่กําหนดเองของคุณที่นี่สําหรับการสร้างแอป AI',
    createTool: 'สร้างเครื่องมือ',
  },
  noSearchRes: {
    title: 'ขออภัย ไม่มีผลลัพธ์!',
    content: 'เราไม่พบเครื่องมือที่ตรงกับการค้นหาของคุณ',
    reset: 'รีเซ็ตการค้นหา',
  },
  builtInPromptTitle: 'พร้อมท์',
  toolRemoved: 'เครื่องมือถูกลบออก',
  notAuthorized: 'เครื่องมือไม่ได้รับอนุญาต',
  howToGet: 'วิธีรับ',
  openInStudio: 'เปิดในสตูดิโอ',
  toolNameUsageTip: 'ชื่อการเรียกเครื่องมือสําหรับการใช้เหตุผลและการแจ้งเตือนของตัวแทน',
  noTools: 'ไม่พบเครื่องมือ',
  copyToolName: 'คัดลอกชื่อ',
}

export default translation
