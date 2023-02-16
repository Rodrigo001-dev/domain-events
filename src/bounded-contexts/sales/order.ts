import { Entity } from "../../core/Entity";

interface OrderProps {
  customerId: string;
  productId: string;
  amountInCents: number;
  status: "pending" | "paid";
  createdAt: Date;
}

export class Order extends Entity<OrderProps> {
  get customerId() {
    return this.props.customerId;
  }

  get productId() {
    return this.props.productId;
  }

  get amountInCents() {
    return this.props.amountInCents;
  }

  get status() {
    return this.props.status;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  static create(props: OrderProps) {
    const order = new Order(props);

    return order;
  }
}
