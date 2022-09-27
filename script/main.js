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
let clickedFirstBox = null;
let clickedSecondBox = null;

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


const handleClick = function () {
  // get the item we clicked on (e.currentTarget)
  // given the item, select the img and .show()
  // add 1 to count
  $(this).find("img").show();
  count += 1;
  if (count === 1) {
    clickedFirstBox = $(this).attr("data-code");
  }
  //the issue is that when we have first click we collect it in variable, then having second click and collect it to, so the first click was changed to be the second click. because of this we will create another variable to collect the second click
  if (count === 2) {
    clickedSecondBox = $(this).attr("data-code");

    //to check that both cards are not similar
    if (clickedFirstBox !== clickedSecondBox) {
      //to hide image, not box!
      $(".card").find("img").delay(1000).fadeOut(400)
      //reset คลิกทั้งสองครั้ง

    } else {
      // to remove the both cards which are similar
      //($('[name="deleteuserid"]')
      $(`[data-code=${clickedFirstBox}]`).delay(1000).css("visibility", "hidden")
    }
    //to reset after taking the similar cards
    count = 0;
    clickedFirstBox = null;
    clickedSecondBox = null;


  }

  //var name = $("#id").attr("name");

  //compare both pics(code) to one another

}

const init = () => {
  generateCards();
  $grid.on('click', '.card', handleClick)
};

init();
