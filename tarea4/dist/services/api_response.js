"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiResponse = createApiResponse;
function createApiResponse(data) {
    return {
        success: true,
        data: data,
        timestamp: new Date()
    };
}
