import Picture from 'gatsby-image'

class PictureDelay extends Picture {

    constructor() {
        super()
        this.loadPictures = this.loadPictures.bind(this)
    }

    loadPictures() {
        console.log("Loading pictures...")
        this.setState({isVisible: true});
    }

    componentDidMount() {

        // call the parent class' componentDidMount method
        // to preserve existing behavior
        super.componentDidMount();

        window.setTimeout(loadPictures, 1000);

        window.onload = () => {
            console.log("Onload triggered")
            this.setState({
                isVisible: true
            })
        }
    }
}

export default PictureDelay