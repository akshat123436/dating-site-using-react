class ApiFeature {
  constructor(query, queryStr) {
    // console.log(queryStr);
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    // console.log(this.queryStr);
    const hobbies = this.queryStr.hobbies
      ? {
          hobbies: {
            $regex: this.queryStr.hobbies,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...hobbies });
    return this;
  }

  filter(req) {
    const queryCopy = { ...this.queryStr };
    delete queryCopy["hobbies"];
    queryCopy["_id"] = {};
    queryCopy["_id"]["$ne"] = req.user._id;
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    // console.log(queryStr);
    // console.log(queryCopy);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
}

module.exports = ApiFeature;
