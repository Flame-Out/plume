import { Notification } from "../Notifications";

export default abstract class BaseValidation {
  #notifications
  Equal(Value: any, Compare: any, Key: string, Message: string) {
    if (Value != Compare) {
      this.#notifications.unshift(new Notification(Key, Message));
    }
    return this;
  }
  NotEqual(Value: any, Compare: any, Key: string, Message: string) {
    if (Value == Compare) {
      this.#notifications.unshift(new Notification(Key, Message));
    }
    return this;
  }
  StrictEqual(Value: any, Compare: any, Key: string, Message: string) {
    if (Value !== Compare) {
      this.#notifications.unshift(new Notification(Key, Message));
    }
    return this;
  }
  StrictNotEqual(Value: any, Compare: any, Key: string, Message: string) {
    if (Value === Compare) {
      this.#notifications.unshift(new Notification(Key, Message));
    }
    return this;
  }
  IsDefined(Value: any, Key: string, Message: string) {
    if (typeof Value === undefined) this.#notifications.unshift(new Notification(Key, Message));
    return this
  }
}