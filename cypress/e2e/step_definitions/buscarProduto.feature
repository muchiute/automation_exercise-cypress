Feature: Buscar produto

@busca @interface @critico
Scenario: Buscar produto após login
  Given que estou logado no sistema
  When acesso a página de produtos e busco pelo produto
  Then o produto deve aparecer na busca