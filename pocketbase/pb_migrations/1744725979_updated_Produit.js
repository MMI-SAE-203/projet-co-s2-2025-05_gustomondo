/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1197194714",
    "maxSelect": 1,
    "name": "Produits",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Snack",
      "Épices",
      "Fruits",
      "Légumes",
      "Boissons"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2001447505")

  // remove field
  collection.fields.removeById("select1197194714")

  return app.save(collection)
})
