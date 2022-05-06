import { createMetadata, createMetadataCredentials, createSSLCredentials, makeChannel } from './utils';
import { createClientFactory } from 'nice-grpc';
import { UsersServiceDefinition } from './generated/users';
import { StopOrdersServiceDefinition } from './generated/stoporders';
import { API_URL } from './constants';
import { InstrumentsServiceDefinition } from './generated/instruments';
import { MarketDataServiceDefinition, MarketDataStreamServiceDefinition } from './generated/marketdata';
import { OperationsServiceDefinition } from './generated/operations';
import { OrdersServiceDefinition, OrdersStreamServiceDefinition } from './generated/orders';
import { SandboxServiceDefinition } from './generated/sandbox';
import { getMiddleware, TypeLoggerCb } from './middlewares/response';

export const createSdk = (token: string, appName?: string, loggerCb?: TypeLoggerCb) => {
  const metadata = createMetadata(token, appName);
  const metadataCred = createMetadataCredentials(metadata);
  const sslCred = createSSLCredentials(metadataCred);
  const channel = makeChannel(API_URL, sslCred);

  const clientFactory = createClientFactory().use(getMiddleware(loggerCb));

  return {
    instruments: clientFactory.create(InstrumentsServiceDefinition, channel),
    marketData: clientFactory.create(MarketDataServiceDefinition, channel),
    marketDataStream: clientFactory.create(MarketDataStreamServiceDefinition, channel),
    operations: clientFactory.create(OperationsServiceDefinition, channel),
    orders: clientFactory.create(OrdersServiceDefinition, channel),
    ordersStream: clientFactory.create(OrdersStreamServiceDefinition, channel),
    sandbox: clientFactory.create(SandboxServiceDefinition, channel),
    stopOrders: clientFactory.create(StopOrdersServiceDefinition, channel),
    users: clientFactory.create(UsersServiceDefinition, channel),
  };
};
