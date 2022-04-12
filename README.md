# НЕОФИЦИАЛЬНОЕ Tinkoff Invest APIv2 - Typescript NodeJS SDK

## Документация

Доступна по [ссылке](https://tinkoff.github.io/investAPI/)

## Пример

Примеры для каждого метода есть в папке [examples](./src/examples)

```typescript
import { createSdk } from '../sdk';
import { CandleInterval } from '../generated/marketdata';

!(async function example() {
   const { marketData } = createSdk('YOUR_TOKEN');
   
   const candles = await marketData.getCandles({
      figi: 'BBG0047315Y7',
      from: new Date('2022-04-04T11:00:00Z'),
      to: new Date('2022-04-04T11:20:59Z'),
      interval: CandleInterval.CANDLE_INTERVAL_5_MIN,
   });
   
   const lastPrice = await marketData.getLastPrices({
      figi: ['BBG0047315Y7'],
   });

   const orderBook = await marketData.getOrderBook({
      figi: 'BBG0047315Y7',
      depth: 5,
   });

   const tradingStatus = await marketData.getTradingStatus({
      figi: 'BBG0047315Y7',
   });

   console.log('Запрос исторических свечей по инструменту: ', candles);
   console.log('Запрос последних цен по инструментам: ', lastPrice);
   console.log('Получение стакана по инструменту: ', orderBook);
   console.log('Запрос статуса торгов по инструментам: ', tradingStatus);
})();
```

## Sandbox

Для использования _Sandbox_ необходимо передать токен для песочницы.

## Преимущества

- Написано на _Typescript_ для Typescript
- Используются Promise и Async Generators
- Логирование и обработка ошибок с подробным описанием
- Автоматическая генерация proto-файлов
- Возможность добавлять свои middleware для работы с данными перед отправкой или после. (Пока только через Pull Request)
```typescript
type CallOptions = {
  /**
   * Request metadata.
   */
  metadata?: Metadata;
  /**
   * Signal that cancels the call once aborted.
   */
  signal?: AbortSignal;
  /**
   * Called when header is received.
   */
  onHeader?(header: Metadata): void;
  /**
   * Called when trailer is received.
   */
  onTrailer?(trailer: Metadata): void;
};
```
## Сообщество

[Telegram-чат](https://t.me/joinchat/VaW05CDzcSdsPULM)
