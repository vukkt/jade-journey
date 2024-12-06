const { Merchant, Product, Variant } = require('/models');

const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
    merchants: async () => {
      try {
        const merchants = await Merchant.findAll();
        return merchants;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch merchants');
      }
    },
  },
  Merchant: {
    products: async (parent) => {
      try {
        const products = await Product.findAll({ where: { merchantId: parent.id } });
        return products;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch products for merchant');
      }
    },
  },
  Product: {
    merchant: async (parent) => {
      try {
        const merchant = await Merchant.findByPk(parent.merchantId);
        return merchant;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch merchant for product');
      }
    },
    variants: async (parent) => {
      try {
        const variants = await Variant.findAll({ where: { productId: parent.id } });
        return variants;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch variants for product');
      }
    },
  },
  Variant: {
    product: async (parent) => {
      try {
        const product = await Product.findByPk(parent.productId);
        return product;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch product for variant');
      }
    },
  },
  // Add other resolvers as needed
};

module.exports = resolvers;
