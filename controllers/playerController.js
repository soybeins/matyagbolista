const player = require("../models/player");

var generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    for ( var i = 0; i < length; i++ ) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}

exports.display = (req,res) =>{
    if(req.session.uuid){
        player.model.findAll().then(player =>{
            res.render("players", {player:player,username:req.session.username});
        }).catch(err => {
            console.log(err);
        })
    }else{
        res.redirect("/");
    }
}

exports.scout_edit = (req,res) =>{
    if(req.session.uuid){
        res.render('update-player',{username:req.session.username});
    }else{
        res.redirect("/");
    }
}

exports.create = (req,res) => {
    if(req.session.uuid){
        res.render('create-player',{username:req.session.username});
    }else{
        res.redirect("/");
    }
}

exports.create_player = async(req,res) => {
    await player.model.create({
        uuid: req.session.uuid,
        photo: req.body.photo,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        position: req.body.position,
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age,
        rating: req.body.rating,
        address: req.body.address
    }).then(result =>{
        if(result){
            res.redirect("/player");
        }
    })
}
