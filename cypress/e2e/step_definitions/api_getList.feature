Feature: Consultar ação do Trello

@api @trello
Scenario: Consultar ação e exibir o nome da lista
  Given que possuo acesso à API do Trello
  When eu envio um GET para a API
  Then o status code deve ser 200 e exibir o nome da lista