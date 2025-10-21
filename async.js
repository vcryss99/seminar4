async function getPlanesOverRomania() {
  
  const romaniaBounds = {
    lamin: 43.6,  
    lamax: 48.3,  
    lomin: 20.2,  
    lomax: 29.7   
  };

  const url = `https://opensky-network.org/api/states/all?lamin=${romaniaBounds.lamin}&lamax=${romaniaBounds.lamax}&lomin=${romaniaBounds.lomin}&lomax=${romaniaBounds.lomax}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Eroare la cerere: ${response.status}`);
    }

    const data = await response.json();
    const planes = data.states || [];

    console.log(`Avioane detectate deasupra României: ${planes.length}`);
    planes.forEach((plane, index) => {
      console.log(`#${index + 1}: ${plane[1]} - Altitudine: ${plane[7]}m - Viteză: ${plane[9]}m/s`);
    });

    return planes;
  } catch (err) {
    console.error("Eroare la obținerea datelor:", err.message);
    return [];
  }
}
getPlanesOverRomania();

