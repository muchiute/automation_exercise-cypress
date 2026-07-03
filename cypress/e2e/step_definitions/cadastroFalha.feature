Feature: Cadastro sem sucesso

Scenario: Criar cadastro com email já existente
  Given que acesso a tela de cadastro
  When tento cadastrar com email já existente
  Then devo ver erro de email já existente