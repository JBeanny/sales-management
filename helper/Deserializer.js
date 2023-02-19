// import JSONAPIDeserializer from "jsonapi-serializer";
const JSONAPIDeserializer = require("jsonapi-serializer").Deserializer;

export const DataDeserializer = (data, keyForAttri) => {
  return new JSONAPIDeserializer({
    typeAsAttribute: keyForAttri,
  })
    .deserialize(data, async (err, response) => {
      if (err) throw err;
      return await response;
    })
    .then((res) => res);
};
