const MongoClient=require('mongodb');
const assert=require('assert');

const url='mongodb://localhost:27017/';
const dbname='conFusion';
MongoClient.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log('Connect To Server Succesfully....');
    const db=client.db(dbname);
    const collection=db.collection("dishes");
    collection.insertOne({name:'Uthapizza',discrition:'Test-Description'},(err,result)=>{
        assert.equal(err,null);
        console.log('After Insert');
        console.log(result.ops);
        collection.find({}).toArray((err,doc)=>{
            assert.equal(err,null);
            console.log('Found:\n');
            console.log(doc);
            db.dropCollection("dishes",(err,result)=>{
                assert.equal(err,null);
                client.close();
            });
        });
    });

});