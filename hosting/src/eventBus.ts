import mitt, {Emitter} from 'mitt';

export enum Event {
  all = '*',
  test = 'test',
}

export type Events = {
  [Event.all]: any;
  [Event.test]: string;
}

export interface CustomEvent {
  name: Event;
  params: any;
}

class EventBus {
  _emitter: Emitter<Events>;

  get emitter(): Emitter<Events> {
    if(this._emitter) {
      return this._emitter;
    } else {
      this._emitter = mitt<Events>();
      return this._emitter;
    }
  }

  private unregisterAllEvents() {
    this.emitter.all.clear();
  }

  register(customEventName: Event, handler: ((e: any) => void)) {
    this.emitter.on(customEventName, handler)
  }

  unregister(customEventName: Event, handler: ((e: any) => void)) {
    this.emitter.off(customEventName, handler);
  }

  dispatch(customEvent: CustomEvent) {
    this.emitter.emit(customEvent.name, customEvent.params);
  }

}

export default new EventBus();
