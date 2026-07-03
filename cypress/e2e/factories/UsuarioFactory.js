import { faker } from "@faker-js/faker";

class UsuarioFactory {
  criarUsuario() {
    return {
      nome: faker.person.firstName(),
      email: faker.internet.email(),
      senha: faker.internet.password({ length: 8 }),

      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      country: "Canada",
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode("########"),
      mobile: faker.phone.number("119########"),

      dia: "10",
      mes: "5",
      ano: "1995",

      // Dados do cartão
      nomeCartao: faker.person.fullName(),
      numeroCartao: "4111111111111111",
      cvc: faker.string.numeric(3),
      mesValidade: "12",
      anoValidade: "2030",
    };
  }
}

export default new UsuarioFactory();
