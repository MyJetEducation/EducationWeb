import { MainAppStore } from './MainAppStore';

export class RootStore {
  mainAppStore: MainAppStore;

  constructor() {
    this.mainAppStore = new MainAppStore(this);
  }
}
