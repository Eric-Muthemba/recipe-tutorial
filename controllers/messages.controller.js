exports.publish = function (req,res) {
    var message = req.params.message
    var top = req.params.topic
    msgQueue = exchange.queue({name:top,durable:true});
    exchange.publish({msg:message},{key:top})
    res.write("message is "+message)
    res.end()
}


exports.subscribe = function (req,res){
    var top = req.params.topic
    msgQueue = exchange.queue({name:top,durable:true})
    msgQueue.consume(sendMsg);
    res.end();
}