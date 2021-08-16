//Declaramos la llamada a gulp para buscar un archivo y para crear destinos de guardado.
const {series,src,dest,watch} = require ("gulp")


//Declaramos la llamada a gulp para compilar sass
var sass = require('gulp-sass')(require('sass'))
sass.compiler=require("dart-sass")

const concat = require("gulp-concat")

//Creamos una funcion en la que indicamos donde se encuentra el archivo de SASS y donde queremos guardar el CSS correspondiente.

function javaScript() {
    return src ("/js/**/*.js")
        .pipe(concat("bundle.js"))
        .pipe(dest("/build/js"))
}

function css() {
    return src ("./scss/app.scss")
        .pipe(sass({ outputStyle: "expanded"}))
        .pipe(dest("./build/css"))
}
function watchFile() { 
    watch( "./scss/**/*.scss", css)
    watch("./js/**/*.js", javaScript)
}



//Exportamos la funcion para poder ejecutarla en la terminal
exports.css = css
exports.watchFile = watchFile;