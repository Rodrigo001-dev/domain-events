// coloquei como classe abstrata para não ser possível implementa-lá, não vai
// ser possível instanciar essa classe diretamente, sempre vai ser necessário
// estender ela
export abstract class Entity<Props> {
  protected readonly _id: string;
  protected props: Props;

  // coloquei que é uma protected e não private porque se não as classes que
  // estenderem essa classe não vão conseguir acessar
  protected constructor(props: Props) {
    this.props = props;
  }
}
