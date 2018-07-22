function RandomNum() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.generate = function() {
        this.number = getRandomInt(1, 50);
    }

    this.generate();
}

RandomNum.annotations = [
    new ng.Component( {
     selector: "random-number"
    }),
    new ng.View({
      template: `
          <div class="container">
              <h1>RANDOM NUMBER: {{number}}</h1>
              <button (click)="generate()" >Generate</button>
          </div>     `
    })
];

document.addEventListener("DOMContentLoaded",
    function() {
        ng.bootstrap(RandomNum)
    }
)
