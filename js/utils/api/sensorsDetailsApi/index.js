
export const retrieveSensorsDetailsData = () => fetch('http://localhost:5500/data/facade-detail-data.json')
    .then(res => res.json())
    .then(data => data.facade)
    .catch(err => console.log("Oh no", err))