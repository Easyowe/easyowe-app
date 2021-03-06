export interface IFriend {
  userId: string
  username: string
}
export interface IUser {
  user: IUser
  id?: string
  username: string
  email: string
  friends?: IFriend[]
  profileImage?: string
}
