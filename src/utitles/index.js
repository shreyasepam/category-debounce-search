export const Conifg = {
  url: 'https://dummyjson.com/products?limit=100&skip=10&select=id,title,thumbnail,price,category',
};

export const groupedByCategory = (data) => {
  return data.reduce((acc, item) => {
    const { id, title, thumbnail, price, category } = item;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push({ id, title, thumbnail, price });
    return acc;
  }, {});
};
