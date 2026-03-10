import IProduct from "./models/model.product"
import IUser from "./models/model.user"
import { createApiResponse } from "./services/api_response"
import { UserRole } from "./utils/enum"
import { ExtraerTipo, ProductReview, PublicUser, UserUpdate } from "./utils/types"

const user: IUser = {
	id: 1,
	name: "Ana Torres",
	email: "ana@example.com",
	role: UserRole.Admin,
	isActive: true
}

const product: IProduct = {
	id: 101,
	name: "Teclado Mecanico",
	price: "49.99",
	stock: 25,
	createdAt: new Date("2026-03-09")
}

const publicUser: PublicUser = {
	id: user.id,
	name: user.name,
	role: user.role,
	isActive: user.isActive
}

const userUpdate: UserUpdate = {
	name: "Ana T.",
	isActive: false
}

const productReview: ProductReview = {
	name: product.name,
	price: product.price
}

type ArrayElement = ExtraerTipo<string[]>
type SameType = ExtraerTipo<number>

const extractedFromArray: ArrayElement = "oferta"
const extractedFromNonArray: SameType = 2026

const userResponse = createApiResponse(user)
const productResponse = createApiResponse(product)
const usersResponse = createApiResponse<IUser[]>([user])
const reviewResponse = createApiResponse(productReview)

console.log("Public user:", publicUser)
console.log("User update:", userUpdate)
console.log("Product review:", productReview)
console.log("ExtraerTipo<string[]>:", extractedFromArray)
console.log("ExtraerTipo<number>:", extractedFromNonArray)
console.log("API user response:", userResponse)
console.log("API product response:", productResponse)
console.log("API users response:", usersResponse)
console.log("API review response:", reviewResponse)
