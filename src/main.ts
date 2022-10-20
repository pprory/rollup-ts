import { Core } from "./core";

function main(name: string) {
  console.log(name);

  const core = new Core("小张");
  core.say("你好");
}

main("xiao sssp");
