const player = require("../models/player");

// Displays all players 
exports.display = (req,res) =>{
    if(req.session.uuid){
        player.model.findAll().then(player =>{
            res.render("players", {player:player,username:req.session.username,uuid: req.session.uuid});
        }).catch(err => {
            console.log(err);
        })
    }else{
        res.redirect("/");
    }
}

//Render edit player page
exports.player_edit = (req,res) =>{
    if(req.session.uuid){
        player.model.findOne({
                where:
                {
                    id:req.query.id
                }}).then(result => {
                    res.render('update-player',{username:req.session.username,player:result});
                })
    }else{
        res.redirect("/");
    }
}

// Renders Creates a player page
exports.create = (req,res) => {
    if(req.session.uuid){
        res.render('create-player',{username:req.session.username});
    }else{
        res.redirect("/");
    }
}

// Creates a player
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
// Displays all players by position
exports.display_position = (req,res) =>{
    if(req.session.uuid){
        player.model.findAll({
            where:{
                position:req.query.pos
            }})
        .then(player =>{
            res.render("players", {player:player,username:req.session.username,uuid: req.session.uuid});
        }).catch(err => {
            console.log(err);
        })
    }else{
        res.redirect("/");
    }
}

exports.player_update = async(req,res) => {
    await player.model.update({
        photo: req.body.photo,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        position: req.body.position,
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age,
        rating: req.body.rating,
        address: req.body.address 
    },{
        where: { id: req.body.id }
    }).then(result =>{
        if(result){
            console.log("Succesfully updated player!");
            res.redirect("/player");
        }
    }).catch(err => {
        console.log(err);
        res.redirect("/player/player_edit");
    })
}

exports.player_delete = async(req, res) => {
    await player.model.destroy({
        where: { 
            id: req.query.id
        }}).then(result => {
            if(result){
                console.log("Succesfully deleted");
                res.redirect("/player");
            }
        })
}