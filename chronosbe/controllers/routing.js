module.exports = {

  createPost: (req, res) => {
    db.collection('posts').insertOne(req.body, (err, result) => {
      if (err) return console.log(err);
      console.log('Saved post to DB')
      res.json(result);
    })
  },

  getPosts: (req, res) => {
    if(req.body.name==undefined){
    db.collection('posts').find().toArray(  function(err, result){
      console.log(result);
      res.json(result);
    })}
    else{
      db.collection('posts').find({name:req.body.name}).toArray( function(err, result){
        console.log(result);
        res.json(result);
    })
  }

  },

  editPost: (req,res) => {
    db.collection('posts').updateOne({'id':parseInt(req.body.id)}, {
      $set: {
      "id":req.body.nid,
      "content":req.body.content,
      "categories": res.body.catgories
    }
    },
    (err, result) => {
      if (err) return console.log(err);
      console.log('Post updated', result);
      res.json(result);
    })
  },



  deletePost: (req,res) => {
    var mongodb = require('mongodb');
    db.collection('posts').deleteOne({
    _id: new mongodb.ObjectID(req.body._id)
    }, (err, result) => {
      if (err) return console.log(err);
      console.log('Deleted post from DB', result);
      res.json(result);
    })
  }
}
