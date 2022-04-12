import { createSdk } from '../sdk';

!(async function example() {
  const { users } = createSdk('YOUR_TOKEN');
  const userInfo = await users.getInfo({});
  const accounts = await users.getAccounts({});
  const tarrif = await users.getUserTariff({});
  const marginAttr = await users.getMarginAttributes({ accountId: '1234567890' });

  console.log('Информация о пользователе:', userInfo);
  console.log('Информация о счетах:', accounts);
  console.log('Информация о тарифе пользователя:', tarrif);
  console.log('Данные маржинальных показателей по счёту', marginAttr);
})();
