let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let poolHtml = document.querySelector('.poll');
        poolHtml.innerHTML = `
            <div class="pool__title" id="pool__title">${response.data.title}</div>
            <div class="pool__answers poll__answers_active" id="pool__answers">

        `;
        response.data.answers.forEach(answer => {
            poolHtml.innerHTML += `<button class="pool__answer">${answer}</button>`;
        });
        document.querySelectorAll('.pool__answer').forEach((button, index) => {
            button.addEventListener('click', () => {
                alert("Спасибо, ваш голос засчитан!");
                let xhr_post = new XMLHttpRequest();
                xhr_post.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
                xhr_post.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr_post.onreadystatechange = function() {
                    if (xhr_post.readyState === 4 && xhr_post.status === 201) {
                        let response_result = JSON.parse(xhr_post.responseText);
                        document.querySelector('.poll').innerHTML = `
                            <div class="pool__title" id="pool__title">${response.data.title}</div>

                        `;
                        response_result.stat.forEach(stat => {
                            document.querySelector('.poll').innerHTML += `
                                <div class="poll__stat">${stat.answer}: ${stat.votes}</div>
                            `;
                        });
                    }
                };
                xhr_post.send(`vote=${response.id}&answer=${index}`);
            });
        });
    }
};
xhr.send();