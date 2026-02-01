import productModel from "../schema/Product.model";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = productModel;
  }
}

export default ProductService;
