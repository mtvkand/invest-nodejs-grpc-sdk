import { ClientError, ClientMiddlewareCall, Status, CallOptions, Metadata } from 'nice-grpc';
import { errorStatus, ErrorMessagesType } from '../errors/api_errors';

type ErrorTrailers = {
  trackId?: string;
  message?: string;
  rateLimit?: string;
  rateLimitRemaining?: string;
  rateLimitReset?: string;
};
export type TypeLoggerCb = (
  errorMetadata: ErrorTrailers,
  error: ClientError | unknown,
  messages?: ErrorMessagesType,
) => void;

export function getMiddleware(loggerCb?: TypeLoggerCb) {
  return async function* <Request, Response>(call: ClientMiddlewareCall<Request, Response>, options: CallOptions) {
    const { path } = call.method;

    const errorMetadata: ErrorTrailers = {};

    options.onTrailer = (data: Metadata) => {
      Object.assign(errorMetadata, {
        trackId: data.get('x-tracking-id'),
        message: data.get('message'),
        rateLimit: data.get('x-ratelimit-limit'),
        rateLimitRemaining: data.get('x-ratelimit-remaining'),
        rateLimitReset: data.get('x-ratelimit-reset'),
      });
    };

    try {
      if (!call.responseStream) {
        return yield* call.next(call.request, options);
      } else {
        for await (const response of call.next(call.request, options)) {
          yield response;
        }

        return;
      }
    } catch (error) {
      const isClientError = error instanceof ClientError;
      const errStatus = isClientError ? errorStatus[error.details] : undefined;

      if (loggerCb) {
        loggerCb(errorMetadata, error, errStatus);
      } else {
        if (isClientError) {
          const errDescription = errStatus && errorStatus[error.details] && errorStatus[error.details].description;

          console.log(errorMetadata);
          console.log('Client error:', `${Status[error.code]}(${error.details}) \n${errDescription || ''} \n${path}`);
        } else {
          console.log(errorMetadata);
          console.log('Client error: ', `error: ${error}`, path);
        }
      }
    }
  };
}
