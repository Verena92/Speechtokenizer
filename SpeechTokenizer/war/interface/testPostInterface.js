/**
 * Autor: Maren
 */

//This class was created to test our own Post interface in RestService.java. 
//Has to be deleted afterwards as Event group is going to use it

var Document = new Object();
	Document.userId = "1234"
	Document.hangoutsId = "4567"
   	Document.documentName = "Endpoint-Speech"
   	Document.drivePath = "https://drive.google.com/drive/folders/0Bxmha3k4bXlgTzZFcGRjOVBZd28"

function SendDocuments(Document){
//Asynchroner Post Request auf die Event Gruppe
$.ajax({ type:'POST', 
	url: 'http://146.148.67.230/de.hdm.speechtomcat/rest/PostDocuments',  
	data: JSON.stringify(Document),
	contentType: 'application/json',
	datatyp: 'json',

	//Fehler loggen 
    error: function( ){
        console.log("Error");
    },

	//Bei erfolgreichem Request Objekt in der Console ausgeben
    success: function(responsedata){
    	console.log("success")
        // hier response_data 
  

    	    //    new_keys = response_data["new_keys"]
    		
    	}
});

}