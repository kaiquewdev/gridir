'use strict';
var root = this;
// core modules
var path = require('path');
// thidy-party modules
var traverse = require('traverse');
var mkdirp = require('mkdirp');
// internal namespaces
var mount = root.mount = {};
var build = root.build = {};
// lib global scope
var timeout = 0;

function done ( fn ) {
    return setTimeout( (fn || function () {}), 5000 );
}
root.done = done;

function buildTree ( mesh, next ) {
    var out = false;
    var next = next || function () {};
    var paths = traverse( mesh ).paths();
    var sep = '/';

    function mkdirpPathHandler ( track ) {     
        return function mkdirpPathSep ( err ) {
            if ( !err ) {
                timeout += 50;
            } else {
                timout -= 50;    
            }
            next( err, track );
        };
    } 

    function mapPathsHandler ( track ) {
        if ( track ) {
            track = path.normalize( track.join( sep ) );
            mkdirp( track, mkdirpPathHandler( track ) );    
        }
    }
    paths.map( mapPathsHandler );

    return root;
}
build.tree = buildTree;
