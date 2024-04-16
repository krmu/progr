
async function iegut_pedejas_izmainas() {
    try{
        let response = await fetch("https://api.github.com/repos/krmu/progr/git/refs/heads/main");
        let pedejais_commits = await response.json();
        let response2 = await fetch(pedejais_commits.object.url);
        let pedejais_commits_info = await response2.json();
        let html_elements = document.getElementById("izvads");
        var izmainu_datums = new Date(pedejais_commits_info.author.date);
        html_elements.innerHTML = "Izmaiņu saturs: "+ pedejais_commits_info.message + ", autors: " + pedejais_commits_info.author.name + ", datums: " + izmainu_datums.toLocaleDateString("lv-LV");
    }catch (error) {
        let html_elements = document.getElementById("izvads");
        html_elements.innerHTML = "Neizdevās iegūt jaunākās izmaiņas!";
    }
}
document.addEventListener("DOMContentLoaded", () => {
    let ir_tads_elements = document.getElementById("izvads");
    if (ir_tads_elements) {
        iegut_pedejas_izmainas();
    }
});