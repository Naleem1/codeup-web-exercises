export const planetData = async (num = 1) => {
    try{
        let response = await fetch(`https://swapi.dev/api/planets/${num}`);
        let data =  await response.json();
        console.log(data)
        return data
    }catch(error){
        console.log(error)
    }

}

export const peopleData = async (num= 1) => {
    let response = await fetch(`https://swapi.dev/api/people/${num}`);
    let data = await response.json();
    console.log(eyeColor)
    return data

}

export const getEyeColor = async(id=1) => {
    let character = await peopleData(id);
    return character.eye_color;
}