import { Entity } from "./Entity";

type SubscriberCallback = (event: any) => void;
// os meus Subscribers vai ser um objeto(Record) com a chave sendo uma
// string(que é o nome do evento), e o valor dele vai ser uma função
type Subscribers = Record<string, SubscriberCallback[]>;

// essa classe vai implementar Pub/Sub do zero
// ela vai gerenciar toda a parte de Pub/Sub da minha aplicação
export class DomainEvents {
  // vou criar propriedades estáticas para conseguir acessar elas mesmo sem
  // instancia a classe
  static subscribers: Subscribers = {}; // os subscribers é que ouve os eventos
  static publishers: Entity<any>[] = []; // publishers podem disparar os eventos

  public static registerSubscriber(
    event: string,
    callback: SubscriberCallback
  ) {
    // se eu já tinha algum evento cadastrado naquele subscribers
    if (event in this.subscribers) {
      // eu só adiciono mais um
      this.subscribers[event].push(callback);
    } else {
      // se não
      // eu crio aquilo do zero
      this.subscribers[event] = [callback];
    }
  }
}
