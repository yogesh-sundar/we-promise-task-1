function playersList(num) {
    fetch("https://www.balldontlie.io/api/v1/players")
        .then((response) => {
            return response.json();
        })
        .then((get) => {
            document.getElementById("playerNumber").value = num;
            for (i = 0; i < get.data.length; i++) {

                if (i == document.getElementById("playerNumber").value) {
                    document.getElementById("fullname").innerHTML = "Full Name: " + get.data[i].first_name + " " + get.data[i].last_name;
                    document.getElementById("team").innerHTML = "Team: " + get.data[i].team.full_name;
                    document.getElementById("position").innerHTML = "Position: " + get.data[i].position;
                    document.getElementById("conference").innerHTML = "Conference: " + get.data[i].team.conference;
                }
            }
        })
        .catch((error) => {
            console.log(error);
        });

}
