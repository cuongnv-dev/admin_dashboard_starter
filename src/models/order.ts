export interface Order {
  id: string;
  channel: string;
  store: string;
  customerName: string;
  phoneNumber: string;
  orderTime: string;
  deliveryDate: string;
  deliveryTime: string;
  status: string;
}
export interface OrderCount {
  all: number;
  new: number;
  processing: number;
  completed: number;
  cancelled: number;
}
