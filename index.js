const { program } = require("commander");

const {
  getContactsList,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

program
  .option("-a, --action [string]", "choose action")
  .option("-i, --id [string]", "user id")
  .option("-n, --name [string]", "user name")
  .option("-e, --email [string]", "user email")
  .option("-p, --phone [string]", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      getContactsList();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
