db.produtos.find({ $and: [{ curtidas: { $gt: 10 } }, 
    { curtidas: { $lte: 100 } }] }, { _id: 0, nome: 1, curtidas: 1 });