
// Type Definitions For FreeClimb PerCL
export = Api 
export as namespace Api

declare namespace Api {

  interface Resource {
    uri: string
    dateCreate: string
    dateUpdated: string
    revision: number
  }
  
  interface Page {
    total: number
    start: number
    end: number
    numPages: number
    pageSize: number
    nextPageUri: string | null
  }

  // Accounts
  interface Account extends Resource {
    accountId: string
    authToken: string
    alias: string
    label: string
    type: string
    status: string
    subresources: {
      applications: string
      calls: string
      conferences: string
      incomingPhoneNumbers: string
      logs: string
      recordings: string
      queues: string
    }
  }

  interface UpdateAccountOptions {
    alias?: string
    label?: string
  }

  interface AccountsClient {
    get(accountId: string): Promise<Account>
    update(accountId: string, options: UpdateAccountOptions): Promise<Account>
  }

  // Applications
  interface Application extends Resource {
    applicationId: string
    accountId: string
    alias: string
    voiceUrl: string
    voiceFallbackUrl: string
    callConnectUrl: string
    statusCallbackUrl: string
    smsUrl: string
    smsFallbackUrl: string
  }  

  interface ApplicationOptions {
    alias?: string
    voiceUrl?: string
    voiceFallbackUrl?: string
    callConnectUrl?: string
    statusCallbackUrl?: string
    smsUrl?: string
    smsFallbackUrl?: string
  }

  interface ApplicationListFilters {
    alias: string
  }

  interface ApplicationPage extends Page {
    applications: Application[]
  }

  interface ApplicationsClient {
    get(applicationId: string): Promise<Application>  
    update(applicationId: string, options: ApplicationOptions): Promise<Application>
    getList(filters?: ApplicationListFilters): Promise<ApplicationPage>
    getNextPage(nextPageUri: string): Promise<ApplicationPage>
    create(options: ApplicationOptions): Promise<Application>
    delete(applicationId: string): Promise<null>
  }

  // Available Numbers
  interface AvailableNumber {
    phoneNumber: string
    voiceEnabled: boolean
    smsEnabled: boolean
    alias: string
    region: string
    country: string
  }

  interface ListAvailableNumbersFilters {
    alias?: string
    phoneNumber?: string
  }

  interface AvailableNumbersPage extends Page {
    availablePhoneNumbers: AvailableNumber[]
  }

  interface AvailableNumbersClient {
    getList(filters?: ListAvailableNumbersFilters): Promise<AvailableNumbersPage>
    getNextPage(nextPageUri: string): Promise<AvailableNumbersPage>
  }

  // Incoming Numbers
  interface IncomingNumber extends Resource {
    phoneNumberId: string
    accountId: string
    applicationId: string
    phoneNumber: string
    alias: string
    country: string
    voiceEnabled: boolean
    smsEnabled: boolean
  }

  interface UpdateIncomingNumberOptions {
    applicationId?: string
    alias: string
  }
  
  interface ListIncomingNumbersFilters {
    phoneNumber?: string
    alias?: string
  }

  interface IncomingNumbersPage extends Page {
    incomingPhoneNumbers: IncomingNumber[]
  }

  interface PurchaseIncomingNumberOptions {
    phoneNumber: string
    alias?: string
    applicationId?: string
  }

  interface IncomingNumbersClient {
    get(incomingNumberId: string): Promise<IncomingNumber>
    update(incomingNumberId: string, options: UpdateIncomingNumberOptions): Promise<IncomingNumber>
    getList(filters?: ListIncomingNumbersFilters): Promise<IncomingNumbersPage>
    getNextPage(nextPageUri: string): Promise<IncomingNumbersPage>
    purchase(accountId: string, options: PurchaseIncomingNumberOptions): Promise<IncomingNumber>
    delete(incomingNumberId: string): Promise<null>
  }

  // There is no definition for calling number in the docs
  // however it is present in the api code
  interface CallingNumber extends Resource {}

  interface CallingNumbersPage extends Page {}

  interface UpdateCallingNumberOptions {}

  interface ListCallingNumbersOptions {}
  
  interface CreateCallingNumberOptions {}

  interface CallingNumbersClient {
    get(callingNumberId: string): Promise<CallingNumber>
    update(callingNumberId: string, options: UpdateCallingNumberOptions): Promise<CallingNumber>
    getList(options: ListCallingNumbersOptions): Promise<CallingNumbersPage>
    getNextPage(nextPageUri: string): Promise<CallingNumbersPage>
    create(phoneNumber: string, options: CreateCallingNumberOptions): Promise<CallingNumber>
    delete(callingNumberId: string): Promise<null>
  }

  // Calls
  interface Call extends Resource {
    callId: string
    parentCallId: string
    accountId: string
    to: string
    from: string
    phoneNumberId: string
    status: string
    startTime: string
    connectTime: string
    endTime: string
    connectDuration: number
    direction: string
    answeredBy: string
    subResourceUris: {
      logs: string
      recordings: string
    }
  }

  interface CallsPage extends Page {
    calls: Calls[]
  }

  interface ListCallsFilters {
    to?: string
    from?: string
    status?: string
    startTime?: string
    endTime?: string
    parentCallId?: string
  }

  interface CreateCallOptions {
    sendDigits?: string
    ifMachine?: string
    ifMachineUrl?: string
    timeout?: number
    parentCallId?: string
    privacyMode: boolean
  }

  interface CallsClient {
    get(callId: string): Promise<Call>
    update(callId: string, status: "canceled" | "completed"): Promise<null>
    getList(filters: ListCallsFilters) : Promise<CallsPage>
    getNextPage(nextPageUri: string): Promise<CallsPage>
    create(to: string, from: string, applicationId: string, options: CreateCallOptions): Promise<Call>
  }

  // Conferences

  interface Conference extends Resource {
    conferenceId: string
    accountId: string
    alias: string
    playBeep: "always" | "never" | "entryOnly" | "exitOnly"
    record: boolean
    status: "creating" | "empty" | "populated" | "terminated"
    waitUrl: string
    actionUrl: string
    statusCallbackUrl: string
    subResourceUris: {
      participants: string
      recordings: string
    }
  }

  interface ConferencesPage extends Page {
    conferences: Conference[]
  }

  interface UpdateConferenceOptions {
    alias?: string
    playBeep?: "always" | "never" | "entryOnly" | "exitOnly"
    status?: "empty" | "terminated"
  }

  interface ListConferencesFilters {
    status?: "creating" | "empty" | "populated" | "terminated"
    alias?: string
    dateCreated?: string
    dateUpdated?: string

  }

  interface CreateConferenceOptions {
    alias?: string
    playBeep?: "always" | "never" | "entryOnly" | "exitOnly"
    record: boolean
    waitUrl: string
    statusCallbackUrl: string
  }

  interface ConferencesClient {
    get(conferenceId: string): Promise<Conference>
    update(conferenceId: string, object: UpdateConferenceOptions): Promise<Conference>
    getList(filters: ListConferencesFilters): Promise<ConferencesPage>
    getNextPage(nextPageUri: string): Promise<ConferencesPage>
    create(options?: CreateConferenceOptions): Promise<Conference>
    participants(conferenceId: string): ConferenceParticipantsClient
  }

  // Conference Participants
  interface ConferenceParticipant extends Resource {
    callId: string
    conferenceId: string
    accountId: string
    talk: boolean
    listen: boolean
    startConfOnEnter: boolean
  }

  interface ConferencePartipantsPage extends Page {
    participants: ConferenceParticipant[]
  }

  interface ListConferenceParticipantsFilters {
    talk?: boolean
    listen?: boolean
  }

  interface ConferenceParticipantsClient {
    get(participantId: string): Promise<ConferenceParticipant>
    update(participantId: string): Promise<ConferenceParticipant>
    getList(filters?: ListConferenceParticipantsFilters): Promise<ConferencePartipantsPage>
    getNextPage(nextPageUri: string): Promise<ConferencePartipantsPage>
    delete(participantId: string): Promise<null>
  }

  // Queues
  interface Queue extends Resource {
    accountId: string
    queueId: string
    alias: string
    currentSize: number
    mazSize: number
    averageWaitTime: number
    subresourceUris: {
      members: string
    }
  } 

  interface QueuesPage extends Page {
    queues: Queue[]
  }

  interface UpdateQueueOptions {
    alias?: string
    maxSize?: string
  }

  interface CreateQueueOptions {
    alias?: string
    maxSize?: string
  }

  interface QueuesClient {
    get(queueId: string): Promise<Queue>
    update(queueId: string, options: UpdateQueueOptions): Promise<Queue>
    getList(filters?: ListQueuesFilters): Promise<QueuesPage>
    getNextPage(nextPageUri: string): Promise<QueuesPage>
    create(options?: CreateQueueOptions): Promise<Queue>
    members(queueId: string): QueueMembersClient
  }

  // Queue Members 

  interface QueueMember {
    uri: string
    callId: string
    dateEnqueued: string
    waitTime: number
    position: number
  }

  interface QueueMembersPage {
    queueMembers: QueueMember[]
  }

  interface QueueMembersClient {
    get(memberId: string): Promise<QueueMember>
    getFront(): Promise<QueueMember>
    getList(): Promise<QueueMembersPage>
    getNextPage(nextPageUri: string): Promise<QueueMembersPage>
    dequeue(memberId: string): Promise<QueueMember>
    dequeueFront(): Promise<QueueMember>
  }

  // Logs

  interface Log {
    timestamp: number
    level: string
    requestId: string
    accountId: string
    callId: string
    message: string
    metadata: LogMetadata
  }

  interface LogMetadata {}

  interface LogsPage extends Page {
   logs: Log[] 
  }

  interface GetLogsFilters {
    pql: string
  }

  interface LogsClient {
    get(filters?: GetLogsFilters): Promise<LogsPage>
    getNextPage(nextPageUri: string): Promise<LogsPage>
  }

  // Call Recordings

  interface Recording extends Resource {
    accountId: string
    callId?: string
    conferenceId?: string
    durationSec: string
    recordingId: string
  }

  interface RecordingsPage extends Page {
    recordings: Recording[]
  }

  interface ListRecordingsFilters {
    callId?: string
    conferenceId?: string
    dateCreate?: string
  }

  interface RecordingsClient {
    get(recordingId: string): Promise<Recording>
    getList(filters?: ListRecordingsFilters): Promise<RecordingsPage>
    getNextPage(nextPageUri: string): Promise<RecordingsPage>
    download(recordingId: string, filePath: string): Promise<undefined>
    stream(recordingId: string): Promise<unknown>
    delete(recordingId: string): Promise<null>
  }

  // Messages
  interface SmsMessage extends Resource {
    accountId: string
    direction: "inbound" | "outbound"
    from: string
    messageId: string
    notificationUrl: string
    status: SmsMessageStatus
  }

  type SmsMessageOutBoundStatus = 
    "new" 
    | "queued"
    | "rejected"
    | "sending"
    | "sent"
    | "failed"
    | "expired"
    | "deleted"
    | "uknown"
  
  type SmsMessageInboundStatus = 
    "Received"
    | "Undelivered"

  interface SmsMessagesPage extends Page {
    messages: SmsMessage[]
  }

  interface ListSmsMessagesFilters {
    to?: string
    form?: string
    beginTime?: string
    endTime?: string
    direction?: string
  }

  interface SmsMessagesClient {
    get(messageId: string): Promise<SmsMessage>
    getList(filters?: ListSmsMessagesFilters): Promise<SmsMessagesPage>
    getNextPage(nextPageUri: string): Promise<SmsMessagesPage>
    create(from: string, to: string, text: string): Promise<Message>
  }

  interface ApiClients {
    accounts: AccountsClient
    applications: ApplicationsClient
    availableNumbers: AvailableNumbersClient
    incomingNumbers: IncomingNumbersClient
    callingNumbers: CallingNumbersClient
    calls: CallsClient
    conferences: ConferencesClient
    queues: QueuesClient
    logs: LogsClient
    recordings: RecordingsClient
    messages: SmsMessagesClient
    setApiUrl(newUrl: string): void 
  }
}

