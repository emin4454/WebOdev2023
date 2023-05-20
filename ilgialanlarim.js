const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const message = ref('Veri yükleniyor...');

    axios.get("https://steam2.p.rapidapi.com/appDetail/730",{ headers: {
        'X-RapidAPI-Key': '7c0a68ac20msh8082f33ad47e814p14464djsn8f521b0f9b2f',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
      }
    })
      .then(response => (message.value = JSON.stringify(response.data),console.log(message.value)))
      .catch(error => (message.value = 'An error occurred: ' + error));

    return { message };
  }
});

app.mount('#app');