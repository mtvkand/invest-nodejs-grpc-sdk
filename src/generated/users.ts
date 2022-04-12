/* eslint-disable */
//@ts-ignore
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Timestamp } from './google/protobuf/timestamp';
import { MoneyValue, Quotation } from './common';

export const protobufPackage = 'tinkoff.public.invest.api.contract.v1';

/** Тип счёта. */
export enum AccountType {
  /** ACCOUNT_TYPE_UNSPECIFIED - Тип аккаунта не определён. */
  ACCOUNT_TYPE_UNSPECIFIED = 0,
  /** ACCOUNT_TYPE_TINKOFF - Брокерский счёт Тинькофф. */
  ACCOUNT_TYPE_TINKOFF = 1,
  /** ACCOUNT_TYPE_TINKOFF_IIS - ИИС счёт. */
  ACCOUNT_TYPE_TINKOFF_IIS = 2,
  /** ACCOUNT_TYPE_INVEST_BOX - Инвесткопилка. */
  ACCOUNT_TYPE_INVEST_BOX = 3,
  UNRECOGNIZED = -1,
}

export function accountTypeFromJSON(object: any): AccountType {
  switch (object) {
    case 0:
    case 'ACCOUNT_TYPE_UNSPECIFIED':
      return AccountType.ACCOUNT_TYPE_UNSPECIFIED;
    case 1:
    case 'ACCOUNT_TYPE_TINKOFF':
      return AccountType.ACCOUNT_TYPE_TINKOFF;
    case 2:
    case 'ACCOUNT_TYPE_TINKOFF_IIS':
      return AccountType.ACCOUNT_TYPE_TINKOFF_IIS;
    case 3:
    case 'ACCOUNT_TYPE_INVEST_BOX':
      return AccountType.ACCOUNT_TYPE_INVEST_BOX;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AccountType.UNRECOGNIZED;
  }
}

export function accountTypeToJSON(object: AccountType): string {
  switch (object) {
    case AccountType.ACCOUNT_TYPE_UNSPECIFIED:
      return 'ACCOUNT_TYPE_UNSPECIFIED';
    case AccountType.ACCOUNT_TYPE_TINKOFF:
      return 'ACCOUNT_TYPE_TINKOFF';
    case AccountType.ACCOUNT_TYPE_TINKOFF_IIS:
      return 'ACCOUNT_TYPE_TINKOFF_IIS';
    case AccountType.ACCOUNT_TYPE_INVEST_BOX:
      return 'ACCOUNT_TYPE_INVEST_BOX';
    default:
      return 'UNKNOWN';
  }
}

/** Статус счёта. */
export enum AccountStatus {
  /** ACCOUNT_STATUS_UNSPECIFIED - Статус счёта не определён. */
  ACCOUNT_STATUS_UNSPECIFIED = 0,
  /** ACCOUNT_STATUS_NEW - Новый, в процессе открытия. */
  ACCOUNT_STATUS_NEW = 1,
  /** ACCOUNT_STATUS_OPEN - Открытый и активный счёт. */
  ACCOUNT_STATUS_OPEN = 2,
  /** ACCOUNT_STATUS_CLOSED - Закрытый счёт. */
  ACCOUNT_STATUS_CLOSED = 3,
  UNRECOGNIZED = -1,
}

export function accountStatusFromJSON(object: any): AccountStatus {
  switch (object) {
    case 0:
    case 'ACCOUNT_STATUS_UNSPECIFIED':
      return AccountStatus.ACCOUNT_STATUS_UNSPECIFIED;
    case 1:
    case 'ACCOUNT_STATUS_NEW':
      return AccountStatus.ACCOUNT_STATUS_NEW;
    case 2:
    case 'ACCOUNT_STATUS_OPEN':
      return AccountStatus.ACCOUNT_STATUS_OPEN;
    case 3:
    case 'ACCOUNT_STATUS_CLOSED':
      return AccountStatus.ACCOUNT_STATUS_CLOSED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AccountStatus.UNRECOGNIZED;
  }
}

export function accountStatusToJSON(object: AccountStatus): string {
  switch (object) {
    case AccountStatus.ACCOUNT_STATUS_UNSPECIFIED:
      return 'ACCOUNT_STATUS_UNSPECIFIED';
    case AccountStatus.ACCOUNT_STATUS_NEW:
      return 'ACCOUNT_STATUS_NEW';
    case AccountStatus.ACCOUNT_STATUS_OPEN:
      return 'ACCOUNT_STATUS_OPEN';
    case AccountStatus.ACCOUNT_STATUS_CLOSED:
      return 'ACCOUNT_STATUS_CLOSED';
    default:
      return 'UNKNOWN';
  }
}

/** Уровень доступа к счёту. */
export enum AccessLevel {
  /** ACCOUNT_ACCESS_LEVEL_UNSPECIFIED - Уровень доступа не определён. */
  ACCOUNT_ACCESS_LEVEL_UNSPECIFIED = 0,
  /** ACCOUNT_ACCESS_LEVEL_FULL_ACCESS - Полный доступ к счёту. */
  ACCOUNT_ACCESS_LEVEL_FULL_ACCESS = 1,
  /** ACCOUNT_ACCESS_LEVEL_READ_ONLY - Доступ с уровнем прав "только чтение". */
  ACCOUNT_ACCESS_LEVEL_READ_ONLY = 2,
  /** ACCOUNT_ACCESS_LEVEL_NO_ACCESS - Доступ отсутствует. */
  ACCOUNT_ACCESS_LEVEL_NO_ACCESS = 3,
  UNRECOGNIZED = -1,
}

export function accessLevelFromJSON(object: any): AccessLevel {
  switch (object) {
    case 0:
    case 'ACCOUNT_ACCESS_LEVEL_UNSPECIFIED':
      return AccessLevel.ACCOUNT_ACCESS_LEVEL_UNSPECIFIED;
    case 1:
    case 'ACCOUNT_ACCESS_LEVEL_FULL_ACCESS':
      return AccessLevel.ACCOUNT_ACCESS_LEVEL_FULL_ACCESS;
    case 2:
    case 'ACCOUNT_ACCESS_LEVEL_READ_ONLY':
      return AccessLevel.ACCOUNT_ACCESS_LEVEL_READ_ONLY;
    case 3:
    case 'ACCOUNT_ACCESS_LEVEL_NO_ACCESS':
      return AccessLevel.ACCOUNT_ACCESS_LEVEL_NO_ACCESS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return AccessLevel.UNRECOGNIZED;
  }
}

export function accessLevelToJSON(object: AccessLevel): string {
  switch (object) {
    case AccessLevel.ACCOUNT_ACCESS_LEVEL_UNSPECIFIED:
      return 'ACCOUNT_ACCESS_LEVEL_UNSPECIFIED';
    case AccessLevel.ACCOUNT_ACCESS_LEVEL_FULL_ACCESS:
      return 'ACCOUNT_ACCESS_LEVEL_FULL_ACCESS';
    case AccessLevel.ACCOUNT_ACCESS_LEVEL_READ_ONLY:
      return 'ACCOUNT_ACCESS_LEVEL_READ_ONLY';
    case AccessLevel.ACCOUNT_ACCESS_LEVEL_NO_ACCESS:
      return 'ACCOUNT_ACCESS_LEVEL_NO_ACCESS';
    default:
      return 'UNKNOWN';
  }
}

/** Запрос получения счетов пользователя. */
export interface GetAccountsRequest {}

/** Список счетов пользователя. */
export interface GetAccountsResponse {
  /** Массив счетов клиента. */
  accounts: Account[];
}

/** Информация о счёте. */
export interface Account {
  /** Идентификатор счёта. */
  id: string;
  /** Тип счёта. */
  type: AccountType;
  /** Название счёта. */
  name: string;
  /** Статус счёта. */
  status: AccountStatus;
  /** Дата открытия счёта в часовом поясе UTC. */
  openedDate: Date | undefined;
  /** Дата закрытия счёта в часовом поясе UTC. */
  closedDate: Date | undefined;
  /** Уровень доступа к текущему счёту (определяется токеном). */
  accessLevel: AccessLevel;
}

/** Запрос маржинальных показателей по счёту */
export interface GetMarginAttributesRequest {
  /** Идентификатор счёта пользователя. */
  accountId: string;
}

/** Маржинальные показатели по счёту. */
export interface GetMarginAttributesResponse {
  /** Ликвидная стоимость портфеля. Подробнее: [что такое ликвидный портфель?](https://help.tinkoff.ru/margin-trade/short/liquid-portfolio/). */
  liquidPortfolio: MoneyValue | undefined;
  /** Начальная маржа — начальное обеспечение для совершения новой сделки. Подробнее: [начальная и минимальная маржа](https://help.tinkoff.ru/margin-trade/short/initial-and-maintenance-margin/). */
  startingMargin: MoneyValue | undefined;
  /** Минимальная маржа — это минимальное обеспечение для поддержания позиции, которую вы уже открыли. Подробнее: [начальная и минимальная маржа](https://help.tinkoff.ru/margin-trade/short/initial-and-maintenance-margin/). */
  minimalMargin: MoneyValue | undefined;
  /** Уровень достаточности средств. Соотношение стоимости ликвидного портфеля к начальной марже. */
  fundsSufficiencyLevel: Quotation | undefined;
  /** Объем недостающих средств. Разница между стартовой маржой и ликвидной стоимости портфеля. */
  amountOfMissingFunds: MoneyValue | undefined;
}

/** Запрос текущих лимитов пользователя. */
export interface GetUserTariffRequest {}

/** Текущие лимиты пользователя. */
export interface GetUserTariffResponse {
  /** Массив лимитов пользователя по unary-запросам */
  unaryLimits: UnaryLimit[];
  /** Массив лимитов пользователей для stream-соединений */
  streamLimits: StreamLimit[];
}

/** Лимит unary-методов. */
export interface UnaryLimit {
  /** Количество unary-запросов в минуту */
  limitPerMinute: number;
  /** Названия методов */
  methods: string[];
}

/** Лимит stream-соединений. */
export interface StreamLimit {
  /** Максимальное количество stream-соединений */
  limit: number;
  /** Названия stream-методов */
  streams: string[];
}

/** Запрос информации о пользователе. */
export interface GetInfoRequest {}

/** Информация о пользователе. */
export interface GetInfoResponse {
  /** Признак премиум клиента. */
  premStatus: boolean;
  /** Признак квалифицированного инвестора. */
  qualStatus: boolean;
  /** Набор требующих тестирования инструментов и возможностей, с которыми может работать пользователь. */
  qualifiedForWorkWith: string[];
  /** Наименование тарифа пользователя. */
  tariff: string;
}

function createBaseGetAccountsRequest(): GetAccountsRequest {
  return {};
}

export const GetAccountsRequest = {
  encode(_: GetAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountsRequest();
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

  fromJSON(_: any): GetAccountsRequest {
    return {};
  },

  toJSON(_: GetAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetAccountsRequest>): GetAccountsRequest {
    const message = createBaseGetAccountsRequest();
    return message;
  },
};

function createBaseGetAccountsResponse(): GetAccountsResponse {
  return { accounts: [] };
}

export const GetAccountsResponse = {
  encode(message: GetAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Account.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => (e ? Account.toJSON(e) : undefined));
    } else {
      obj.accounts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetAccountsResponse>): GetAccountsResponse {
    const message = createBaseGetAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccount(): Account {
  return { id: '', type: 0, name: '', status: 0, openedDate: undefined, closedDate: undefined, accessLevel: 0 };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== '') {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.openedDate !== undefined) {
      Timestamp.encode(toTimestamp(message.openedDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.closedDate !== undefined) {
      Timestamp.encode(toTimestamp(message.closedDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.accessLevel !== 0) {
      writer.uint32(56).int32(message.accessLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.status = reader.int32() as any;
          break;
        case 5:
          message.openedDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.closedDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.accessLevel = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      id: isSet(object.id) ? String(object.id) : '',
      type: isSet(object.type) ? accountTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? String(object.name) : '',
      status: isSet(object.status) ? accountStatusFromJSON(object.status) : 0,
      openedDate: isSet(object.openedDate) ? fromJsonTimestamp(object.openedDate) : undefined,
      closedDate: isSet(object.closedDate) ? fromJsonTimestamp(object.closedDate) : undefined,
      accessLevel: isSet(object.accessLevel) ? accessLevelFromJSON(object.accessLevel) : 0,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = accountTypeToJSON(message.type));
    message.name !== undefined && (obj.name = message.name);
    message.status !== undefined && (obj.status = accountStatusToJSON(message.status));
    message.openedDate !== undefined && (obj.openedDate = message.openedDate.toISOString());
    message.closedDate !== undefined && (obj.closedDate = message.closedDate.toISOString());
    message.accessLevel !== undefined && (obj.accessLevel = accessLevelToJSON(message.accessLevel));
    return obj;
  },

  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    message.id = object.id ?? '';
    message.type = object.type ?? 0;
    message.name = object.name ?? '';
    message.status = object.status ?? 0;
    message.openedDate = object.openedDate ?? undefined;
    message.closedDate = object.closedDate ?? undefined;
    message.accessLevel = object.accessLevel ?? 0;
    return message;
  },
};

function createBaseGetMarginAttributesRequest(): GetMarginAttributesRequest {
  return { accountId: '' };
}

export const GetMarginAttributesRequest = {
  encode(message: GetMarginAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== '') {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMarginAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMarginAttributesRequest();
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

  fromJSON(object: any): GetMarginAttributesRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : '',
    };
  },

  toJSON(message: GetMarginAttributesRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  fromPartial(object: DeepPartial<GetMarginAttributesRequest>): GetMarginAttributesRequest {
    const message = createBaseGetMarginAttributesRequest();
    message.accountId = object.accountId ?? '';
    return message;
  },
};

function createBaseGetMarginAttributesResponse(): GetMarginAttributesResponse {
  return {
    liquidPortfolio: undefined,
    startingMargin: undefined,
    minimalMargin: undefined,
    fundsSufficiencyLevel: undefined,
    amountOfMissingFunds: undefined,
  };
}

export const GetMarginAttributesResponse = {
  encode(message: GetMarginAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidPortfolio !== undefined) {
      MoneyValue.encode(message.liquidPortfolio, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingMargin !== undefined) {
      MoneyValue.encode(message.startingMargin, writer.uint32(18).fork()).ldelim();
    }
    if (message.minimalMargin !== undefined) {
      MoneyValue.encode(message.minimalMargin, writer.uint32(26).fork()).ldelim();
    }
    if (message.fundsSufficiencyLevel !== undefined) {
      Quotation.encode(message.fundsSufficiencyLevel, writer.uint32(34).fork()).ldelim();
    }
    if (message.amountOfMissingFunds !== undefined) {
      MoneyValue.encode(message.amountOfMissingFunds, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMarginAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMarginAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.liquidPortfolio = MoneyValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.startingMargin = MoneyValue.decode(reader, reader.uint32());
          break;
        case 3:
          message.minimalMargin = MoneyValue.decode(reader, reader.uint32());
          break;
        case 4:
          message.fundsSufficiencyLevel = Quotation.decode(reader, reader.uint32());
          break;
        case 5:
          message.amountOfMissingFunds = MoneyValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetMarginAttributesResponse {
    return {
      liquidPortfolio: isSet(object.liquidPortfolio) ? MoneyValue.fromJSON(object.liquidPortfolio) : undefined,
      startingMargin: isSet(object.startingMargin) ? MoneyValue.fromJSON(object.startingMargin) : undefined,
      minimalMargin: isSet(object.minimalMargin) ? MoneyValue.fromJSON(object.minimalMargin) : undefined,
      fundsSufficiencyLevel: isSet(object.fundsSufficiencyLevel)
        ? Quotation.fromJSON(object.fundsSufficiencyLevel)
        : undefined,
      amountOfMissingFunds: isSet(object.amountOfMissingFunds)
        ? MoneyValue.fromJSON(object.amountOfMissingFunds)
        : undefined,
    };
  },

  toJSON(message: GetMarginAttributesResponse): unknown {
    const obj: any = {};
    message.liquidPortfolio !== undefined &&
      (obj.liquidPortfolio = message.liquidPortfolio ? MoneyValue.toJSON(message.liquidPortfolio) : undefined);
    message.startingMargin !== undefined &&
      (obj.startingMargin = message.startingMargin ? MoneyValue.toJSON(message.startingMargin) : undefined);
    message.minimalMargin !== undefined &&
      (obj.minimalMargin = message.minimalMargin ? MoneyValue.toJSON(message.minimalMargin) : undefined);
    message.fundsSufficiencyLevel !== undefined &&
      (obj.fundsSufficiencyLevel = message.fundsSufficiencyLevel
        ? Quotation.toJSON(message.fundsSufficiencyLevel)
        : undefined);
    message.amountOfMissingFunds !== undefined &&
      (obj.amountOfMissingFunds = message.amountOfMissingFunds
        ? MoneyValue.toJSON(message.amountOfMissingFunds)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GetMarginAttributesResponse>): GetMarginAttributesResponse {
    const message = createBaseGetMarginAttributesResponse();
    message.liquidPortfolio =
      object.liquidPortfolio !== undefined && object.liquidPortfolio !== null
        ? MoneyValue.fromPartial(object.liquidPortfolio)
        : undefined;
    message.startingMargin =
      object.startingMargin !== undefined && object.startingMargin !== null
        ? MoneyValue.fromPartial(object.startingMargin)
        : undefined;
    message.minimalMargin =
      object.minimalMargin !== undefined && object.minimalMargin !== null
        ? MoneyValue.fromPartial(object.minimalMargin)
        : undefined;
    message.fundsSufficiencyLevel =
      object.fundsSufficiencyLevel !== undefined && object.fundsSufficiencyLevel !== null
        ? Quotation.fromPartial(object.fundsSufficiencyLevel)
        : undefined;
    message.amountOfMissingFunds =
      object.amountOfMissingFunds !== undefined && object.amountOfMissingFunds !== null
        ? MoneyValue.fromPartial(object.amountOfMissingFunds)
        : undefined;
    return message;
  },
};

function createBaseGetUserTariffRequest(): GetUserTariffRequest {
  return {};
}

export const GetUserTariffRequest = {
  encode(_: GetUserTariffRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserTariffRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserTariffRequest();
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

  fromJSON(_: any): GetUserTariffRequest {
    return {};
  },

  toJSON(_: GetUserTariffRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetUserTariffRequest>): GetUserTariffRequest {
    const message = createBaseGetUserTariffRequest();
    return message;
  },
};

function createBaseGetUserTariffResponse(): GetUserTariffResponse {
  return { unaryLimits: [], streamLimits: [] };
}

export const GetUserTariffResponse = {
  encode(message: GetUserTariffResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unaryLimits) {
      UnaryLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.streamLimits) {
      StreamLimit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserTariffResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserTariffResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unaryLimits.push(UnaryLimit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.streamLimits.push(StreamLimit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetUserTariffResponse {
    return {
      unaryLimits: Array.isArray(object?.unaryLimits) ? object.unaryLimits.map((e: any) => UnaryLimit.fromJSON(e)) : [],
      streamLimits: Array.isArray(object?.streamLimits)
        ? object.streamLimits.map((e: any) => StreamLimit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetUserTariffResponse): unknown {
    const obj: any = {};
    if (message.unaryLimits) {
      obj.unaryLimits = message.unaryLimits.map(e => (e ? UnaryLimit.toJSON(e) : undefined));
    } else {
      obj.unaryLimits = [];
    }
    if (message.streamLimits) {
      obj.streamLimits = message.streamLimits.map(e => (e ? StreamLimit.toJSON(e) : undefined));
    } else {
      obj.streamLimits = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetUserTariffResponse>): GetUserTariffResponse {
    const message = createBaseGetUserTariffResponse();
    message.unaryLimits = object.unaryLimits?.map(e => UnaryLimit.fromPartial(e)) || [];
    message.streamLimits = object.streamLimits?.map(e => StreamLimit.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUnaryLimit(): UnaryLimit {
  return { limitPerMinute: 0, methods: [] };
}

export const UnaryLimit = {
  encode(message: UnaryLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limitPerMinute !== 0) {
      writer.uint32(8).int32(message.limitPerMinute);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnaryLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnaryLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limitPerMinute = reader.int32();
          break;
        case 2:
          message.methods.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnaryLimit {
    return {
      limitPerMinute: isSet(object.limitPerMinute) ? Number(object.limitPerMinute) : 0,
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: UnaryLimit): unknown {
    const obj: any = {};
    message.limitPerMinute !== undefined && (obj.limitPerMinute = Math.round(message.limitPerMinute));
    if (message.methods) {
      obj.methods = message.methods.map(e => e);
    } else {
      obj.methods = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<UnaryLimit>): UnaryLimit {
    const message = createBaseUnaryLimit();
    message.limitPerMinute = object.limitPerMinute ?? 0;
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
};

function createBaseStreamLimit(): StreamLimit {
  return { limit: 0, streams: [] };
}

export const StreamLimit = {
  encode(message: StreamLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int32(message.limit);
    }
    for (const v of message.streams) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.int32();
          break;
        case 2:
          message.streams.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StreamLimit {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      streams: Array.isArray(object?.streams) ? object.streams.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: StreamLimit): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    if (message.streams) {
      obj.streams = message.streams.map(e => e);
    } else {
      obj.streams = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StreamLimit>): StreamLimit {
    const message = createBaseStreamLimit();
    message.limit = object.limit ?? 0;
    message.streams = object.streams?.map(e => e) || [];
    return message;
  },
};

function createBaseGetInfoRequest(): GetInfoRequest {
  return {};
}

export const GetInfoRequest = {
  encode(_: GetInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoRequest();
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

  fromJSON(_: any): GetInfoRequest {
    return {};
  },

  toJSON(_: GetInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetInfoRequest>): GetInfoRequest {
    const message = createBaseGetInfoRequest();
    return message;
  },
};

function createBaseGetInfoResponse(): GetInfoResponse {
  return { premStatus: false, qualStatus: false, qualifiedForWorkWith: [], tariff: '' };
}

export const GetInfoResponse = {
  encode(message: GetInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.premStatus === true) {
      writer.uint32(8).bool(message.premStatus);
    }
    if (message.qualStatus === true) {
      writer.uint32(16).bool(message.qualStatus);
    }
    for (const v of message.qualifiedForWorkWith) {
      writer.uint32(26).string(v!);
    }
    if (message.tariff !== '') {
      writer.uint32(34).string(message.tariff);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.premStatus = reader.bool();
          break;
        case 2:
          message.qualStatus = reader.bool();
          break;
        case 3:
          message.qualifiedForWorkWith.push(reader.string());
          break;
        case 4:
          message.tariff = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetInfoResponse {
    return {
      premStatus: isSet(object.premStatus) ? Boolean(object.premStatus) : false,
      qualStatus: isSet(object.qualStatus) ? Boolean(object.qualStatus) : false,
      qualifiedForWorkWith: Array.isArray(object?.qualifiedForWorkWith)
        ? object.qualifiedForWorkWith.map((e: any) => String(e))
        : [],
      tariff: isSet(object.tariff) ? String(object.tariff) : '',
    };
  },

  toJSON(message: GetInfoResponse): unknown {
    const obj: any = {};
    message.premStatus !== undefined && (obj.premStatus = message.premStatus);
    message.qualStatus !== undefined && (obj.qualStatus = message.qualStatus);
    if (message.qualifiedForWorkWith) {
      obj.qualifiedForWorkWith = message.qualifiedForWorkWith.map(e => e);
    } else {
      obj.qualifiedForWorkWith = [];
    }
    message.tariff !== undefined && (obj.tariff = message.tariff);
    return obj;
  },

  fromPartial(object: DeepPartial<GetInfoResponse>): GetInfoResponse {
    const message = createBaseGetInfoResponse();
    message.premStatus = object.premStatus ?? false;
    message.qualStatus = object.qualStatus ?? false;
    message.qualifiedForWorkWith = object.qualifiedForWorkWith?.map(e => e) || [];
    message.tariff = object.tariff ?? '';
    return message;
  },
};

/**
 * Сервис предназначен для получения: </br> **1**.
 * списка счетов пользователя; </br> **2**. маржинальных показателе по счёту.
 */
export const UsersServiceDefinition = {
  name: 'UsersService',
  fullName: 'tinkoff.public.invest.api.contract.v1.UsersService',
  methods: {
    /** Метод получения счетов пользователя. */
    getAccounts: {
      name: 'GetAccounts',
      requestType: GetAccountsRequest,
      requestStream: false,
      responseType: GetAccountsResponse,
      responseStream: false,
      options: {},
    },
    /** Расчёт маржинальных показателей по счёту. */
    getMarginAttributes: {
      name: 'GetMarginAttributes',
      requestType: GetMarginAttributesRequest,
      requestStream: false,
      responseType: GetMarginAttributesResponse,
      responseStream: false,
      options: {},
    },
    /** Запрос тарифа пользователя. */
    getUserTariff: {
      name: 'GetUserTariff',
      requestType: GetUserTariffRequest,
      requestStream: false,
      responseType: GetUserTariffResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения информации о пользователе. */
    getInfo: {
      name: 'GetInfo',
      requestType: GetInfoRequest,
      requestStream: false,
      responseType: GetInfoResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
