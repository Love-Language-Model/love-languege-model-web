export interface Identity {
  type: string;
  value: string;
  verified: boolean;
}

export interface User {
  id?: string;
  name: string;
  birthDate?: string | null;
  gender?: string | null;
  about?: string | null;
  residenceLocation?: string | null;
  birthLocation?: string | null;
  imageUrl?: string | null;
  identities: Identity[];
}
