module.exports = function(app,User){
    var sess=require('express-session'); 
    /**
     * Users: Get /api/users
     */
    app.get('/api/users',(req,res)=>{
        let users=User;
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
            sess=req.session;
            sess.loginInfo={
                _id:data._id,
                name:data.name,
            }
            console.log(sess);
            res.json({error:0,data});
        });
    });
    app.post('/api/users/logout',(req,res)=>{
        if(req.session){
            req.session.destroy((err)=>{
                if(err)res.status(404).json({msg:"log out failure",error:1,result:0})
                res.json({error:0,result:1})
            })   
        }        
    })

    /**
     * Sign Up: Post /api/users
     * body sample: {"name":"test","password":"test"}
     */
    app.post('/api/users',(req,res)=>{
        //console.log(req.body.params);
        User.findOne({name:req.body.params.name},(err,data)=>{
            if(err)return res.status(500).json({error:'database failure'});
            if(data===null){
                let user=new User();
                user.name=req.body.params.name;
                user.password=req.body.params.password;
                user.save((error)=>{
                    if(error){
                        console.error(error);
                        res.json({result:0});
                        return;
                    }
                    else
                        res.json({error:0,result:1});
                });
            }else
                res.json({error:'id already exists',result:0});        
        })
    })
};