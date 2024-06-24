const url = `/api`;
const dataDivData = document.getElementById("dataDivData");
const dataLoading = document.getElementById("dataLoading");

const getTeamData = async () => {
  try {
    const res = await fetch(url);
    let data = await res.json();
    console.log(data);
    if (!res.ok) {
      throw Error(
        "Unsuccessful response. There was an issue fetching the data"
      );
    }
    return data;
  } catch (error) {
    console.log(`Error, fetching data ${error}`);
  } finally {
    dataLoading.remove();
  }
};

getTeamData();

const displayData = async () => {
  const payload = await getTeamData();

  let dataDisplay = payload
    .map((data) => {
      return `
           <div>${data.team_name}</div>
           <div>${data.nat_rank}</div>
           <div>${data.sched_dfclty}</div>
           <div>${data.def_rating}</div>
           <div>${data.offsv_rating}</div>
        `;
    })
    .join("");
  dataDivData.innerHTML = dataDisplay;
};

displayData();

dataLoading.innerHTML = `
Loading Basketball Data...
`;

document.querySelector("#copyrightYear").innerText = new Date().getFullYear();
