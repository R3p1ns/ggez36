const { addItem } = require('../../cosmos');

module.exports = async function (context, req) {
  try {
    const item = req.body;
    const result = await addItem(item);
    context.res = {
      status: 201,
      body: result
    };
  } catch (err) {
    context.res = {
      status: 500,
      body: { error: err.message }
    };
  }
};
