import { Notification } from "../Notifications";
import BaseValidation from "../Validations/base"
import StringValidation from "../Validations/string";
class ContractBase<T> extends BaseValidation {
  #notifications: Array<Notification> = [];
  #value: T

  constructor(value: T) {
    super()
    this.#value = value
  }
  public get GetNotifications(): Array<Notification> {
    return this.#notifications;
  }
}

function Contract(value: string): ReturnType<typeof Contracts.string>
function Contract(value: number): ReturnType<typeof Contracts.number>
function Contract(value: any): any {
  let result = Contracts[typeof value](value)
  return result
}

const Contracts = {
  "string": (value: string) => {
    let a = StringValidation(ContractBase<string>)
    return new a(value)
  },
  "number": (value: number) => {
    let a = ContractBase<number>
    return new a(value)
  }
}