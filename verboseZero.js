var verboseEnabled = true;
exports.enable = function(){
    verboseEnabled = true;
};
exports.disable = function(){
    verboseEnabled = false;
};
exports.log = function(data){
    if(verboseEnabled === true){
        console.log(data);
    }
}
exports.logm = function(data){
    if(verboseEnabled === true){
        for(i=0;i<data.length;i++){
            console.log(data[i]);
        }
    }
}