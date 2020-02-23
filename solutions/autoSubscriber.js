/**
 * @Interface IEventSubscriber
 * @method addEventListener
 * @method removeEventListener
 */


/**
 * An utilite to bind and unbind eventHandlers;
 * @property {IEventSubscriber} target
 * @property {{IEventSubscriber|(e) => void}[]} handlersToUnsubscribe
 */
export default class AutoSubscriber {
  /**
   * @param {IEventSubscriber} target
   * @param {{[string]: (e) => void}} handlers
   */
  constructor(target, handlers) {
    this.target = target;
    this.subscribe(handlers);
  }

  /**
   * @param {{[string]: (e) => void}} handlers
   * @return {void}
   */
  subscribe(handlers) {
    this.handlersToUnsubscribe = Object.keys(handlers).reduce((collector, eventName) => {
      const handler = handlers[eventName];
      this.target.addEventListener(eventName, handler);
      collector.push(eventName, handler);
      return collector;
    }, []);
  }

  /**
   * @return {void}
   */
  unsubscribe() {
    for (let i = 0; i < this.handlersToUnsubscribe.length; i += 2) {
      this.target.removeEventListener(this.handlersToUnsubscribe[i], this.handlersToUnsubscribe[i + 1]);
    }
    this.handlersToUnsubscribe.length = 0;
  }
}
