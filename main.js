function include(file){
  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
}




include('confi.js');


//include('config.js');
//include('pojo.js');
//include('app.js');
//include('retrieve.js');
// include('fetch.js');
