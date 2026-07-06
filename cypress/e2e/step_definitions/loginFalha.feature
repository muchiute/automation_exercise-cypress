Feature: Login sem sucesso

@login @interface @critico
Scenario: Realizar login com credenciais inválidas
  Given que acesso a tela de login
  When realizo login com dados inválidos
  Then devo ver mensagem de erro de login