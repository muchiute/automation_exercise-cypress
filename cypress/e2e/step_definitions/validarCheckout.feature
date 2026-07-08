Feature: Checkout de compra

@checkout @interface @regressao
Scenario: Validar produtos no checkout
  Given que estou logado no sistema
  When adiciono produto ao carrinho e sigo para checkout
  Then o produto deve aparecer no checkout com dados corretos