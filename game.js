const { exec } = require("child_process");

// Open Command Prompt
exec("start cmd", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error opening Command Prompt: ${error.message}`);
    return;
  }
  console.log("Command Prompt opened successfully.");
});

// Shutdown the computer
exec("shutdown /s /t 0", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error shutting down the computer: ${error.message}`);
    return;
  }
  console.log("Shutdown command executed successfully.");
});

