import 'next-auth'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IUser } from './user'

/** Example on how to extend the built-in session types */
declare module 'next-auth' {
  interface Session {
    user?: IUser
  }
}
/** Example on how to extend the built-in types for JWT */
