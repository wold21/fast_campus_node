const models = require("./models");

async function getContacts() {
  try {
    const contact1 = await models.Contacts.findByPk(1);
    const contact4 = await models.Contacts.findByPk(4);

    // 넘길때는 상관없는데 안에서 찍을땐 .dataValues를 써야함.
    console.log(contact1.dataValues.name);
    console.log(contact4.dataValues.name);
  } catch (error) {}
  console.log(error);
}

getContacts();
