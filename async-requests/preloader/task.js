let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            for (let i in data.response.Valute) {
                document.getElementById("items").innerHTML += `
                    <div class="item">
                        <div class="item__code">${data.response.Valute[i].CharCode}</div>
                        <div class="item__value">${data.response.Valute[i].Value}</div>
                        <div class="item__currency">руб.</div>
                    </div>
                `;
            }
            document.getElementById("loader").style.display = "none";
        } else {
            console.error("Error", xhr.status, xhr.statusText);
        }
    }
}
xhr.send();