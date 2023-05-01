export const msToPlaytime = (ms: number) => {
  const hours = Math.floor(ms / 1000 / 60 / 60)
  const minutes = Math.floor(ms / 1000 / 60 - hours * 60)
  return `${hours} hr ${minutes} min`
}

export const dateStringToDate = (dateString: string) => {
  const date = new Date(dateString)
  if (date.getFullYear() === 1970) return
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
}

export const msToDuration = (ms: number) => {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000).toFixed(0)
  return Number(seconds) === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${Number(seconds) < 10 ? "0" : ""}${seconds}`
}
