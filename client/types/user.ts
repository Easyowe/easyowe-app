export interface IFriend {
  userId: string
  username: string
}
export interface IUser {
  _id?: string
  name: string
  email: string
  friends: IFriend[]
}
