export enum UserType {
  User = 'user',
  Admin = 'admin',
}

export interface User {
  type: UserType;
}