const axios = require("axios");

const getAnimal = async ({animal}) => {
    const animalMap = {
        cat: "https://aws.random.cat/meow",
        dog: "https://random.dog/woof.json",
        wolf: "https://randomfox.ca/floof/"
    };

    const chosenAnimal =  animalMap[animal];

    if(chosenAnimal){
        try {
            const {data} = await axios.get(chosenAnimal);
            const url = data.url || data.file || data.image;
            const regex = /\.(webp|mp4|webm)$/g;
            const isVideo = regex.test(url);
            return {
                url,
                type: isVideo ? "video" : "image"
            }

        } catch (error) {
            console.error(error);
            return {error};
        }
    }
    return {
        error: "Animal not available"
    };
};

module.exports={
    getAnimal
};

