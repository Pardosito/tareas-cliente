"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_response_1 = require("./services/api_response");
const enum_1 = require("./utils/enum");
// Modelo IUser
const user = {
    id: 1,
    name: "Ana Torres",
    email: "ana@example.com",
    role: enum_1.UserRole.Admin,
    isActive: true
};
// Modelo IProduct
const product = {
    id: 101,
    name: "Teclado Mecanico",
    price: "49.99",
    stock: 25,
    createdAt: new Date("2026-03-09")
};
// Tipos utilitarios basados en modelos
const publicUser = {
    id: user.id,
    name: user.name,
    role: user.role,
    isActive: user.isActive
};
const userUpdate = {
    name: "Ana T.",
    isActive: false
};
const productReview = {
    name: product.name,
    price: product.price
};
const extractedFromArray = "oferta";
const extractedFromNonArray = 2026;
// Simulaciones de respuesta de API
const userResponse = (0, api_response_1.createApiResponse)(user);
const productResponse = (0, api_response_1.createApiResponse)(product);
const usersResponse = (0, api_response_1.createApiResponse)([user]);
const reviewResponse = (0, api_response_1.createApiResponse)(productReview);
console.log("Public user:", publicUser);
console.log("User update:", userUpdate);
console.log("Product review:", productReview);
console.log("ExtraerTipo<string[]>:", extractedFromArray);
console.log("ExtraerTipo<number>:", extractedFromNonArray);
console.log("API user response:", userResponse);
console.log("API product response:", productResponse);
console.log("API users response:", usersResponse);
console.log("API review response:", reviewResponse);
