export type ApiResponse<T> = {
  success: boolean
  data: T
  timestamp: Date
}

export function createApiResponse<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    data: data,
    timestamp: new Date()
  }
}