const launchlet = () => {
  const LCHOptionRecipes = Object.entries(modal.context.commands).map(([keyChord, { command, description }]) => {
    const key = modal.keyValues(JSON.parse(keyChord)).join('+')
    const LCHRecipeName = `${key}: ${description}`
    return {
      LCHRecipeName,
      LCHRecipeCallback: command
    }
  })
  Launchlet.LCHSingletonCreate({
    LCHOptionRecipes,
    LCHOptionMode: Launchlet.LCHModeCommit
  })
}

modal.map('Page', ['Alt', 'F1'], () => launchlet(), 'Run Launchlet')
