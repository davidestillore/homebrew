$("#getting-started")
.countdown("2020/09/26", function(event) {
    $("#day").text(
        event.strftime('%D')
    );$("#hours").text(
        event.strftime('%H')
    );$("#minutes").text(
        event.strftime('%M')
    );$("#seconds").text(
        event.strftime('%S')
    );
});
