export class RegisterUser {
  constructor(
    public username: string,
    public role: string[],
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string
  ) {
  }
}
