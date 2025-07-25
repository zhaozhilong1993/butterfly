const translation = {
  apiServer: 'เซิร์ฟเวอร์ API',
  apiKey: 'คีย์ API',
  status: 'สถานะ',
  disabled: 'พิการ',
  ok: 'ให้บริการ',
  copy: 'ลอก',
  copied: 'คัด ลอก',
  regenerate: 'สร้างใหม่',
  play: 'เล่น',
  pause: 'หยุด',
  playing: 'เล่น',
  loading: 'การโหลด',
  merMaid: {
    rerender: 'ทําซ้ํา Rerender',
  },
  never: 'ไม่เคย',
  apiKeyModal: {
    apiSecretKey: 'คีย์ลับ API',
    apiSecretKeyTips: 'เพื่อป้องกันการละเมิด API ให้ปกป้องคีย์ API ของคุณ หลีกเลี่ยงการใช้เป็นข้อความธรรมดาในโค้ดส่วนหน้า :)',
    createNewSecretKey: 'สร้างคีย์ลับใหม่',
    secretKey: 'กุญแจลับ',
    created: 'สร้าง',
    lastUsed: 'ใช้ล่าสุด',
    generateTips: 'เก็บกุญแจนี้ไว้ในที่ปลอดภัยและเข้าถึงได้',
  },
  actionMsg: {
    deleteConfirmTitle: 'ลบคีย์ลับนี้?',
    deleteConfirmTips: 'การดําเนินการนี้ไม่สามารถยกเลิกได้',
    ok: 'ตกลง, ได้',
  },
  completionMode: {
    title: 'API แอปที่สมบูรณ์',
    info: 'สําหรับการสร้างข้อความคุณภาพสูง เช่น บทความ บทสรุป และการแปล ให้ใช้ API ข้อความที่สมบูรณ์กับการป้อนข้อมูลของผู้ใช้ การสร้างข้อความอาศัยพารามิเตอร์โมเดลและเทมเพลตพร้อมท์ที่ตั้งค่าไว้ใน Butterfly Prompt Engineering',
    createCompletionApi: 'สร้างข้อความเสร็จสมบูรณ์',
    createCompletionApiTip: 'สร้างข้อความเสร็จสิ้นเพื่อรองรับโหมดคําถามและคําตอบ',
    inputsTips: '(ไม่บังคับ) ระบุฟิลด์อินพุตของผู้ใช้เป็นคู่คีย์-ค่า ซึ่งสอดคล้องกับตัวแปรใน Prompt Eng คีย์คือชื่อตัวแปร ค่าคือค่าพารามิเตอร์ ถ้าชนิดฟิลด์เป็น เลือก ค่าที่ส่งจะต้องเป็นหนึ่งในตัวเลือกที่ตั้งไว้ล่วงหน้า',
    queryTips: 'เนื้อหาข้อความที่ผู้ใช้ป้อน',
    blocking: 'ประเภทการบล็อก รอให้การดําเนินการเสร็จสมบูรณ์และส่งคืนผลลัพธ์ (คําขออาจถูกขัดจังหวะหากกระบวนการใช้เวลานาน)',
    streaming: 'การสตรีมกลับมา การใช้งานการส่งคืนการสตรีมตาม SSE (เหตุการณ์ที่ส่งโดยเซิร์ฟเวอร์)',
    messageFeedbackApi: 'ข้อความแสดงความคิดเห็น (ชอบ)',
    messageFeedbackApiTip: 'ให้คะแนนข้อความที่ได้รับในนามของผู้ใช้ปลายทางที่มีการชอบหรือไม่ชอบ ข้อมูลนี้สามารถมองเห็นได้ในหน้า Logs & Annotations และใช้สําหรับการปรับแต่งโมเดลในอนาคต',
    messageIDTip: 'รหัสข้อความ',
    ratingTip: 'ชอบหรือไม่ชอบ null คือเลิกทํา',
    parametersApi: 'รับข้อมูลพารามิเตอร์แอปพลิเคชัน',
    parametersApiTip: 'ดึงพารามิเตอร์อินพุตที่กําหนดค่าไว้ รวมถึงชื่อตัวแปร ชื่อฟิลด์ ชนิด และค่าเริ่มต้น โดยทั่วไปจะใช้สําหรับแสดงฟิลด์เหล่านี้ในฟอร์มหรือกรอกค่าเริ่มต้นหลังจากโหลดไคลเอ็นต์',
  },
  chatMode: {
    title: 'API แอปแชท',
    info: 'สําหรับแอปการสนทนาอเนกประสงค์ที่ใช้รูปแบบ Q&A ให้เรียก API ข้อความแชทเพื่อเริ่มการสนทนา รักษาการสนทนาอย่างต่อเนื่องโดยส่ง conversation_id ที่ส่งคืน พารามิเตอร์การตอบสนองและเทมเพลตขึ้นอยู่กับ Butterfly Prompt Eng การตั้งค่า',
    createChatApi: 'สร้างข้อความแชท',
    createChatApiTip: 'สร้างข้อความการสนทนาใหม่หรือดําเนินการต่อในการสนทนาที่มีอยู่',
    inputsTips: '(ไม่บังคับ) ระบุฟิลด์อินพุตของผู้ใช้เป็นคู่คีย์-ค่า ซึ่งสอดคล้องกับตัวแปรใน Prompt Eng คีย์คือชื่อตัวแปร ค่าคือค่าพารามิเตอร์ ถ้าชนิดฟิลด์เป็น เลือก ค่าที่ส่งจะต้องเป็นหนึ่งในตัวเลือกที่ตั้งไว้ล่วงหน้า',
    queryTips: 'เนื้อหาการป้อนข้อมูล/คําถามของผู้ใช้',
    blocking: 'ประเภทการบล็อก รอให้การดําเนินการเสร็จสมบูรณ์และส่งคืนผลลัพธ์ (คําขออาจถูกขัดจังหวะหากกระบวนการใช้เวลานาน)',
    streaming: 'การสตรีมกลับมา การใช้งานการส่งคืนการสตรีมตาม SSE (เหตุการณ์ที่ส่งโดยเซิร์ฟเวอร์)',
    conversationIdTip: '(ไม่บังคับ) รหัสการสนทนา: เว้นว่างไว้สําหรับการสนทนาครั้งแรก ส่ง conversation_id จากบริบทเพื่อสนทนาต่อ',
    messageFeedbackApi: 'ข้อความความคิดเห็นของผู้ใช้เทอร์มินัล เช่น',
    messageFeedbackApiTip: 'ให้คะแนนข้อความที่ได้รับในนามของผู้ใช้ปลายทางที่มีการชอบหรือไม่ชอบ ข้อมูลนี้สามารถมองเห็นได้ในหน้า Logs & Annotations และใช้สําหรับการปรับแต่งโมเดลในอนาคต',
    messageIDTip: 'รหัสข้อความ',
    ratingTip: 'ชอบหรือไม่ชอบ null คือเลิกทํา',
    chatMsgHistoryApi: 'รับข้อความประวัติการแชท',
    chatMsgHistoryApiTip: 'หน้าแรกส่งคืนแถบ \'ขีดจํากัด\' ล่าสุด ซึ่งอยู่ในลําดับที่กลับกัน',
    chatMsgHistoryConversationIdTip: 'รหัสการสนทนา',
    chatMsgHistoryFirstId: 'ID ของเรกคอร์ดแชทแรกบนหน้าปัจจุบัน ค่าเริ่มต้นคือไม่มี',
    chatMsgHistoryLimit: 'จํานวนแชทที่ส่งคืนในคําขอเดียว',
    conversationsListApi: 'รับรายการการสนทนา',
    conversationsListApiTip: 'รับรายการเซสชันของผู้ใช้ปัจจุบัน โดยค่าเริ่มต้น 20 เซสชันล่าสุดจะถูกส่งคืน',
    conversationsListFirstIdTip: 'รหัสของเรกคอร์ดสุดท้ายบนหน้าปัจจุบัน ค่าเริ่มต้นไม่มี',
    conversationsListLimitTip: 'จํานวนแชทที่ส่งคืนในคําขอเดียว',
    conversationRenamingApi: 'การเปลี่ยนชื่อการสนทนา',
    conversationRenamingApiTip: 'เปลี่ยนชื่อการสนทนา ชื่อจะแสดงในอินเทอร์เฟซไคลเอ็นต์แบบหลายเซสชัน',
    conversationRenamingNameTip: 'ชื่อใหม่',
    parametersApi: 'รับข้อมูลพารามิเตอร์แอปพลิเคชัน',
    parametersApiTip: 'ดึงพารามิเตอร์อินพุตที่กําหนดค่าไว้ รวมถึงชื่อตัวแปร ชื่อฟิลด์ ชนิด และค่าเริ่มต้น โดยทั่วไปจะใช้สําหรับแสดงฟิลด์เหล่านี้ในฟอร์มหรือกรอกค่าเริ่มต้นหลังจากโหลดไคลเอ็นต์',
  },
  develop: {
    requestBody: 'เนื้อหาคําขอ',
    pathParams: 'พารามิเตอร์เส้นทาง',
    query: 'สอบถาม',
    toc: 'เนื้อหา',
  },
}

export default translation
