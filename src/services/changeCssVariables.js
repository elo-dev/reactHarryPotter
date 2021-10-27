export const changeCssVariables = (theme) => {
  const root = document.querySelector(':root')

  const cssVariables = ['header', 'background', 'container', 'filter']

  cssVariables.map((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    )
  })
}
