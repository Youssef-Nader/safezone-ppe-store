import productsData from './data/products.json';

test('the product catalog includes all PPE categories and products', () => {
  expect(productsData.categories).toHaveLength(6);
  expect(productsData.categories.flatMap((category) => category.products)).toHaveLength(36);
});
