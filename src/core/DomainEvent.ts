// essa interface representa um único evento
export interface DomainEvent {
  createdAt: Date;
  // quem usar dessa interface precisa implementar um método que retorna o id
  // uma forma de um conseguir identificar unicamente a entidade relacionado
  // aquele evento
  getEntityId(): string;
}
