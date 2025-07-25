const translation = {
  apiServer: 'API 서버',
  apiKey: 'API 키',
  status: '상태',
  disabled: '비활성화됨',
  ok: '서비스 중',
  copy: '복사',
  copied: '복사 완료',
  play: '실행',
  pause: '일시 정지',
  playing: '실행 중',
  loading: '로드 중',
  merMaid: {
    rerender: '다시 렌더링',
  },
  never: '없음',
  apiKeyModal: {
    apiSecretKey: 'API 비밀 키',
    apiSecretKeyTips: 'API 키를 보호하여 API의 남용을 방지하십시오. 프런트엔드 코드에서 평문으로 사용하지 마세요. :)',
    createNewSecretKey: '새로운 비밀 키 생성',
    secretKey: '비밀 키',
    created: '생성 날짜',
    lastUsed: '최종 사용 날짜',
    generateTips: '이 키를 안전하고 접근 가능한 위치에 보관하십시오.',
  },
  actionMsg: {
    deleteConfirmTitle: '이 비밀 키를 삭제하시겠습니까?',
    deleteConfirmTips: '이 작업은 취소할 수 없습니다.',
    ok: '확인',
  },
  completionMode: {
    title: '완성 모드 API',
    info: '문서, 요약, 번역 등 고품질 텍스트 생성을 위해 사용자 입력을 사용하는 완성 메시지 API를 사용합니다. 텍스트 생성은 Butterfly Prompt Engineering에서 설정한 모델 매개변수와 프롬프트 템플릿에 의존합니다.',
    createCompletionApi: '완성 메시지 생성',
    createCompletionApiTip: '질의 응답 모드를 지원하기 위해 완성 메시지를 생성합니다.',
    inputsTips:
      '(선택 사항) Prompt Eng의 변수에 해당하는 키-값 쌍으로 사용자 입력 필드를 제공합니다. 키는 변수 이름이고 값은 매개변수 값입니다. 필드 유형이 Select인 경우 전송되는 값은 미리 설정된 선택 사항 중 하나여야 합니다.',
    queryTips: '사용자 입력 텍스트 내용.',
    blocking: '블로킹 유형으로 실행이 완료되고 결과가 반환될 때까지 대기합니다. (처리가 오래 걸리면 요청이 중단될 수 있습니다)',
    streaming: '스트리밍 반환. SSE(Server-Sent Events)를 기반으로 하는 스트리밍 반환 구현.',
    messageFeedbackApi: '메시지 피드백(좋아요)',
    messageFeedbackApiTip: '엔드 사용자 대신 수신된 메시지를 "좋아요" 또는 "좋아요"로 평가합니다. 이 데이터는 로그 및 주석 페이지에 표시되며 향후 모델 세부 조정에 사용됩니다.',
    messageIDTip: '메시지 ID',
    ratingTip: '좋아요 또는 좋아요, null은 취소',
    parametersApi: '애플리케이션 매개변수 정보 가져오기',
    parametersApiTip: '변수 이름, 필드 이름, 유형, 기본값을 포함한 설정된 입력 매개변수를 가져옵니다. 일반적으로 이러한 필드는 양식에 표시하거나 클라이언트 로드 후에 기본값을 입력하는 데 사용됩니다.',
  },
  chatMode: {
    title: '채팅 모드 API',
    info: '질의 응답 형식을 사용하는 다목적 대화형 응용 프로그램에는 채팅 메시지 API를 호출하여 대화를 시작합니다. 반환된 conversation_id를 전달하여 계속된 대화를 유지합니다. 응답 매개변수 및 템플릿은 Butterfly Prompt Eng의 설정에 의존합니다.',
    createChatApi: '채팅 메시지 생성',
    createChatApiTip: '새로운 대화 메시지를 생성하거나 기존 대화를 계속합니다.',
    inputsTips:
      '(선택 사항) Prompt Eng의 변수에 해당하는 키-값 쌍으로 사용자 입력 필드를 제공합니다. 키는 변수 이름이고 값은 매개변수 값입니다. 필드 유형이 Select인 경우 전송되는 값은 미리 설정된 선택 사항 중 하나여야 합니다.',
    queryTips: '사용자 입력/질문 내용',
    blocking: '블로킹 유형으로 실행이 완료되고 결과가 반환될 때까지 대기합니다. (처리가 오래 걸리면 요청이 중단될 수 있습니다)',
    streaming: '스트리밍 반환. SSE(Server-Sent Events)를 기반으로 하는 스트리밍 반환 구현.',
    conversationIdTip: '(선택 사항) 대화 ID: 처음 대화의 경우 비워두고, 계속된 경우 컨텍스트에서 conversation_id를 전달합니다.',
    messageFeedbackApi: '메시지 피드백(좋아요)',
    messageFeedbackApiTip: '엔드 사용자 대신 수신된 메시지를 "좋아요" 또는 "좋아요"로 평가합니다. 이 데이터는 로그 및 주석 페이지에 표시되며 향후 모델 세부 조정에 사용됩니다.',
    messageIDTip: '메시지 ID',
    ratingTip: '좋아요 또는 좋아요, null은 취소',
    chatMsgHistoryApi: '채팅 메시지 기록 가져오기',
    chatMsgHistoryApiTip: '첫 번째 페이지는 최신의 "limit" 바를 반환합니다. 역순입니다.',
    chatMsgHistoryConversationIdTip: '대화 ID',
    chatMsgHistoryFirstId: '현재 페이지의 첫 번째 채팅 레코드의 ID. 기본값은 없음입니다.',
    chatMsgHistoryLimit: '한 번에 반환되는 채팅 수',
    conversationsListApi: '대화 목록 가져오기',
    conversationsListApiTip: '현재 사용자의 세션 목록을 가져옵니다. 기본적으로 최근 20개의 세션이 반환됩니다.',
    conversationsListFirstIdTip: '현재 페이지의 마지막 레코드의 ID, 기본값은 없음입니다.',
    conversationsListLimitTip: '한 번에 반환되는 채팅 수',
    conversationRenamingApi: '대화 이름 변경',
    conversationRenamingApiTip: '대화 이름을 변경합니다. 이름은 멀티 세션 클라이언트 인터페이스에 표시됩니다.',
    conversationRenamingNameTip: '새 이름',
    parametersApi: '애플리케이션 매개변수 정보 가져오기',
    parametersApiTip: '변수 이름, 필드 이름, 유형, 기본값을 포함한 설정된 입력 매개변수를 가져옵니다. 일반적으로 이러한 필드는 양식에 표시하거나 클라이언트 로드 후에 기본값을 입력하는 데 사용됩니다.',
  },
  develop: {
    requestBody: '요청 본문',
    pathParams: '경로 매개변수',
    query: '쿼리',
    toc: '목차',
  },
  regenerate: '재생성',
}

export default translation
