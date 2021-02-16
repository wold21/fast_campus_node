const models = require('../../models');

exports.get_products = ( _ , res) => {
    models.Products.findAll({
        // 쿼리 조건 작성 부분.
    }).then( (products) => {
        // DB에서 받은 products를 products변수명으로 내보냄
        res.render( 'admin/products.html' ,{ products});
    });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}


// DB 작성 insert....
exports.post_products_write = ( req , res ) => {
    models.Products.create(req.body).then( () => {
        res.redirect('/admin/products');
    });
}


// 상세페이지
exports.get_products_detail = ( req , res ) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/detail.html', { product });  
    });
};

exports.get_products_edit = ( req , res ) => {
    //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/write.html', { product });
    });
};

exports.post_products_edit = ( req , res ) => {

    models.Products.update(
        {
            name : req.body.name,
            price : req.body.price ,
            description : req.body.description
        }, 
        { 
            where : { id: req.params.id } 
        }
    ).then( () => {
        res.redirect('/admin/products/detail/' + req.params.id );
    });

}

exports.get_products_delete = ( req , res ) => {
    models.Products.destroy({
        where: {
            id: req.params.id
        }
    }).then( () => {
        res.redirect('/admin/products');
    });
};