Feature: Carrinho de compras

@carrinho @interface @critico
Scenario: Incluir produto no carrinho
  Given que acesso os produtos
  When adiciono o produto ao carrinho
  Then o produto deve estar no carrinho