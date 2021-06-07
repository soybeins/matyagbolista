const bcrypt = require('bcrypt');
const scout = require('../models/scout');


var generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    for ( var i = 0; i < length; i++ ) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}

exports.login = (req, res) => {
    res.render("login");
}

exports.register = (req, res) => {
    res.render("register");
}

exports.register_scout = async (req,res) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password,salt);

    await scout.model.create({
                uuid: generateCode(),
                username: req.body.username,
                photo: req.body.photo,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                school: req.body.school,
                password: hash
    }).then(result => {
        if(result){
            console.log("Insertion Successful");
            res.redirect("/scout")
        }
    }).catch(err => {
        if(err){throw err}
        console.log("Error Creating Account!");
        res.render("register",{err:"Cannot create account!"})
    })
}

exports.login_scout = async(req, res) => {
    let data = await scout.model.findOne({where: {username: req.body.username}});

    if (data === null) {
        console.log('Not found!');
        res.render('login',{err:"Scout not found!"});
    } else {
        bcrypt.compare(req.body.password, data.password, (err, result) => {
            if(err){throw err;}
            if( (data.username == req.body.username) && result){
                req.session.loggedIn = true;
                req.session.username = data.username;
                req.session.uuid = data.uuid;
                res.redirect("/player");
            }else{
                res.render('login',{err:"Password Incorrect!"});
            }
        });    
    }
}