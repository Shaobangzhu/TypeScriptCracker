import OrderDetail from "./orderDetail";

class Order {
    public orderId: number = 0;
    public date: Date = new Date();
    public customerName: string = "nocustomer";
    public phone: string = "1234567891";
    public orderDetails: Array<OrderDetail> = []; 

    constructor(_orderId: number, _date: Date, _customerName: string, _phone: string, _orderDetails: Array<OrderDetail>) {
        this.orderId = _orderId;
        this.date = _date;
        this.customerName = _customerName;
        this.phone = _phone;
        this.orderDetails = _orderDetails;
    }
}

let orderDetailOne = new OrderDetail(10, "switch", 300, 3);
let orderDetailTwo = new OrderDetail(11, "tv", 280, 2);
let orderDetailArr: Array<OrderDetail> = [orderDetailOne, orderDetailTwo];
const orderDate = new Date(2025, 1, 14, 5, 6, 0);
let order = new Order(1, orderDate, "clu", "123456789", orderDetailArr);

console.log(order);