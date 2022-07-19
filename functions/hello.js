const people = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'George',
  },
]
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ data: people }),
  }
}
