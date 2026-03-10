import IUser from "../models/model.user"
import IProduct from "../models/model.product"

export type PublicUser = Omit<IUser, "email">

export type UserUpdate = Partial<IUser>

export type ProductReview = Pick<IProduct, "name" | "price">

export type ExtraerTipo<T> = T extends (infer U)[] ? U : T