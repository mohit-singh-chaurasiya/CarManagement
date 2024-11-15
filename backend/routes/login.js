var express = require('express');
var router = express.Router();
var pool = require('./pool')
var upload = require('./multer')

/* GET users listing. */
router.post('/check_admin_login', function(req, res, next) {
    pool.query('select * from register where (emailid=? or mobileno=?) and password=?',[req.body.emailid,req.body.emailid,req.body.password],function(error,result){

   if(error)
   {
    res.status(200).json({status:false,message:'DataBase Error'})
   }
   else
   {
    if(result.length==1)
    {
    
        res.status(200).json({status:true,data:result[0],message:'Success'})

    }
    else
    {
        res.status(200).json({status:false,message:'Invalid EmailId/MobileNo.'})

    }
   }
})
});

router.post('/submit_admin_data', (req, res) => {
  const { name, emailid,mobileno, password } = req.body;

  const sql = 'INSERT INTO register (name,emailid,mobileno,password) VALUES (?, ?,?, ?)';
  const values = [name, emailid,mobileno, password];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Database error' });
    } else {
      console.log("result:",result)

      res.json('Data inserted successfully');
    }
  });
});

router.post('/add',upload.single('picture'), function(req, res, next) {
  try{
    pool.query("insert into addcar (tag,title,description,color,fuel,mode,picture) values(?,?,?,?,?,?,?)",[req.body.tag,req.body.title,req.body.description,req.body.fuel,req.body.mode,req.file.filename],function(error,result){
     if(error)
     {  //console.log(error)
         res.status(200).json({status:false,message:'Server Error:Pls Contact Database Administrator...'})}
     else
     {
        res.status(200).json({status:true,message:'Category Submitted Successfully...'})

     }
    
    })



  }
  catch(e)
  {
   // console.log('Error:',e)
    res.status(200).json({status:false,message:'Server Error:Pls Contact Server Administrator...'})
  }

});
  

  router.get('/',function(req,res){
    try{
      pool.query("select * from register",function(error,result){
       if(error)
       {  //console.log("errrror",error)
           res.status(200).json({status:false,message:'Server Error:Pls Contact Database Administrator...'})}
       else
       { 
       // console.log("success",result)
          res.status(200).json({status:true,message:'Success',data:result})
  
       }
      
      })
  
   }
    catch(e)
    {
      //console.log('Error:',e)
      res.status(200).json({status:false,message:'Server Error:Pls Contact Server Administrator...'})
    }
  
      
  })  
  



  module.exports = router;