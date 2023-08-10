const sql=require("mysql");

const val=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"chopa"
});
module.exports=val;