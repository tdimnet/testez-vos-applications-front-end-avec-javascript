import Header from '../common/header/index.js'

const AddSensor = {
    render: () => {
        return `
            <div class="add-sensor-page">
                <div class="add-sensor-main-wrapper">
                    ${Header.render()}
                    <main class="add-sensor-page-main">
                        <div class="add-sensor-page-page-main-top-header">
                            <h2 data-testid="add-sensor-title" class="section-title">Ajout d'un nouveau capteur</h2>
                        </div>
                        <form class="add-sensor-form" action="#" method="POST">
                            <fieldset>
                                <legend>Informations de base du capteur</legend>
                                <div class="form-group">
                                    <label for="">ID du capteur</label>
                                    <input type="text" placeholder="123456">
                                </div>
                                <div class="form-group">
                                    <label for="">Status du capteur</label>
                                    <select name="" id="">
                                        <option value="on">Actif</option>
                                        <option value="off">Inactif</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="">Marque du capteur</label>
                                    <input type="text" placeholder="facadiaRT">
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Coordonnées géographiques du capteur</legend>
                                <div class="form-group">
                                    <label for="">Lattitude du capteur</label>
                                    <input class="lat-input" type="text" placeholder="facadiaRT">
                                </div>
                                <div class="form-group">
                                    <label for="">Longitude du capteur</label>
                                    <input class="lng-input" type="text" placeholder="facadiaRT">
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend>Technicien rattaché</legend>
                                <div class="form-group">
                                    <label for="">ID du technicen</label>
                                    <input type="text" placeholder="123456">
                                </div>
                            </fieldset>
                            <div>
                                <button class="submit-btn" type="submit">Ajouter le capteur</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        `
    }
}

export default AddSensor
