class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  async _fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

Array.prototype.groupBy = function (somekey) {
  return this.reduce((groups, item) => {
    const key = item[somekey];
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
};
