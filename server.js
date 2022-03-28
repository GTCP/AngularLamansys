const  express  =  require ( 'express' ) ;
const  ruta   =  require ( 'ruta' ) ;

const  app  =  express ( ) ;

aplicación _ uso ( express . static ( './dist/proyecto1' ) ) ;

aplicación _ get ( '/*' , ( req , res )  =>  res . sendFile ( 'index.html' ,  { root : 'dist/proyecto1-heroku/' } ) ,
);
aplicación _ escucha ( proceso . entorno . PUERTO  ||  8080  ) ;