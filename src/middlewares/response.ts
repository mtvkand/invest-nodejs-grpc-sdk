import { ClientError, ClientMiddlewareCall, Status, CallOptions, Metadata } from 'nice-grpc';
import { errorStatusDescribe } from '../errors/errorStatus';

type ErrorTrailers = {
  trackId?: string;
  message?: string;
  rateLimit?: string;
  rateLimitRemaining?: string;
  rateLimitReset?: string;
};

export async function* responseMiddleware<Request, Response>(
  call: ClientMiddlewareCall<Request, Response>,
  options: CallOptions,
) {
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
    if (error instanceof ClientError) {
      console.log(errorMetadata);
      console.log(
        'Client error:',
        `${Status[error.code]}(${error.details}) \n${errorStatusDescribe.get(error.details)} \n${path}`,
      );
    } else {
      console.log(errorMetadata);
      console.log('Client error: ', `error: ${error}`, path);
    }
  }
}
