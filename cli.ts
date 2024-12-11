#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient, { pastel } from "gradient-string";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import { currentDay } from "./config/globalsState";
import { inputFileExists } from "./helpers/checkIfInputExists";
import { solution } from "./src/solution";

async function animatedWelcome() {
  const welcomeMessage = figlet.textSync("Welcome", {
    font: "Big",
    horizontalLayout: "default",
    verticalLayout: "default",
  });

  const customGradient = gradient(["#FF5733", "#33FF57", "#3357FF"]);

  console.log(customGradient.multiline(welcomeMessage));

  const additionalText = `
Welcome to the 2024 AoC challenge by Huseyn Hajiyev.
In this program, you will find all the challenges and their solutions so far.
`;

  console.log(pastel.multiline(additionalText));
  const spinner = createSpinner(" Loading instructions...").start();
  await new Promise((resolve) => setTimeout(resolve, 4000));
  spinner.success();
}
function dayChoices(): string[] {
  const days: string[] = [];
  for (let i = 0; i < currentDay; i++) {
    days.push(`Day ${i + 1}`);
  }
  return days;
}

async function getQuestionDay(): Promise<number> {
  const days: string[] = dayChoices();
  const getDay = await inquirer.prompt({
    name: "question_day",
    type: "list",
    message: "Which day do you want to run the solution for?",
    choices: days,
  });
  const dayMatch = getDay.question_day.match(/\d+/);
  return dayMatch ? parseInt(dayMatch[0], 10) : 0;
}

async function handleDaySelection(day: number): Promise<void> {
  const spinner = createSpinner(
    `Checking input file for Day ${day}...`
  ).start();

  if (inputFileExists(day)) {
    spinner.success({ text: `Input file for Day ${day} found.` });
    console.log(chalk.green(`Running solution for Day ${day}...`));
    solution(day); // Call the solution function
  } else {
    spinner.error({ text: `Input file for Day ${day} not found.` });
    console.log(
      chalk.red(
        `Please create the input file for Day ${day} before running the solution.`
      )
    );
  }
}

export async function cliRun() {
  await animatedWelcome();

  if (currentDay === 0) {
    console.log(chalk.yellow("No solutions available yet. Check back later!"));
    return;
  }

  const day = await getQuestionDay();
  await handleDaySelection(day);
}
