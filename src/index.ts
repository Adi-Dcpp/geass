#!/usr/bin/env node

import{ Command }from "commander";

import { runScan } from "./commands/scan.js";

const program = new Command();

program
    .name("geass")
    .description("A command-line tool for scanning files and directories.") 
    .version("1.0.0");

program
    .command("scan")
    .description("Scan a repository for specific patterns.")
    .option("-r, --recursive", "Scan repository recursively")
    .action(() => {
        runScan();
    });

program.parse()