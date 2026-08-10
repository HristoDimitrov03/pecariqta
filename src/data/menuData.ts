export type MenuItem = {
  name: string;
  price: string;
  size?: string;
  popular?: boolean;
};

export const CATEGORY_SIZE: Record<string, string> = {
  Пица: '30 см',
};

export const MENU_DATA: Record<string, MenuItem[]> = {
  'Пица': [
    { name: 'Карне', price: '9,20 € (17,99 лв.)', popular: true },
    { name: 'Чоризо', price: '8,44 € (16,51 лв.)', popular: true },
    { name: 'Чоризо Хот', price: '8,95 € (17,50 лв.)' },
    { name: 'Крудо', price: '9,20 € (17,99 лв.)' },
    { name: 'Формаджи', price: '8,95 € (17,50 лв.)' },
    { name: 'Hot Honey', price: '9,20 € (17,99 лв.)' },
    { name: 'Маргарита', price: '7,79 € (15,24 лв.)' },
    { name: 'Маргарита класик', price: '6,89 € (13,48 лв.)', popular: true },
    { name: 'Мортадела', price: '9,20 € (17,99 лв.)' },
    { name: 'Not Carbonara', price: '8,44 € (16,51 лв.)' },
    { name: 'Пеперони', price: '8,44 € (16,51 лв.)', popular: true },
    { name: 'Песто', price: '8,95 € (17,50 лв.)', popular: true },
    { name: 'Сотачети', price: '8,18 € (16,00 лв.)' },
    { name: 'Вегетариана', price: '8,44 € (16,51 лв.)' },
    { name: 'Бяло пиле', price: '8,18 € (16,00 лв.)' },
  ],
  'Сандвичи': [
    { name: 'Сандвич Кото', price: '7,67 € (15,00 лв.)' },
    { name: 'Сандвич Крудо', price: '7,93 € (15,51 лв.)' },
    { name: 'Сандвич Мортадела', price: '7,67 € (15,00 лв.)' },
    { name: 'Сандвич Песто', price: '7,40 € (14,47 лв.)' },
  ],
};
