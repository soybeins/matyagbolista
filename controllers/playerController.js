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
        res.render('players',{username:req.session.username});
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

