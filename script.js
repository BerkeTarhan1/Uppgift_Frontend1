function calculateTotal() {
    // Hämta värden från html
    var foodType = document.getElementById("foodType").value;
    var drinkType = document.getElementById("drinkType").value;
    var quantity = parseInt(document.getElementById("quantity").value);

    // Sätta priser för mat och dryck
    var foodPrices = {
        oxfilepasta: 120,
        kycklingpasta: 110,
        pastacarbonara: 105,
        kebabpizza: 130,
        oxfilepizza: 150,
        kycklingpizza: 120,
        kebabtallrik: 115,
        kycklingtallrik: 110,
        mixtallrik: 130
    };

    var drinkPrices = {
        fanta: 20,
        cola: 20,
        vatten: 10
    };

    // Beräkna totalpris
    var foodPrice = foodPrices[foodType] * quantity;
    var drinkPrice = drinkPrices[drinkType] * quantity;
    var totalPrice = foodPrice + drinkPrice;

    // Visa ett meddelande med det totala priset
    alert("Din beställning:\n\n" +
        "Mat: " + foodType + " (" + quantity + " portioner) - " + foodPrice + " kr\n" +
        "Dryck: " + drinkType + " (" + quantity + " flaskor) - " + drinkPrice + " kr\n\n" +
        "Totalt: " + totalPrice + " kr");
}