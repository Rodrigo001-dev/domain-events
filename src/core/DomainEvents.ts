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
  // o markedEntitiesToDispatch vai anotar em um array quais entidades possuem
  // eventos que precisam ser disparado em algum momento
  static markedEntitiesToDispatch: Entity<any>[] = [];

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

  public static markEntityForDispatch(entity: Entity<any>) {
    const alreadyMarked = this.markedEntitiesToDispatch.find(
      (item) => item.id === entity.id
    );

    if (!alreadyMarked) {
      // vou anotar em um array todas entidades que possuem pelo menos algum
      // evento para ser disparado
      this.markedEntitiesToDispatch.push(entity);
    }
  }

  public static dispatchEventsForEntity(id: string) {
    const entity = this.markedEntitiesToDispatch.find((item) => item.id === id);

    if (entity) {
      entity.domainEvents.forEach((event) => {
        const eventClassName = event.constructor.name; // pegar o nome do evento

        // se existe algum subscriber ouvindo este evento
        if (eventClassName in this.subscribers) {
          // vou pegar todas as funções que estão ouvindo o meu evento
          const handlers = this.subscribers[eventClassName];

          for (const handler of handlers) {
            handler(event);
          }
        }
      });

      entity.clearEvents();
    }
  }
}
