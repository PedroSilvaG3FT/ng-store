import { LocalStorageService } from './storage/local-storage';
import { SessionStorageService } from './storage/session-storage';

export class NgStorePersistService {
  private storageControl = {
    local: new LocalStorageService(),
    session: new SessionStorageService(),
  };

  constructor(
    private name: string,
    private storageKey: 'local' | 'session' = 'local'
  ) {}

  private get moduleKey(): string {
    return `@ANGULAR_TEMPLATE:${this.name}`;
  }

  private get storage() {
    return this.storageControl[this.storageKey];
  }

  private getCurrentState() {
    const storaged = this.storage.get(this.moduleKey);

    if (storaged) {
      try {
        return JSON.parse(storaged);
      } catch (error) {
        console.error(
          `an error occurred while converting to object ${this.moduleKey}`
        );
        return {};
      }
    } else return {};
  }

  public getState<Data>(model: Data): Data {
    const state = this.getCurrentState();
    const hasState = !!Object.keys(state).length;

    if (hasState) return state;
    else return model;
  }

  public commit(value: any) {
    this.storage.set(this.moduleKey, JSON.stringify(value));
    return value;
  }
}
