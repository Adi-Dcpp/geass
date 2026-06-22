#!/usr/bin/env node

import{ Command }from "commander";

import { runScan } from "./commands/scan.js";

import { resolveRoot } from "./resolver/resolveRoot.js";

const program = new Command();

program
    .name("geass")
    .description("Security and code hygiene gate for Git repositories.") 
    .version("1.0.0");

program
    .command("scan")
    .description("Scan a repository for specific patterns.")
    .option("--repo", "Scan from gir repository root")
    .option("--path <path>", "Scan a custom path")
    .action(async (options) => {
        if (options.repo && options.path) {
            console.error(
                "Error: --repo and --path cannot be used together."
            );
            return;
        }
    
        let root : string | null ;

        if(options.path) {
            root = await resolveRoot("custom", options.path)
        } else if(options.repo) {
            root = await resolveRoot("git", null)
        }else {
            root = await resolveRoot("cwd", null)
        }

        if(!root)
                return 
        await runScan(root);
    });

program.parse()