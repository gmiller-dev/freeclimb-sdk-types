import PerCL from "./types/percl"
import Api from "./types/api"
import Enums from "./types/enums"

declare module '@freeclimb/sdk' {
  export = freeClimbSDK
  function freeClimbSDK(accountId: string, authToken: string): FreeClimbSDK
  namespace freeClimbSDK {
    export { FreeClimbSDK, PerCL, Api, Enums }
}

/**
 * The publicly exposed modules of the FreeClimb SDK
 */
 interface FreeClimbSDK {
    api: Api.ApiClients
    percl: PerCL.Builders
    enums: Enums.EnumCollection
  }
}
