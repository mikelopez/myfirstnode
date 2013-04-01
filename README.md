Node Projects / Testing and Learning Playground
--------
* Create db_settings.js file

<pre>
var settings = require('./globalsettings');

module.exports = { 
    DB_MYSQL_CONFIG: {
      username: 'myfirstnode',
      password: 'myfirstnode123',
      host: '127.0.0.1',
      database: 'myfirstnode'
    },  
    get_db_uri: function() {
      var db = this.DB_MYSQL_CONFIG;
      var str = settings.db_uri_prefix;
      str += '://'+db.username+':';
      str += db.password+'@'+db.host+'/';
      str += db.database;
      return str;
    },  
};
</pre>
