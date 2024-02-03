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

  async getGroupedData(url, property) {
    try {
      const data = await this._fetchData(url);
      const groupedData = data.groupBy(property);
      return groupedData;
    } catch (error) {
      console.error("Error grouping data:", error);
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

// const singleton = Singleton.getInstance();

const result = singleton
  ._fetchData("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// const singletoninst = Singleton.getInstance();
// singletoninst
//   .getGroupedData("https://jsonplaceholder.typicode.com/posts", 1)
//   .then((groupedData) => {
//     console.log(groupedData);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
