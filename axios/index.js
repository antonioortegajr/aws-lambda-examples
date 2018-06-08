let axios = require('axios')

let jsonReturn = '';

// use axios and async await
async function axiosCall(arg) {
    let url = 'https://yourEndpoint';
     await axios.get(url)
    .then(async function (response) {
        locajsonReturntion = await response.data;
        console.log(jsonReturn)
    })
    .catch(function (error) {
        console.log(error);
    });
    return await jsonReturn;
}


exports.handler = async (event) => {
    // arg is {"arg": "sampleText"}
    let arg = event.arg;
    
    let axiosReturn = await axiosCall(arg);

    return axiosReturn
};
