(function ( $ ) 
{

    $.fn.imgZoom = function( options ) 
    {             
        var settings = $.extend({
            escalaX :               1.4,
            escalaY:                1.4,
            rotacion:               '25deg',
            velAnimacionEntrada:    '1.4s',
            velAnimacionSalida:     '.5s',
            linAnimacion:           'ease-in'
        }, options );            
        
        //Inicializar cada uno de los elementos 
        this.each(function () 
        {            

        });                         
            
        this.hover(function()
        {

        });
            
        this.mouseleave(function()
        {

        });                   
        
        return this;                                  
    }  
    
}( jQuery ));
