// cosmos.js
const { CosmosClient } = require('@azure/cosmos');

const endpoint = process.env.COSMOS_ENDPOINT || 'https://phanhoangthien-eastus.documents.azure.com:443';
const key = process.env.COSMOS_KEY || 'Og4J9sg0pD64wBhWssMiDThTWD9Snj8Y09MeJjVv0YtazbdlNn6xj9uF5gM2QlE3jNHqx4k26sHWACDb7JMCeQ==';
const databaseId = 'SampleDB';
const containerId = 'Items';

const client = new CosmosClient({ endpoint, key });

async function addItem(item) {
  const { database } = await client.databases.createIfNotExists({ id: databaseId });
  const { container } = await database.containers.createIfNotExists({ id: containerId });
  const { resource } = await container.items.create(item);
  return resource;
}

async function getItems() {
  const { database } = await client.databases.createIfNotExists({ id: databaseId });
  const { container } = await database.containers.createIfNotExists({ id: containerId });
  const { resources } = await container.items.readAll().fetchAll();
  return resources;
}

module.exports = { addItem, getItems };
