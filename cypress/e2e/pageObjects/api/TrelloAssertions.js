import ApiLogger from "./utils/ApiLogger";

class TrelloAssertions {
  validateStatus(response, status = 200) {
    const result = response.status === status;

    ApiLogger.logValidation("Status Code", result);

    expect(response.status).to.eq(status);
  }

  validateListName(response) {
    const listName = response.body.data.list.name;

    ApiLogger.logValidation("List Name Exists", !!listName);

    expect(listName).to.exist;
    expect(listName).to.not.be.empty;

    return listName;
  }
}

export default new TrelloAssertions();