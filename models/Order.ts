export interface OrderItem {
  id: number;
  entity: string;
  price: string;
  off_amount: string;
  product_name: string;
  product_size: string;
  product_color: string;
}

export interface Order {
  id: number;
  order_price: string;
  off_price: string;
  final_price: string;
  address: string;
  off_code: string | null;
  payment_code: string | null;
  off_mode: number;
  deliver_status: number;
  order_status: OrderStatus;
  payemntInfo: {
    bank_code: string;
    created_at: string;
  };
  shipping:number;
  items: OrderItem[];
}
export enum OrderStatus {
  Pending = 0,
  Delivering = 1,
  Done = 2,
  Canceled = 3,
}
