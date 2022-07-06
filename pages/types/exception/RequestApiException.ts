export class RequestApiException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RequestApiException'
  }
}

export function getRequestApiException<T extends Error>(
  statusCode: number,
  GenericException: new (message?: string) => T
): Error {
  switch (statusCode) {
    case 204:
      throw new RequestApiException('204: No Content')
    case 400:
      throw new RequestApiException('400: Bad Request')
    case 401:
      throw new RequestApiException('401: Unauthorized')
    case 403:
      throw new RequestApiException('403: Forbidden')
    case 404:
      throw new RequestApiException('404: Not Found')
    case 500:
      throw new RequestApiException('500: Server Error')
    default:
      throw new GenericException()
  }
}
