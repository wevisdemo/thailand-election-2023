export const scrollInToView = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: "smooth", block: "start" })
}