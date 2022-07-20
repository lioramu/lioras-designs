import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const product = new Schema({
  img: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

const Product = mongoose.model('Collection', product);

export default Product;
