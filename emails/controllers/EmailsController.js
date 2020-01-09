exports.send = (req, res) => {
    setTimeout(function(address) {
        var json = JSON.parse(req);
        console.log(`Email sent.`+ json.email);
    },5000);    
};