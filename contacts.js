const fs = require("fs/promises");
const path = require("path");


const CONTACTS_DIR = path.join(process.cwd(), "db");

const contactsPath = path.join(CONTACTS_DIR, path.basename("db/contacts.json"));

const getContactsList = async () => {
  try {
    const contacts = await fs.readFile(contactsPath, {encoding: 'utf8'});
    console.log(JSON.parse(contacts));
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await fs.readFile(contactsPath, {encoding: 'utf8'});
    const searchedContact = JSON.parse(contacts).find(contact=>contact.id===contactId);
    console.log(searchedContact);
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await fs.readFile(contactsPath, {encoding: 'utf8'});
    const newContacts = JSON.parse(contacts).filter(contact => contact.id!==contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    console.log(newContacts);
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const contacts = await fs.readFile(contactsPath, {encoding: 'utf8'});
    const newContacts = JSON.parse(contacts);
    const date = new Date();
    newContacts.push({
      id: (date.getTime()).toString(),
      name,
      email,
      phone
    });
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));
    console.log(newContacts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {getContactsList, getContactById, removeContact, addContact}