const busStopIdInput = document.getElementById("busStopId");
const arrivalInfo = document.getElementById("arriveInfo");

let intervalId = null;

//Acinchronous data fetching

async function fetchBusArrival(busStopId) {
  const response = await fetch(
    `https://sg-bus-arrivals-sigma-schoolsc1.replit.app/?id=${busStopId}`
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Error fetching bus arrival data.");
  }
}

// formatting fetched data
function formatArrivalData(arrivalData) {
  const buses = arrivalData.services;
  const formattedData = [];

  for (const bus of buses) {
    const arrivalTimeString = `${bus.next_bus_mins} min(s)`;
    const arrivalBusString = `Bus ${bus.bus_no}`;
    formattedData.push(`
            <div>
                <strong> ${arrivalBusString} </strong> : ${arrivalTimeString}
            </div>
        `);
  }
  return formattedData.join(" ");
}

// Updating UI accordingly.

function displayBusArrival(busStopId) {
  arrivalInfo.innerHTML = "Loading";
  fetchBusArrival(busStopId)
    .then((arrivalData) => {
      const formattedArrivalData = formatArrivalData(arrivalData);
      arrivalInfo.innerHTML = formattedArrivalData;
    })
    .catch((error) => {
      console.error("Error:", error);
      arrivalInfo.innerHTML =
        "Failed to fetch bus arrival data. Please check the bus stop ID and try again.";
    });
}

// Main function to trigger on button click.
function getBusTiming() {
  const inputtedBusID = busStopIdInput.value;

  if (intervalId) {
    clearInterval(intervalId);
  }

  displayBusArrival(inputtedBusID);
  intervalId = setInterval(() => {
    displayBusArrival(inputtedBusID);
  }, 5000);
}
