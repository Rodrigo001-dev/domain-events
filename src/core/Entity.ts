import { randomUUID } from "node:crypto";

import { DomainEvent } from "./DomainEvent";
import { DomainEvents } from "./DomainEvents";

// coloquei como classe abstrata para não ser possível implementa-lá, não vai
// ser possível instanciar essa classe diretamente, sempre vai ser necessário
// estender ela
export abstract class Entity<Props> {
  protected readonly _id: string;
  protected props: Props;
  private _domainEvents: DomainEvent[] = [];

  // coloquei que é uma protected e não private porque se não as classes que
  // estenderem essa classe não vão conseguir acessar
  protected constructor(props: Props, id?: string) {
    this.props = props;
    // se eu estou criando uma entidade passando o id é por que eu estou criando
    // uma referência para uma entidade que já existia anteriormente dentro da
    // aplicação
    // se eu crio uma entidade e não passo o id quer dizer que estou criando algo
    // novo
    this._id = id ?? randomUUID();
  }

  get id() {
    return this._id;
  }

  protected addDomainEvent(domainEvent: DomainEvent) {
    this._domainEvents.push(domainEvent);
    DomainEvents.markEntityForDispatch(this);
  }
}
