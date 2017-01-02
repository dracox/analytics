/**
 * Created by joan.llobera on 02/01/2017.
 */
apiJS = {
    getHeader : function getHeader(){
        $.get( "http://localhost:8080/analytics/script/head", function( response ) {
            console.log(response)// response contains site information
        } );
    }
};
$().ready(function(){
    new apiJS();
});
