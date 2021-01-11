import enums from "../src/enums/enums"

export = Enums 
export as namespace Enums

declare namespace Enums {
  enum Language {
    CATALAN = 'ca-ES',
    DANISH = 'da-DK',
    GERMAN = 'de-DE',
    ENGLISH_AU = 'en-AU',
    ENGLISH_CA = 'en-CA',
    ENGLISH_UK = 'en-GB',
    ENGLISH_IN = 'en-IN',
    ENGLISH_US = 'en-US',
    ENGLISH_ES = 'es-ES',
    ENGLISH_MX = 'es-MX',
    FINNISH = 'fi-FI',
    FRENCH_CA = 'fr-CA',
    FRENCH_FR = 'fr-FR',
    ITALIAN = 'it-IT',
    JAPANESE = 'ja-JP',
    KOREAN = 'ko-KR',
    NORWEGIAN = 'nb-NO',
    DUTCH = 'nl-NL',
    POLISH = 'pl-PL',
    PORTUGESE_BR = 'pt-BR',
    PORTUGESE_PT = 'pt-PT',
    RUSSIAN = 'ru-RU',
    SWEDISH = 'sv-SE',
    CHINESE_CN = 'zh-CN',
    CHINESE_HK = 'zh-HK',
    CHINESE_TW = 'zh-TW'
  }

  enum CallStatus {
    QUEUED = 'queued',
    RINGING = 'ringing',
    IN_PROGRESS = 'inProgress',
    CANCELED = 'canceled',
    COMPLETED = 'completed',
    FAILED = 'failed',
    BUSY = 'busy',
    NO_ANSWER = 'noAnswer'
  }

  enum IfMachine {
    REDIRECT = 'redirect',
    HANGUP = 'hangup'
  }

  enum PlayBeep {
    ALWAYS = 'always',
    NEVER = 'never',
    ENTRY_ONLY = 'entryOnly',
    EXIT_ONLY = 'exitOnly'
  }

  enum ConferenceStatus {
    EMPTY = 'empty',
    POPULATED = 'populated',
    IN_PROGRESS = 'inProgress',
    TERMINATED = 'terminated'
  }

  enum GrammarType {
    URL = 'URL',
    BUILT_IN = 'BUILTIN'
  }

  enum AccountStatus {
    CLOSED = 'closed',
    SUSPENDED = 'suspended',
    ACTIVE = 'active'
  }

  enum CallDirection {
    INBOUND = 'inbound',
    OUTBOUND_API = 'outboundAPI',
    OUTBOUND_DIAL = 'outboundDial'
  }

  enum AnsweredBy {
    HUMAN = 'human',
    MACHINE = 'machine'
  }

  enum MachineType {
    ANSWERING_MACHINE = 'answeringMachine',
    FAX_MACHINE = 'faxMachine'
  }

  enum LogLevel {
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error'
  }

  enum QueueResult {
    QUEUE_FULL = 'queueFull',
    DEQUEUED = 'dequeued',
    HANGUP = 'hangup',
    SYSTEM_ERROR = 'systemError'
  }

  enum RecordUtteranceTermReason {
    FINISH_KEY = 'finishKey',
    TIMEOUT = 'timeout',
    HANGUP = 'hangup',
    MAX_LENGTH = 'maxLength'
  }

  enum GetDigitsReason {
    FINISH_KEY = 'finishKey',
    TIMEOUT = 'timeout',
    HANGUP = 'hangup',
    MIN_DIGITS = 'minDigits',
    MAX_DIGITS = 'maxDigits'
  }

  enum GetSpeechReason {
    ERROR = 'error',
    HANGUP = 'hangup',
    DIGIT = 'digit',
    NO_INPUT = 'noInput',
    NO_MATCH = 'noMatch',
    RECOGNITION = 'recognition'
  }

  enum GrammarFileBuiltIn {
    ALPHNUM6 = 'ALPHNUM6',
    ANY_DIG = 'ANY_DIG',
    DIG1 = 'DIG1',
    DIG2 = 'DIG2',
    DIG3 = 'DIG3',
    DIG4 = 'DIG4',
    DIG5 = 'DIG5',
    DIG6 = 'DIG6',
    DIG7 = 'DIG7',
    DIG8 = 'DIG8',
    DIG9 = 'DIG9',
    DIG10 = 'DIG10',
    DIG11 = 'DIG11',
    UP_TO_20_DIGIT_SEQUENCE = 'UP_TO_20_DIGIT_SEQUENCE',
    VERSAY_YESNO = 'VERSAY_YESNO'
  }

  enum MessageDirection {
    INBOUND = 'inbound',
    OUTBOUND = 'outbound'
  }

  enum MessageStatus {
    NEW = 'new',
    QUEUED = 'queued',
    REJECTED = 'rejected',
    SENDING = 'sending',
    SENT = 'sent',
    FAILED = 'failed',
    RECEIVED = 'received',
    UNDELIVERED = "undelivered",
    EXPIRED = "expired",
    DELETED = "deleted",
    UNKNOWN = "unknown"
  }

  enum RequestType {
    INBOUND_CALL = 'inboundCall',
    RECORD = 'record',
    GET_DIGITS = 'getDigits',
    GET_SPEECH = 'getSpeech',
    REDIRECT = 'redirect',
    PAUSE = 'pause',
    OUT_DIAL_START = 'outDialStart',
    OUT_DIAL_CONNECT = 'outDialConnect',
    OUT_DIAL_API_CONNECT = 'outDialApiConnect',
    MACHINE_DETECTED = 'machineDetected',
    DEQUEUE = 'dequeue',
    QUEUE_WAIT = 'queueWait',
    ADD_TO_QUEUE_NOTIFICATION = 'addToQueueNotification',
    REMOVE_FROM_QUEUE_NOTIFICATION = 'removeFromQueueNotification',
    CALL_STATUS = 'callStatus',
    CREATE_CONFERENCE = 'createConference',
    CONFERENCE_STATUS = 'conferenceStatus',
    LEAVE_CONFERENCE = 'leaveConference',
    ADD_TO_CONFERENCE_NOTIFICATION = 'addToConferenceNotification',
    CONFERENCE_RECORDING_STATUS = 'conferenceRecordingStatus',
    CONFERENCE_CALL_CONTROL = 'conferenceCallControl',
    MESSAGE_DELIVERY = 'messageDelivery',
    MESSAGE_STATUS = 'messageStatus'
  }

  interface EnumCollection {
    langague: Language,
    callStatus: CallStatus
    ifMachine: IfMachine
    playBeep: PlayBeep
    conferenceStatus: ConferenceStatus
    grammarType: GrammarType
    accountStatus: AccountStatus
    callDirection: CallDirection
    answeredBy: AnsweredBy
    machineType: MachineType
    logLevel: LogLevel
    queueResult: QueueResult
    recordUtteranceTermReason: RecordUtteranceTermReason
    getDigitsReason: GetDigitsReason
    getSpeechReason: GetSpeechReason
    grammarFileBuiltIn: GrammarFileBuiltIn
    messageDirection: MessageDirection
    messageStatus: MessageStatus
    requestType: RequestType
  }
}
