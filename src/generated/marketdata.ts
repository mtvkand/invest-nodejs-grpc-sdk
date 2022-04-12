/* eslint-disable */
import Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import {
  SecurityTradingStatus,
  Ping,
  Quotation,
  securityTradingStatusFromJSON,
  securityTradingStatusToJSON,
} from './common';
import { Timestamp } from './google/protobuf/timestamp';

export const protobufPackage = 'tinkoff.public.invest.api.contract.v1';

/** Тип операции со списком подписок. */
export enum SubscriptionAction {
  /** SUBSCRIPTION_ACTION_UNSPECIFIED - Статус подписки не определён. */
  SUBSCRIPTION_ACTION_UNSPECIFIED = 0,
  /** SUBSCRIPTION_ACTION_SUBSCRIBE - Подписаться. */
  SUBSCRIPTION_ACTION_SUBSCRIBE = 1,
  /** SUBSCRIPTION_ACTION_UNSUBSCRIBE - Отписаться. */
  SUBSCRIPTION_ACTION_UNSUBSCRIBE = 2,
  UNRECOGNIZED = -1,
}

export function subscriptionActionFromJSON(object: any): SubscriptionAction {
  switch (object) {
    case 0:
    case 'SUBSCRIPTION_ACTION_UNSPECIFIED':
      return SubscriptionAction.SUBSCRIPTION_ACTION_UNSPECIFIED;
    case 1:
    case 'SUBSCRIPTION_ACTION_SUBSCRIBE':
      return SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE;
    case 2:
    case 'SUBSCRIPTION_ACTION_UNSUBSCRIBE':
      return SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return SubscriptionAction.UNRECOGNIZED;
  }
}

export function subscriptionActionToJSON(object: SubscriptionAction): string {
  switch (object) {
    case SubscriptionAction.SUBSCRIPTION_ACTION_UNSPECIFIED:
      return 'SUBSCRIPTION_ACTION_UNSPECIFIED';
    case SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE:
      return 'SUBSCRIPTION_ACTION_SUBSCRIBE';
    case SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE:
      return 'SUBSCRIPTION_ACTION_UNSUBSCRIBE';
    default:
      return 'UNKNOWN';
  }
}

/** Интервал свечи. */
export enum SubscriptionInterval {
  /** SUBSCRIPTION_INTERVAL_UNSPECIFIED - Интервал свечи не определён. */
  SUBSCRIPTION_INTERVAL_UNSPECIFIED = 0,
  /** SUBSCRIPTION_INTERVAL_ONE_MINUTE - Минутные свечи. */
  SUBSCRIPTION_INTERVAL_ONE_MINUTE = 1,
  /** SUBSCRIPTION_INTERVAL_FIVE_MINUTES - Пятиминутные свечи. */
  SUBSCRIPTION_INTERVAL_FIVE_MINUTES = 2,
  UNRECOGNIZED = -1,
}

export function subscriptionIntervalFromJSON(object: any): SubscriptionInterval {
  switch (object) {
    case 0:
    case 'SUBSCRIPTION_INTERVAL_UNSPECIFIED':
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_UNSPECIFIED;
    case 1:
    case 'SUBSCRIPTION_INTERVAL_ONE_MINUTE':
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE;
    case 2:
    case 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES':
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIVE_MINUTES;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return SubscriptionInterval.UNRECOGNIZED;
  }
}

export function subscriptionIntervalToJSON(object: SubscriptionInterval): string {
  switch (object) {
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_UNSPECIFIED:
      return 'SUBSCRIPTION_INTERVAL_UNSPECIFIED';
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE:
      return 'SUBSCRIPTION_INTERVAL_ONE_MINUTE';
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIVE_MINUTES:
      return 'SUBSCRIPTION_INTERVAL_FIVE_MINUTES';
    default:
      return 'UNKNOWN';
  }
}

/** Результат подписки. */
export enum SubscriptionStatus {
  /** SUBSCRIPTION_STATUS_UNSPECIFIED - Статус подписки не определён. */
  SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  /** SUBSCRIPTION_STATUS_SUCCESS - Успешно. */
  SUBSCRIPTION_STATUS_SUCCESS = 1,
  /** SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND - Инструмент не найден. */
  SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND = 2,
  /** SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID - Некорректный статус подписки, список возможных значений: [SubscriptionAction](https://tinkoff.github.io/investAPI/marketdata#subscriptionaction). */
  SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID = 3,
  /** SUBSCRIPTION_STATUS_DEPTH_IS_INVALID - Некорректная глубина стакана, доступные значения: 1, 10, 20, 30, 40, 50. */
  SUBSCRIPTION_STATUS_DEPTH_IS_INVALID = 4,
  /** SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID - Некорректный интервал свечей, список возможных значений: [SubscriptionInterval](https://tinkoff.github.io/investAPI/marketdata#subscriptioninterval). */
  SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID = 5,
  /** SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED - Превышен лимит подписок в рамках стрима, подробнее: [Лимитная политика](https://tinkoff.github.io/investAPI/limits/). */
  SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED = 6,
  /** SUBSCRIPTION_STATUS_INTERNAL_ERROR - Внутренняя ошибка сервиса. */
  SUBSCRIPTION_STATUS_INTERNAL_ERROR = 7,
  UNRECOGNIZED = -1,
}

export function subscriptionStatusFromJSON(object: any): SubscriptionStatus {
  switch (object) {
    case 0:
    case 'SUBSCRIPTION_STATUS_UNSPECIFIED':
      return SubscriptionStatus.SUBSCRIPTION_STATUS_UNSPECIFIED;
    case 1:
    case 'SUBSCRIPTION_STATUS_SUCCESS':
      return SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS;
    case 2:
    case 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND':
      return SubscriptionStatus.SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND;
    case 3:
    case 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID':
      return SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID;
    case 4:
    case 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID':
      return SubscriptionStatus.SUBSCRIPTION_STATUS_DEPTH_IS_INVALID;
    case 5:
    case 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID':
      return SubscriptionStatus.SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID;
    case 6:
    case 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED':
      return SubscriptionStatus.SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED;
    case 7:
    case 'SUBSCRIPTION_STATUS_INTERNAL_ERROR':
      return SubscriptionStatus.SUBSCRIPTION_STATUS_INTERNAL_ERROR;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return SubscriptionStatus.UNRECOGNIZED;
  }
}

export function subscriptionStatusToJSON(object: SubscriptionStatus): string {
  switch (object) {
    case SubscriptionStatus.SUBSCRIPTION_STATUS_UNSPECIFIED:
      return 'SUBSCRIPTION_STATUS_UNSPECIFIED';
    case SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS:
      return 'SUBSCRIPTION_STATUS_SUCCESS';
    case SubscriptionStatus.SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND:
      return 'SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND';
    case SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID:
      return 'SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID';
    case SubscriptionStatus.SUBSCRIPTION_STATUS_DEPTH_IS_INVALID:
      return 'SUBSCRIPTION_STATUS_DEPTH_IS_INVALID';
    case SubscriptionStatus.SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID:
      return 'SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID';
    case SubscriptionStatus.SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED:
      return 'SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED';
    case SubscriptionStatus.SUBSCRIPTION_STATUS_INTERNAL_ERROR:
      return 'SUBSCRIPTION_STATUS_INTERNAL_ERROR';
    default:
      return 'UNKNOWN';
  }
}

/** Направление сделки. */
export enum TradeDirection {
  /** TRADE_DIRECTION_UNSPECIFIED - Направление сделки не определено. */
  TRADE_DIRECTION_UNSPECIFIED = 0,
  /** TRADE_DIRECTION_BUY - Покупка. */
  TRADE_DIRECTION_BUY = 1,
  /** TRADE_DIRECTION_SELL - Продажа. */
  TRADE_DIRECTION_SELL = 2,
  UNRECOGNIZED = -1,
}

export function tradeDirectionFromJSON(object: any): TradeDirection {
  switch (object) {
    case 0:
    case 'TRADE_DIRECTION_UNSPECIFIED':
      return TradeDirection.TRADE_DIRECTION_UNSPECIFIED;
    case 1:
    case 'TRADE_DIRECTION_BUY':
      return TradeDirection.TRADE_DIRECTION_BUY;
    case 2:
    case 'TRADE_DIRECTION_SELL':
      return TradeDirection.TRADE_DIRECTION_SELL;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return TradeDirection.UNRECOGNIZED;
  }
}

export function tradeDirectionToJSON(object: TradeDirection): string {
  switch (object) {
    case TradeDirection.TRADE_DIRECTION_UNSPECIFIED:
      return 'TRADE_DIRECTION_UNSPECIFIED';
    case TradeDirection.TRADE_DIRECTION_BUY:
      return 'TRADE_DIRECTION_BUY';
    case TradeDirection.TRADE_DIRECTION_SELL:
      return 'TRADE_DIRECTION_SELL';
    default:
      return 'UNKNOWN';
  }
}

/** Интервал свечей. */
export enum CandleInterval {
  /** CANDLE_INTERVAL_UNSPECIFIED - Интервал не определён. */
  CANDLE_INTERVAL_UNSPECIFIED = 0,
  /** CANDLE_INTERVAL_1_MIN - 1 минута. */
  CANDLE_INTERVAL_1_MIN = 1,
  /** CANDLE_INTERVAL_5_MIN - 5 минут. */
  CANDLE_INTERVAL_5_MIN = 2,
  /** CANDLE_INTERVAL_15_MIN - 15 минут. */
  CANDLE_INTERVAL_15_MIN = 3,
  /** CANDLE_INTERVAL_HOUR - 1 час. */
  CANDLE_INTERVAL_HOUR = 4,
  /** CANDLE_INTERVAL_DAY - 1 день. */
  CANDLE_INTERVAL_DAY = 5,
  UNRECOGNIZED = -1,
}

export function candleIntervalFromJSON(object: any): CandleInterval {
  switch (object) {
    case 0:
    case 'CANDLE_INTERVAL_UNSPECIFIED':
      return CandleInterval.CANDLE_INTERVAL_UNSPECIFIED;
    case 1:
    case 'CANDLE_INTERVAL_1_MIN':
      return CandleInterval.CANDLE_INTERVAL_1_MIN;
    case 2:
    case 'CANDLE_INTERVAL_5_MIN':
      return CandleInterval.CANDLE_INTERVAL_5_MIN;
    case 3:
    case 'CANDLE_INTERVAL_15_MIN':
      return CandleInterval.CANDLE_INTERVAL_15_MIN;
    case 4:
    case 'CANDLE_INTERVAL_HOUR':
      return CandleInterval.CANDLE_INTERVAL_HOUR;
    case 5:
    case 'CANDLE_INTERVAL_DAY':
      return CandleInterval.CANDLE_INTERVAL_DAY;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CandleInterval.UNRECOGNIZED;
  }
}

export function candleIntervalToJSON(object: CandleInterval): string {
  switch (object) {
    case CandleInterval.CANDLE_INTERVAL_UNSPECIFIED:
      return 'CANDLE_INTERVAL_UNSPECIFIED';
    case CandleInterval.CANDLE_INTERVAL_1_MIN:
      return 'CANDLE_INTERVAL_1_MIN';
    case CandleInterval.CANDLE_INTERVAL_5_MIN:
      return 'CANDLE_INTERVAL_5_MIN';
    case CandleInterval.CANDLE_INTERVAL_15_MIN:
      return 'CANDLE_INTERVAL_15_MIN';
    case CandleInterval.CANDLE_INTERVAL_HOUR:
      return 'CANDLE_INTERVAL_HOUR';
    case CandleInterval.CANDLE_INTERVAL_DAY:
      return 'CANDLE_INTERVAL_DAY';
    default:
      return 'UNKNOWN';
  }
}

/** Запрос подписки или отписки на определённые биржевые данные. */
export interface MarketDataRequest {
  /** Запрос подписки на свечи. */
  subscribeCandlesRequest: SubscribeCandlesRequest | undefined;
  /** Запрос подписки на стаканы. */
  subscribeOrderBookRequest: SubscribeOrderBookRequest | undefined;
  /** Запрос подписки на ленту обезличенных сделок. */
  subscribeTradesRequest: SubscribeTradesRequest | undefined;
  /** Запрос подписки на торговые статусы инструментов. */
  subscribeInfoRequest: SubscribeInfoRequest | undefined;
  /** Запрос подписки на последние цены. */
  subscribeLastPriceRequest: SubscribeLastPriceRequest | undefined;
}

/** Пакет биржевой информации по подписке. */
export interface MarketDataResponse {
  /** Результат подписки на свечи. */
  subscribeCandlesResponse: SubscribeCandlesResponse | undefined;
  /** Результат подписки на стаканы. */
  subscribeOrderBookResponse: SubscribeOrderBookResponse | undefined;
  /** Результат подписки на поток обезличенных сделок. */
  subscribeTradesResponse: SubscribeTradesResponse | undefined;
  /** Результат подписки на торговые статусы инструментов. */
  subscribeInfoResponse: SubscribeInfoResponse | undefined;
  /** Свеча. */
  candle: Candle | undefined;
  /** Сделки. */
  trade: Trade | undefined;
  /** Стакан. */
  orderbook: OrderBook | undefined;
  /** Торговый статус. */
  tradingStatus: TradingStatus | undefined;
  /** Проверка активности стрима. */
  ping: Ping | undefined;
  /** Результат подписки на последние цены инструментов. */
  subscribeLastPriceResponse: SubscribeLastPriceResponse | undefined;
  /** Последняя цена. */
  lastPrice: LastPrice | undefined;
}

/** subscribeCandles | Изменения статуса подписки на свечи. */
export interface SubscribeCandlesRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на свечи. */
  instruments: CandleInstrument[];
}

/** Запрос изменения статус подписки на свечи. */
export interface CandleInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Интервал свечей. */
  interval: SubscriptionInterval;
}

/** Результат изменения статус подписки на свечи. */
export interface SubscribeCandlesResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на свечи. */
  candlesSubscriptions: CandleSubscription[];
}

/** Статус подписки на свечи. */
export interface CandleSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Интервал свечей. */
  interval: SubscriptionInterval;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
}

/** Запрос на изменение статуса подписки на стаканы. */
export interface SubscribeOrderBookRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на стаканы. */
  instruments: OrderBookInstrument[];
}

/** Запрос подписки на стаканы. */
export interface OrderBookInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
}

/** Результат изменения статуса подписки на стаканы. */
export interface SubscribeOrderBookResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на стаканы. */
  orderBookSubscriptions: OrderBookSubscription[];
}

/** Статус подписки. */
export interface OrderBookSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
}

/** Изменение статуса подписки на поток обезличенных сделок. */
export interface SubscribeTradesRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на поток обезличенных сделок. */
  instruments: TradeInstrument[];
}

/** Запрос подписки на поток обезличенных сделок. */
export interface TradeInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
}

/** Результат изменения статуса подписки на поток обезличенных сделок. */
export interface SubscribeTradesResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на поток сделок. */
  tradeSubscriptions: TradeSubscription[];
}

/** Статус подписки. */
export interface TradeSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
}

/** Изменение статуса подписки на торговый статус инструмента. */
export interface SubscribeInfoRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на торговый статус. */
  instruments: InfoInstrument[];
}

/** Запрос подписки на торговый статус. */
export interface InfoInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
}

/** Результат изменения статуса подписки на торговый статус. */
export interface SubscribeInfoResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на торговый статус. */
  infoSubscriptions: InfoSubscription[];
}

/** Статус подписки. */
export interface InfoSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
}

/** Изменение статуса подписки на последнюю цену инструмента. */
export interface SubscribeLastPriceRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на последнюю цену. */
  instruments: LastPriceInstrument[];
}

/** Запрос подписки на последнюю цену. */
export interface LastPriceInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
}

/** Результат изменения статуса подписки на последнюю цену. */
export interface SubscribeLastPriceResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на последнюю цену. */
  lastPriceSubscriptions: LastPriceSubscription[];
}

/** Статус подписки на последнюю цену. */
export interface LastPriceSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
}

/** Пакет свечей в рамках стрима. */
export interface Candle {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Интервал свечи. */
  interval: SubscriptionInterval;
  /** Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  open: Quotation | undefined;
  /** Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  high: Quotation | undefined;
  /** Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  low: Quotation | undefined;
  /** Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  close: Quotation | undefined;
  /** Объём сделок в лотах. */
  volume: number;
  /** Время начала интервала свечи в часовом поясе UTC. */
  time: Date | undefined;
  /** Время последней сделки, вошедшей в свечу в часовом поясе UTC. */
  lastTradeTs: Date | undefined;
}

/** Пакет стаканов в рамках стрима. */
export interface OrderBook {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Флаг консистентности стакана. **false** значит не все заявки попали в стакан по причинам сетевых задержек или нарушения порядка доставки. */
  isConsistent: boolean;
  /** Массив предложений. */
  bids: Order[];
  /** Массив спроса. */
  asks: Order[];
  /** Время формирования стакана в часовом поясе UTC по времени биржи. */
  time: Date | undefined;
  /** Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  limitUp: Quotation | undefined;
  /** Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  limitDown: Quotation | undefined;
}

/** Массив предложений/спроса. */
export interface Order {
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price: Quotation | undefined;
  /** Количество в лотах. */
  quantity: number;
}

/** Информация о сделке. */
export interface Trade {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Направление сделки. */
  direction: TradeDirection;
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price: Quotation | undefined;
  /** Количество лотов. */
  quantity: number;
  /** Время сделки в часовом поясе UTC по времени биржи. */
  time: Date | undefined;
}

/** Пакет изменения торгового статуса. */
export interface TradingStatus {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус торговли инструментом. */
  tradingStatus: SecurityTradingStatus;
  /** Время изменения торгового статуса в часовом поясе UTC. */
  time: Date | undefined;
  /** Признак доступности выставления лимитной заявки по инструменту. */
  limitOrderAvailableFlag: boolean;
  /** Признак доступности выставления рыночной заявки по инструменту. */
  marketOrderAvailableFlag: boolean;
}

/** Запрос исторических свечей. */
export interface GetCandlesRequest {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. */
  from: Date | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. */
  to: Date | undefined;
  /** Интервал запрошенных свечей. */
  interval: CandleInterval;
}

/** Список свечей. */
export interface GetCandlesResponse {
  /** Массив свечей. */
  candles: HistoricCandle[];
}

/** Информация о свече. */
export interface HistoricCandle {
  /** Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  open: Quotation | undefined;
  /** Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  high: Quotation | undefined;
  /** Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  low: Quotation | undefined;
  /** Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  close: Quotation | undefined;
  /** Объём торгов в лотах. */
  volume: number;
  /** Время свечи в часовом поясе UTC. */
  time: Date | undefined;
  /** Признак завершённости свечи. **false** значит, свеча за текущие интервал ещё сформирована не полностью. */
  isComplete: boolean;
}

/** Запрос получения последних цен. */
export interface GetLastPricesRequest {
  /** Массив figi-идентификаторов инструментов. */
  figi: string[];
}

/** Список последних цен. */
export interface GetLastPricesResponse {
  /** Массив последних цен. */
  lastPrices: LastPrice[];
}

/** Информация о цене. */
export interface LastPrice {
  /** Идентификатор инструмента. */
  figi: string;
  /** Последняя цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price: Quotation | undefined;
  /** Время получения последней цены в часовом поясе UTC по времени биржи. */
  time: Date | undefined;
}

/** Запрос стакана. */
export interface GetOrderBookRequest {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
}

/** Информация о стакане. */
export interface GetOrderBookResponse {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Множество пар значений на покупку. */
  bids: Order[];
  /** Множество пар значений на продажу. */
  asks: Order[];
  /** Цена последней сделки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  lastPrice: Quotation | undefined;
  /** Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  closePrice: Quotation | undefined;
  /** Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  limitUp: Quotation | undefined;
  /** Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  limitDown: Quotation | undefined;
}

/** Запрос получения торгового статуса. */
export interface GetTradingStatusRequest {
  /** Идентификатор инструмента. */
  figi: string;
}

/** Информация о торговом статусе. */
export interface GetTradingStatusResponse {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус торговли инструментом. */
  tradingStatus: SecurityTradingStatus;
  /** Признак доступности выставления лимитной заявки по инструменту. */
  limitOrderAvailableFlag: boolean;
  /** Признак доступности выставления рыночной заявки по инструменту. */
  marketOrderAvailableFlag: boolean;
}

/** Запрос последних обезличенных сделок по инструменту. */
export interface GetLastTradesRequest {
  /** Figi-идентификатор инструмента */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. */
  from: Date | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. */
  to: Date | undefined;
}

/** Последние обезличенные сделки по инструменту. */
export interface GetLastTradesResponse {
  /** Массив сделок */
  trades: Trade[];
}

function createBaseMarketDataRequest(): MarketDataRequest {
  return {
    subscribeCandlesRequest: undefined,
    subscribeOrderBookRequest: undefined,
    subscribeTradesRequest: undefined,
    subscribeInfoRequest: undefined,
    subscribeLastPriceRequest: undefined,
  };
}

export const MarketDataRequest = {
  encode(message: MarketDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscribeCandlesRequest !== undefined) {
      SubscribeCandlesRequest.encode(message.subscribeCandlesRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.subscribeOrderBookRequest !== undefined) {
      SubscribeOrderBookRequest.encode(message.subscribeOrderBookRequest, writer.uint32(18).fork()).ldelim();
    }
    if (message.subscribeTradesRequest !== undefined) {
      SubscribeTradesRequest.encode(message.subscribeTradesRequest, writer.uint32(26).fork()).ldelim();
    }
    if (message.subscribeInfoRequest !== undefined) {
      SubscribeInfoRequest.encode(message.subscribeInfoRequest, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscribeLastPriceRequest !== undefined) {
      SubscribeLastPriceRequest.encode(message.subscribeLastPriceRequest, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscribeCandlesRequest = SubscribeCandlesRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.subscribeOrderBookRequest = SubscribeOrderBookRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.subscribeTradesRequest = SubscribeTradesRequest.decode(reader, reader.uint32());
          break;
        case 4:
          message.subscribeInfoRequest = SubscribeInfoRequest.decode(reader, reader.uint32());
          break;
        case 5:
          message.subscribeLastPriceRequest = SubscribeLastPriceRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDataRequest {
    return {
      subscribeCandlesRequest: isSet(object.subscribeCandlesRequest)
        ? SubscribeCandlesRequest.fromJSON(object.subscribeCandlesRequest)
        : undefined,
      subscribeOrderBookRequest: isSet(object.subscribeOrderBookRequest)
        ? SubscribeOrderBookRequest.fromJSON(object.subscribeOrderBookRequest)
        : undefined,
      subscribeTradesRequest: isSet(object.subscribeTradesRequest)
        ? SubscribeTradesRequest.fromJSON(object.subscribeTradesRequest)
        : undefined,
      subscribeInfoRequest: isSet(object.subscribeInfoRequest)
        ? SubscribeInfoRequest.fromJSON(object.subscribeInfoRequest)
        : undefined,
      subscribeLastPriceRequest: isSet(object.subscribeLastPriceRequest)
        ? SubscribeLastPriceRequest.fromJSON(object.subscribeLastPriceRequest)
        : undefined,
    };
  },

  toJSON(message: MarketDataRequest): unknown {
    const obj: any = {};
    message.subscribeCandlesRequest !== undefined &&
      (obj.subscribeCandlesRequest = message.subscribeCandlesRequest
        ? SubscribeCandlesRequest.toJSON(message.subscribeCandlesRequest)
        : undefined);
    message.subscribeOrderBookRequest !== undefined &&
      (obj.subscribeOrderBookRequest = message.subscribeOrderBookRequest
        ? SubscribeOrderBookRequest.toJSON(message.subscribeOrderBookRequest)
        : undefined);
    message.subscribeTradesRequest !== undefined &&
      (obj.subscribeTradesRequest = message.subscribeTradesRequest
        ? SubscribeTradesRequest.toJSON(message.subscribeTradesRequest)
        : undefined);
    message.subscribeInfoRequest !== undefined &&
      (obj.subscribeInfoRequest = message.subscribeInfoRequest
        ? SubscribeInfoRequest.toJSON(message.subscribeInfoRequest)
        : undefined);
    message.subscribeLastPriceRequest !== undefined &&
      (obj.subscribeLastPriceRequest = message.subscribeLastPriceRequest
        ? SubscribeLastPriceRequest.toJSON(message.subscribeLastPriceRequest)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketDataRequest>): MarketDataRequest {
    const message = createBaseMarketDataRequest();
    message.subscribeCandlesRequest =
      object.subscribeCandlesRequest !== undefined && object.subscribeCandlesRequest !== null
        ? SubscribeCandlesRequest.fromPartial(object.subscribeCandlesRequest)
        : undefined;
    message.subscribeOrderBookRequest =
      object.subscribeOrderBookRequest !== undefined && object.subscribeOrderBookRequest !== null
        ? SubscribeOrderBookRequest.fromPartial(object.subscribeOrderBookRequest)
        : undefined;
    message.subscribeTradesRequest =
      object.subscribeTradesRequest !== undefined && object.subscribeTradesRequest !== null
        ? SubscribeTradesRequest.fromPartial(object.subscribeTradesRequest)
        : undefined;
    message.subscribeInfoRequest =
      object.subscribeInfoRequest !== undefined && object.subscribeInfoRequest !== null
        ? SubscribeInfoRequest.fromPartial(object.subscribeInfoRequest)
        : undefined;
    message.subscribeLastPriceRequest =
      object.subscribeLastPriceRequest !== undefined && object.subscribeLastPriceRequest !== null
        ? SubscribeLastPriceRequest.fromPartial(object.subscribeLastPriceRequest)
        : undefined;
    return message;
  },
};

function createBaseMarketDataResponse(): MarketDataResponse {
  return {
    subscribeCandlesResponse: undefined,
    subscribeOrderBookResponse: undefined,
    subscribeTradesResponse: undefined,
    subscribeInfoResponse: undefined,
    candle: undefined,
    trade: undefined,
    orderbook: undefined,
    tradingStatus: undefined,
    ping: undefined,
    subscribeLastPriceResponse: undefined,
    lastPrice: undefined,
  };
}

export const MarketDataResponse = {
  encode(message: MarketDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscribeCandlesResponse !== undefined) {
      SubscribeCandlesResponse.encode(message.subscribeCandlesResponse, writer.uint32(10).fork()).ldelim();
    }
    if (message.subscribeOrderBookResponse !== undefined) {
      SubscribeOrderBookResponse.encode(message.subscribeOrderBookResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.subscribeTradesResponse !== undefined) {
      SubscribeTradesResponse.encode(message.subscribeTradesResponse, writer.uint32(26).fork()).ldelim();
    }
    if (message.subscribeInfoResponse !== undefined) {
      SubscribeInfoResponse.encode(message.subscribeInfoResponse, writer.uint32(34).fork()).ldelim();
    }
    if (message.candle !== undefined) {
      Candle.encode(message.candle, writer.uint32(42).fork()).ldelim();
    }
    if (message.trade !== undefined) {
      Trade.encode(message.trade, writer.uint32(50).fork()).ldelim();
    }
    if (message.orderbook !== undefined) {
      OrderBook.encode(message.orderbook, writer.uint32(58).fork()).ldelim();
    }
    if (message.tradingStatus !== undefined) {
      TradingStatus.encode(message.tradingStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(74).fork()).ldelim();
    }
    if (message.subscribeLastPriceResponse !== undefined) {
      SubscribeLastPriceResponse.encode(message.subscribeLastPriceResponse, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastPrice !== undefined) {
      LastPrice.encode(message.lastPrice, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscribeCandlesResponse = SubscribeCandlesResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.subscribeOrderBookResponse = SubscribeOrderBookResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.subscribeTradesResponse = SubscribeTradesResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.subscribeInfoResponse = SubscribeInfoResponse.decode(reader, reader.uint32());
          break;
        case 5:
          message.candle = Candle.decode(reader, reader.uint32());
          break;
        case 6:
          message.trade = Trade.decode(reader, reader.uint32());
          break;
        case 7:
          message.orderbook = OrderBook.decode(reader, reader.uint32());
          break;
        case 8:
          message.tradingStatus = TradingStatus.decode(reader, reader.uint32());
          break;
        case 9:
          message.ping = Ping.decode(reader, reader.uint32());
          break;
        case 10:
          message.subscribeLastPriceResponse = SubscribeLastPriceResponse.decode(reader, reader.uint32());
          break;
        case 11:
          message.lastPrice = LastPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketDataResponse {
    return {
      subscribeCandlesResponse: isSet(object.subscribeCandlesResponse)
        ? SubscribeCandlesResponse.fromJSON(object.subscribeCandlesResponse)
        : undefined,
      subscribeOrderBookResponse: isSet(object.subscribeOrderBookResponse)
        ? SubscribeOrderBookResponse.fromJSON(object.subscribeOrderBookResponse)
        : undefined,
      subscribeTradesResponse: isSet(object.subscribeTradesResponse)
        ? SubscribeTradesResponse.fromJSON(object.subscribeTradesResponse)
        : undefined,
      subscribeInfoResponse: isSet(object.subscribeInfoResponse)
        ? SubscribeInfoResponse.fromJSON(object.subscribeInfoResponse)
        : undefined,
      candle: isSet(object.candle) ? Candle.fromJSON(object.candle) : undefined,
      trade: isSet(object.trade) ? Trade.fromJSON(object.trade) : undefined,
      orderbook: isSet(object.orderbook) ? OrderBook.fromJSON(object.orderbook) : undefined,
      tradingStatus: isSet(object.tradingStatus) ? TradingStatus.fromJSON(object.tradingStatus) : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
      subscribeLastPriceResponse: isSet(object.subscribeLastPriceResponse)
        ? SubscribeLastPriceResponse.fromJSON(object.subscribeLastPriceResponse)
        : undefined,
      lastPrice: isSet(object.lastPrice) ? LastPrice.fromJSON(object.lastPrice) : undefined,
    };
  },

  toJSON(message: MarketDataResponse): unknown {
    const obj: any = {};
    message.subscribeCandlesResponse !== undefined &&
      (obj.subscribeCandlesResponse = message.subscribeCandlesResponse
        ? SubscribeCandlesResponse.toJSON(message.subscribeCandlesResponse)
        : undefined);
    message.subscribeOrderBookResponse !== undefined &&
      (obj.subscribeOrderBookResponse = message.subscribeOrderBookResponse
        ? SubscribeOrderBookResponse.toJSON(message.subscribeOrderBookResponse)
        : undefined);
    message.subscribeTradesResponse !== undefined &&
      (obj.subscribeTradesResponse = message.subscribeTradesResponse
        ? SubscribeTradesResponse.toJSON(message.subscribeTradesResponse)
        : undefined);
    message.subscribeInfoResponse !== undefined &&
      (obj.subscribeInfoResponse = message.subscribeInfoResponse
        ? SubscribeInfoResponse.toJSON(message.subscribeInfoResponse)
        : undefined);
    message.candle !== undefined && (obj.candle = message.candle ? Candle.toJSON(message.candle) : undefined);
    message.trade !== undefined && (obj.trade = message.trade ? Trade.toJSON(message.trade) : undefined);
    message.orderbook !== undefined &&
      (obj.orderbook = message.orderbook ? OrderBook.toJSON(message.orderbook) : undefined);
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = message.tradingStatus ? TradingStatus.toJSON(message.tradingStatus) : undefined);
    message.ping !== undefined && (obj.ping = message.ping ? Ping.toJSON(message.ping) : undefined);
    message.subscribeLastPriceResponse !== undefined &&
      (obj.subscribeLastPriceResponse = message.subscribeLastPriceResponse
        ? SubscribeLastPriceResponse.toJSON(message.subscribeLastPriceResponse)
        : undefined);
    message.lastPrice !== undefined &&
      (obj.lastPrice = message.lastPrice ? LastPrice.toJSON(message.lastPrice) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketDataResponse>): MarketDataResponse {
    const message = createBaseMarketDataResponse();
    message.subscribeCandlesResponse =
      object.subscribeCandlesResponse !== undefined && object.subscribeCandlesResponse !== null
        ? SubscribeCandlesResponse.fromPartial(object.subscribeCandlesResponse)
        : undefined;
    message.subscribeOrderBookResponse =
      object.subscribeOrderBookResponse !== undefined && object.subscribeOrderBookResponse !== null
        ? SubscribeOrderBookResponse.fromPartial(object.subscribeOrderBookResponse)
        : undefined;
    message.subscribeTradesResponse =
      object.subscribeTradesResponse !== undefined && object.subscribeTradesResponse !== null
        ? SubscribeTradesResponse.fromPartial(object.subscribeTradesResponse)
        : undefined;
    message.subscribeInfoResponse =
      object.subscribeInfoResponse !== undefined && object.subscribeInfoResponse !== null
        ? SubscribeInfoResponse.fromPartial(object.subscribeInfoResponse)
        : undefined;
    message.candle =
      object.candle !== undefined && object.candle !== null ? Candle.fromPartial(object.candle) : undefined;
    message.trade = object.trade !== undefined && object.trade !== null ? Trade.fromPartial(object.trade) : undefined;
    message.orderbook =
      object.orderbook !== undefined && object.orderbook !== null ? OrderBook.fromPartial(object.orderbook) : undefined;
    message.tradingStatus =
      object.tradingStatus !== undefined && object.tradingStatus !== null
        ? TradingStatus.fromPartial(object.tradingStatus)
        : undefined;
    message.ping = object.ping !== undefined && object.ping !== null ? Ping.fromPartial(object.ping) : undefined;
    message.subscribeLastPriceResponse =
      object.subscribeLastPriceResponse !== undefined && object.subscribeLastPriceResponse !== null
        ? SubscribeLastPriceResponse.fromPartial(object.subscribeLastPriceResponse)
        : undefined;
    message.lastPrice =
      object.lastPrice !== undefined && object.lastPrice !== null ? LastPrice.fromPartial(object.lastPrice) : undefined;
    return message;
  },
};

function createBaseSubscribeCandlesRequest(): SubscribeCandlesRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeCandlesRequest = {
  encode(message: SubscribeCandlesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      CandleInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeCandlesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeCandlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(CandleInstrument.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeCandlesRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => CandleInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeCandlesRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
    if (message.instruments) {
      obj.instruments = message.instruments.map(e => (e ? CandleInstrument.toJSON(e) : undefined));
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeCandlesRequest>): SubscribeCandlesRequest {
    const message = createBaseSubscribeCandlesRequest();
    message.subscriptionAction = object.subscriptionAction ?? 0;
    message.instruments = object.instruments?.map(e => CandleInstrument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCandleInstrument(): CandleInstrument {
  return { figi: '', interval: 0 };
}

export const CandleInstrument = {
  encode(message: CandleInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandleInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandleInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.interval = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandleInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      interval: isSet(object.interval) ? subscriptionIntervalFromJSON(object.interval) : 0,
    };
  },

  toJSON(message: CandleInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.interval !== undefined && (obj.interval = subscriptionIntervalToJSON(message.interval));
    return obj;
  },

  fromPartial(object: DeepPartial<CandleInstrument>): CandleInstrument {
    const message = createBaseCandleInstrument();
    message.figi = object.figi ?? '';
    message.interval = object.interval ?? 0;
    return message;
  },
};

function createBaseSubscribeCandlesResponse(): SubscribeCandlesResponse {
  return { trackingId: '', candlesSubscriptions: [] };
}

export const SubscribeCandlesResponse = {
  encode(message: SubscribeCandlesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== '') {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.candlesSubscriptions) {
      CandleSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeCandlesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeCandlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.candlesSubscriptions.push(CandleSubscription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeCandlesResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
      candlesSubscriptions: Array.isArray(object?.candlesSubscriptions)
        ? object.candlesSubscriptions.map((e: any) => CandleSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeCandlesResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.candlesSubscriptions) {
      obj.candlesSubscriptions = message.candlesSubscriptions.map(e => (e ? CandleSubscription.toJSON(e) : undefined));
    } else {
      obj.candlesSubscriptions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeCandlesResponse>): SubscribeCandlesResponse {
    const message = createBaseSubscribeCandlesResponse();
    message.trackingId = object.trackingId ?? '';
    message.candlesSubscriptions = object.candlesSubscriptions?.map(e => CandleSubscription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCandleSubscription(): CandleSubscription {
  return { figi: '', interval: 0, subscriptionStatus: 0 };
}

export const CandleSubscription = {
  encode(message: CandleSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(24).int32(message.subscriptionStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandleSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandleSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.interval = reader.int32() as any;
          break;
        case 3:
          message.subscriptionStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CandleSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      interval: isSet(object.interval) ? subscriptionIntervalFromJSON(object.interval) : 0,
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
    };
  },

  toJSON(message: CandleSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.interval !== undefined && (obj.interval = subscriptionIntervalToJSON(message.interval));
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
    return obj;
  },

  fromPartial(object: DeepPartial<CandleSubscription>): CandleSubscription {
    const message = createBaseCandleSubscription();
    message.figi = object.figi ?? '';
    message.interval = object.interval ?? 0;
    message.subscriptionStatus = object.subscriptionStatus ?? 0;
    return message;
  },
};

function createBaseSubscribeOrderBookRequest(): SubscribeOrderBookRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeOrderBookRequest = {
  encode(message: SubscribeOrderBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      OrderBookInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeOrderBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeOrderBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(OrderBookInstrument.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeOrderBookRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => OrderBookInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeOrderBookRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
    if (message.instruments) {
      obj.instruments = message.instruments.map(e => (e ? OrderBookInstrument.toJSON(e) : undefined));
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeOrderBookRequest>): SubscribeOrderBookRequest {
    const message = createBaseSubscribeOrderBookRequest();
    message.subscriptionAction = object.subscriptionAction ?? 0;
    message.instruments = object.instruments?.map(e => OrderBookInstrument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrderBookInstrument(): OrderBookInstrument {
  return { figi: '', depth: 0 };
}

export const OrderBookInstrument = {
  encode(message: OrderBookInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBookInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      depth: isSet(object.depth) ? Number(object.depth) : 0,
    };
  },

  toJSON(message: OrderBookInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBookInstrument>): OrderBookInstrument {
    const message = createBaseOrderBookInstrument();
    message.figi = object.figi ?? '';
    message.depth = object.depth ?? 0;
    return message;
  },
};

function createBaseSubscribeOrderBookResponse(): SubscribeOrderBookResponse {
  return { trackingId: '', orderBookSubscriptions: [] };
}

export const SubscribeOrderBookResponse = {
  encode(message: SubscribeOrderBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== '') {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.orderBookSubscriptions) {
      OrderBookSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeOrderBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeOrderBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.orderBookSubscriptions.push(OrderBookSubscription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeOrderBookResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
      orderBookSubscriptions: Array.isArray(object?.orderBookSubscriptions)
        ? object.orderBookSubscriptions.map((e: any) => OrderBookSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeOrderBookResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.orderBookSubscriptions) {
      obj.orderBookSubscriptions = message.orderBookSubscriptions.map(e =>
        e ? OrderBookSubscription.toJSON(e) : undefined,
      );
    } else {
      obj.orderBookSubscriptions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeOrderBookResponse>): SubscribeOrderBookResponse {
    const message = createBaseSubscribeOrderBookResponse();
    message.trackingId = object.trackingId ?? '';
    message.orderBookSubscriptions =
      object.orderBookSubscriptions?.map(e => OrderBookSubscription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOrderBookSubscription(): OrderBookSubscription {
  return { figi: '', depth: 0, subscriptionStatus: 0 };
}

export const OrderBookSubscription = {
  encode(message: OrderBookSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(24).int32(message.subscriptionStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        case 3:
          message.subscriptionStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBookSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
    };
  },

  toJSON(message: OrderBookSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBookSubscription>): OrderBookSubscription {
    const message = createBaseOrderBookSubscription();
    message.figi = object.figi ?? '';
    message.depth = object.depth ?? 0;
    message.subscriptionStatus = object.subscriptionStatus ?? 0;
    return message;
  },
};

function createBaseSubscribeTradesRequest(): SubscribeTradesRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeTradesRequest = {
  encode(message: SubscribeTradesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      TradeInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeTradesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeTradesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(TradeInstrument.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeTradesRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => TradeInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeTradesRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
    if (message.instruments) {
      obj.instruments = message.instruments.map(e => (e ? TradeInstrument.toJSON(e) : undefined));
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeTradesRequest>): SubscribeTradesRequest {
    const message = createBaseSubscribeTradesRequest();
    message.subscriptionAction = object.subscriptionAction ?? 0;
    message.instruments = object.instruments?.map(e => TradeInstrument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTradeInstrument(): TradeInstrument {
  return { figi: '' };
}

export const TradeInstrument = {
  encode(message: TradeInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradeInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
    };
  },

  toJSON(message: TradeInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    return obj;
  },

  fromPartial(object: DeepPartial<TradeInstrument>): TradeInstrument {
    const message = createBaseTradeInstrument();
    message.figi = object.figi ?? '';
    return message;
  },
};

function createBaseSubscribeTradesResponse(): SubscribeTradesResponse {
  return { trackingId: '', tradeSubscriptions: [] };
}

export const SubscribeTradesResponse = {
  encode(message: SubscribeTradesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== '') {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.tradeSubscriptions) {
      TradeSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeTradesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.tradeSubscriptions.push(TradeSubscription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeTradesResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
      tradeSubscriptions: Array.isArray(object?.tradeSubscriptions)
        ? object.tradeSubscriptions.map((e: any) => TradeSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeTradesResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.tradeSubscriptions) {
      obj.tradeSubscriptions = message.tradeSubscriptions.map(e => (e ? TradeSubscription.toJSON(e) : undefined));
    } else {
      obj.tradeSubscriptions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeTradesResponse>): SubscribeTradesResponse {
    const message = createBaseSubscribeTradesResponse();
    message.trackingId = object.trackingId ?? '';
    message.tradeSubscriptions = object.tradeSubscriptions?.map(e => TradeSubscription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTradeSubscription(): TradeSubscription {
  return { figi: '', subscriptionStatus: 0 };
}

export const TradeSubscription = {
  encode(message: TradeSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(16).int32(message.subscriptionStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.subscriptionStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradeSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
    };
  },

  toJSON(message: TradeSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
    return obj;
  },

  fromPartial(object: DeepPartial<TradeSubscription>): TradeSubscription {
    const message = createBaseTradeSubscription();
    message.figi = object.figi ?? '';
    message.subscriptionStatus = object.subscriptionStatus ?? 0;
    return message;
  },
};

function createBaseSubscribeInfoRequest(): SubscribeInfoRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeInfoRequest = {
  encode(message: SubscribeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      InfoInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(InfoInstrument.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeInfoRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => InfoInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeInfoRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
    if (message.instruments) {
      obj.instruments = message.instruments.map(e => (e ? InfoInstrument.toJSON(e) : undefined));
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeInfoRequest>): SubscribeInfoRequest {
    const message = createBaseSubscribeInfoRequest();
    message.subscriptionAction = object.subscriptionAction ?? 0;
    message.instruments = object.instruments?.map(e => InfoInstrument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInfoInstrument(): InfoInstrument {
  return { figi: '' };
}

export const InfoInstrument = {
  encode(message: InfoInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfoInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InfoInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
    };
  },

  toJSON(message: InfoInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    return obj;
  },

  fromPartial(object: DeepPartial<InfoInstrument>): InfoInstrument {
    const message = createBaseInfoInstrument();
    message.figi = object.figi ?? '';
    return message;
  },
};

function createBaseSubscribeInfoResponse(): SubscribeInfoResponse {
  return { trackingId: '', infoSubscriptions: [] };
}

export const SubscribeInfoResponse = {
  encode(message: SubscribeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== '') {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.infoSubscriptions) {
      InfoSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.infoSubscriptions.push(InfoSubscription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeInfoResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
      infoSubscriptions: Array.isArray(object?.infoSubscriptions)
        ? object.infoSubscriptions.map((e: any) => InfoSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeInfoResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.infoSubscriptions) {
      obj.infoSubscriptions = message.infoSubscriptions.map(e => (e ? InfoSubscription.toJSON(e) : undefined));
    } else {
      obj.infoSubscriptions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeInfoResponse>): SubscribeInfoResponse {
    const message = createBaseSubscribeInfoResponse();
    message.trackingId = object.trackingId ?? '';
    message.infoSubscriptions = object.infoSubscriptions?.map(e => InfoSubscription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInfoSubscription(): InfoSubscription {
  return { figi: '', subscriptionStatus: 0 };
}

export const InfoSubscription = {
  encode(message: InfoSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(16).int32(message.subscriptionStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfoSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.subscriptionStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InfoSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
    };
  },

  toJSON(message: InfoSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
    return obj;
  },

  fromPartial(object: DeepPartial<InfoSubscription>): InfoSubscription {
    const message = createBaseInfoSubscription();
    message.figi = object.figi ?? '';
    message.subscriptionStatus = object.subscriptionStatus ?? 0;
    return message;
  },
};

function createBaseSubscribeLastPriceRequest(): SubscribeLastPriceRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeLastPriceRequest = {
  encode(message: SubscribeLastPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      LastPriceInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeLastPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeLastPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionAction = reader.int32() as any;
          break;
        case 2:
          message.instruments.push(LastPriceInstrument.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeLastPriceRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => LastPriceInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeLastPriceRequest): unknown {
    const obj: any = {};
    message.subscriptionAction !== undefined &&
      (obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction));
    if (message.instruments) {
      obj.instruments = message.instruments.map(e => (e ? LastPriceInstrument.toJSON(e) : undefined));
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeLastPriceRequest>): SubscribeLastPriceRequest {
    const message = createBaseSubscribeLastPriceRequest();
    message.subscriptionAction = object.subscriptionAction ?? 0;
    message.instruments = object.instruments?.map(e => LastPriceInstrument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLastPriceInstrument(): LastPriceInstrument {
  return { figi: '' };
}

export const LastPriceInstrument = {
  encode(message: LastPriceInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastPriceInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPriceInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastPriceInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
    };
  },

  toJSON(message: LastPriceInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    return obj;
  },

  fromPartial(object: DeepPartial<LastPriceInstrument>): LastPriceInstrument {
    const message = createBaseLastPriceInstrument();
    message.figi = object.figi ?? '';
    return message;
  },
};

function createBaseSubscribeLastPriceResponse(): SubscribeLastPriceResponse {
  return { trackingId: '', lastPriceSubscriptions: [] };
}

export const SubscribeLastPriceResponse = {
  encode(message: SubscribeLastPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== '') {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.lastPriceSubscriptions) {
      LastPriceSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeLastPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeLastPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackingId = reader.string();
          break;
        case 2:
          message.lastPriceSubscriptions.push(LastPriceSubscription.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeLastPriceResponse {
    return {
      trackingId: isSet(object.trackingId) ? String(object.trackingId) : '',
      lastPriceSubscriptions: Array.isArray(object?.lastPriceSubscriptions)
        ? object.lastPriceSubscriptions.map((e: any) => LastPriceSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeLastPriceResponse): unknown {
    const obj: any = {};
    message.trackingId !== undefined && (obj.trackingId = message.trackingId);
    if (message.lastPriceSubscriptions) {
      obj.lastPriceSubscriptions = message.lastPriceSubscriptions.map(e =>
        e ? LastPriceSubscription.toJSON(e) : undefined,
      );
    } else {
      obj.lastPriceSubscriptions = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeLastPriceResponse>): SubscribeLastPriceResponse {
    const message = createBaseSubscribeLastPriceResponse();
    message.trackingId = object.trackingId ?? '';
    message.lastPriceSubscriptions =
      object.lastPriceSubscriptions?.map(e => LastPriceSubscription.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLastPriceSubscription(): LastPriceSubscription {
  return { figi: '', subscriptionStatus: 0 };
}

export const LastPriceSubscription = {
  encode(message: LastPriceSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(16).int32(message.subscriptionStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastPriceSubscription {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPriceSubscription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.subscriptionStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastPriceSubscription {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
    };
  },

  toJSON(message: LastPriceSubscription): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus));
    return obj;
  },

  fromPartial(object: DeepPartial<LastPriceSubscription>): LastPriceSubscription {
    const message = createBaseLastPriceSubscription();
    message.figi = object.figi ?? '';
    message.subscriptionStatus = object.subscriptionStatus ?? 0;
    return message;
  },
};

function createBaseCandle(): Candle {
  return {
    figi: '',
    interval: 0,
    open: undefined,
    high: undefined,
    low: undefined,
    close: undefined,
    volume: 0,
    time: undefined,
    lastTradeTs: undefined,
  };
}

export const Candle = {
  encode(message: Candle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    if (message.open !== undefined) {
      Quotation.encode(message.open, writer.uint32(26).fork()).ldelim();
    }
    if (message.high !== undefined) {
      Quotation.encode(message.high, writer.uint32(34).fork()).ldelim();
    }
    if (message.low !== undefined) {
      Quotation.encode(message.low, writer.uint32(42).fork()).ldelim();
    }
    if (message.close !== undefined) {
      Quotation.encode(message.close, writer.uint32(50).fork()).ldelim();
    }
    if (message.volume !== 0) {
      writer.uint32(56).int64(message.volume);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(66).fork()).ldelim();
    }
    if (message.lastTradeTs !== undefined) {
      Timestamp.encode(toTimestamp(message.lastTradeTs), writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Candle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.interval = reader.int32() as any;
          break;
        case 3:
          message.open = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.high = Quotation.decode(reader, reader.uint32());
          break;
        case 5:
          message.low = Quotation.decode(reader, reader.uint32());
          break;
        case 6:
          message.close = Quotation.decode(reader, reader.uint32());
          break;
        case 7:
          message.volume = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.lastTradeTs = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Candle {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      interval: isSet(object.interval) ? subscriptionIntervalFromJSON(object.interval) : 0,
      open: isSet(object.open) ? Quotation.fromJSON(object.open) : undefined,
      high: isSet(object.high) ? Quotation.fromJSON(object.high) : undefined,
      low: isSet(object.low) ? Quotation.fromJSON(object.low) : undefined,
      close: isSet(object.close) ? Quotation.fromJSON(object.close) : undefined,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      lastTradeTs: isSet(object.lastTradeTs) ? fromJsonTimestamp(object.lastTradeTs) : undefined,
    };
  },

  toJSON(message: Candle): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.interval !== undefined && (obj.interval = subscriptionIntervalToJSON(message.interval));
    message.open !== undefined && (obj.open = message.open ? Quotation.toJSON(message.open) : undefined);
    message.high !== undefined && (obj.high = message.high ? Quotation.toJSON(message.high) : undefined);
    message.low !== undefined && (obj.low = message.low ? Quotation.toJSON(message.low) : undefined);
    message.close !== undefined && (obj.close = message.close ? Quotation.toJSON(message.close) : undefined);
    message.volume !== undefined && (obj.volume = Math.round(message.volume));
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.lastTradeTs !== undefined && (obj.lastTradeTs = message.lastTradeTs.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Candle>): Candle {
    const message = createBaseCandle();
    message.figi = object.figi ?? '';
    message.interval = object.interval ?? 0;
    message.open = object.open !== undefined && object.open !== null ? Quotation.fromPartial(object.open) : undefined;
    message.high = object.high !== undefined && object.high !== null ? Quotation.fromPartial(object.high) : undefined;
    message.low = object.low !== undefined && object.low !== null ? Quotation.fromPartial(object.low) : undefined;
    message.close =
      object.close !== undefined && object.close !== null ? Quotation.fromPartial(object.close) : undefined;
    message.volume = object.volume ?? 0;
    message.time = object.time ?? undefined;
    message.lastTradeTs = object.lastTradeTs ?? undefined;
    return message;
  },
};

function createBaseOrderBook(): OrderBook {
  return {
    figi: '',
    depth: 0,
    isConsistent: false,
    bids: [],
    asks: [],
    time: undefined,
    limitUp: undefined,
    limitDown: undefined,
  };
}

export const OrderBook = {
  encode(message: OrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.isConsistent === true) {
      writer.uint32(24).bool(message.isConsistent);
    }
    for (const v of message.bids) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.asks) {
      Order.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.limitUp !== undefined) {
      Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
    }
    if (message.limitDown !== undefined) {
      Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        case 3:
          message.isConsistent = reader.bool();
          break;
        case 4:
          message.bids.push(Order.decode(reader, reader.uint32()));
          break;
        case 5:
          message.asks.push(Order.decode(reader, reader.uint32()));
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.limitUp = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.limitDown = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrderBook {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      isConsistent: isSet(object.isConsistent) ? Boolean(object.isConsistent) : false,
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => Order.fromJSON(e)) : [],
      asks: Array.isArray(object?.asks) ? object.asks.map((e: any) => Order.fromJSON(e)) : [],
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      limitUp: isSet(object.limitUp) ? Quotation.fromJSON(object.limitUp) : undefined,
      limitDown: isSet(object.limitDown) ? Quotation.fromJSON(object.limitDown) : undefined,
    };
  },

  toJSON(message: OrderBook): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    message.isConsistent !== undefined && (obj.isConsistent = message.isConsistent);
    if (message.bids) {
      obj.bids = message.bids.map(e => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    if (message.asks) {
      obj.asks = message.asks.map(e => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.asks = [];
    }
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.limitUp !== undefined && (obj.limitUp = message.limitUp ? Quotation.toJSON(message.limitUp) : undefined);
    message.limitDown !== undefined &&
      (obj.limitDown = message.limitDown ? Quotation.toJSON(message.limitDown) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBook>): OrderBook {
    const message = createBaseOrderBook();
    message.figi = object.figi ?? '';
    message.depth = object.depth ?? 0;
    message.isConsistent = object.isConsistent ?? false;
    message.bids = object.bids?.map(e => Order.fromPartial(e)) || [];
    message.asks = object.asks?.map(e => Order.fromPartial(e)) || [];
    message.time = object.time ?? undefined;
    message.limitUp =
      object.limitUp !== undefined && object.limitUp !== null ? Quotation.fromPartial(object.limitUp) : undefined;
    message.limitDown =
      object.limitDown !== undefined && object.limitDown !== null ? Quotation.fromPartial(object.limitDown) : undefined;
    return message;
  },
};

function createBaseOrder(): Order {
  return { price: undefined, quantity: 0 };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 2:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  fromPartial(object: DeepPartial<Order>): Order {
    const message = createBaseOrder();
    message.price =
      object.price !== undefined && object.price !== null ? Quotation.fromPartial(object.price) : undefined;
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBaseTrade(): Trade {
  return { figi: '', direction: 0, price: undefined, quantity: 0, time: undefined };
}

export const Trade = {
  encode(message: Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.direction !== 0) {
      writer.uint32(16).int32(message.direction);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(32).int64(message.quantity);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.direction = reader.int32() as any;
          break;
        case 3:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Trade {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      direction: isSet(object.direction) ? tradeDirectionFromJSON(object.direction) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
    };
  },

  toJSON(message: Trade): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.direction !== undefined && (obj.direction = tradeDirectionToJSON(message.direction));
    message.price !== undefined && (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.time !== undefined && (obj.time = message.time.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Trade>): Trade {
    const message = createBaseTrade();
    message.figi = object.figi ?? '';
    message.direction = object.direction ?? 0;
    message.price =
      object.price !== undefined && object.price !== null ? Quotation.fromPartial(object.price) : undefined;
    message.quantity = object.quantity ?? 0;
    message.time = object.time ?? undefined;
    return message;
  },
};

function createBaseTradingStatus(): TradingStatus {
  return {
    figi: '',
    tradingStatus: 0,
    time: undefined,
    limitOrderAvailableFlag: false,
    marketOrderAvailableFlag: false,
  };
}

export const TradingStatus = {
  encode(message: TradingStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(16).int32(message.tradingStatus);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
    }
    if (message.limitOrderAvailableFlag === true) {
      writer.uint32(32).bool(message.limitOrderAvailableFlag);
    }
    if (message.marketOrderAvailableFlag === true) {
      writer.uint32(40).bool(message.marketOrderAvailableFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.tradingStatus = reader.int32() as any;
          break;
        case 3:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.limitOrderAvailableFlag = reader.bool();
          break;
        case 5:
          message.marketOrderAvailableFlag = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradingStatus {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      limitOrderAvailableFlag: isSet(object.limitOrderAvailableFlag) ? Boolean(object.limitOrderAvailableFlag) : false,
      marketOrderAvailableFlag: isSet(object.marketOrderAvailableFlag)
        ? Boolean(object.marketOrderAvailableFlag)
        : false,
    };
  },

  toJSON(message: TradingStatus): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.tradingStatus !== undefined && (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.limitOrderAvailableFlag !== undefined && (obj.limitOrderAvailableFlag = message.limitOrderAvailableFlag);
    message.marketOrderAvailableFlag !== undefined && (obj.marketOrderAvailableFlag = message.marketOrderAvailableFlag);
    return obj;
  },

  fromPartial(object: DeepPartial<TradingStatus>): TradingStatus {
    const message = createBaseTradingStatus();
    message.figi = object.figi ?? '';
    message.tradingStatus = object.tradingStatus ?? 0;
    message.time = object.time ?? undefined;
    message.limitOrderAvailableFlag = object.limitOrderAvailableFlag ?? false;
    message.marketOrderAvailableFlag = object.marketOrderAvailableFlag ?? false;
    return message;
  },
};

function createBaseGetCandlesRequest(): GetCandlesRequest {
  return { figi: '', from: undefined, to: undefined, interval: 0 };
}

export const GetCandlesRequest = {
  encode(message: GetCandlesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    if (message.interval !== 0) {
      writer.uint32(32).int32(message.interval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.interval = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCandlesRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      interval: isSet(object.interval) ? candleIntervalFromJSON(object.interval) : 0,
    };
  },

  toJSON(message: GetCandlesRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    message.interval !== undefined && (obj.interval = candleIntervalToJSON(message.interval));
    return obj;
  },

  fromPartial(object: DeepPartial<GetCandlesRequest>): GetCandlesRequest {
    const message = createBaseGetCandlesRequest();
    message.figi = object.figi ?? '';
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    message.interval = object.interval ?? 0;
    return message;
  },
};

function createBaseGetCandlesResponse(): GetCandlesResponse {
  return { candles: [] };
}

export const GetCandlesResponse = {
  encode(message: GetCandlesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.candles) {
      HistoricCandle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.candles.push(HistoricCandle.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetCandlesResponse {
    return {
      candles: Array.isArray(object?.candles) ? object.candles.map((e: any) => HistoricCandle.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetCandlesResponse): unknown {
    const obj: any = {};
    if (message.candles) {
      obj.candles = message.candles.map(e => (e ? HistoricCandle.toJSON(e) : undefined));
    } else {
      obj.candles = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetCandlesResponse>): GetCandlesResponse {
    const message = createBaseGetCandlesResponse();
    message.candles = object.candles?.map(e => HistoricCandle.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHistoricCandle(): HistoricCandle {
  return {
    open: undefined,
    high: undefined,
    low: undefined,
    close: undefined,
    volume: 0,
    time: undefined,
    isComplete: false,
  };
}

export const HistoricCandle = {
  encode(message: HistoricCandle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.open !== undefined) {
      Quotation.encode(message.open, writer.uint32(10).fork()).ldelim();
    }
    if (message.high !== undefined) {
      Quotation.encode(message.high, writer.uint32(18).fork()).ldelim();
    }
    if (message.low !== undefined) {
      Quotation.encode(message.low, writer.uint32(26).fork()).ldelim();
    }
    if (message.close !== undefined) {
      Quotation.encode(message.close, writer.uint32(34).fork()).ldelim();
    }
    if (message.volume !== 0) {
      writer.uint32(40).int64(message.volume);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.isComplete === true) {
      writer.uint32(56).bool(message.isComplete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricCandle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricCandle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.open = Quotation.decode(reader, reader.uint32());
          break;
        case 2:
          message.high = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.low = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.close = Quotation.decode(reader, reader.uint32());
          break;
        case 5:
          message.volume = longToNumber(reader.int64() as Long);
          break;
        case 6:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.isComplete = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricCandle {
    return {
      open: isSet(object.open) ? Quotation.fromJSON(object.open) : undefined,
      high: isSet(object.high) ? Quotation.fromJSON(object.high) : undefined,
      low: isSet(object.low) ? Quotation.fromJSON(object.low) : undefined,
      close: isSet(object.close) ? Quotation.fromJSON(object.close) : undefined,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      isComplete: isSet(object.isComplete) ? Boolean(object.isComplete) : false,
    };
  },

  toJSON(message: HistoricCandle): unknown {
    const obj: any = {};
    message.open !== undefined && (obj.open = message.open ? Quotation.toJSON(message.open) : undefined);
    message.high !== undefined && (obj.high = message.high ? Quotation.toJSON(message.high) : undefined);
    message.low !== undefined && (obj.low = message.low ? Quotation.toJSON(message.low) : undefined);
    message.close !== undefined && (obj.close = message.close ? Quotation.toJSON(message.close) : undefined);
    message.volume !== undefined && (obj.volume = Math.round(message.volume));
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.isComplete !== undefined && (obj.isComplete = message.isComplete);
    return obj;
  },

  fromPartial(object: DeepPartial<HistoricCandle>): HistoricCandle {
    const message = createBaseHistoricCandle();
    message.open = object.open !== undefined && object.open !== null ? Quotation.fromPartial(object.open) : undefined;
    message.high = object.high !== undefined && object.high !== null ? Quotation.fromPartial(object.high) : undefined;
    message.low = object.low !== undefined && object.low !== null ? Quotation.fromPartial(object.low) : undefined;
    message.close =
      object.close !== undefined && object.close !== null ? Quotation.fromPartial(object.close) : undefined;
    message.volume = object.volume ?? 0;
    message.time = object.time ?? undefined;
    message.isComplete = object.isComplete ?? false;
    return message;
  },
};

function createBaseGetLastPricesRequest(): GetLastPricesRequest {
  return { figi: [] };
}

export const GetLastPricesRequest = {
  encode(message: GetLastPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.figi) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLastPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastPricesRequest {
    return {
      figi: Array.isArray(object?.figi) ? object.figi.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: GetLastPricesRequest): unknown {
    const obj: any = {};
    if (message.figi) {
      obj.figi = message.figi.map(e => e);
    } else {
      obj.figi = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetLastPricesRequest>): GetLastPricesRequest {
    const message = createBaseGetLastPricesRequest();
    message.figi = object.figi?.map(e => e) || [];
    return message;
  },
};

function createBaseGetLastPricesResponse(): GetLastPricesResponse {
  return { lastPrices: [] };
}

export const GetLastPricesResponse = {
  encode(message: GetLastPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lastPrices) {
      LastPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLastPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastPrices.push(LastPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastPricesResponse {
    return {
      lastPrices: Array.isArray(object?.lastPrices) ? object.lastPrices.map((e: any) => LastPrice.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetLastPricesResponse): unknown {
    const obj: any = {};
    if (message.lastPrices) {
      obj.lastPrices = message.lastPrices.map(e => (e ? LastPrice.toJSON(e) : undefined));
    } else {
      obj.lastPrices = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetLastPricesResponse>): GetLastPricesResponse {
    const message = createBaseGetLastPricesResponse();
    message.lastPrices = object.lastPrices?.map(e => LastPrice.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLastPrice(): LastPrice {
  return { figi: '', price: undefined, time: undefined };
}

export const LastPrice = {
  encode(message: LastPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastPrice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastPrice {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
    };
  },

  toJSON(message: LastPrice): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.price !== undefined && (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.time !== undefined && (obj.time = message.time.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<LastPrice>): LastPrice {
    const message = createBaseLastPrice();
    message.figi = object.figi ?? '';
    message.price =
      object.price !== undefined && object.price !== null ? Quotation.fromPartial(object.price) : undefined;
    message.time = object.time ?? undefined;
    return message;
  },
};

function createBaseGetOrderBookRequest(): GetOrderBookRequest {
  return { figi: '', depth: 0 };
}

export const GetOrderBookRequest = {
  encode(message: GetOrderBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOrderBookRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      depth: isSet(object.depth) ? Number(object.depth) : 0,
    };
  },

  toJSON(message: GetOrderBookRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    return obj;
  },

  fromPartial(object: DeepPartial<GetOrderBookRequest>): GetOrderBookRequest {
    const message = createBaseGetOrderBookRequest();
    message.figi = object.figi ?? '';
    message.depth = object.depth ?? 0;
    return message;
  },
};

function createBaseGetOrderBookResponse(): GetOrderBookResponse {
  return {
    figi: '',
    depth: 0,
    bids: [],
    asks: [],
    lastPrice: undefined,
    closePrice: undefined,
    limitUp: undefined,
    limitDown: undefined,
  };
}

export const GetOrderBookResponse = {
  encode(message: GetOrderBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    for (const v of message.bids) {
      Order.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.asks) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastPrice !== undefined) {
      Quotation.encode(message.lastPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.closePrice !== undefined) {
      Quotation.encode(message.closePrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.limitUp !== undefined) {
      Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
    }
    if (message.limitDown !== undefined) {
      Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.depth = reader.int32();
          break;
        case 3:
          message.bids.push(Order.decode(reader, reader.uint32()));
          break;
        case 4:
          message.asks.push(Order.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lastPrice = Quotation.decode(reader, reader.uint32());
          break;
        case 6:
          message.closePrice = Quotation.decode(reader, reader.uint32());
          break;
        case 7:
          message.limitUp = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.limitDown = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOrderBookResponse {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => Order.fromJSON(e)) : [],
      asks: Array.isArray(object?.asks) ? object.asks.map((e: any) => Order.fromJSON(e)) : [],
      lastPrice: isSet(object.lastPrice) ? Quotation.fromJSON(object.lastPrice) : undefined,
      closePrice: isSet(object.closePrice) ? Quotation.fromJSON(object.closePrice) : undefined,
      limitUp: isSet(object.limitUp) ? Quotation.fromJSON(object.limitUp) : undefined,
      limitDown: isSet(object.limitDown) ? Quotation.fromJSON(object.limitDown) : undefined,
    };
  },

  toJSON(message: GetOrderBookResponse): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.depth !== undefined && (obj.depth = Math.round(message.depth));
    if (message.bids) {
      obj.bids = message.bids.map(e => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.bids = [];
    }
    if (message.asks) {
      obj.asks = message.asks.map(e => (e ? Order.toJSON(e) : undefined));
    } else {
      obj.asks = [];
    }
    message.lastPrice !== undefined &&
      (obj.lastPrice = message.lastPrice ? Quotation.toJSON(message.lastPrice) : undefined);
    message.closePrice !== undefined &&
      (obj.closePrice = message.closePrice ? Quotation.toJSON(message.closePrice) : undefined);
    message.limitUp !== undefined && (obj.limitUp = message.limitUp ? Quotation.toJSON(message.limitUp) : undefined);
    message.limitDown !== undefined &&
      (obj.limitDown = message.limitDown ? Quotation.toJSON(message.limitDown) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetOrderBookResponse>): GetOrderBookResponse {
    const message = createBaseGetOrderBookResponse();
    message.figi = object.figi ?? '';
    message.depth = object.depth ?? 0;
    message.bids = object.bids?.map(e => Order.fromPartial(e)) || [];
    message.asks = object.asks?.map(e => Order.fromPartial(e)) || [];
    message.lastPrice =
      object.lastPrice !== undefined && object.lastPrice !== null ? Quotation.fromPartial(object.lastPrice) : undefined;
    message.closePrice =
      object.closePrice !== undefined && object.closePrice !== null
        ? Quotation.fromPartial(object.closePrice)
        : undefined;
    message.limitUp =
      object.limitUp !== undefined && object.limitUp !== null ? Quotation.fromPartial(object.limitUp) : undefined;
    message.limitDown =
      object.limitDown !== undefined && object.limitDown !== null ? Quotation.fromPartial(object.limitDown) : undefined;
    return message;
  },
};

function createBaseGetTradingStatusRequest(): GetTradingStatusRequest {
  return { figi: '' };
}

export const GetTradingStatusRequest = {
  encode(message: GetTradingStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTradingStatusRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
    };
  },

  toJSON(message: GetTradingStatusRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTradingStatusRequest>): GetTradingStatusRequest {
    const message = createBaseGetTradingStatusRequest();
    message.figi = object.figi ?? '';
    return message;
  },
};

function createBaseGetTradingStatusResponse(): GetTradingStatusResponse {
  return { figi: '', tradingStatus: 0, limitOrderAvailableFlag: false, marketOrderAvailableFlag: false };
}

export const GetTradingStatusResponse = {
  encode(message: GetTradingStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(16).int32(message.tradingStatus);
    }
    if (message.limitOrderAvailableFlag === true) {
      writer.uint32(24).bool(message.limitOrderAvailableFlag);
    }
    if (message.marketOrderAvailableFlag === true) {
      writer.uint32(32).bool(message.marketOrderAvailableFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.tradingStatus = reader.int32() as any;
          break;
        case 3:
          message.limitOrderAvailableFlag = reader.bool();
          break;
        case 4:
          message.marketOrderAvailableFlag = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetTradingStatusResponse {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      limitOrderAvailableFlag: isSet(object.limitOrderAvailableFlag) ? Boolean(object.limitOrderAvailableFlag) : false,
      marketOrderAvailableFlag: isSet(object.marketOrderAvailableFlag)
        ? Boolean(object.marketOrderAvailableFlag)
        : false,
    };
  },

  toJSON(message: GetTradingStatusResponse): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.tradingStatus !== undefined && (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.limitOrderAvailableFlag !== undefined && (obj.limitOrderAvailableFlag = message.limitOrderAvailableFlag);
    message.marketOrderAvailableFlag !== undefined && (obj.marketOrderAvailableFlag = message.marketOrderAvailableFlag);
    return obj;
  },

  fromPartial(object: DeepPartial<GetTradingStatusResponse>): GetTradingStatusResponse {
    const message = createBaseGetTradingStatusResponse();
    message.figi = object.figi ?? '';
    message.tradingStatus = object.tradingStatus ?? 0;
    message.limitOrderAvailableFlag = object.limitOrderAvailableFlag ?? false;
    message.marketOrderAvailableFlag = object.marketOrderAvailableFlag ?? false;
    return message;
  },
};

function createBaseGetLastTradesRequest(): GetLastTradesRequest {
  return { figi: '', from: undefined, to: undefined };
}

export const GetLastTradesRequest = {
  encode(message: GetLastTradesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== '') {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLastTradesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastTradesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastTradesRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : '',
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GetLastTradesRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<GetLastTradesRequest>): GetLastTradesRequest {
    const message = createBaseGetLastTradesRequest();
    message.figi = object.figi ?? '';
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    return message;
  },
};

function createBaseGetLastTradesResponse(): GetLastTradesResponse {
  return { trades: [] };
}

export const GetLastTradesResponse = {
  encode(message: GetLastTradesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLastTradesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetLastTradesResponse {
    return {
      trades: Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetLastTradesResponse): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map(e => (e ? Trade.toJSON(e) : undefined));
    } else {
      obj.trades = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetLastTradesResponse>): GetLastTradesResponse {
    const message = createBaseGetLastTradesResponse();
    message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
    return message;
  },
};

/** Сервис получения биржевой информации:</br> **1**. свечи;</br> **2**. стаканы;</br> **3**. торговые статусы;</br> **4**. лента сделок. */
export const MarketDataServiceDefinition = {
  name: 'MarketDataService',
  fullName: 'tinkoff.public.invest.api.contract.v1.MarketDataService',
  methods: {
    /** Метод запроса исторических свечей по инструменту. */
    getCandles: {
      name: 'GetCandles',
      requestType: GetCandlesRequest,
      requestStream: false,
      responseType: GetCandlesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод запроса последних цен по инструментам. */
    getLastPrices: {
      name: 'GetLastPrices',
      requestType: GetLastPricesRequest,
      requestStream: false,
      responseType: GetLastPricesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения стакана по инструменту. */
    getOrderBook: {
      name: 'GetOrderBook',
      requestType: GetOrderBookRequest,
      requestStream: false,
      responseType: GetOrderBookResponse,
      responseStream: false,
      options: {},
    },
    /** Метод запроса статуса торгов по инструментам. */
    getTradingStatus: {
      name: 'GetTradingStatus',
      requestType: GetTradingStatusRequest,
      requestStream: false,
      responseType: GetTradingStatusResponse,
      responseStream: false,
      options: {},
    },
    /** Метод запроса последних обезличенных сделок по инструменту. */
    getLastTrades: {
      name: 'GetLastTrades',
      requestType: GetLastTradesRequest,
      requestStream: false,
      responseType: GetLastTradesResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export const MarketDataStreamServiceDefinition = {
  name: 'MarketDataStreamService',
  fullName: 'tinkoff.public.invest.api.contract.v1.MarketDataStreamService',
  methods: {
    /** Bi-directional стрим предоставления биржевой информации. */
    marketDataStream: {
      name: 'MarketDataStream',
      requestType: MarketDataRequest,
      requestStream: true,
      responseType: MarketDataResponse,
      responseStream: true,
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
