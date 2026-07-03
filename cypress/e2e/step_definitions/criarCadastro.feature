Feature: Cadastro de usuário

    Scenario: Criar um novo usuário

        Given que acesso a tela de cadastro
        When informo os dados do novo usuário
        Then o usuário é cadastrado com sucesso