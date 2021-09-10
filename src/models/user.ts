export interface User {
  id?: string;
  username: string;
  password: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  isDisabled?: boolean;
  email?: string;
  authToken: string;
  createdBy?: string;
  createdDate?: string;
  modifiedBy?: string;
  modifiedDate?: string;
}
