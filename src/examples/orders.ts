import { createSdk } from '../sdk';
import { OrderDirection, OrderType } from '../generated/orders';

!(async function example() {
  const { orders } = createSdk('YOUR_TOKEN');

  //==============================================================================================================
  const ordersResponse = await orders.getOrders({
    accountId: '1234567890',
  });

  console.log('Получение списка активных заявок по счёту: ', ordersResponse);
  //==============================================================================================================

  //==============================================================================================================
  const setOrder = await orders.postOrder({
    accountId: '1234567890',
    figi: 'BBG006L8G4H1',
    quantity: 1,
    price: { units: 4400, nano: 0 },
    direction: OrderDirection.ORDER_DIRECTION_BUY,
    orderType: OrderType.ORDER_TYPE_LIMIT,
    orderId: 'fhsdaf-dsfjasjfd-d',
  });

  console.log('Выставление заявки: ', setOrder);
  //==============================================================================================================

  //==============================================================================================================
  const orderState = await orders.getOrderState({
    accountId: '1234567890',
    orderId: 'fhsdaf-dsfjasjfd-d',
  });

  console.log('Получение статуса торгового поручения: ', orderState);
  //==============================================================================================================

  //==============================================================================================================
  const cancelOrder = await orders.cancelOrder({
    accountId: '1234567890',
    orderId: 'fhsdaf-dsfjasjfd-d',
  });

  console.log('Отмена биржевой заявки: ', cancelOrder);
  //==============================================================================================================
})();
