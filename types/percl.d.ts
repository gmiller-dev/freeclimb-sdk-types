// Type Definitions For FreeClimb PerCL
export = PerCL
export as namespace PerCL

declare namespace PerCL {
  // Commands 
  interface AddToConferenceCommand {
    "AddToConferenceCommand": {
      conferenceId: string
      callId: string
      startConfOnEnter?: boolean
      talk?: boolean
      listen?: boolean
      allowCallControl?: boolean
      callControlSequence?: string
      callControlUrl?: string
      leaveConferenceUrl?: string
      notificationUrl?: string
    }
  }

  interface AddToConferenceOptions {
    startConfOnEnter?: boolean
    talk?: boolean
    listen?: boolean
    allowCallControl?: boolean
    callControlSequence?: string
    callControlUrl?: string
    leaveConferenceUrl?: string
    notificationUrl?: string
  }

  interface CreateConferenceCommand {
    "CreateConference": {
      actionUrl: string
      statusCallbackUrl?: string
      alias?: string
      playBeep?: boolean
      record?: boolean
      waitUrl?: string
    }
  }

  interface CreateConferenceOptions {
    statusCallbackUrl?: string
    alias?: string
    playBeep?: boolean
    record?: boolean
    waitUrl?: string
  }

  interface DequeueCommand {
    "Dequeue": {}
  }

  interface EnqueueCommand {
      "Enqueue": {
        queueId: string
        actionUrl: string
        waitUrl: string
        notificatonUrl?: string
      }
    }

  interface GetDigitsCommand {
    "GetDigits": {
      actionUrl: string
      initialTimeoutMs?: number
      digitTimeoutMs?: number
      finishOnKey?: string
      minDigits?: number
      maxDigits?: number
      flushBuffer?: boolean
      prompts?: NestableCommand[]
      privacyMode?: boolean
    }
  }

  interface GetDigitsOptions {
    initialTimeoutMs?: number
    digitTimeoutMs?: number
    finishOnKey?: string
    minDigits?: number
    maxDigits?: number
    flushBuffer?: boolean
    prompts?: NestableCommand[]
    privacyMode?: boolean
  }

  interface GetSpeechCommand {
    "GetSpeech": {
      actionUrl: string
      grammerFile: string
      grammarType?: "URL" | "BUILTIN"
      grammarRule?: string
      playBeep?: boolean
      prompts?: NestableCommand[]
      noInputTimoutMs?: number
      recognitionTimeoutMs?: number
      confidenceThreshold?: number
      sensitivityLevel?: number
      speechCompleteTimeoutMs?: number
      speechIncompleteTimeoutMs?: number
      privacyMode?: boolean
    }
  }

  interface GetSpeechOptions {
    grammarType?: "URL" | "BUILTIN"
    grammarRule?: string
    playBeep?: boolean
    prompts?: NestableCommand[]
    noInputTimoutMs?: number
    recognitionTimeoutMs?: number
    confidenceThreshold?: number
    sensitivityLevel?: number
    speechCompleteTimeoutMs?: number
    speechIncompleteTimeoutMs?: number
    privacyMode?: boolean
  }

  interface HangupCommand {
    "Hangup": {
      reason?: string
    }
  }

  interface HangupOptions {
    reason?: string
  }

  interface OutDialCommand {
    "OutDial" : {
      actionUrl: string,
      callConnectUrl: string
      callingNumber: string
      destination: string
      ifMachine?: string
      ifMachineUrl?: string
      sendDigits?: string
      statusCallbackUrl?: string
      timeout?: number
      privacyMode?: boolean
    }
  }

  interface OutDialCommandOptions {
    ifMachine?: string
    ifMachineUrl?: string
    sendDigits?: string
    statusCallbackUrl?: string
    timeout?: number
    privacyMode?: boolean
  }

  interface PauseCommand {
    "Pause" : {
      length: number
    }
  }

  interface PlayCommand {
    "Play": {
      file: string
      loop?: number
      privacyMode?: boolean
    }
  }

  interface PlayOptions {
    loop?: number
    privacyMode?: boolean
  }
      
  interface PlayEarlyMediaCommand {
    "PlayEarlyMedia": {
      file: string
    }
  }

  interface RecordUtteranceCommand {
    "RecordUtterance": {
      actionUrl: string
      silenceTimeoutMs?: number
      finishOnKey?: string
      maxLengthSec?: number
      playBeep?: boolean
      autoStart?: boolean
    }
  }

  interface RecordUtteranceOptions{
    silenceTimeoutMs?: number
    finishOnKey?: string
    maxLengthSec?: number
    playBeep?: boolean
    autoStart?: boolean
  }

  interface RedirectCommand {
    "Redirect": {
      actionUrl: string
    }
  }

  interface RejectCommand {
    "Reject" : {
      reason: string
    }
  }

  interface RemoveFromConferenceCommand {
    "RemoveFromConference": {
      callId: string
    }
  }

  type SayLanguageValue=
    "ca-ES" |
    "da-DK" |
    "de-DE" |
    "en-AU" |
    "en-CA" |
    "en-GB" |
    "en-IN" |
    "en-US" |
    "es-ES" |
    "es-MX" |
    "fi-FI" |
    "fr-CA" |
    "fr-FR" |
    "it-IT" |
    "ja-JP" |
    "ko-KR" |
    "nb-NO" |
    "nl-NL" |
    "pl-PL" |
    "pt-BR" |
    "pt-PT" |
    "ru-RU" |
    "sv-SE" |
    "zh-CN" |
    "zh-HK" |
    "zh-TW"

  interface SayCommand {
    "Say": {
      text: string
      loop?: number
      language?: SayLanguageValue
      privacyMode?: boolean
    }
  }

  interface SayOptions {
    loop?: number
    language?: SayLanguageValue
    privacyMode?: boolean
  }

  interface SendDigitsCommand {
    "SendDigits" : {
      digits: string
      pauseMs?: number
      privacyMode?: boolean
    }
  }

  interface SendDigitsOptions {
    pauseMs?: number
    privacyMode?: boolean
  }

  interface SetListenCommand {
    "SetListen": {
      callId: string
      listen: boolean
    }
  }

  interface SetTalkCommand {
    "SetTalk": {
      callId: string
      talk: boolean
    }
  }

  interface SmsCommand {
    "Sms": {
      to: string
      from: string
      text: string
      notificationUrl?: string
    }
  }

  interface SmsOptions {
    notificatioUrl?: string
  }

  interface StartRecordCallCommand {
    "StartRecordCall": {}
  }

  interface TerminateConferenceCommand {
    "TerminateConference": {
      conferenceId: string
    }
  }

  type NestableCommand = PlayCommand | PauseCommand | SayCommand

  type Command =
    AddToConferenceCommand 
    | CreateConferenceCommand 
    | DequeueCommand 
    | EnqueueCommand
    | GetDigitsCommand
    | GetSpeechCommand
    | HangupCommand
    | OutDialCommand
    | PauseCommand
    | PlayCommand
    | PlayEarlyMediaCommand
    | RecordUtteranceCommand
    | RejectCommand
    | RemoveFromConferenceCommand
    | SayCommand
    | SendDigitsCommand
    | SetListenCommand
    | SetTalkCommand
    | SmsCommand
    | StartRecordCallCommand
    | TerminateConferenceCommand


  // Builders
    interface Builders {
    outdial(to: string, from: string, actionUrl: string, callConnectUrl: string, options?: OutDialCommandOptions): OutDialCommand
    hangup(options?: HangupOptions): HangupCommand
    pause(length: number): PauseCommand
    redirect(actionUrl: string): RedirectCommand
    sendDigits(digits: string, options?: SendDigitsOptions): SendDigitsCommand
    createConference(actionUrl: string, options?: CreateConferenceOptions): CreateConferenceCommand
    terminateConference(conferenceId: string): TerminateConferenceCommand
    addToConference(conferenceId: string, callId: string, options?: AddToConferenceOptions): AddToConferenceCommand
    removeFromConference(callId: string): RemoveFromConferenceCommand
    setListen(callId: string, listen?: boolean): SetListenCommand
    setTalk(callId: string, talk?: boolean): SetTalkCommand
    enqueue(queueId: string, actionUrl: string, waitUrl: string, notificationUrl?: string): EnqueueCommand
    dequeue(): DequeueCommand
    recordUtterance(actionUrl: string, options?: RecordUtteranceOptions): RecordUtteranceCommand
    startRecordCall(): StartRecordCallCommand
    play(file: string, options?: PlayOptions):  PlayCommand
    playEarlyMedia(file: string): PlayEarlyMediaCommand
    say(text: string, options?: SayOptions): SayCommand
    getDigits(actionUrl: string, options?: GetDigitsOptions): GetDigitsCommand
    getSpeech(actionUrl: string, grammerFile: string, options?: GetSpeechOptions): GetSpeechCommand
    sms(to: string, from: string, text: string, options?: SmsOptions): SmsCommand
    reject(reason: string): RejectCommand
    build(...scripts: Command[]): Command[]
  }
}

