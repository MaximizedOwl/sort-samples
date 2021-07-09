const bubbleSort = require('./sort/bubbleSort');
const insertSort = require('./sort/insertSort');
const selectionSort = require('./sort/selectionSort');
const dataGenerator = require('./util/dataGenerator');
const randomization = require('./util/randomization');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const ascNumList = dataGenerator.dataGenerator();
  const randomNumList = randomization.randomization(ascNumList);

  try {
    const subject = event.queryStringParameters.name || 'World';
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello ${subject}`,
        bubbleSort: bubbleSort.bubbleSort(ascNumList, randomNumList),
        selectionSort: selectionSort.selectionSort(ascNumList, randomNumList),
        insertSort: insertSort.insertSort(ascNumList, randomNumList),
      }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
