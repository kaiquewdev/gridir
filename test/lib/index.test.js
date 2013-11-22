var gridir = require('../../lib');
var should = require('should');
var fs = require('fs');
var spawn = require('child_process').spawn;

suite('gridir', function () {
    suite('build', function () {
        test('tree', function ( done ) {
            var rm = null;
             var actual = {
                'case': {
                    'foo': {
                        'bar': {},
                        'baz': {}
                    },

                    'bar': {
                        'baz': {}    
                    }
                }
            };    
            var expected = gridir;

            function treeStepHandler ( err, track ) {
                fs.existsSync( track );
            }

            gridir
                .build
                .tree( actual, treeStepHandler )
                .should
                .be
                .eql( expected );   

            rm = spawn( 'rm', [ 
                '-rf', 
                'case/' 
            ], { 
                cwd: [ __dirname, '..', '..' ].join('/') 
            });

            done();
        });
    });
});
