import { Notification } from "../Notifications";

function StringValidation<TBase extends Constructor>(Base: TBase) {
  return class StringValidation extends Base {
    #notifications: Array<Notification>
    #value: string;
    LengthGreatThen(Value: string, Length: number, Key: string, Message: string) {
      if (Value.length <= length) this.#notifications.unshift(new Notification(Key, Message));
      return this
    }
    LenghtLowerThen(Value: string, Length: number, Key: string, Message: string) {
      if (Value.length >= length) this.#notifications.unshift(new Notification(Key, Message));
      return this
    }
    LengthGreatOrEqualThen(Value: string, Length: number, Key: string, Message: string) {
      if (Value.length < length) this.#notifications.unshift(new Notification(Key, Message));
      return this
    }
    LenghtLowerOrEqualThen(Value: string, Length: number, Key: string, Message: string) {
      if (Value.length > length) this.#notifications.unshift(new Notification(Key, Message));
      return this
    }
  }
}

export default StringValidation