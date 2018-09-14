export const callRegistryAPI = (path) => {
  return window.fetch(`/v2${path}`)
    .then(response => response.json())
}
