#!/usr/bin/env node

import { program } from "commander";
import initCommand from "../commands/init.js";

// Register commands
program.name("bratva-ui").description("CLI for Bratva UI components").version("1.0.0");

program.command("init").description("Initialize bratva-ui by creating a configuration file").action(initCommand);

// Parse CLI arguments
program.parse(process.argv);
