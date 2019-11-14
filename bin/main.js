#!/usr/bin/env node

const parser = require('./parser.js')
numeral = process.argv[2]
parser.parse(numeral)