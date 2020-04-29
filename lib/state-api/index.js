class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timeStamp: new Date(),
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = (authorId) => this.data.authors[authorId];

  getState() {
    return this.data;
  }

  subscribe = (cb) => {
    this.lastSubscriptionId++;
    this.subscriptions[this.lastSubscriptionId] = cb;

    return this.lastSubscriptionId;
  };

  unSubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((cb) => cb());
  };

  mergeWithState = (stateChange) => {
    this.data = {
      ...this.data,
      ...stateChange,
    };

    this.notifySubscribers();
  };

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({ searchTerm });
  };

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timeStamp: new Date(),
      });
    }, 1000);
  };
}

export default StateApi;
