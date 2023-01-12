const pageOnLoad = async () => {
    console.log("Loading model")
    const model = await tf.loadLayersModel('http://localhost:3000/model.json');
    console.log("Model loaded!")
}
