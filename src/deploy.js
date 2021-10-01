export function deploy(year){
    console.log("here");
    for (let index = 1; index < year.months.length; index++) {
        let card = document.querySelectorAll(".card")[index-1];
        console.log("mnth is:" + index);
        for(let day = 0; day < year.months[index].length; day++){
            let node = document.createElement("P");
            node.innerText = `${year.months[index].days[day].number} ${correspond(year.months[index].days[day].name)}`;
            card.appendChild(node);
            // console.log("day is:" + day);
        }
    }


    }

    function correspond(name) {
        switch (name) {
            case 6:
                return "fri";
                break;
            case 0:
                return "sat"
                break;
            case 1:
                return "sun"
                break;
            case 2:
                return "mon"
                break;
            case 3:
                return "tue"
                break;
            case 4:
                return "wed"
                break;
            case 5:
                return "thu"
                break;

            default:
                break;
        }
    }