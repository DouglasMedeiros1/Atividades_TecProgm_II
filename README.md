
# ATV III

## Como rodar?

Primeiramente entre na pasta: atvi-atlantis-master ,<br>
Em seguida abra o cmd (prompt de Comando) e digite os seguintes comandos: 

```
npm install typescript
```

```
npx tsc
```

```

```

## Proposta da Atividade

Contextualização:

Existem várias atividades empresariais voltadas para hospedagem e entretenimento. Como 
exemplo tem-se os hotéis, pousadas e resorts. Contudo, algo se destaca, principalmente no
exterior, são os resorts. 
<br>
 
Um resort é uma estrutura de hospedagem pensada para ser um centro de férias ou estação 
turística. É um lugar usado para relaxamento ou recreação, geralmente situado fora de um 
centro urbano com áreas não edificadas de terreno, voltados especialmente para atividades de 
lazer e entretenimento dos hóspedes. As pessoas procuram um resort para passar feriados ou 
férias. 
<br>
 
Existem alguns exemplos famosos de resorts. Cidades em que o turismo é a principal atividade 
econômica por exemplo Aspen e Colorado. Centros de férias, normalmente dirigidos por uma 
única companhia, que tenta proporcionar para a maioria das pessoas o que elas querem 
enquanto elas estão lá, por exemplo Walt Disney World Resort. 
<br>
 
Às vezes o termo resort é usado erroneamente para se referir a um hotel, que não tem todos os 
requisitos de um resort. De qualquer modo, um hotel possui as principais características de um 
resort. Outra diferença que se pode ressaltar entre hotel e resort, é que um resort proporciona 
diversas opções de lazer para seus hóspedes, já o foco de um hotel é oferecer apenas a estadia. 
<br>
 
Assim como em um hotel, nos resorts seus hóspedes têm livre permanência por todos os seus 
ambientes, porém, diferentemente daqueles, pois, na maioria das vezes, não há necessidade de 
adquirir pacotes adicionais. O preço da estadia engloba tudo o que o resort oferece. Trata-se de 
um misto da comodidade de um clube com o prazer de um hotel. 
<br>
 
### Atividade:
O sistema Atlantis está cada vez melhor, graças ao empenho do time de desenvolvimento. 
Contudo, você recebeu duas negativas, por duas vezes dois possíveis clientes não aceitaram seu 
software como um produto mínimo viável para uso. Isto aconteceu porque a implementação
não contempla coisas importantes, dentre elas uma forma de cadastro e gerenciamento de 
hospedagens. 
<br>
 
Por sorte, as negativas foram claras, trouxeram as repostas necessárias para melhorar o 
software. A partir disto, você solicitou ao time de desenvolvimento de software novas 
implementações para melhorar o sistema. 
<br>
 
Seus engenheiros de software iniciaram as atualizações e uma das principais diferenças foi 
incluir uma classe denominada de “Acomodações”. Esta classe foi pensada para representar 
qualquer tipo de acomodação em um hotel, pousada ou resort. 
<br>
 
Existem várias configurações para uma acomodação como: possui ou não camas de solteiro, 
possui suítes e se há garagens. Por causa desta variação de configurações, seus engenheiros 
entenderam que deveriam utilizar o padrão de projeto “Builder” para implementar construtores 
de acomodações. A estrutura em software desenvolvida por eles está representada pelo 
diagrama de classe na Figura 1. 
<br>
 
Figura 1. Padrão de projeto Builder aplicado. 
<br>
 
Pelo diagrama, apresentado na Figura 1, evidencia-se a classe Acomodação e seus atributos e 
métodos. Além disso, outras classes são definidas, uma denominada de “Diretor” e outra 
denominada “ConstrutorAcomodação” – estas classes compõe a implementação do padrão de 
projeto Builder, que foi aplicada no contexto do sistema. 
<br>
 
A mesma equipe de marketing e vendas, que recebeu as duas respostas negativas dos clientes, 
elaborou uma tabela que defini quais são as melhores opções de acomodações para que o 
software se torne um produto mínimo viável. Estas definições estão descritas na Tabela 1. 
<br>
 
Tabela 1. Definições de acomodações. 
<br>
 

Na Tabela 1, é definido o nome da acomodação, ou seja, o tipo de quarto que será oferecido 
para o hospede. Também são definidos as quantidades e tipos de leitos, se há suíte, se há 
climatização com condicionador de ar e quantas vagas de garagem estão disponíveis. 
<br>
 
A partir das informações da Tabela 1, o time de desenvolvimento implementou uma classe
denominada “DiretorSolteiroSimles” – ela está definida no diagrama de classes da Figura 1. Esta 
classe é responsável por criar acomodações do tipo “Solteiro Simples”. Contudo, o trabalho 
ainda está incompleto, ainda faltam classes para criar os demais tipos de acomodações. 
<br>
 
Você ficou responsável por terminar as classes que criam os demais tipos de acomodações e por 
projetar e desenvolver o controle de hospedagem no software. O controle de hospedagem 
consiste em registrar quais hospedes estão, atualmente, hospedados no hotel, pousada ou 
resort. Além disso, em qual tipo de acomodação estes hospedes estão. 
<br>
 
Para facilitar seu trabalho, você listou as implementações que devem construídas para que o 
sistema Atlantis, finalmente, seja considerado um produto mínimo viável e possa ser 
comercializado. 
<br>
 
As implementações são: 
<br>
 
• Implementar todas as classes diretoras – responsáveis por criar cada tipo de 
acomodação. 
<br>
 
• Implementar as estruturas de dados e a lógica necessárias para controlar a hospedagem, 
ou seja, poder registar hospedes e vincular estes hospedes a algum tipo de acomodação. 
<br>
 <br>
