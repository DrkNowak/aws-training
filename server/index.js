const AWS = require ('aws-sdk')

const s3 = new AWS.S3({
    region:'eu-west-2',
    accessKeyId: 'AKIA5HHLFD66HBMTQS74',
    secretAccessKey: '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',
})


const Bucket = 'aws-goal-bucket';
const Key = 'users.json'

// create new bucket

// s3.createBucket({
//     Bucket:'aws-goal-bucket-created-by-app'
// },(error, success)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(success)
// })

// const newObject = {
//     userId: 11,
//     firstName: 'Krish',
//     lastName: 'Lee',
//     phoneNumber: '123456',
//     emailAddress: 'krish.lee@learningcontainer.com'
//   }


// s3.putObject({
//     Bucket,
//     Key,
//     Body: JSON.stringify(newObject), ContentType: 'application/json'
// },(err,data) => {
//     if(err){ console.log(err)}
//     //console.log(JSON.parse(data.Body));
    
// })


// const getUser = (key) => {
// s3.getObject({
//     Bucket,
//     Key: key,
//     },
//     (err,data) => {
//         if(err){ console.log(err)}
//         console.log(JSON.parse(data.Body));
        
//     });
// }





// const express = require('express');
// const cors = require('cors');
// const fs = require('fs');


// const app = express();

// app.use(cors());
// app.listen(3000);

// app.get('/users', (req, res) =>{
//     setTimeout(() => res.json(dataSummary), 3);
    
// })

// app.get('/users', (req, res) =>{
//     setTimeout(() => res.json(users), 3);
    
// })

// app.delete('/users/::id', (req, res)=>{
//     const id = req.params.id;
    
//     users = users.filter(element => (element.id !== parseInt(id)));

//     fs.writeFileSync('users.json', JSON.stringify(users));
//     res.send('user deleted');

// })

// app.get('/roles', (req, res) =>{
//     res.json(roles);
    
// })