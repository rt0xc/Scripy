var body = $response.body; 
try {
    var obj = JSON.parse(body); 
    obj.identityVerification.verificationSteps.liveness.status = "NOT_STARTED";
    body = JSON.stringify(obj); 
    $done({body}); 
} catch (e) {
    $done();
}
