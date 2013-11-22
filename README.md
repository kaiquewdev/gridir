# Gridir

## Purpose

Make with a json file, a directory structure.

## Installation

    [sudo] npm install -g gridir

    or to use API

    [sudo] npm install gridir

## Usage

#### Input

    gridir -i [filename] or --input [filename] // read a file with your structure.

#### Verbose

    gridir -i [filename] -v or --verbose  // enable the verbose mode.

#### Key
    
    gridir -i [filename] -k [value] or --key [value] // select the key of first level of the structure.

#### Tricks

Put the structure on the package.json file, like that:

    {
      "name": "gridir",
      "version": "0.0.1",
      "description": "Make directory structure based on literal object.",
      "main": "lib/index.js",
      "bin": "bin/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "mkdir",
        "tree",
        "directory-structure"
      ],
      "structure": {
        "bin": {},
        "doc": {},
        "lib": {},
        "test": {
          "case": {}    
        }
      },
      "author": "Kaique da Silva <kaique.developer@gmail.com>",
      "license": "BSD",
      "dependencies": {
        "mkdirp": "~0.3.5",
        "traverse": "~0.6.6"
      },
      "devDependencies": {
        "should": "~2.1.0"
      }
    }

And then, run the command:

    gridir -i package.json -v -k "structure"

Now if everything is fine, your structure was created.

#### Contribution

Feel free to help improve the project.
