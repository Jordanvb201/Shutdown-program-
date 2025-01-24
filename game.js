// Shutdown the computer
exec("shutdown /s /t 0", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error shutting down the computer: ${error.message}`);
    return;
  }
  console.log("Shutdown command executed successfully.");
});

