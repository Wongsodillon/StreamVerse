export type UserType = {
  id: number;
  email: string;
  password: string;
  hedera_account_id: string;
  profile: ProfileType;
};

export type ProfileType = {
  user_id: number;
  full_name: string;
  bio: string;
  wallet_address: string;
  gender: string;
  date_of_birth: Date;
  profile_picture: string;
};
