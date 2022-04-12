import { createSdk } from '../sdk';

!(async function example() {
  const { stopOrders } = createSdk('YOUR_TOKEN');

  //==============================================================================================================
  const stopOrderResponse = await stopOrders.getStopOrders({ accountId: '1234567890' });

  console.log('Получение списка активных стоп заявок по счёту: ', stopOrderResponse);
  //==============================================================================================================

  //==============================================================================================================
  const cancelStopOrder = await stopOrders.cancelStopOrder({
    accountId: '1234567890',
    stopOrderId: 'f7eef8b3-5f6a-4844-84d6-a4e6ffb70f8e',
  });

  console.log('Отмена стоп-заявки: ', cancelStopOrder);
  //==============================================================================================================

  //==============================================================================================================
  const setStopOrder = await stopOrders.postStopOrder({
    accountId: '1234567890',
    figi: 'BBG006L8G4H1',
    quantity: 1,
    price: { units: 4500, nano: 100000000 },
    stopPrice: undefined,
    direction: 0,
    expirationType: 0,
    stopOrderType: 0,
    expireDate: undefined,
  });

  console.log('Выставление стоп-заявки: ', setStopOrder);
  //==============================================================================================================
})();
