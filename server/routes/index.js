module.exports = function(app,User){
    //let sess=require('express-session'); 
    /**
     * Users: Get /api/users
     */
    app.get('/api/users',(req,res)=>{
        let users=User;
        console.log(req.session);
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
        console.log(req.session.loginInfo);
        if(req.session.loginInfo===undefined){
            user.findOne({name:req.body.id,password:req.body.password},(err,data)=>{
                if(err)return res.status(500).json({msg:'database failure',error:1});
                if(!data)return res.status(404).json({msg:'user not found',error:2});
                req.session.loginInfo={
                    _id:data._id,
                    name:data.name,
                    password:data.password
                }
                res.json({error:0,data});
            });
        }else{
            const r=req.session.loginInfo;
            res.json({error:0,r});
        }
    });
    /**
     * Login: Get /api/users/logout
     */
    app.get('/api/users/logout',(req,res)=>{
        console.log(req.session);
        req.session.destroy((err)=>{
            if(err)
                res.status(404).json({msg:"log out failure",error:1,result:0})
            else{
                req.session=null;
                res.json({error:0,result:1})
            }
        });       
    });

    /**
     * Sign Up: Post /api/users
     * body sample: {"name":"test","password":"test"}
     */
    app.post('/api/users',(req,res)=>{
        //console.log(req.body.params);
        User.findOne({name:req.body.params.name},(err,data)=>{
            if(err)return res.status(500).json({msg:'database failure',error:1});
            if(data===null){
                let user=new User();
                user.name=req.body.params.name;
                user.password=req.body.params.password;
                user.save((error)=>{
                    if(error){
                        console.error(error);
                        res.json({msg:'Save failure',error:2});
                        return;
                    }
                    else
                        res.json({error:0,result:1});
                });
            }else
                res.json({msg:'id already exists',result:0,error:3});        
        })
    })
};