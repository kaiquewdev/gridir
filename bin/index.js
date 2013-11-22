#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var gridir = require('../lib');
var program = require('commander');
var pkg = require('../package');

program
    .version( pkg.version )
    .option( '-i, --input [filename]', 'Input file to read and make the structure.' )
    .option('-v, --verbose', 'Use to enable, verbosit mode.')
    .option('-k, --key [value]', 'Choose an specific key in the structure. Just of the first level.')
    .parse( process.argv );

if ( program.input ) {
    var filepath = path.normalize( program.input );
    var coding = 'utf-8';
    var mesh = JSON.parse( fs.readFileSync( filepath, coding ) ); 

    if ( program.key && ( program.key in mesh ) ) {
        mesh = mesh[ program.key ];  
    }

    console.log('Processing the structure... \n');

    function treeMeshHandler ( err, track ) {
        if ( program.verbose ) {
            if ( track && ( track !== '.' ) ) {
                console.log( ( ( !err ) ? 'Path was created: %s' : 'Existent path: %s' ), track );    
            }
        }
    }

    function treeDoneProcessingHandler () {
        console.log( 'Structure rendered!' );
    }

    gridir
        .build
        .tree( mesh, treeMeshHandler )
        .done( treeDoneProcessingHandler );

} else {
    console.log('Please, use -h for more information.');
}
