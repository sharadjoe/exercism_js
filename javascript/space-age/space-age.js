export class SpaceAge{
    constructor(seconds) {
        this.seconds = seconds
    }
    onEarth(){
        this.earthSeconds = this.seconds / 31557600
        return parseFloat((this.earthSeconds).toFixed(2))
    }
    onMercury(){
        return parseFloat((this.earthSeconds / 0.2408467).toFixed(2))
    }
    onVenus() {
        return parseFloat((this.earthSeconds / 0.61519726).toFixed(2))
    }
    onMars(){
        return parseFloat((this.earthSeconds / 1.8808158).toFixed(2))
    }
    onJupiter(){
        return parseFloat((this.earthSeconds / 11.862615).toFixed(2))
    }
    onSaturn() {
        return parseFloat((this.earthSeconds / 29.447498).toFixed(2))
    }
    onUranus() {
        return parseFloat((this.earthSeconds / 84.016846).toFixed(2))
    }
    onNeptune() {
        return parseFloat((this.earthSeconds / 164.79132).toFixed(2))
    }
    
}