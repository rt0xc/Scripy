try {
    
    let responseObject = JSON.parse($response.body);

    
    responseObject.isUSDXDepositsAvailable = true;

    
    let modifiedResponseBody = JSON.stringify(responseObject);

    
    $done({body: modifiedResponseBody});
} catch (error) {
    console.log("Error modifying response: ", error);
    
    $done({});
}