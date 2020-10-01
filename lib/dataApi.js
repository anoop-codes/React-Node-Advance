class DataAPi {

    constructor(rawData) {
        this.rawData = rawData
    }

    mapIntoObj(data) {
        return data.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }

    getArticals() {
        return this.mapIntoObj(this.rawData.articles)
    }

    getAuthors() {
        return this.mapIntoObj(this.rawData.authors)
    }
}

export default DataAPi;