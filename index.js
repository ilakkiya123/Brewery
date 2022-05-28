const breweryURL="https://api.openbrewerydb.org/breweries?by_name=cooper&per_page=3"

const getBrewery = async () => {
  const cityName = document.getElementById("text-inp").value;
  const response = await fetch(`${breweryURL}?by_name=${names}&per_pages=3`);
  const data = await response.json();
  console.log(data);
}

// const VerifyEmail = async () => {

//     const respopnse = await fetch(`${verifyURL}${inpElement.value}`);
//     const data=await response.json();
//     console.log(data);
//   }
