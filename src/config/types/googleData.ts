export interface IGoogleUSerData {
  idToken: string;
  scopes: string[];
  serverAuthCode: any;
  user: User;
}

export interface User {
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  name: string;
  photo: string;
}
