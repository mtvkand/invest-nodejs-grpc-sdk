/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Timestamp } from './google/protobuf/timestamp';
import { Ping, Quotation, MoneyValue } from './common';

export const protobufPackage = 'tinkoff.public.invest.api.contract.v1';

/** Направление операции */
export enum OrderDirection {
  /** ORDER_DIRECTION_UNSPECIFIED - Значение не указано */
  ORDER_DIRECTION_UNSPECIFIED = 0,
  /** ORDER_DIRECTION_BUY - Покупка */
  ORDER_DIRECTION_BUY = 1,
  /** ORDER_DIRECTION_SELL - Продажа */
  ORDER_DIRECTION_SELL = 2,
  UNRECOGNIZED = -1,
}

export function orderDirectionFromJSON(object: any): OrderDirection {
  switch (object) {
    case 0:
    case 'ORDER_DIRECTION_UNSPECIFIED':
      return OrderDirection.ORDER_DIRECTION_UNSPECIFIED;
    case 1:
    case 'ORDER_DIRECTION_BUY':
      return OrderDirection.ORDER_DIRECTION_BUY;
    case 2:
    case 'ORDER_DIRECTION_SELL':
      return OrderDirection.ORDER_DIRECTION_SELL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return OrderDirection.UNRECOGNIZED;
  }
}

export function orderDirectionToJSON(object: OrderDirection): string {
  switch (object) {
    case OrderDirection.ORDER_DIRECTION_UNSPECIFIED:
      return 'ORDER_DIRECTION_UNSPECIFIED';
    case OrderDirection.ORDER_DIRECTION_BUY:
      return 'ORDER_DIRECTION_BUY';
    case OrderDirection.ORDER_DIRECTION_SELL:
      return 'ORDER_DIRECTION_SELL';
    default:
      return 'UNKNOWN';
  }
}

/** Тип заявки */
export enum OrderType {
  /** ORDER_TYPE_UNSPECIFIED - Значение не указано */
  ORDER_TYPE_UNSPECIFIED = 0,
  /** ORDER_TYPE_LIMIT - Лимитная */
  ORDER_TYPE_LIMIT = 1,
  /** ORDER_TYPE_MARKET - Рыночная */
  ORDER_TYPE_MARKET = 2,
  UNRECOGNIZED = -1,
}

export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case 'ORDER_TYPE_UNSPECIFIED':
      return OrderType.ORDER_TYPE_UNSPECIFIED;
    case 1:
    case 'ORDER_TYPE_LIMIT':
      return OrderType.ORDER_TYPE_LIMIT;
    case 2:
    case 'ORDER_TYPE_MARKET':
      return OrderType.ORDER_TYPE_MARKET;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return OrderType.UNRECOGNIZED;
  }
}

export function orderTypeToJSON(object: OrderType): string {
  switch (object) {
    case OrderType.ORDER_TYPE_UNSPECIFIED:
      return 'ORDER_TYPE_UNSPECIFIED';
    case OrderType.ORDER_TYPE_LIMIT:
      return 'ORDER_TYPE_LIMIT';
    case OrderType.ORDER_TYPE_MARKET:
      return 'ORDER_TYPE_MARKET';
    default:
      return 'UNKNOWN';
  }
}

/** Текущий статус заявки (поручения) */
export enum OrderExecutionReportStatus {
  EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
  /** EXECUTION_REPORT_STATUS_FILL - Исполнена */
  EXECUTION_REPORT_STATUS_FILL = 1,
  /** EXECUTION_REPORT_STATUS_REJECTED - Отклонена */
  EXECUTION_REPORT_STATUS_REJECTED = 2,
  /** EXECUTION_REPORT_STATUS_CANCELLED - Отменена пользователем */
  EXECUTION_REPORT_STATUS_CANCELLED = 3,
  /** EXECUTION_REPORT_STATUS_NEW - Новая */
  EXECUTION_REPORT_STATUS_NEW = 4,
  /** EXECUTION_REPORT_STATUS_PARTIALLYFILL - Частично исполнена */
  EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5,
  UNRECOGNIZED = -1,
}

export function orderExecutionReportStatusFromJSON(object: any): OrderExecutionReportStatus {
  switch (object) {
    case 0:
    case 'EXECUTION_REPORT_STATUS_UNSPECIFIED':
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_UNSPECIFIED;
    case 1:
    case 'EXECUTION_REPORT_STATUS_FILL':
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL;
    case 2:
    case 'EXECUTION_REPORT_STATUS_REJECTED':
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_REJECTED;
    case 3:
    case 'EXECUTION_REPORT_STATUS_CANCELLED':
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_CANCELLED;
    case 4:
    case 'EXECUTION_REPORT_STATUS_NEW':
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW;
    case 5:
    case 'EXECUTION_REPORT_STATUS_PARTIALLYFILL':
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return OrderExecutionReportStatus.UNRECOGNIZED;
  }
}

export function orderExecutionReportStatusToJSON(object: OrderExecutionReportStatus): string {
  switch (object) {
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_UNSPECIFIED:
      return 'EXECUTION_REPORT_STATUS_UNSPECIFIED';
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL:
      return 'EXECUTION_REPORT_STATUS_FILL';
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_REJECTED:
      return 'EXECUTION_REPORT_STATUS_REJECTED';
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_CANCELLED:
      return 'EXECUTION_REPORT_STATUS_CANCELLED';
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW:
      return 'EXECUTION_REPORT_STATUS_NEW';
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL:
      return 'EXECUTION_REPORT_STATUS_PARTIALLYFILL';
    default:
      return 'UNKNOWN';
  }
}

/** Запрос установки соединения. */
export interface TradesStreamRequest {}

/** Информация о торговых поручениях. */
export interface TradesStreamResponse {
  /** Информация об исполнении торгового поручения. */
  orderTrades: OrderTrades | undefined;
  /** Проверка активности стрима. */
  ping: Ping | undefined;
}

/** Информация об исполнении торгового поручения. */
export interface OrderTrades {
  /** Идентификатор торгового поручения. */
  orderId: string;
  /** Дата и время создания сообщения в часовом поясе UTC. */
  createdAt: Date | undefined;
  /** Направление сделки. */
  direction: OrderDirection;
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Массив сделок. */
  trades: OrderTrade[];
  /** Идентификатор счёта. */
  accountId: string;
}

/** Информация о сделке. */
export interface OrderTrade {
  /** Дата и время совершения сделки в часовом поясе UTC. */
  dateTime: Date | undefined;
  /** Цена одного инструмента, по которой совершена сделка. */
  price: Quotation | undefined;
  /** Количество лотов в сделке. */
  quantity: number;
}

/** Запрос выставления торгового поручения. */
export interface PostOrderRequest {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Количество лотов. */
  quantity: number;
  /** Цена одного инструмента. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price: Quotation | undefined;
  /** Направление операции. */
  direction: OrderDirection;
  /** Номер счёта. */
  accountId: string;
  /** Тип заявки. */
  orderType: OrderType;
  /** Идентификатор запроса выставления поручения для целей идемпотентности. Максимальная длина 36 символов. */
  orderId: string;
}

/** Информация о выставлении поручения. */
export interface PostOrderResponse {
  /** Идентификатор заявки. */
  orderId: string;
  /** Текущий статус заявки. */
  executionReportStatus: OrderExecutionReportStatus;
  /** Запрошено лотов. */
  lotsRequested: number;
  /** Исполнено лотов. */
  lotsExecuted: number;
  /** Начальная цена заявки. Произведение количества запрошенных лотов на цену. */
  initialOrderPrice: MoneyValue | undefined;
  /** Исполненная цена заявки. Произведение средней цены покупки на количество лотов. */
  executedOrderPrice: MoneyValue | undefined;
  /** Итоговая стоимость заявки, включающая все комиссии. */
  totalOrderAmount: MoneyValue | undefined;
  /** Начальная комиссия. Комиссия рассчитанная при выставлении заявки. */
  initialCommission: MoneyValue | undefined;
  /** Фактическая комиссия по итогам исполнения заявки. */
  executedCommission: MoneyValue | undefined;
  /** Значение НКД (накопленного купонного дохода) на дату. Подробнее: [НКД при выставлении торговых поручений](https://tinkoff.github.io/investAPI/head-orders#coupon) */
  aciValue: MoneyValue | undefined;
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Направление сделки. */
  direction: OrderDirection;
  /** Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  initialSecurityPrice: MoneyValue | undefined;
  /** Тип заявки. */
  orderType: OrderType;
  /** Дополнительные данные об исполнении заявки. */
  message: string;
  /** Начальная цена заявки в пунктах (для фьючерсов). */
  initialOrderPricePt: Quotation | undefined;
}

/** Запрос отмены торгового поручения. */
export interface CancelOrderRequest {
  /** Номер счёта. */
  accountId: string;
  /** Идентификатор заявки. */
  orderId: string;
}

/** Результат отмены торгового поручения. */
export interface CancelOrderResponse {
  /** Дата и время отмены заявки в часовом поясе UTC. */
  time: Date | undefined;
}

/** Запрос получения статуса торгового поручения. */
export interface GetOrderStateRequest {
  /** Номер счёта. */
  accountId: string;
  /** Идентификатор заявки. */
  orderId: string;
}

/** Запрос получения списка активных торговых поручений. */
export interface GetOrdersRequest {
  /** Номер счёта. */
  accountId: string;
}

/** Список активных торговых поручений. */
export interface GetOrdersResponse {
  /** Массив активных заявок. */
  orders: OrderState[];
}

/** Информация о торговом поручении. */
export interface OrderState {
  /** Идентификатор заявки. */
  orderId: string;
  /** Текущий статус заявки. */
  executionReportStatus: OrderExecutionReportStatus;
  /** Запрошено лотов. */
  lotsRequested: number;
  /** Исполнено лотов. */
  lotsExecuted: number;
  /** Начальная цена заявки. Произведение количества запрошенных лотов на цену. */
  initialOrderPrice: MoneyValue | undefined;
  /** Исполненная цена заявки. Произведение средней цены покупки на количество лотов. */
  executedOrderPrice: MoneyValue | undefined;
  /** Итоговая стоимость заявки, включающая все комиссии. */
  totalOrderAmount: MoneyValue | undefined;
  /** Средняя цена позиции по сделке. */
  averagePositionPrice: MoneyValue | undefined;
  /** Начальная комиссия. Комиссия, рассчитанная на момент подачи заявки. */
  initialCommission: MoneyValue | undefined;
  /** Фактическая комиссия по итогам исполнения заявки. */
  executedCommission: MoneyValue | undefined;
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Направление заявки. */
  direction: OrderDirection;
  /** Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  initialSecurityPrice: MoneyValue | undefined;
  /** Стадии выполнения заявки. */
  stages: OrderStage[];
  /** Сервисная комиссия. */
  serviceCommission: MoneyValue | undefined;
  /** Валюта заявки. */
  currency: string;
  /** Тип заявки. */
  orderType: OrderType;
  /** Дата и время выставления заявки в часовом поясе UTC. */
  orderDate: Date | undefined;
}

/** Сделки в рамках торгового поручения. */
export interface OrderStage {
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.. */
  price: MoneyValue | undefined;
  /** Количество лотов. */
  quantity: number;
  /** Идентификатор торговой операции. */
  tradeId: string;
}

function createBaseTradesStreamRequest(): TradesStreamRequest {
  return {};
}

export const TradesStreamRequest = {
  encode(_: TradesStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradesStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): TradesStreamRequest {
    return {};
  },

  toJSON(_: TradesStreamRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<TradesStreamRequest>): TradesStreamRequest {
    const message = createBaseTradesStreamRequest();
    return message;
  },
};

function createBaseTradesStreamResponse(): TradesStreamResponse {
  return { orderTrades: undefined, ping: undefined };
}

export const TradesStreamResponse = {
  encode(message: TradesStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderTrades !== undefined) {
      OrderTrades.encode(message.orderTrades, writer.uint32(10).fork()).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradesStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderTrades = OrderTrades.decode(reader, reader.uint32());
          break;
        case 2:
          message.ping = Ping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradesStreamResponse {
    return {
      orderTrades: isSet(object.orderTrades) ? OrderTrades.fromJSON(object.orderTrades) : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
    };
  },

  toJSON(message: TradesStreamResponse): unknown {
    const obj: any = {};
    message.orderTrades !== undefined &&
      (obj.orderTrades = message.orderTrades ? OrderTrades.toJSON(message.orderTrades) : undefined);
    message.ping !== undefined && (obj.ping = message.ping ? Ping.toJSON(message.ping) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TradesStreamResponse>): TradesStreamResponse {
    const message = createBaseTradesStreamResponse();
    message.orderTrades =
      object.orderTrades !== undefined && object.orderTrades !== null
        ? OrderTrades.fromPartial(object.orderTrades)
        : undefined;
    message.ping = object.ping !== undefined && object.ping !== null ? Ping.fromPartial(object.ping) : undefined;
    return message;
  },
};

function createBaseOrderTrades(): OrderTrades {
  return { orderId: '', createdAt: undefined, direction: 0, figi: '', trades: [], accountId: '' };
}

export const OrderTrades = {
  encode(message: OrderTrades, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== '') {
      writer.uint32(10).string(message.orderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction);
    }
    if (message.figi !== '') {
      writer.uint32(34).string(message.figi);
    }
    for (const v of message.trades) {
      OrderTrade.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.accountId !== '') {
      writer.uint32(50).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderTrades {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderTrades();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.direction = reader.int32() as any;
          break;
        case 4:
          message.figi = reader.string();
          break;
        case 5:
          message.trades.push(OrderTrade.decode(reader, reader.uint32()));
          break;
        case 6:
          message.accountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderTrades {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : '',
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      figi: isSet(object.figi) ? String(object.figi) : '',
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => OrderTrade.fromJSON(e)) : [],
      accountId: isSet(object.accountId) ? String(object.accountId) : '',
    };
  },

  toJSON(message: OrderTrades): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    message.direction !== undefined && (obj.direction = orderDirectionToJSON(message.direction));
    message.figi !== undefined && (obj.figi = message.figi);
    if (message.trades) {
      obj.trades = message.trades.map(e => (e ? OrderTrade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderTrades>): OrderTrades {
    const message = createBaseOrderTrades();
    message.orderId = object.orderId ?? '';
    message.createdAt = object.createdAt ?? undefined;
    message.direction = object.direction ?? 0;
    message.figi = object.figi ?? '';
    message.trades = object.trades?.map(e => OrderTrade.fromPartial(e)) || [];
    message.accountId = object.accountId ?? '';
    return message;
  },
};

function createBaseOrderTrade(): OrderTrade {
  return { dateTime: undefined, price: undefined, quantity: 0 };
}

export const OrderTrade = {
  encode(message: OrderTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.dateTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(24).int64(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderTrade {
    return {
      dateTime: isSet(object.dateTime) ? fromJsonTimestamp(object.dateTime) : undefined,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: OrderTrade): unknown {
    const obj: any = {};
    message.dateTime !== undefined && (obj.dateTime = message.dateTime.toISOString());
    message.price !== undefined && (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  fromPartial(object: DeepPartial<OrderTrade>): OrderTrade {
    const message = createBaseOrderTrade();
    message.dateTime = object.dateTime ?? undefined;
    message.price =
      object.price !== undefined && object.price !== null ? Quotation.fromPartial(object.price) : undefined;
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBasePostOrderRequest(): PostOrderRequest {
  return { figi: '', quantity: 0, price: undefined, direction: 0, accountId: '', orderType: 0, orderId: '' };
}

export const PostOrderRequest = {
  encode(message: PostOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.direction !== 0) {
      writer.uint32(32).int32(message.direction);
    }
    if (message.accountId !== '') {
      writer.uint32(42).string(message.accountId);
    }
    if (message.orderType !== 0) {
      writer.uint32(48).int32(message.orderType);
    }
    if (message.orderId !== '') {
      writer.uint32(58).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.direction = reader.int32() as any;
          break;
        case 5:
          message.accountId = reader.string();
          break;
        case 6:
          message.orderType = reader.int32() as any;
          break;
        case 7:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostOrderRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : '',
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      orderId: isSet(object.orderId) ? String(object.orderId) : '',
    };
  },

  toJSON(message: PostOrderRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.price !== undefined && (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.direction !== undefined && (obj.direction = orderDirectionToJSON(message.direction));
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(object: DeepPartial<PostOrderRequest>): PostOrderRequest {
    const message = createBasePostOrderRequest();
    message.figi = object.figi ?? '';
    message.quantity = object.quantity ?? 0;
    message.price =
      object.price !== undefined && object.price !== null ? Quotation.fromPartial(object.price) : undefined;
    message.direction = object.direction ?? 0;
    message.accountId = object.accountId ?? '';
    message.orderType = object.orderType ?? 0;
    message.orderId = object.orderId ?? '';
    return message;
  },
};

function createBasePostOrderResponse(): PostOrderResponse {
  return {
    orderId: '',
    executionReportStatus: 0,
    lotsRequested: 0,
    lotsExecuted: 0,
    initialOrderPrice: undefined,
    executedOrderPrice: undefined,
    totalOrderAmount: undefined,
    initialCommission: undefined,
    executedCommission: undefined,
    aciValue: undefined,
    figi: '',
    direction: 0,
    initialSecurityPrice: undefined,
    orderType: 0,
    message: '',
    initialOrderPricePt: undefined,
  };
}

export const PostOrderResponse = {
  encode(message: PostOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== '') {
      writer.uint32(10).string(message.orderId);
    }
    if (message.executionReportStatus !== 0) {
      writer.uint32(16).int32(message.executionReportStatus);
    }
    if (message.lotsRequested !== 0) {
      writer.uint32(24).int64(message.lotsRequested);
    }
    if (message.lotsExecuted !== 0) {
      writer.uint32(32).int64(message.lotsExecuted);
    }
    if (message.initialOrderPrice !== undefined) {
      MoneyValue.encode(message.initialOrderPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.executedOrderPrice !== undefined) {
      MoneyValue.encode(message.executedOrderPrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.totalOrderAmount !== undefined) {
      MoneyValue.encode(message.totalOrderAmount, writer.uint32(58).fork()).ldelim();
    }
    if (message.initialCommission !== undefined) {
      MoneyValue.encode(message.initialCommission, writer.uint32(66).fork()).ldelim();
    }
    if (message.executedCommission !== undefined) {
      MoneyValue.encode(message.executedCommission, writer.uint32(74).fork()).ldelim();
    }
    if (message.aciValue !== undefined) {
      MoneyValue.encode(message.aciValue, writer.uint32(82).fork()).ldelim();
    }
    if (message.figi !== '') {
      writer.uint32(90).string(message.figi);
    }
    if (message.direction !== 0) {
      writer.uint32(96).int32(message.direction);
    }
    if (message.initialSecurityPrice !== undefined) {
      MoneyValue.encode(message.initialSecurityPrice, writer.uint32(106).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(112).int32(message.orderType);
    }
    if (message.message !== '') {
      writer.uint32(122).string(message.message);
    }
    if (message.initialOrderPricePt !== undefined) {
      Quotation.encode(message.initialOrderPricePt, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.executionReportStatus = reader.int32() as any;
          break;
        case 3:
          message.lotsRequested = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.lotsExecuted = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.initialOrderPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 6:
          message.executedOrderPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 7:
          message.totalOrderAmount = MoneyValue.decode(reader, reader.uint32());
          break;
        case 8:
          message.initialCommission = MoneyValue.decode(reader, reader.uint32());
          break;
        case 9:
          message.executedCommission = MoneyValue.decode(reader, reader.uint32());
          break;
        case 10:
          message.aciValue = MoneyValue.decode(reader, reader.uint32());
          break;
        case 11:
          message.figi = reader.string();
          break;
        case 12:
          message.direction = reader.int32() as any;
          break;
        case 13:
          message.initialSecurityPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 14:
          message.orderType = reader.int32() as any;
          break;
        case 15:
          message.message = reader.string();
          break;
        case 16:
          message.initialOrderPricePt = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostOrderResponse {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : '',
      executionReportStatus: isSet(object.executionReportStatus)
        ? orderExecutionReportStatusFromJSON(object.executionReportStatus)
        : 0,
      lotsRequested: isSet(object.lotsRequested) ? Number(object.lotsRequested) : 0,
      lotsExecuted: isSet(object.lotsExecuted) ? Number(object.lotsExecuted) : 0,
      initialOrderPrice: isSet(object.initialOrderPrice) ? MoneyValue.fromJSON(object.initialOrderPrice) : undefined,
      executedOrderPrice: isSet(object.executedOrderPrice) ? MoneyValue.fromJSON(object.executedOrderPrice) : undefined,
      totalOrderAmount: isSet(object.totalOrderAmount) ? MoneyValue.fromJSON(object.totalOrderAmount) : undefined,
      initialCommission: isSet(object.initialCommission) ? MoneyValue.fromJSON(object.initialCommission) : undefined,
      executedCommission: isSet(object.executedCommission) ? MoneyValue.fromJSON(object.executedCommission) : undefined,
      aciValue: isSet(object.aciValue) ? MoneyValue.fromJSON(object.aciValue) : undefined,
      figi: isSet(object.figi) ? String(object.figi) : '',
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      initialSecurityPrice: isSet(object.initialSecurityPrice)
        ? MoneyValue.fromJSON(object.initialSecurityPrice)
        : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      message: isSet(object.message) ? String(object.message) : '',
      initialOrderPricePt: isSet(object.initialOrderPricePt)
        ? Quotation.fromJSON(object.initialOrderPricePt)
        : undefined,
    };
  },

  toJSON(message: PostOrderResponse): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.executionReportStatus !== undefined &&
      (obj.executionReportStatus = orderExecutionReportStatusToJSON(message.executionReportStatus));
    message.lotsRequested !== undefined && (obj.lotsRequested = Math.round(message.lotsRequested));
    message.lotsExecuted !== undefined && (obj.lotsExecuted = Math.round(message.lotsExecuted));
    message.initialOrderPrice !== undefined &&
      (obj.initialOrderPrice = message.initialOrderPrice ? MoneyValue.toJSON(message.initialOrderPrice) : undefined);
    message.executedOrderPrice !== undefined &&
      (obj.executedOrderPrice = message.executedOrderPrice ? MoneyValue.toJSON(message.executedOrderPrice) : undefined);
    message.totalOrderAmount !== undefined &&
      (obj.totalOrderAmount = message.totalOrderAmount ? MoneyValue.toJSON(message.totalOrderAmount) : undefined);
    message.initialCommission !== undefined &&
      (obj.initialCommission = message.initialCommission ? MoneyValue.toJSON(message.initialCommission) : undefined);
    message.executedCommission !== undefined &&
      (obj.executedCommission = message.executedCommission ? MoneyValue.toJSON(message.executedCommission) : undefined);
    message.aciValue !== undefined &&
      (obj.aciValue = message.aciValue ? MoneyValue.toJSON(message.aciValue) : undefined);
    message.figi !== undefined && (obj.figi = message.figi);
    message.direction !== undefined && (obj.direction = orderDirectionToJSON(message.direction));
    message.initialSecurityPrice !== undefined &&
      (obj.initialSecurityPrice = message.initialSecurityPrice
        ? MoneyValue.toJSON(message.initialSecurityPrice)
        : undefined);
    message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
    message.message !== undefined && (obj.message = message.message);
    message.initialOrderPricePt !== undefined &&
      (obj.initialOrderPricePt = message.initialOrderPricePt
        ? Quotation.toJSON(message.initialOrderPricePt)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PostOrderResponse>): PostOrderResponse {
    const message = createBasePostOrderResponse();
    message.orderId = object.orderId ?? '';
    message.executionReportStatus = object.executionReportStatus ?? 0;
    message.lotsRequested = object.lotsRequested ?? 0;
    message.lotsExecuted = object.lotsExecuted ?? 0;
    message.initialOrderPrice =
      object.initialOrderPrice !== undefined && object.initialOrderPrice !== null
        ? MoneyValue.fromPartial(object.initialOrderPrice)
        : undefined;
    message.executedOrderPrice =
      object.executedOrderPrice !== undefined && object.executedOrderPrice !== null
        ? MoneyValue.fromPartial(object.executedOrderPrice)
        : undefined;
    message.totalOrderAmount =
      object.totalOrderAmount !== undefined && object.totalOrderAmount !== null
        ? MoneyValue.fromPartial(object.totalOrderAmount)
        : undefined;
    message.initialCommission =
      object.initialCommission !== undefined && object.initialCommission !== null
        ? MoneyValue.fromPartial(object.initialCommission)
        : undefined;
    message.executedCommission =
      object.executedCommission !== undefined && object.executedCommission !== null
        ? MoneyValue.fromPartial(object.executedCommission)
        : undefined;
    message.aciValue =
      object.aciValue !== undefined && object.aciValue !== null ? MoneyValue.fromPartial(object.aciValue) : undefined;
    message.figi = object.figi ?? '';
    message.direction = object.direction ?? 0;
    message.initialSecurityPrice =
      object.initialSecurityPrice !== undefined && object.initialSecurityPrice !== null
        ? MoneyValue.fromPartial(object.initialSecurityPrice)
        : undefined;
    message.orderType = object.orderType ?? 0;
    message.message = object.message ?? '';
    message.initialOrderPricePt =
      object.initialOrderPricePt !== undefined && object.initialOrderPricePt !== null
        ? Quotation.fromPartial(object.initialOrderPricePt)
        : undefined;
    return message;
  },
};

function createBaseCancelOrderRequest(): CancelOrderRequest {
  return { accountId: '', orderId: '' };
}

export const CancelOrderRequest = {
  encode(message: CancelOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== '') {
      writer.uint32(10).string(message.accountId);
    }
    if (message.orderId !== '') {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelOrderRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : '',
      orderId: isSet(object.orderId) ? String(object.orderId) : '',
    };
  },

  toJSON(message: CancelOrderRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(object: DeepPartial<CancelOrderRequest>): CancelOrderRequest {
    const message = createBaseCancelOrderRequest();
    message.accountId = object.accountId ?? '';
    message.orderId = object.orderId ?? '';
    return message;
  },
};

function createBaseCancelOrderResponse(): CancelOrderResponse {
  return { time: undefined };
}

export const CancelOrderResponse = {
  encode(message: CancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelOrderResponse {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
    };
  },

  toJSON(message: CancelOrderResponse): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<CancelOrderResponse>): CancelOrderResponse {
    const message = createBaseCancelOrderResponse();
    message.time = object.time ?? undefined;
    return message;
  },
};

function createBaseGetOrderStateRequest(): GetOrderStateRequest {
  return { accountId: '', orderId: '' };
}

export const GetOrderStateRequest = {
  encode(message: GetOrderStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== '') {
      writer.uint32(10).string(message.accountId);
    }
    if (message.orderId !== '') {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOrderStateRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : '',
      orderId: isSet(object.orderId) ? String(object.orderId) : '',
    };
  },

  toJSON(message: GetOrderStateRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetOrderStateRequest>): GetOrderStateRequest {
    const message = createBaseGetOrderStateRequest();
    message.accountId = object.accountId ?? '';
    message.orderId = object.orderId ?? '';
    return message;
  },
};

function createBaseGetOrdersRequest(): GetOrdersRequest {
  return { accountId: '' };
}

export const GetOrdersRequest = {
  encode(message: GetOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== '') {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOrdersRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : '',
    };
  },

  toJSON(message: GetOrdersRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetOrdersRequest>): GetOrdersRequest {
    const message = createBaseGetOrdersRequest();
    message.accountId = object.accountId ?? '';
    return message;
  },
};

function createBaseGetOrdersResponse(): GetOrdersResponse {
  return { orders: [] };
}

export const GetOrdersResponse = {
  encode(message: GetOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      OrderState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(OrderState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => OrderState.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => (e ? OrderState.toJSON(e) : undefined));
    } else {
      obj.orders = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetOrdersResponse>): GetOrdersResponse {
    const message = createBaseGetOrdersResponse();
    message.orders = object.orders?.map(e => OrderState.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrderState(): OrderState {
  return {
    orderId: '',
    executionReportStatus: 0,
    lotsRequested: 0,
    lotsExecuted: 0,
    initialOrderPrice: undefined,
    executedOrderPrice: undefined,
    totalOrderAmount: undefined,
    averagePositionPrice: undefined,
    initialCommission: undefined,
    executedCommission: undefined,
    figi: '',
    direction: 0,
    initialSecurityPrice: undefined,
    stages: [],
    serviceCommission: undefined,
    currency: '',
    orderType: 0,
    orderDate: undefined,
  };
}

export const OrderState = {
  encode(message: OrderState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== '') {
      writer.uint32(10).string(message.orderId);
    }
    if (message.executionReportStatus !== 0) {
      writer.uint32(16).int32(message.executionReportStatus);
    }
    if (message.lotsRequested !== 0) {
      writer.uint32(24).int64(message.lotsRequested);
    }
    if (message.lotsExecuted !== 0) {
      writer.uint32(32).int64(message.lotsExecuted);
    }
    if (message.initialOrderPrice !== undefined) {
      MoneyValue.encode(message.initialOrderPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.executedOrderPrice !== undefined) {
      MoneyValue.encode(message.executedOrderPrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.totalOrderAmount !== undefined) {
      MoneyValue.encode(message.totalOrderAmount, writer.uint32(58).fork()).ldelim();
    }
    if (message.averagePositionPrice !== undefined) {
      MoneyValue.encode(message.averagePositionPrice, writer.uint32(66).fork()).ldelim();
    }
    if (message.initialCommission !== undefined) {
      MoneyValue.encode(message.initialCommission, writer.uint32(74).fork()).ldelim();
    }
    if (message.executedCommission !== undefined) {
      MoneyValue.encode(message.executedCommission, writer.uint32(82).fork()).ldelim();
    }
    if (message.figi !== '') {
      writer.uint32(90).string(message.figi);
    }
    if (message.direction !== 0) {
      writer.uint32(96).int32(message.direction);
    }
    if (message.initialSecurityPrice !== undefined) {
      MoneyValue.encode(message.initialSecurityPrice, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.stages) {
      OrderStage.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.serviceCommission !== undefined) {
      MoneyValue.encode(message.serviceCommission, writer.uint32(122).fork()).ldelim();
    }
    if (message.currency !== '') {
      writer.uint32(130).string(message.currency);
    }
    if (message.orderType !== 0) {
      writer.uint32(136).int32(message.orderType);
    }
    if (message.orderDate !== undefined) {
      Timestamp.encode(toTimestamp(message.orderDate), writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderId = reader.string();
          break;
        case 2:
          message.executionReportStatus = reader.int32() as any;
          break;
        case 3:
          message.lotsRequested = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.lotsExecuted = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.initialOrderPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 6:
          message.executedOrderPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 7:
          message.totalOrderAmount = MoneyValue.decode(reader, reader.uint32());
          break;
        case 8:
          message.averagePositionPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 9:
          message.initialCommission = MoneyValue.decode(reader, reader.uint32());
          break;
        case 10:
          message.executedCommission = MoneyValue.decode(reader, reader.uint32());
          break;
        case 11:
          message.figi = reader.string();
          break;
        case 12:
          message.direction = reader.int32() as any;
          break;
        case 13:
          message.initialSecurityPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 14:
          message.stages.push(OrderStage.decode(reader, reader.uint32()));
          break;
        case 15:
          message.serviceCommission = MoneyValue.decode(reader, reader.uint32());
          break;
        case 16:
          message.currency = reader.string();
          break;
        case 17:
          message.orderType = reader.int32() as any;
          break;
        case 18:
          message.orderDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderState {
    return {
      orderId: isSet(object.orderId) ? String(object.orderId) : '',
      executionReportStatus: isSet(object.executionReportStatus)
        ? orderExecutionReportStatusFromJSON(object.executionReportStatus)
        : 0,
      lotsRequested: isSet(object.lotsRequested) ? Number(object.lotsRequested) : 0,
      lotsExecuted: isSet(object.lotsExecuted) ? Number(object.lotsExecuted) : 0,
      initialOrderPrice: isSet(object.initialOrderPrice) ? MoneyValue.fromJSON(object.initialOrderPrice) : undefined,
      executedOrderPrice: isSet(object.executedOrderPrice) ? MoneyValue.fromJSON(object.executedOrderPrice) : undefined,
      totalOrderAmount: isSet(object.totalOrderAmount) ? MoneyValue.fromJSON(object.totalOrderAmount) : undefined,
      averagePositionPrice: isSet(object.averagePositionPrice)
        ? MoneyValue.fromJSON(object.averagePositionPrice)
        : undefined,
      initialCommission: isSet(object.initialCommission) ? MoneyValue.fromJSON(object.initialCommission) : undefined,
      executedCommission: isSet(object.executedCommission) ? MoneyValue.fromJSON(object.executedCommission) : undefined,
      figi: isSet(object.figi) ? String(object.figi) : '',
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      initialSecurityPrice: isSet(object.initialSecurityPrice)
        ? MoneyValue.fromJSON(object.initialSecurityPrice)
        : undefined,
      stages: Array.isArray(object?.stages) ? object.stages.map((e: any) => OrderStage.fromJSON(e)) : [],
      serviceCommission: isSet(object.serviceCommission) ? MoneyValue.fromJSON(object.serviceCommission) : undefined,
      currency: isSet(object.currency) ? String(object.currency) : '',
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      orderDate: isSet(object.orderDate) ? fromJsonTimestamp(object.orderDate) : undefined,
    };
  },

  toJSON(message: OrderState): unknown {
    const obj: any = {};
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.executionReportStatus !== undefined &&
      (obj.executionReportStatus = orderExecutionReportStatusToJSON(message.executionReportStatus));
    message.lotsRequested !== undefined && (obj.lotsRequested = Math.round(message.lotsRequested));
    message.lotsExecuted !== undefined && (obj.lotsExecuted = Math.round(message.lotsExecuted));
    message.initialOrderPrice !== undefined &&
      (obj.initialOrderPrice = message.initialOrderPrice ? MoneyValue.toJSON(message.initialOrderPrice) : undefined);
    message.executedOrderPrice !== undefined &&
      (obj.executedOrderPrice = message.executedOrderPrice ? MoneyValue.toJSON(message.executedOrderPrice) : undefined);
    message.totalOrderAmount !== undefined &&
      (obj.totalOrderAmount = message.totalOrderAmount ? MoneyValue.toJSON(message.totalOrderAmount) : undefined);
    message.averagePositionPrice !== undefined &&
      (obj.averagePositionPrice = message.averagePositionPrice
        ? MoneyValue.toJSON(message.averagePositionPrice)
        : undefined);
    message.initialCommission !== undefined &&
      (obj.initialCommission = message.initialCommission ? MoneyValue.toJSON(message.initialCommission) : undefined);
    message.executedCommission !== undefined &&
      (obj.executedCommission = message.executedCommission ? MoneyValue.toJSON(message.executedCommission) : undefined);
    message.figi !== undefined && (obj.figi = message.figi);
    message.direction !== undefined && (obj.direction = orderDirectionToJSON(message.direction));
    message.initialSecurityPrice !== undefined &&
      (obj.initialSecurityPrice = message.initialSecurityPrice
        ? MoneyValue.toJSON(message.initialSecurityPrice)
        : undefined);
    if (message.stages) {
      obj.stages = message.stages.map(e => (e ? OrderStage.toJSON(e) : undefined));
    } else {
      obj.stages = [];
    }
    message.serviceCommission !== undefined &&
      (obj.serviceCommission = message.serviceCommission ? MoneyValue.toJSON(message.serviceCommission) : undefined);
    message.currency !== undefined && (obj.currency = message.currency);
    message.orderType !== undefined && (obj.orderType = orderTypeToJSON(message.orderType));
    message.orderDate !== undefined && (obj.orderDate = message.orderDate.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<OrderState>): OrderState {
    const message = createBaseOrderState();
    message.orderId = object.orderId ?? '';
    message.executionReportStatus = object.executionReportStatus ?? 0;
    message.lotsRequested = object.lotsRequested ?? 0;
    message.lotsExecuted = object.lotsExecuted ?? 0;
    message.initialOrderPrice =
      object.initialOrderPrice !== undefined && object.initialOrderPrice !== null
        ? MoneyValue.fromPartial(object.initialOrderPrice)
        : undefined;
    message.executedOrderPrice =
      object.executedOrderPrice !== undefined && object.executedOrderPrice !== null
        ? MoneyValue.fromPartial(object.executedOrderPrice)
        : undefined;
    message.totalOrderAmount =
      object.totalOrderAmount !== undefined && object.totalOrderAmount !== null
        ? MoneyValue.fromPartial(object.totalOrderAmount)
        : undefined;
    message.averagePositionPrice =
      object.averagePositionPrice !== undefined && object.averagePositionPrice !== null
        ? MoneyValue.fromPartial(object.averagePositionPrice)
        : undefined;
    message.initialCommission =
      object.initialCommission !== undefined && object.initialCommission !== null
        ? MoneyValue.fromPartial(object.initialCommission)
        : undefined;
    message.executedCommission =
      object.executedCommission !== undefined && object.executedCommission !== null
        ? MoneyValue.fromPartial(object.executedCommission)
        : undefined;
    message.figi = object.figi ?? '';
    message.direction = object.direction ?? 0;
    message.initialSecurityPrice =
      object.initialSecurityPrice !== undefined && object.initialSecurityPrice !== null
        ? MoneyValue.fromPartial(object.initialSecurityPrice)
        : undefined;
    message.stages = object.stages?.map(e => OrderStage.fromPartial(e)) || [];
    message.serviceCommission =
      object.serviceCommission !== undefined && object.serviceCommission !== null
        ? MoneyValue.fromPartial(object.serviceCommission)
        : undefined;
    message.currency = object.currency ?? '';
    message.orderType = object.orderType ?? 0;
    message.orderDate = object.orderDate ?? undefined;
    return message;
  },
};

function createBaseOrderStage(): OrderStage {
  return { price: undefined, quantity: 0, tradeId: '' };
}

export const OrderStage = {
  encode(message: OrderStage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      MoneyValue.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    if (message.tradeId !== '') {
      writer.uint32(26).string(message.tradeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderStage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderStage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = MoneyValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.tradeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderStage {
    return {
      price: isSet(object.price) ? MoneyValue.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      tradeId: isSet(object.tradeId) ? String(object.tradeId) : '',
    };
  },

  toJSON(message: OrderStage): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? MoneyValue.toJSON(message.price) : undefined);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.tradeId !== undefined && (obj.tradeId = message.tradeId);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderStage>): OrderStage {
    const message = createBaseOrderStage();
    message.price =
      object.price !== undefined && object.price !== null ? MoneyValue.fromPartial(object.price) : undefined;
    message.quantity = object.quantity ?? 0;
    message.tradeId = object.tradeId ?? '';
    return message;
  },
};

export const OrdersStreamServiceDefinition = {
  name: 'OrdersStreamService',
  fullName: 'tinkoff.public.invest.api.contract.v1.OrdersStreamService',
  methods: {
    /** Stream сделок пользователя */
    tradesStream: {
      name: 'TradesStream',
      requestType: TradesStreamRequest,
      requestStream: false,
      responseType: TradesStreamResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

/**
 * Сервис предназначен для работы с торговыми поручениями:</br> **1**.
 * выставление;</br> **2**. отмена;</br> **3**. получение статуса;</br> **4**.
 * расчёт полной стоимости;</br> **5**. получение списка заявок.
 */
export const OrdersServiceDefinition = {
  name: 'OrdersService',
  fullName: 'tinkoff.public.invest.api.contract.v1.OrdersService',
  methods: {
    /** Метод выставления заявки. */
    postOrder: {
      name: 'PostOrder',
      requestType: PostOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Метод отмены биржевой заявки. */
    cancelOrder: {
      name: 'CancelOrder',
      requestType: CancelOrderRequest,
      requestStream: false,
      responseType: CancelOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения статуса торгового поручения. */
    getOrderState: {
      name: 'GetOrderState',
      requestType: GetOrderStateRequest,
      requestStream: false,
      responseType: OrderState,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка активных заявок по счёту. */
    getOrders: {
      name: 'GetOrders',
      requestType: GetOrdersRequest,
      requestStream: false,
      responseType: GetOrdersResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
