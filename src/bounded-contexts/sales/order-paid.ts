import { DomainEvent } from "../../core/DomainEvent";
import { Order } from "./order";

// essa classe é um evento
export class OrderPaidEvent implements DomainEvent {
  public createdAt: Date;
  public order: Order;

  constructor(order: Order) {
    this.createdAt = new Date();
    this.order = order;
  }

  // para criar o método getEntityId eu preciso salvar dentro da classe(evento)
  // qual entidade está relacionado com esse evento
  getEntityId(): string {
    return this.order.id;
  }
}
