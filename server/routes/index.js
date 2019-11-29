module.exports = function(app,User){
    app.get('/api/users',(req,res)=>{
        let users=User;
        console.log(User);
        users.find((err,data)=>{
            if(err){
                return res.status(500).send({error:'database failure'});
            }
            res.json(data);
        })
    });
    app.get('/api/users/:userid',(req,res)=>{
        let user=User;
        user.findOne({name:req.params.id},(err,data)=>{
            if(err)
                return res.status(500).json({error:'database failure'});
            if(!data)
                return res.status(404).json({error:'user not found'});
            res.json(data);
        });
    });
    app.post('/api/users',(req,res)=>{
        let user=new User();
        user.name=req.body.id;
        user.password=req.body.password;
        User.findOne({name:user.name},(err,data)=>{
            if(err)
                return res.status(500).json({error:'database failure'});
            if(!data){
                user.save((err)=>{
                    if(err){
                        console.error(err);
                        res.json({result:0});
                        return;
                    }
                    res.json({error:0,result:1});
                });
            } 
            res.json({error:'id already exists',result:0});
        })
    })
};