#! /usr/bin/env node
import { program } from 'commander';
import fetch from 'node-fetch';
// const fetch = require("node-fetch");
import cliMd from 'cli-markdown';

program
    .name("abhishek-shukla")
    .usage("[options]")
    .option("-r, --resume", "prints my developer resume");

program.parse(process.argv);

const { resume } = program.opts();

if (resume) {
} else {
    fetch("https://raw.githubusercontent.com/abhishek-shukla21/abhishek-shukla21/master/README.md")
        .then((response) => response.text())
        .then((text) => {
            console.log(cliMd(text))
        })
        .catch(() =>{
            console.error(e);
        });
}
