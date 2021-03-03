export class JwtResponse {
  constructor(
    public accessToken: string,
    public type: string,
    public id: number,
    public username: string,
    public email: string,
    public roles: string[]
  ) {
  }
}
