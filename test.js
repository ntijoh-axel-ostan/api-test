const container = document.querySelector(".container content");
        const tmpl = document.querySelector("#repo");
        const card = document.querySelector(".card-content");
        const card_name = document.querySelector("#name");
        const card_href = document.querySelector("a");
        const card_forks = document.querySelector("#forks");


           for (let i = 0; i < repos_fetched.length; i++) {
               let name = JSON.stringify(repos_fetched[i].name);
               let forks = JSON.stringify(repos_fetched[i].forks);
               let id = JSON.stringify(repos_fetched[i].id);

               console.log(name);
               console.log(forks);
               console.log(id);

            }
