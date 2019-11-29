module.exports = function(app,User){
    app.get('/api/users',(req,res)=>{
        let users=User;
        console.log(User);
        users.find((err,data)=>{
            if(err)return res.status(500).send({error:'database failure'});
            res.json(data);
        })
    });
    /**
     * Login: Post /api/users/login 
     * body sample: {"name":"test","password":"test"}
     */
    app.post('/api/users/login',(req,res)=>{
        let user=User;
        user.findOne({name:req.body.id,password:req.body.password},(err,data)=>{
            if(err)return res.status(500).json({msg:'database failure',error:1});
            if(!data)return res.status(404).json({msg:'user not found',error:1});
            let sess=req.session;
            console.log(sess);
            //sess.loginInfo={
              //  _id:data._id,
                //name:data.name,
            //}
            res.json({error:0,data});
        });
    });
    app.post('/api/users',(req,res)=>{
        console.log(req.body.params);
        User.findOne({name:req.body.params.name},(err,data)=>{
            if(err)return res.status(500).json({error:'database failure'});
            //console.log(data)
            if(data===null){
                let user=new User();
                user.name=req.body.params.name;
                user.password=req.body.params.password;
                //console.log(req.body);
                user.save((error)=>{
                    if(error){
                        console.error(error);
                        res.json({result:0});
                        return;
                    }
                    else
                        res.json({error:0,result:1});
                });
            }else{
                res.json({error:'id already exists',result:0});        
            }
        })
    })
};