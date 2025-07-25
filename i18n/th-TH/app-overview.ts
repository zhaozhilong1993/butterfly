const translation = {
  welcome: {
    firstStepTip: 'ในการเริ่มต้น',
    enterKeyTip: 'ป้อนคีย์ OpenAI API ของคุณด้านล่าง',
    getKeyTip: 'รับคีย์ API ของคุณจากแดชบอร์ด OpenAI',
    placeholder: 'คีย์ API OpenAI ของคุณ (เช่น sk-xxxx)',
  },
  apiKeyInfo: {
    cloud: {
      trial: {
        title: 'คุณกําลังใช้โควต้าทดลองใช้ {{providerName}}',
        description: 'โควต้าทดลองใช้มีไว้เพื่อวัตถุประสงค์ในการทดสอบของคุณ ก่อนที่โควต้าทดลองใช้จะหมด โปรดตั้งค่าผู้ให้บริการโมเดลของคุณเองหรือซื้อโควต้าเพิ่มเติม',
      },
      exhausted: {
        title: 'โควต้าทดลองใช้ของคุณหมดแล้ว โปรดตั้งค่า APIKey ของคุณ',
        description: 'คุณใช้โควต้าทดลองใช้หมดแล้ว โปรดตั้งค่าผู้ให้บริการโมเดลของคุณเองหรือซื้อโควต้าเพิ่มเติม',
      },
    },
    selfHost: {
      title: {
        row1: 'ในการเริ่มต้น',
        row2: 'ตั้งค่าผู้ให้บริการโมเดลของคุณก่อน',
      },
    },
    callTimes: 'เวลาโทร',
    usedToken: 'โทเค็นที่ใช้',
    setAPIBtn: 'ไปที่ผู้ให้บริการโมเดลการตั้งค่า',
    tryCloud: 'หรือลองใช้ Butterfly เวอร์ชันคลาวด์พร้อมใบเสนอราคาฟรี',
  },
  overview: {
    title: 'ภาพรวม',
    appInfo: {
      explanation: 'AI WebApp พร้อมใช้งาน',
      accessibleAddress: 'URL สาธารณะ',
      preview: 'ดูตัวอย่าง',
      regenerate: 'สร้างใหม่',
      regenerateNotice: 'คุณต้องการสร้าง URL สาธารณะใหม่หรือไม่',
      preUseReminder: 'โปรดเปิดใช้งาน WebApp ก่อนดําเนินการต่อ',
      settings: {
        entry: 'การตั้งค่า',
        title: 'การตั้งค่าเว็บแอป',
        webName: 'ชื่อเว็บแอป',
        webDesc: 'คําอธิบาย WebApp',
        webDescTip: 'ข้อความนี้จะแสดงที่ฝั่งไคลเอ็นต์ โดยให้คําแนะนําพื้นฐานเกี่ยวกับวิธีการใช้แอปพลิเคชัน',
        webDescPlaceholder: 'ป้อนคําอธิบายของ WebApp',
        language: 'ภาษา',
        workflow: {
          title: 'เวิร์กโฟลว์',
          subTitle: 'รายละเอียดเวิร์กโฟลว์',
          show: 'แสดง',
          hide: 'ซ่อน',
          showDesc: 'แสดงหรือซ่อนรายละเอียดเวิร์กโฟลว์ใน WebApp',
        },
        chatColorTheme: 'ธีมสีแชท',
        chatColorThemeDesc: 'กําหนดธีมสีของแชทบอท',
        chatColorThemeInverted: 'คว่ำ',
        invalidHexMessage: 'ค่าฐานสิบหกไม่ถูกต้อง',
        invalidPrivacyPolicy: 'ลิงก์นโยบายความเป็นส่วนตัวไม่ถูกต้อง โปรดใช้ลิงก์ที่ถูกต้องขึ้นต้นด้วย http หรือ https',
        sso: {
          label: 'การรับรองความถูกต้องของ SSO',
          title: 'เว็บแอป SSO',
          description: 'ผู้ใช้ทุกคนต้องเข้าสู่ระบบด้วย SSO ก่อนใช้ WebApp',
          tooltip: 'ติดต่อผู้ดูแลระบบเพื่อเปิดใช้ WebApp SSO',
        },
        more: {
          entry: 'แสดงการตั้งค่าเพิ่มเติม',
          copyright: 'ลิขสิทธิ์',
          copyRightPlaceholder: 'ป้อนชื่อผู้เขียนหรือองค์กร',
          privacyPolicy: 'นโยบายความเป็นส่วนตัว',
          privacyPolicyPlaceholder: 'ป้อนลิงก์นโยบายความเป็นส่วนตัว',
          privacyPolicyTip: 'ช่วยให้ผู้เยี่ยมชมเข้าใจข้อมูลที่แอปพลิเคชันรวบรวม โปรดดูนโยบาย<privacyPolicyLink>ความเป็นส่วนตัว</privacyPolicyLink>ของ Butterfly',
          customDisclaimer: 'ข้อจํากัดความรับผิดชอบที่กําหนดเอง',
          customDisclaimerPlaceholder: 'ป้อนข้อความข้อจํากัดความรับผิดชอบที่กําหนดเอง',
          customDisclaimerTip: 'ข้อความปฏิเสธความรับผิดชอบที่กําหนดเองจะแสดงที่ฝั่งไคลเอ็นต์ โดยให้ข้อมูลเพิ่มเติมเกี่ยวกับแอปพลิเคชัน',
          copyrightTip: 'แสดงข้อมูลลิขสิทธิ์ในเว็บแอป',
          copyrightTooltip: 'โปรดอัปเกรดเป็นแผน Professional หรือสูงกว่า',
        },
        modalTip: 'การตั้งค่าเว็บแอปฝั่งไคลเอ็นต์',
      },
      embedded: {
        entry: 'ฝัง ตัว',
        title: 'ฝังบนเว็บไซต์',
        explanation: 'เลือกวิธีฝังแอปแชทลงในเว็บไซต์ของคุณ',
        iframe: 'หากต้องการเพิ่มแอปแชทที่ใดก็ได้บนเว็บไซต์ของคุณ ให้เพิ่ม iframe นี้ลงในโค้ด html ของคุณ',
        scripts: 'หากต้องการเพิ่มแอปแชทที่ด้านขวาล่างของเว็บไซต์ ให้เพิ่มโค้ดนี้ลงใน html ของคุณ',
        chromePlugin: 'ติดตั้งส่วนขยาย Butterfly Chatbot Chrome',
        copied: 'คัด ลอก',
        copy: 'ลอก',
      },
      qrcode: {
        title: 'เชื่อมโยงรหัส QR',
        scan: 'สแกนเพื่อแบ่งปัน',
        download: 'ดาวน์โหลด QR Code',
      },
      customize: {
        way: 'วิธี',
        entry: 'ปรับแต่ง',
        title: 'ปรับแต่ง AI WebApp',
        explanation: 'คุณสามารถปรับแต่งส่วนหน้าของ Web App ให้เหมาะกับสถานการณ์และความต้องการสไตล์ของคุณได้',
        way1: {
          name: 'แยกรหัสไคลเอ็นต์ แก้ไข และปรับใช้กับ Vercel (แนะนํา)',
          step1: 'แยกรหัสไคลเอ็นต์และแก้ไข',
          step1Tip: 'คลิกที่นี่เพื่อแยกซอร์สโค้ดลงในบัญชี GitHub ของคุณและแก้ไขโค้ด',
          step1Operation: 'Butterfly-Web ไคลเอ็นต์',
          step2: 'ปรับใช้กับ Vercel',
          step2Tip: 'คลิกที่นี่เพื่อนําเข้าที่เก็บไปยัง Vercel และปรับใช้',
          step2Operation: 'นําเข้าที่เก็บข้อมูล',
          step3: 'กําหนดค่าตัวแปรสภาพแวดล้อม',
          step3Tip: 'เพิ่มตัวแปรสภาพแวดล้อมต่อไปนี้ใน Vercel',
        },
        way2: {
          name: 'เขียนโค้ดฝั่งไคลเอ็นต์เพื่อเรียกใช้ API และปรับใช้กับเซิร์ฟเวอร์',
          operation: 'เอกสาร',
        },
      },
      launch: 'เรือยนต์',
    },
    apiInfo: {
      title: 'API บริการแบ็กเอนด์',
      explanation: 'ผสานรวมเข้ากับแอปพลิเคชันของคุณได้อย่างง่ายดาย',
      accessibleAddress: 'ปลายทาง API บริการ',
      doc: 'การอ้างอิง API',
    },
    status: {
      running: 'ให้บริการ',
      disable: 'พิการ',
    },
  },
  analysis: {
    title: 'การวิเคราะห์',
    ms: 'นางสาว',
    tokenPS: 'โทเค็น/วินาที',
    totalMessages: {
      title: 'ข้อความทั้งหมด',
      explanation: 'การโต้ตอบ AI รายวันนับ',
    },
    totalConversations: {
      title: 'การสนทนาทั้งหมด',
      explanation: 'การสนทนา AI รายวันนับ ไม่รวมวิศวกรรม/ดีบักพร้อมท์',
    },
    activeUsers: {
      title: 'ผู้ใช้ที่ใช้งานอยู่',
      explanation: 'ผู้ใช้ที่ไม่ซ้ํากันมีส่วนร่วมในการถามตอบกับ AI ไม่รวมวิศวกรรม/ดีบักพร้อมท์',
    },
    tokenUsage: {
      title: 'การใช้โทเค็น',
      explanation: 'สะท้อนถึงการใช้โทเค็นรายวันของโมเดลภาษาสําหรับแอปพลิเคชัน ซึ่งมีประโยชน์สําหรับวัตถุประสงค์ในการควบคุมต้นทุน',
      consumed: 'ใช้',
    },
    avgSessionInteractions: {
      title: 'การโต้ตอบเซสชันโดยเฉลี่ย',
      explanation: 'จํานวนการสื่อสารระหว่างผู้ใช้และ AI อย่างต่อเนื่อง สําหรับแอปที่ใช้การสนทนา',
    },
    avgUserInteractions: {
      title: 'การโต้ตอบของผู้ใช้โดยเฉลี่ย',
      explanation: 'สะท้อนถึงความถี่ในการใช้งานรายวันของผู้ใช้ เมตริกนี้สะท้อนถึงความเหนียวแน่นของผู้ใช้',
    },
    userSatisfactionRate: {
      title: 'อัตราความพึงพอใจของผู้ใช้',
      explanation: 'จํานวนไลค์ต่อ 1,000 ข้อความ สิ่งนี้บ่งชี้ถึงสัดส่วนของคําตอบที่ผู้ใช้พึงพอใจอย่างมาก',
    },
    avgResponseTime: {
      title: 'เวลาตอบสนองเฉลี่ย',
      explanation: 'เวลา (มิลลิวินาที) สําหรับ AI ในการประมวลผล/ตอบสนอง สําหรับแอปที่ใช้ข้อความ',
    },
    tps: {
      title: 'ความเร็วในการส่งออกโทเค็น',
      explanation: 'วัดประสิทธิภาพของ LLM นับความเร็วในการส่งออกโทเค็นของ LLM ตั้งแต่เริ่มต้นคําขอจนถึงเสร็จสิ้นเอาต์พุต',
    },
  },
}

export default translation
