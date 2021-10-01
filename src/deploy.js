export function deploy(year){
    // handle year deployment
    let header = document.querySelector(".header");
    let node = document.createElement("P");
    node.innerText = year.number;
    header.appendChild(node);
    // handle day deployment
    for (let index = 1; index < year.months.length; index++) {
        let card = document.querySelectorAll(".card")[index - 1];
        // offset to saturday
        handleOffset(year.months[index].days[0].name, card);

        for(let day = 0; day < year.months[index].length; day++){
            let node = document.createElement("P");
            node.innerText = `${year.months[index].days[day].number} ${correspond(year.months[index].days[day].name)}`;
            card.appendChild(node);
        }

        // handle month deployment
        let node = document.createElement("P");
        node.innerText = year.months[index].name;
        card.firstElementChild.appendChild(node);
    }
}

    function correspond(name) {
        switch (name) {
            case 6:
                return "Fri";
                break;
            case 0:
                return "Sat"
                break;
            case 1:
                return "Sun"
                break;
            case 2:
                return "Mon"
                break;
            case 3:
                return "Tue"
                break;
            case 4:
                return "Wed"
                break;
            case 5:
                return "Thu"
        }
    }

function handleOffset(offset, elem) {
    for (let index = 0; index < offset; index++) {
        let node = document.createElement("P");
        node.innerText = ' ';
        let newElem = elem.appendChild(node);
        newElem.style.opacity = 0.2;

    }
}