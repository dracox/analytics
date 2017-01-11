/**
 * Created by joan.llobera on 02/01/2017.
 */
apiJS = {
    dataRS : null,
    apiRequest : function ajaxRequest(url){
        $.ajax({
            url: url,
            //TODO: Considerar usar jsonP
            dataType: "json",
            beforeSend: function( xhr ) {
                xhr.overrideMimeType( "application/json;charset=UTF-8" );
            }
        })
        .done(function( data ) {
            apiJS.dataRS = (data);
            apiJS.insertScriptBody(apiJS.dataRS.script);
        });
    },

    insertScriptBody: function(body){
        if(body) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.innerHTML = body;
            $("head").append(script);
        }
    },

    insertScriptSrc : function (src) {
        if(src) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = body;
            $("head").append(script);
        }
    }
};
$().ready(function(){
    apiJS.apiRequest("http://localhost:8080/api/request");

});
