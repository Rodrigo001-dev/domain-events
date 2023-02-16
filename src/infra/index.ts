import { Order } from "../bounded-contexts/sales/order";
import { OrderCreatedEvent } from "../bounded-contexts/sales/order-created";
import { DomainEvents } from "../core/DomainEvents";

// Subscriber
// vou me inscrever para toda vez que um evento for criado
DomainEvents.registerSubscriber(OrderCreatedEvent.name, (event) => {
  // eu vou dar um console.log nos dados desse evento
  console.log(event);
});

// Publisher
const order = Order.create({
  customerId: "customer-1",
  productId: "product-1",
  amountInCents: 1000,
  status: "pending",
  createdAt: new Date(),
});

// Atestado de finalização do processo de venda
DomainEvents.dispatchEventsForEntity(order.id);
