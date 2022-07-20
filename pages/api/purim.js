import connectDB from '../../middleware/mongodb';
import Product from '../../models/product';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const collection = await Product.find({category: "purimCollection"});
      res.status(200).json(collection);
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
