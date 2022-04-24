import { CallCredentials, ChannelCredentials, credentials, Metadata } from '@grpc/grpc-js';
import { createChannel } from 'nice-grpc';
import { APP_NAME } from './constants';

export const createMetadata = (token: string, appName?: string): Metadata => {
  const metadata = new Metadata();
  metadata.add('Authorization', `Bearer ${token}`);
  metadata.add('x-app-name', appName || APP_NAME);

  return metadata;
};

export const createMetadataCredentials = (metadata: Metadata): CallCredentials =>
  credentials.createFromMetadataGenerator(function (args: any, callback: any) {
    callback(null, metadata);
  });

export const createSSLCredentials = (metadataCreds: CallCredentials): ChannelCredentials =>
  credentials.combineChannelCredentials(credentials.createSsl(), metadataCreds);

export const makeChannel = (url: string, ssl_creds: ChannelCredentials) => createChannel(url, ssl_creds);
