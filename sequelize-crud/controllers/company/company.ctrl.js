const models = require('../../models');

exports.get_contacts = (_ , res) =>{
    models.Contacts.findAll({

    }).then((contacts) =>{

        res.render('company/contacts.html', {contacts:contacts});
    })
}

exports.get_contacts_write = ( _, res) => {
    res.render('company/write.html');
}



exports.post_contacts_write = (req, res)=>{
    models.Contacts.create(req.body).then(()=>{
        res.redirect('/company/contacts');
    });
}



exports.get_contacts_detail = (req, res)=>{
    models.Contacts.findByPk(req.params.id).then((contact)=>{
        res.render('company/detail.html', {contact : contact});
    });
}

exports.get_contacts_edit = (req, res)=>{

    models.Contacts.findByPk(req.params.id).then((contact)=>{
        res.render('company/write.html', {contact});
    });
}

exports.post_contacts_edit = (req, res)=>{

    models.Contacts.update(
        {
            name : req.body.name,
            address : req.body.address,
            position : req.body.position
        },
        {
            where : {id : req.params.id}
        }
    ).then(()=>{
        res.redirect('/company/contacts/detail/' + req.params.id);
    });
}
exports.get_contacts_delete = ( req , res ) => {
    models.Contacts.destroy({
        where: {
            id: req.params.id
        }
    }).then( () => {
        res.redirect('/company/contacts');
    });
};