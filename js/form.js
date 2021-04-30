class Form{
    constructor(){

    }

    display(){
        var title = createElement("h1")
        title.html("car racing game")
        title.position(100,50)
        var input = createInput("name")
        input.position(100,150)
        var button = createButton("join")
        button.position(100,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            
            var name = input.value()
            playerCount = playerCount + 1
            player.update(name)
            player.updatePlayerCount(playerCount)
            var greeting = createElement("h3")
            greeting.html("hello "+ name)
            greeting.position(130,160)
        })

    }
}