const { getItems } = require('../../cosmos');

module.exports = async function (context, req) {
  try {
    const items = await getItems();
    context.res = {
      status: 200,
      body: items
    };
  } catch (err) {
    context.res = {
      status: 500,
      body: { error: err.message }
    };
  }
};
