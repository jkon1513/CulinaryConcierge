/*
LF1 v1:
    gets dining suggestions from yelp based on slots passed in from lex
*/

exports.handler = async function(event) {
    return dispatch(event);
}

function dispatch(intent_request) {
    const intent_name = intent_request["currentIntent"]["name"]
    
    if (intent_name === "getSuggestionsIntent"){
        return getSuggestions(intent_request)
    }
    else{
        console.log(`An unsupportent intent was sent to LF0: ${intent_request["currentIntent"]["name"]}`)
        throw "invalidIntentException"
    }
}

/*================================
    Response Builders
=================================*/

function delegate(persistent_data, slots){
    const response =  {
        sessionAttributes: persistent_data,
        dialogAction: {
            type: "Delegate",
            slots: slots
        }
    }

    return response;
}

function close(response_mssg){
    const resp =   {
       sessionAttributes:{},
       dialogAction:{
           type:"Close",
           fulfillmentState: "Fulfilled",
           message: {
               contentType: "PlainText",
               content: response_mssg
           }
       }
    } 
    
    return resp;
}


