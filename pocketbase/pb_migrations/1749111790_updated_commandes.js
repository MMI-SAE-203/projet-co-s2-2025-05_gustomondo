/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1375719092")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2001447505",
    "hidden": false,
    "id": "relation1197194714",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "Produits",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1375719092")

  // remove field
  collection.fields.removeById("relation1197194714")

  return app.save(collection)
})
