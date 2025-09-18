
export interface ApiErrorData {
  code: number;
  message: string;
}

interface ApiError {
  error: ApiErrorData;
}

export function isCustomError(error: unknown): error is CustomError {
  return (error as CustomError).errorData !== undefined;
}

export default class CustomError extends Error {
  errorData: ApiErrorData;
  httpStatusCode: number;

  constructor(httpStatusCode: number, { error }: ApiError) {
    super('Ошибка в API');

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.httpStatusCode = httpStatusCode;
    this.errorData = error;
  }
}
