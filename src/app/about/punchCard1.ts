export class punchCard {
  private firstName: String;
  private lastName: String;
  private punchInTime: Date;
  private punchOutTime: Date;

  constructor(
  ) {
  }
  public setName(firstName: String, lastName: String) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  public setPunchInTime(punchInTime: Date) {
    this.punchInTime = punchInTime;
  }
  public setPunchOutTime(punchOutTime: Date) {
    this.punchOutTime = punchOutTime;
  }
  public getFirstName() {
    return this.firstName;
  }
  public getLastName() {
    return this.lastName;
  }
  public getPunchInTime() {
    return this.punchInTime;
  }
  public getPunchOutTime() {
    return this.punchOutTime;
  }
}
