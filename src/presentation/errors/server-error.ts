export class ServerError extends Error {
  constructor () {
    super('Invalid server error')
    this.name = 'ServerError'
  }
}
