# Progamaca-web__projetoSemestral-honeyGame

Git do Projeto semestral de progamação Web.

-------------------------------------------

## Objetivos

-------------------------------------------

- Ao clicar em “Adicionar ao Carrinho” de algum card de algum produto, deverá adicionar no carrinho de compras (tabela do banco de dados).

- Os produtos deverão vir de uma tabela do banco de  dados. Os produtos do carrinho, também deverá ser gravado no banco de dados em uma tabela de Carrinho de Compras

- Responsividade

- Somente poderá realizar uma compra, se estiver autenticado.

- No menu, deverá ter mais duas opções para se cadastrar e se autenticar.

- Deverá gravar as compras por usuário.

-------------------------------------------

## Paginas

-------------------------------------------

> Geral
>
>> - Produtos (Professor define template).
>> - Carrinho (Estudantes definem template).
>> - Finalizar Compra (Estudantes definem template).
>> - Deverá ser mostrado todos os produtos, preço unitário de cada um e preço total da compra. Deverá possibilitar realizar compra por cartão de crédito, débito ou pix (qrcode).

## Administrador

> Cadastrar Produto (Estudantes definem template)
>
>> - Deverá cadastrar os produtos no banco de dados, para que possam servisualizados na página de Produtos.
>> - Excluir Produto (Estudantes definem template)
>> - Deverá possibilitar excluir um produto no banco de dados

-------------------------------------------

## Bug's

-------------------------------------------

- quando adiciona jogos F2P o carrinho quebra e adiciona outro jogo no lugar.


-------------------------------------------

## Sugestoes / Melhorias

-------------------------------------------

- ~~Adicionar a logica no JS (index.js) para que no card quando o valor seja null (Jogo não lançado) ele troque o botão para um de lenbrete.~~ Por: Alex

- ~~Uma sugestao para isso e transformar o botao um uma var, caso o valor do preco seja null ele troca essa var para uma onde o bnt seja o de lenbrete!~~ Por: Alex

- Mais feedBack para o usuario (ao adicionar um produto ETC)

- Deve ser feito um campo no form de sign In para retornar o erro (O que esta de errado e em que campo esta o erro.)

- Em singIn.js criar um função para verificar o email.

- No PHP do sign IN : Adiconar um segunda verificação no servidor, e adicionar uma verificação para não ter como cadastrar email repitidos ou CPF

- Avançar na parte "Privada" do site (contem o painel de admin)

- ainda dentro da parte privada, um parte para aqueles sem o privilegio de admin poderem modificar seu perfil.(trocar o nome, aceitar uma data de nasc., uma foto de perfil)

- o botão de finalizar compra deve levar para um pagina onde contem o carrinho (deve ser jogado no banco de dados) para finalização da compra.

- quando excluimos um iten do carrinho ele fecha e abre de novo o popUp, procurar uma forma mais eficiente.