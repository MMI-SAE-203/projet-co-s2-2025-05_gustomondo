/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1375719092")

  // remove field
  collection.fields.removeById("relation4220051791")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1802620688",
    "hidden": false,
    "id": "relation2719731986",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "personne_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1375719092")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation4220051791",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "utilisateur_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("relation2719731986")

  return app.save(collection)
})
