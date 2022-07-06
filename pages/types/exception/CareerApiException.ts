export class CareerApiException extends Error {
  constructor(message?: string) {
    super(
      message ||
        "Unable to establish a connection to the Career API, please try later."
    );
    this.name = "CareerApiException";
  }
}
