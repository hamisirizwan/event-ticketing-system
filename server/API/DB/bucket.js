const { StorageClient } = require("@supabase/storage-js");
const { SUPA_URL, SUPA_KEY } = process.env;

const bucket = new StorageClient(SUPA_URL, {
  apikey: SUPA_KEY,
  Authorization: `Bearer ${SUPA_KEY}`,
});

module.exports = bucket;
