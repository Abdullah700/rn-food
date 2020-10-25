import {IBusiness} from "./IBusiness";

export type IResultsHook = () => [(searchTerm: string) => Promise<void>, IBusiness[], string]
