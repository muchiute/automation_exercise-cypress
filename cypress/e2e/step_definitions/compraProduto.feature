Feature: Compra de Produto

@e2e @compra @interface @regressao
Scenario: Comprar um produto com sucesso
  Given que realizo um login válido
  When eu busco um produto
  And adiciono o produto ao carrinho
  Then o produto deve estar no carrinho e a compra é finalizada