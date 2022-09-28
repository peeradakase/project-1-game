const $grid = $("#grid");
const $reset = $("#reset");
const $clicks = $("#clicks");

let data = [
  {
    code: "a",
    link: "./img/Dumbledore1.jpeg",
    id: 1
  },
  {
    code: "a",
    link: "./img/Dumbledore2.jpeg",
    id: 2
  },
  {
    code: "b",
    link: "./img/Emma1.jpeg",
    id: 3
  },
  {
    code: "b",
    link: "./img/Emma2.jpeg",
    id: 4
  },
  {
    code: "c",
    link: "./img/Hagrid1.webp",
    id: 5
  },
  {
    code: "c",
    link: "./img/Hagrid2.jpeg",
    id: 6
  },
  {
    code: "d",
    link: "./img/harry1.jpeg",
    id: 7
  },
  {
    code: "d",
    link: "./img/harry2.jpeg",
    id: 8
  },
  {
    code: "e",
    link: "./img/malfoy1.jpeg",
    id: 9
  },
  {
    code: "e",
    link: "./img/malfoy2.webp",
    id: 10
  },
  {
    code: "f",
    link: "./img/oneeye1.jpeg",
    id: 11
  },
  {
    code: "f",
    link: "./img/oneeye2.jpeg",
    id: 12
  },

  {
    code: "g",
    link: "./img/Ron1.jpeg",
    id: 13
  },
  {
    code: "g",
    link: "./img/Ron2.jpeg",
    id: 14
  },
  {
    code: "h",
    link: "./img/snape1.jpeg",
    id: 15
  },
  {
    code: "h",
    link: "./img/snape2.webp",
    id: 16
  },
  {
    code: "i",
    link: "./img/teacher1.jpeg",
    id: 17
  },
  {
    code: "i",
    link: "./img/teacher2.jpeg",
    id: 18
  },
  {
    code: "j",
    link: "./img/Voldemort1.jpeg",
    id: 19
  },
  {
    code: "j",
    link: "./img/Voldemort2.jpeg",
    id: 20
  },
];

let count = 0;
let clickCounter = 0;
let clickedFirstBox = null;
let clickedSecondBox = null;
let collectId = null;
let lock = false;
let start = new Date;

//shuffle arr
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

//วนลูปกล่อง เพื่อใส่ในคอนเทนเนอ
//เราใส่ไอดี เพื่อเชตว่า เค้าคลิกกล่องเดิมเปล่า
const generateCards = () => {
  $grid.empty();

  // const shuffled = shuffle([...data]); // copy data and then shuffle
  data.forEach((image) => {
    $grid.append(`
      <div id="${image.id}" class="card" data-code="${image.code}">
        <img src="${image.link}" style="display: none;" />
      </div>
    `);
  });
};

//id card 1=2 nothing change
//ได้ไอดีละ กล่องที่คลิกรอบนี้
//เทียบไอดี กล่องที่ถูกคลิกรอบนี้ กับกล่องที่ถูกคลิกรอบก่อน
//ต้องมีตัวเเปรเก็บค่ากล่องที่ถูกคลิกรอบก่อน
//เเล้วเราก็จะได้ไอดีนัน้มา

const handleClick = function () {
  // Lock game for delay fade
  if (lock) return false;
  // Ignore if id already selected
  console.log($(this).attr("id"), collectId)
  if ($(this).attr("id") === collectId) return false;
  // Set collectId so that you cannot click on it again
  collectId = $(this).attr("id");

  // get the item we clicked on (e.currentTarget)
  // given the item, select the img and .show()
  // add 1 to count
  $(this).find("img").show();
  count += 1;

  // If odd number
  if (count === 1) {
    clickedFirstBox = $(this).attr("data-code");
  }

  // if even number
  //the issue is that when we have first click we collect it in variable, then having second click and collect it to, so the first click was changed to be the second click. because of this we will create another variable to collect the second click
  if (count === 2) {
    clickedSecondBox = $(this).attr("data-code");

    //to check that both cards are not similar
    if (clickedFirstBox !== clickedSecondBox) {
      //to hide image, not box!
      lock = true;
      const startTime = new Date()
      $(".card").find("img").delay(1000).fadeOut(400)
      setTimeout(() => {
        lock = false;
      }, 1420);
    } else {
      console.log(clickedFirstBox, ' :clickedFirstBox');
      console.log($(`[data-code=${clickedFirstBox}]`), " $(`[data-code=${clickedFirstBox}]`)")
      // to remove the both cards which are similar
      //($('[name="deleteuserid"]')
      lock = true;
      $(`[data-code=${clickedFirstBox}]`).delay(700).queue(function (next) {
        console.log($(this));
        $(this).css("visibility", "hidden");
        next();
      });

      setTimeout(() => {
        lock = false;
        if ($('.card[style*="visibility: hidden"]').length === 20) {
          alert("Winner!!");
        }
      }, 720);
    }

    count = 0;
    collectId = null;
    clickedFirstBox = null;
    clickedSecondBox = null;
  }
  //click show
  // don't count when click same card ----not finish yet!-------
  clickCounter += 1;
  $("#clicks").text(clickCounter);

  //มีกาดครบ20 อันที่เป็น "visibility", "hidden") แสดงว่าเกมจบ
  // setTimeout(() => {
  //   if ($('.card[style*="visibility: hidden"]').length === 20) {
  //     alert("Winner!!");
  //   }
  // }, 900);
  //console.log($('.card[style*="visibility: hidden"]').length)



  setInterval(function () {
    $('#timer').text((new Date - start) / 1000 + " Seconds");
  }, 1000);

  // setInterval(function () {
  //   $('#timer').text((new Date - start) / 1000 + " Seconds");
  // }, 1000);


}





//reset button
//refresh whole page
//เราจะสร้างปุ่มรีเซต อีกf เพราะuser อยากคลิกเมื่อไหร่ก็ได้
const init = () => {
  generateCards();
  $grid.on('click', '.card', handleClick)
  $reset.on('click', () => window.location.reload())
};

init();
