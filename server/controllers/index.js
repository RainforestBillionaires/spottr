module.exports = function(app){
    require ('./ads')(app);
    require ('./users')(app);
}
