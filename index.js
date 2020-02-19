const fetchData = async searchTerm => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "85ab84d7",
      s: searchTerm
    }
  });

  console.log(response.data);
};

const input = document.querySelector("input");

let timeoutId;
const onInput = event => {
  fetchData(event.target.value);
};
input.addEventListener("input", onInput);

fetchData();
