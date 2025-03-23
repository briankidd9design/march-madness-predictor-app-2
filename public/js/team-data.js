const url = `/api`;
const dataDivData = document.getElementById("dataDivData");
const dataLoading = document.getElementById("dataLoading");
const dataInfo = document.getElementById("dataInfo");
const closeLegend = document.getElementById("closeLegend");

const getTeamData = async () => {
  try {
    const res = await fetch(url);
    let data = await res.json();
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

// getTeamData();

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

const dataSourceLegend = document.getElementById("dataSourceLegend");
dataSourceLegend.style.display = "none";
function showHideDiv(dataSourceLegend) {
  dataSourceLegend = document.getElementById("dataSourceLegend");
  if (
    dataSourceLegend.style.display == "null" ||
    dataSourceLegend.style.display == "none"
  ) {
    dataSourceLegend.style.display = "flex";
    dataInfo.innerHTML = "Close Box";
  } else {
    dataSourceLegend.style.display = "none";
    dataInfo.innerHTML = "Data Source";
  }
}
dataInfo.addEventListener(
  "click",
  () => {
    showHideDiv(dataSourceLegend);
  },
  false
);

closeLegend.addEventListener("click", () => {
  dataSourceLegend.style.display = "none";
  dataInfo.innerHTML = "Data Source";
});

dataLoading.innerHTML = `
Loading Basktball Data...
`;

document.querySelector("#copyrightYear").innerText = new Date().getFullYear();
