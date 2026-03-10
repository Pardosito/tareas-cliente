import { UserRole } from "../utils/enum"

export default interface IUser {
  id: number,
  name: string,
  email: string,
  role: UserRole,
  isActive: boolean
}