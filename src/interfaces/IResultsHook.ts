import { IBusiness } from "./IBusiness";

export type IResultsHook = () => [
  { searchApi: (searchTerm: string) => Promise<void> },
  { results: IBusiness[] },
  { errMsg: string }
];
