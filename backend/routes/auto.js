const express = require( 'express' );
const router  = express.Router();

const Auto = require( '../model/auto' );

router.get( '/listaAutos', async( req, res ) => {
    const autos = await Auto.find();
    res.send( autos );
});

router.post( '/', async( req, res ) => {
    const auto = new Auto({
        marca:req.body.marca,
        modelo:req.body.modelo,
        color:req.body.color,
        precio:req.body.precio,
    })
    const result = await auto.save();
    res.status( 200 ).send( result );
})

router.put( '/', async( req, res ) => {
    const auto = await Auto.findByIdAndUpdate(
        req.body._id, {
            marca: req.body.marca,
            modelo:req.body.modelo,
            color:req.body.color,
            precio:req.body.precio,
        },{
            new: true
        }
    )
    if ( !auto ){
        res.status( 400 ).send( "No hay auto en la bd" )
    }
    res.status( 200 ).send( auto )
})

router.delete( '/:_id', async ( req, res ) =>  {
    auto = await Auto.findByIdAndDelete( req.params._id )

    if ( !auto ){
        res.status( 400 ).send( "No hay auto en la db" )
    }

    res.status( 200 ).send( {message:"Auto eliminado"} )
    
})

module.exports = router