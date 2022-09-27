const $grid = $("#grid");
const $reset = $("#reset");
const $clicks = $("#clicks");

const data = [
  {
    code: "a",
    link: "./img/Dumbledore1.jpeg",
  },
  {
    code: "a",
    link: "./img/Dumbledore2.jpeg",
  },
  {
    code: "b",
    link: "./img/Emma1.jpeg",
  },
  {
    code: "b",
    link: "./img/Emma2.jpeg",
  },
  {
    code: "c",
    link: "./img/Hagrid1.webp",
  },
  {
    code: "c",
    link: "./img/Hagrid2.jpeg",
  },
  {
    code: "d",
    link: "./img/harry1.jpeg",
  },
  {
    code: "d",
    link: "./img/harry2.jpeg",
  },
  {
    code: "e",
    link: "./img/malfoy1.jpeg",
  },
  {
    code: "e",
    link: "./img/malfoy2.webp",
  },
  {
    code: "f",
    link: "./img/oneeye1.jpeg",
  },
  {
    code: "f",
    link: "./img/oneeye2.jpeg",
  },
  {
    code: "g",
    link: "./img/Ron1.jpeg",
  },
  {
    code: "g",
    link: "./img/Ron2.jpeg",
  },
  {
    code: "h",
    link: "./img/snape1.jpeg",
  },
  {
    code: "h",
    link: "./img/snape2.webp",
  },
  {
    code: "i",
    link: "./img/teacher1.jpeg",
  },
  {
    code: "i",
    link: "./img/teacher2.jpeg",
  },
  {
    code: "j",
    link: "./img/Voldemort1.jpeg",
  },
  {
    code: "j",
    link: "./img/Voldemort2.jpeg",
  },
];

let count = 0;

const generateCards = () => {
  $grid.empty();
  // TODO: 2.3 Shuffle
  data.forEach((image) => {
    $grid.append(`
      <div class="card" data-code="${image.code}">
        <img src="${image.link}" style="display: none;" />
      </div>
    `);
  });
};
let clickedFirstBox = null;
let clickedSecondBox =null;

const handleClick = function() {
  // get the item we clicked on (e.currentTarget)
  // given the item, select the img and .show()
  // add 1 to count
  $(this).find("img").show("400");
  count += 1;
  if (count === 1) {
    clickedFirstBox = $(this).attr("data-code");
  console.log("C1:",clickedFirstBox)
  }
  //the issue is that when we have first click we collect it in variable, then having second click and collect it to, so the first click was changed to be the second click. because of this we will create another variable to collect the second click
  if (count === 2) {
      clickedSecondBox =  $(this).attr("data-code");
        console.log("C2:",clickedSecondBox)

  }




  //var name = $("#id").attr("name");

  //compare both pics(code) to one another

}

const init = () => {
  generateCards();
  $grid.on('click', '.card', handleClick)
};

init();
