module.exports = function(app, db){
    require ('./ads')(app, db);
    require ('./users')(app, db);
    require ('./transactions')(app, db);
}
