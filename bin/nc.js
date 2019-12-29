#!/usr/bin/env node
const program = require("commander");
const Services = require("../lib/services");
const ora = require("ora");

const spinner = ora();

program
  .version("0.0.1", "-v, --version")
  .option("-a, --about", "View about section of  NodeCloud CLI")
  .option("-i, --init", "Initialize provider")
  .option("-t, --type <type>", "Type")
  .option("-j, --service <type>", "Service")
  .option("-o, --config", "Configure NodeCloud")
  .option("-c, --compute <type>", "Compute")
  .option("-s, --storage <type>", "Storage")
  .option("-d, --database <type>", "Database")
  .option("-n, --network <type>", "Network")
  .option("-g, --iam <type>", "IAM")
  .option("-r, --cr <type>", "Caller Reference")
  .option("-z, --name <type>", "Name")
  .option("-p, --port <type>", "Port")
  .option("-y, --key <type>", "Key")
  .option("-u, --value <type>", "Value")
  .option("-h, --id <type>", "Id")
  .option("-m, --image <type>,", "Image")
  .option("-n, --instance <type>,", "Instance")
  .option("--vm-name <type>", "VM name")
  .option("--in-id <type>", "Instance ID")
  .option("--st-name <type>", "Storage name")
  .option("--file <type>", "File path")
  .option("--gp-name <type>", "IAM group name")
  .option("--ar-name <type>", "IAM attached resource name")
  .parse(process.argv);

Services(program, spinner);
