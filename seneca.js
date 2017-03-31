#!/usr/bin/env node

const program = require('commander');

program
.arguments('<file>')
.option('-v, --verify <email>', 'verifies the email address given as a Seneca email')
.option('-f, --format <name>', 'formats the name given as a Seneca email')
.parse(process.argv);

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
    if (!email || typeof email !== 'string') {
        return false;
    }
    const regExp = /^.*\.?.*@(myseneca|senecacollege|senecac\.on)\.ca$/gi;
    return email.search(regExp) !== -1;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (n) {
    const error = 'Error!';
    if (!n || typeof n !== 'string') {
        return error;
    }
    let name = n.toLowerCase();
    name = name.split(' ');
    return name.length === 2 ? `${name[0][0] + name[1]}@myseneca.ca` : error;
};

if (program.verify) {
    if (exports.isValidEmail(program.verify)) {
        console.log('This is a valid email.');
    } else {
        console.log('This is not a valid email.');
    }
} else if (program.format) {
    console.log(exports.formatSenecaEmail(program.format));
}
