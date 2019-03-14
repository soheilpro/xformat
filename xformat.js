#!/usr/bin/env node

const Mustache = require('mustache');
const argv = require('yargs').argv;

function readInput() {
  return new Promise(resolve => {
    let data = Buffer.alloc(0);

    process.stdin.on('data', chunk => {
      data = Buffer.concat([data, chunk]);
    });

    process.stdin.on('end', () => {
      resolve(data);
    });
  });
}

async function main() {
  const input = (await readInput()).toString();
  const output = Mustache.render(input, argv);

  console.log(output);
}

main();
