krabby.commands.launchlet = () => {
  const LCHOptionRecipes = Object.values(krabby.modes.modal.context.commands).map(({ keyChord, command, description }) => {
    const keys = krabby.modes.modal.keyValues(keyChord)
    const key = keys.join('-')
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

krabby.modes.modal.map('Page', ['Alt', 'F1'], () => krabby.commands.launchlet(), 'Run Launchlet', 'Launchlet')
