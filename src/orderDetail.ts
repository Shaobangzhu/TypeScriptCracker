export default class OrderDetail {
    public orderDetailId: number = 0;
    public productName: string = "noproduct";
    public price: number = 0;
    public count: number = 0;

    constructor(_orderDetailId: number, _productName: string, _price: number, _count: number) {
        this.orderDetailId = _orderDetailId;
        this.productName = _productName;
        this.price = _price;
        this.count = _count;
    }
}