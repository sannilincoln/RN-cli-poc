export interface IGoogleUSerData {
  idToken: string;
  scopes: string[];
  serverAuthCode: any;
  user: User;
}

export interface User {
  email: string | null;
  familyName: string | null;
  givenName: string | null;
  id: string | null;
  name: string | null;
  photo: string | null;
}
