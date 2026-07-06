Feature: Login com sucesso

@login @interface @critico
Scenario: Realizar login com credenciais válidas
  Given que acesso a tela de login
  When realizo login com dados válidos
  Then devo ver o usuário logado na tela