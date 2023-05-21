const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const gameName1 = ref('');
    const imageLink1 = ref('');
    const gameDeveloper1 = ref('');
    const gameReleaseDate1 = ref('');
    const gameName2 = ref('');
    const imageLink2 = ref('');
    const gameDeveloper2 = ref('');
    const gameReleaseDate2 = ref('');
    const gameName3 = ref('');
    const imageLink3 = ref('');
    const gameDeveloper3 = ref('');
    const gameReleaseDate3 = ref('')


    const fetchData = async () => {
      try {
      const options1 = {
        method: 'GET',
        url: 'https://steam2.p.rapidapi.com/appDetail/1470540',
        headers: {
          'X-RapidAPI-Key': '7c0a68ac20msh8082f33ad47e814p14464djsn8f521b0f9b2f',
          'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
      };
      const response1 = await axios(options1);
      gameName1.value = response1.data.title;
      imageLink1.value = response1.data.imgUrl;
      gameDeveloper1.value = response1.data.developer.name;
      gameReleaseDate1.value = response1.data.released;
        


      const options2 = {
        method: 'GET',
        url: 'https://steam2.p.rapidapi.com/appDetail/1388770',
        headers: {
          'X-RapidAPI-Key': '7c0a68ac20msh8082f33ad47e814p14464djsn8f521b0f9b2f',
          'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
        }
      };

      const response2 = await axios(options2);

          gameName2.value = response2.data.title;
          imageLink2.value = response2.data.imgUrl;
          gameDeveloper2.value = response2.data.developer.name;
          gameReleaseDate2.value = response2.data.released;

        
          const options3 = {
            method: 'GET',
            url: 'https://steam2.p.rapidapi.com/appDetail/362890',
            headers: {
              'X-RapidAPI-Key': '7c0a68ac20msh8082f33ad47e814p14464djsn8f521b0f9b2f',
              'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
            }
          };

          const response3 = await axios(options3);

          gameName3.value = response3.data.title;
          imageLink3.value = response3.data.imgUrl;
          gameDeveloper3.value = response3.data.developer.name;
          gameReleaseDate3.value = response3.data.released;
            
    }
    catch(error)
    {
      gameNameAPEX.value = 'An error occurred: ' + error;
    }
  };

    return { gameName1,imageLink1,gameDeveloper1,gameReleaseDate1,gameDeveloper2,gameReleaseDate2,gameName2,imageLink2,gameName3,imageLink3,gameReleaseDate3,gameDeveloper3, fetchData};
  }


  
});

app.mount('#cek');