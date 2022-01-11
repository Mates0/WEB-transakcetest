class Transaction {
    income
    price
    description

    constructor(income, price, description) {
        this.income = income;
        this.price = price;
        this.description = description;
    }
}

window.onload = () => {
    let grandma = new Transaction(true,549, "Peníže od babičky")
    let kfc = new Transaction(false,233,"KFC")
    let refund = new Transaction(true,999,"Vyřízení reklamace")
    let nike = new Transaction(false,982,"Nike")
    let albert = new Transaction(false,99,"Albert")

    let arr = [grandma,kfc,refund,nike,albert]
    let allSpans = document.getElementsByTagName("span")

    for (let i = 0; i < allSpans.length; i++) {
        allSpans[i].id = i + parseInt("1")
    }

    for (let i = 1; i < allSpans.length + 1; i++) {
        if (i % 3 === 0) {
            for (let j = 0; j < arr.length; j++) {
                document.getElementById(i).innerHTML = arr[j].price + ",-"
            }
        }
        if (i === 1 || i === 4 || i === 7 || i === 10 || i === 13) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j].income === true) {
                    document.getElementById(i).innerHTML = "<i class=\"fas fa-check\"></i>"
                } else {
                    document.getElementById(i).innerHTML = "<i class=\"far fa-times-circle\"></i>"
                }
            }
        }
        if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14) {
            for (let j = 0; j < arr.length; j++) {
                document.getElementById(i).innerHTML = arr[j].description
            }
        }
    }
}