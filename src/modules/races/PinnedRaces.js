class PinnedRaces {
    constructor() {
        this.key = 'pinnedRaces';
        this.data = this.fetchData()
    }

    fetchData() {
        const storedData = window.localStorage.getItem(this.key)
        return storedData ? JSON.parse(storedData) : { pinnedRaces: {} }
    }

    saveData() {
        window.localStorage.setItem(this.key, JSON.stringify(this.data))
    }

    getRaces(year) {
        return this.data.pinnedRaces[year] || []
    }

    addRace(year, name) {
        this.data = this.fetchData();
        if (!this.data.pinnedRaces[year]) {
            this.data.pinnedRaces[year] = [];
        }
        this.data.pinnedRaces[year].push(name)
        this.saveData()
    }

    removeRace(year, name) {
        this.data = this.fetchData();
        const newData = this.data.pinnedRaces[year].filter(r => r !== name)
        this.data.pinnedRaces[year] = [...newData]
        this.saveData()
    }
}

export default PinnedRaces