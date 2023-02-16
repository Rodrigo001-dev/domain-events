# :page_with_curl: Projeto

<LINKEDIN>
Você sabe o que é Domain Events?
</LINKEDIN>

Antes de falar sobre Domain Events precisamos entender o que é DDD(Domain Driven Design)

DDD é uma forma de desenhar software, e essa parte não tem relação com arquitetura de software especificamente, porque podemos pensar que design de software toca apenas aquilo que um usuário não técnico consegue entender, ele toca em regras de negócio, entidades, atores, casos de uso, tudo aquilo que uma pessoa não técnica consiga representar isso de outras maneiras, ela vai conseguir exemplificar quais as ações do software mesmo com uma linguagem não tão técnica e geralmente é ai que design de software para, pro momento onde arquitetura de software entra, que é como nós implementamos isso e a arquitetura toca em como vai ser desacoplado o código, como vai ser lidado a comunicação com outras APIs, banco de dados, isso são coisas que, se conversadas com uma pessoa não técnica ela não vai entender. Então a ideia do DDD é conseguir ter uma linguagem universal entre o que é código e o que a gente conversa com o nosso cliente.

Então só para deixar claro design de software é a maneira que transformamos os requisitos que o nosso cliente tem em um software e DDD é uma técnica de design de software, digamos que são vários princípios que você segue para desenhar o software melhor.

Agora vamos falar de Domain Events

Quando pensamos em eventos, logo a primeira coisa que vem a cabeça se formos pensar de uma maneira mais técnica é assincronismo dentro do JavaScript por exemplo, o evento, alguma coisa aconteceu, eu ouço o evento, eu faço alguma coisa com aquilo, isso é completamente normal para devs porque os pensamentos do dev são geralmente mais técnicos mas para entender Domain Events eu peço para darem um passo atrás e pensarem:

O que é eventos na linguagem de domínio, ou seja, em uma linguagem não técnica

Eventos geralmente são efeitos colaterais

Ex: Imagine uma barbearia
O barbeiro está te explicando as necessidades que ele tem para uma aplicação, ele ele fala:

"Assim que o cliente me manda o pix, eu envio para ele uma nota fiscal"
Com essa frase é possível perceber um efeito colateral, é importante entender que todo o software que criamos é uma tradução de um problema da vida real, se começamos pela parte técnica, que é a parte que muitas vezes nós gostamos, pode ocorrer o grande risco de ser desenvolvido um software que não resolve o problema do cliente.

Design de software é exatamente a técnica que nos permite evitar com que seja escrito código que não faça sentido.

<LINKEDIN>
Pronto agora podemos ir para a parte que todos estavam esperando, a parte técnica
</LINKEDIN>

Antes de entender o que são Domain Events, precisamos entender um termo que é usado dentro do DDD que é o Bounded Contexts

Dentro do DDD, Bounded Contexts são os contextos da nossa aplicação.

Os Bounded Contexts são formas de conseguir repartir a nossa aplicação em contextos.

Mas o que eu quero dizer com contextos da aplicação?

Vamos colocar o exemplo de barbearia novamente

Imaginem uma barbearia gigante onde temos vários funcionários, dentre eles:

- Os funcionários que fazem o corte
- Os funcionários que cuidam do caixa
- Os funcionários que realizam a limpeza

E você chaga lá nas pessoas que realizam a limpeza e pergunta:

Qual tesoura é utilizada para cortar o cabelo das pessoas?
Você acha que essas pessoas que realizam a limpeza vão saber qual tesoura é utiliza?

Consegue perceber que dentro de um mesmo negócio, existem contextos, que por mais que eles se conversem, eles possuem uma camada de conhecimento base, que não é compartilhada como as outras pessoas de outro contexto.

E isso dentro do código é representado como Bounded Contexts, mas se formos levar a um nível mais técnico ainda, pode ser por exemplo microsserviços.

Vamos dar um exemplo de um E-commerce

Eu tenho um microsserviço checkout do carrinho, eu tenho um microsserviço de nota fiscal, podem ser dois Bounded Contexts diferentes, ou seja, dois contextos diferentes
Quem trabalha com a parte de Faturamento vai ter uma área de domínio, quem trabalha com a parte de checkout, carrinho abandonado, fazer a venda com o cliente, vai ter outra área de domínio.

Bom agora vamos para o que todos estavam esperando

A ideia de Domain Events é primeiramente a gente conseguir se intercomunicar entre os Bounded Contexts da aplicação.

Vamos para um exemplo mais próximo da vida real

Vamos imaginar que temos dois Bounded Contexts:

Um que é o setor de vendas e outro é o setor Fiscal

Imagine que dentro do setor de vendas temos uma ação que é a de:

Fechar a venda

E existe duas ações dentro do setor Fiscal:

- Emitir nota fiscal
- Cancelar nota fisal

Essas ações Dentro do DDD são chamadas de casos de uso
Casos de uso é como identificamos as ações do que o nosso software vai precisar implementar.

Agora como que ao fechar a venda, eu farei a emissão da nota fiscal?

Dentro do DDD cada Bounded Context precisa ser autossuficiente, quase que independente, dos outros Bounded Contexts da aplicação

Agora vou repetir a pergunta de uma forma mais técnica

Como que se eu tivesse um microsserviço de venda e um microsserviço Fiscal os dois iam conseguir se comunicar?

E é ai que os eventos de domínio entram(Domain Events)
Que basicamente é uma forma de conseguir na nossa aplicação avisar que alguma coisa aconteceu, e eu tenho outros pedaços da aplicação ouvindo este evento e recebendo isso.

Agora você deve estar pensando em mensageria, mas calma, eu quero que você suba o nível, saía de uma visão ferramental.

Imaginem que você não tem acesso nem a banco de dados, nenhuma ferramenta externa, nenhum sistema de fila externo, você só tem puramente código na sua frente.

Como você poderia resolver a forma de comunicar duas partes da aplicação sem ser uma chamada direta? Sem ser uma função chamando a outra

Para resolver isso, vou falar de um pattern chamado Pub/Sub(Publish/Subscriber)

Quando temos esse pattern de Pub/Sub
Nós vamos ter vários Subscribers(inscrito) e nós temos Publishers(publicadores)

Pub/Sub nada mais é do que uma forma de inscrever pedaços da nossa aplicação a eventos, e nós não sabemos exatamente quem vai mandar esses eventos, quem vai executar esses eventos, só que a partir do momento que esse evento for executado, independente de quem executou esse evento geralmente uma função vai ser chamada.

# 🚀 Tecnologias/Bibliotecas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://nodejs.dev/" target="_blank"> <img src="https://img.shields.io/badge/-Node.js-32CD32?style=flat-square&logo=Node.js&logoColor=white" alt="Node.js"> </a>

# 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>
