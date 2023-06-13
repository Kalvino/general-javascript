
interface User {
  id: number;
  name: string;
}

export interface LineJson {
  timestamp: number;
  loglevel: string;
  transactionId: string;
  details: string;
  code?: number;
  err?: string;
  userId?: number;
  user?: User;
}