{


  //時計
  time();
  function time() {
    var now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString();
  }
  setInterval('time()', 1000);




  const redArray = new Array(15);
  const greenArray = new Array(15);
  const blackArray = new Array(15);


  const red1 = document.getElementById('red1');
  const red2 = document.getElementById('red2');
  const red3 = document.getElementById('red3');
  const red4 = document.getElementById('red4');
  const red5 = document.getElementById('red5');
  const red6 = document.getElementById('red6');
  const red7 = document.getElementById('red7');
  const red8 = document.getElementById('red8');
  const red9 = document.getElementById('red9');
  const red10 = document.getElementById('red10');
  const red11 = document.getElementById('red11');
  const red12 = document.getElementById('red12');
  const red13 = document.getElementById('red13');
  const red14 = document.getElementById('red14');
  const red15 = document.getElementById('red15');
  const green1 = document.getElementById('green1');
  const green2 = document.getElementById('green2');
  const green3 = document.getElementById('green3');
  const green4 = document.getElementById('green4');
  const green5 = document.getElementById('green5');
  const green6 = document.getElementById('green6');
  const green7 = document.getElementById('green7');
  const green8 = document.getElementById('green8');
  const green9 = document.getElementById('green9');
  const green10 = document.getElementById('green10');
  const green11 = document.getElementById('green11');
  const green12 = document.getElementById('green12');
  const green13 = document.getElementById('green13');
  const green14 = document.getElementById('green14');
  const green15 = document.getElementById('green15');
  const black1 = document.getElementById('black1');
  const black2 = document.getElementById('black2');
  const black3 = document.getElementById('black3');
  const black4 = document.getElementById('black4');
  const black5 = document.getElementById('black5');
  const black6 = document.getElementById('black6');
  const black7 = document.getElementById('black7');
  const black8 = document.getElementById('black8');
  const black9 = document.getElementById('black9');
  const black10 = document.getElementById('black10');
  const black11 = document.getElementById('black11');
  const black12 = document.getElementById('black12');
  const black13 = document.getElementById('black13');
  const black14 = document.getElementById('black14');
  const black15 = document.getElementById('black15');



  //履歴配列作成
  const numbersHistoryArray200 = [];
  const numbersHistoryArray500 = [];

  //ナンバーオブジェクト
  const numbersArray = [
    { name: 'no1', No: 1, color: 'red', column: 'lower', dozen: 'first', highLow: 'low', oddEven: 'odd', count: 0 },
    { name: 'no2', No: 2, color: 'black', column: 'middle', dozen: 'first', highLow: 'low', oddEven: 'even', count: 0 },
    { name: 'no3', No: 3, color: 'red', column: 'upper', dozen: 'first', highLow: 'low', oddEven: 'odd', count: 0 },
    { name: 'no4', No: 4, color: 'black', column: 'lower', dozen: 'first', highLow: 'low', oddEven: 'even', count: 0 },
    { name: 'no5', No: 5, color: 'red', column: 'middle', dozen: 'first', highLow: 'low', oddEven: 'odd', count: 0 },
    { name: 'no6', No: 6, color: 'black', column: 'upper', dozen: 'first', highLow: 'low', oddEven: 'even', count: 0 },
    { name: 'no7', No: 7, color: 'red', column: 'lower', dozen: 'first', highLow: 'low', oddEven: 'odd', count: 0 },
    { name: 'no8', No: 8, color: 'black', column: 'middle', dozen: 'first', highLow: 'low', oddEven: 'even', count: 0 },
    { name: 'no9', No: 9, color: 'red', column: 'upper', dozen: 'first', highLow: 'low', oddEven: 'odd', count: 0 },
    { name: 'no10', No: 10, color: 'black', column: 'lower', dozen: 'first', highLow: 'low', oddEven: 'even', count: 0 },
    { name: 'no11', No: 11, color: 'black', column: 'middle', dozen: 'first', highLow: 'low', oddEven: 'odd', count: 0 },
    { name: 'no12', No: 12, color: 'red', column: 'upper', dozen: 'first', highLow: 'low', oddEven: 'even', count: 0 },
    { name: 'no13', No: 13, color: 'black', column: 'lower', dozen: 'second', highLow: 'low', oddEven: 'odd', count: 0 },
    { name: 'no14', No: 14, color: 'red', column: 'middle', dozen: 'second', highLow: 'low', oddEven: 'even', count: 0 },
    { name: 'no15', No: 15, color: 'black', column: 'upper', dozen: 'second', highLow: 'low', oddEven: 'odd', count: 0 },
    { name: 'no16', No: 16, color: 'red', column: 'lower', dozen: 'second', highLow: 'low', oddEven: 'even', count: 0 },
    { name: 'no17', No: 17, color: 'black', column: 'middle', dozen: 'second', highLow: 'low', oddEven: 'odd', count: 0 },
    { name: 'no18', No: 18, color: 'red', column: 'upper', dozen: 'second', highLow: 'low', oddEven: 'even', count: 0 },
    { name: 'no19', No: 19, color: 'red', column: 'lower', dozen: 'second', highLow: 'high', oddEven: 'odd', count: 0 },
    { name: 'no20', No: 20, color: 'black', column: 'middle', dozen: 'second', highLow: 'high', oddEven: 'even', count: 0 },
    { name: 'no21', No: 21, color: 'red', column: 'upper', dozen: 'second', highLow: 'high', oddEven: 'odd', count: 0 },
    { name: 'no22', No: 22, color: 'black', column: 'lower', dozen: 'second', highLow: 'high', oddEven: 'even', count: 0 },
    { name: 'no23', No: 23, color: 'red', column: 'middle', dozen: 'second', highLow: 'high', oddEven: 'odd', count: 0 },
    { name: 'no24', No: 24, color: 'black', column: 'upper', dozen: 'second', highLow: 'high', oddEven: 'even', count: 0 },
    { name: 'no25', No: 25, color: 'red', column: 'lower', dozen: 'third', highLow: 'high', oddEven: 'odd', count: 0 },
    { name: 'no26', No: 26, color: 'black', column: 'middle', dozen: 'third', highLow: 'high', oddEven: 'even', count: 0 },
    { name: 'no27', No: 27, color: 'red', column: 'upper', dozen: 'third', highLow: 'high', oddEven: 'odd', count: 0 },
    { name: 'no28', No: 28, color: 'black', column: 'lower', dozen: 'third', highLow: 'high', oddEven: 'even', count: 0 },
    { name: 'no29', No: 29, color: 'black', column: 'middle', dozen: 'third', highLow: 'high', oddEven: 'odd', count: 0 },
    { name: 'no30', No: 30, color: 'red', column: 'upper', dozen: 'third', highLow: 'high', oddEven: 'even', count: 0 },
    { name: 'no31', No: 31, color: 'black', column: 'lower', dozen: 'third', highLow: 'high', oddEven: 'odd', count: 0 },
    { name: 'no32', No: 32, color: 'red', column: 'middle', dozen: 'third', highLow: 'high', oddEven: 'even', count: 0 },
    { name: 'no33', No: 33, color: 'black', column: 'upper', dozen: 'third', highLow: 'high', oddEven: 'odd', count: 0 },
    { name: 'no34', No: 34, color: 'red', column: 'lower', dozen: 'third', highLow: 'high', oddEven: 'even', count: 0 },
    { name: 'no35', No: 35, color: 'black', column: 'middle', dozen: 'third', highLow: 'high', oddEven: 'odd', count: 0 },
    { name: 'no36', No: 36, color: 'red', column: 'upper', dozen: 'third', highLow: 'high', oddEven: 'even', count: 0 },
    { name: 'no0', No: 0, color: 'green', column: '0', dozen: '0', highLow: '0', oddEven: '0', count: 0 },
  ];




  //各配列末尾要素削除＋配列の要素を一つずつずらす
  const shiftnumbers = () => {
    redArray.pop();
    greenArray.pop();
    blackArray.pop();
    red1.textContent = redArray[0];
    red2.textContent = redArray[1];
    red3.textContent = redArray[2];
    red4.textContent = redArray[3];
    red5.textContent = redArray[4];
    red6.textContent = redArray[5];
    red7.textContent = redArray[6];
    red8.textContent = redArray[7];
    red9.textContent = redArray[8];
    red10.textContent = redArray[9];
    red11.textContent = redArray[10];
    red12.textContent = redArray[11];
    red13.textContent = redArray[12];
    red14.textContent = redArray[13];
    red15.textContent = redArray[14];
    green1.textContent = greenArray[0];
    green2.textContent = greenArray[1];
    green3.textContent = greenArray[2];
    green4.textContent = greenArray[3];
    green5.textContent = greenArray[4];
    green6.textContent = greenArray[5];
    green7.textContent = greenArray[6];
    green8.textContent = greenArray[7];
    green9.textContent = greenArray[8];
    green10.textContent = greenArray[9];
    green11.textContent = greenArray[10];
    green12.textContent = greenArray[11];
    green13.textContent = greenArray[12];
    green14.textContent = greenArray[13];
    green15.textContent = greenArray[14];
    black1.textContent = blackArray[0];
    black2.textContent = blackArray[1];
    black3.textContent = blackArray[2];
    black4.textContent = blackArray[3];
    black5.textContent = blackArray[4];
    black6.textContent = blackArray[5];
    black7.textContent = blackArray[6];
    black8.textContent = blackArray[7];
    black9.textContent = blackArray[8];
    black10.textContent = blackArray[9];
    black11.textContent = blackArray[10];
    black12.textContent = blackArray[11];
    black13.textContent = blackArray[12];
    black14.textContent = blackArray[13];
    black15.textContent = blackArray[14];
  };


  //色別割合関連、緑
  let alln = 0;
  let redn = 0;
  let greenn = 0;
  let blackn = 0;
  const calcuColorProb = () => {
    let redProb = Math.round((redn / numbersHistoryArray200.length) * 100);
    let greenProb = Math.round((greenn / numbersHistoryArray200.length) * 100);
    let blackProb = Math.round((blackn / numbersHistoryArray200.length) * 100);
    $(function () {
      $('.redRatio').css('flex', redProb + " 0 0px");
      $('.greenRatio').css('flex', greenProb + " 0 0px");
      $('.blackRatio').css('flex', blackProb + " 0 0px");

      $('.redRatioNumber').css('flex', redProb + " 0 0px");
      $('.greenRatioNumber').css('flex', greenProb + " 0 0px");
      $('.blackRatioNumber').css('flex', blackProb + " 0 0px");

      $('.redRatioNumber').text((!redProb) ? "0%" : redProb + "%");
      $('.greenRatioNumber').text((!greenProb) ? "0%" : greenProb + "%");
      $('.blackRatioNumber').text((!blackProb) ? "0%" : blackProb + "%");
    });
  }
  calcuColorProb();

  //highLow割合関連
  let highn = 0;
  let lown = 0;
  const calcuHighLowProb = () => {
    let highProb = Math.round((highn / numbersHistoryArray200.length) * 100);
    let lowProb = Math.round((lown / numbersHistoryArray200.length) * 100);
    $(function () {
      $('.highRatio').css('flex', highProb + " 0 0px");
      $('.lowRatio').css('flex', lowProb + " 0 0px");

      $('.highRatioNumber').css('flex', highProb + " 0 0px");
      $('.lowRatioNumber').css('flex', lowProb + " 0 0px");

      $('.highRatioNumber').text((!highProb) ? "0%" : highProb + "%");
      $('.lowRatioNumber').text((!lowProb) ? "0%" : lowProb + "%");
    })
  }
  calcuHighLowProb();

  //oddEven
  let oddn = 0;
  let evenn = 0;
  const calcuOddEvenProb = () => {
    let oddProb = Math.round((oddn / numbersHistoryArray200.length) * 100);
    let evenProb = Math.round((evenn / numbersHistoryArray200.length) * 100);
    $(function () {
      $('.oddRatio').css('flex', oddProb + " 0 0px");
      $('.evenRatio').css('flex', evenProb + " 0 0px");

      $('.oddRatioNumber').css('flex', oddProb + " 0 0px");
      $('.evenRatioNumber').css('flex', evenProb + " 0 0px");

      $('.oddRatioNumber').text((!oddProb) ? "0%" : oddProb + "%");
      $('.evenRatioNumber').text((!evenProb) ? "0%" : evenProb + "%");
    })
  }
  calcuOddEvenProb();

  //column
  let uppern = 0;
  let middlen = 0;
  let lowern = 0;
  const calcuColumnProb = () => {
    let upperProb = Math.round((uppern / numbersHistoryArray200.length) * 100);
    let middleProb = Math.round((middlen / numbersHistoryArray200.length) * 100);
    let lowerProb = Math.round((lowern / numbersHistoryArray200.length) * 100);
    let greenProb = Math.round((greenn / numbersHistoryArray200.length) * 100);
    $(function () {
      $('.upperRatio').css('flex', upperProb + " 0 0px");
      $('.middleRatio').css('flex', middleProb + " 0 0px");
      $('.lowerRatio').css('flex', lowerProb + " 0 0px");

      $('.upperRatioNumber').css('flex', upperProb + " 0 0px");
      $('.middleRatioNumber').css('flex', middleProb + " 0 0px");
      $('.lowerRatioNumber').css('flex', lowerProb + " 0 0px");
      $('.greenRatioNumberUndisplay').css('flex', greenProb + " 0 0px");

      $('.upperRatioNumber').text((!upperProb) ? "0%" : upperProb + "%");
      $('.middleRatioNumber').text((!middleProb) ? "0%" : middleProb + "%");
      $('.lowerRatioNumber').text((!lowerProb) ? "0%" : lowerProb + "%");
    })
  }
  calcuColumnProb();

  //dozen
  let firstn = 0;
  let secondn = 0;
  let thirdn = 0;
  const calcuDozenProb = () => {
    let firstProb = Math.round((firstn / numbersHistoryArray200.length) * 100);
    let secondProb = Math.round((secondn / numbersHistoryArray200.length) * 100);
    let thirdProb = Math.round((thirdn / numbersHistoryArray200.length) * 100);
    $(function () {
      $('.firstRatio').css('flex', firstProb + " 0 0px");
      $('.secondRatio').css('flex', secondProb + " 0 0px");
      $('.thirdRatio').css('flex', thirdProb + " 0 0px");

      $('.firstRatioNumber').css('flex', firstProb + " 0 0px");
      $('.secondRatioNumber').css('flex', secondProb + " 0 0px");
      $('.thirdRatioNumber').css('flex', thirdProb + " 0 0px");

      $('.firstRatioNumber').text((!firstProb) ? "0%" : firstProb + "%");
      $('.secondRatioNumber').text((!secondProb) ? "0%" : secondProb + "%");
      $('.thirdRatioNumber').text((!thirdProb) ? "0%" : thirdProb + "%");
    })
  }
  calcuDozenProb();






  //テキストボックス
  const selectNumber = document.querySelector('#numbers');
  const value = selectNumber.value;


  const btn = document.getElementById('makeNumber');
  // btn.addEventListener('click', () => {
  //   const n = Math.floor(Math.random() * 37);
  // });






  //ボタンクリック後の処理
  btn.addEventListener('click', () => {
    const value = Math.floor(Math.random() * 37);



    //valueをnumbersArrayから検索
    const selectTarget = numbersArray.find((number) => {
      return (number.No == value);
    });

    //maintitleに数字を表示
    const displayNumToMainTitle = () => {
      let coco = (selectTarget.color == "black") ? "white" : selectTarget.color;
      $('.main-title').text(value);
      $('.main-title').css('font-size', "8vh");
      $('.main-title').css('font-family', "''");
      $('.main-title').css('margin', "1.5vh 20vw");
      $('.main-title').css('font-weight', "500");
      $('.main-title').css('width', "12vh");
      $('.main-title').css('height', "12vh");
      $('.main-title').css('padding', "0");
      $('.main-title').css('color', coco)
      $('.main-title').css('box-shadow', " 0 0 2vh 1vh " + coco);
    };
    displayNumToMainTitle();




    //コールドナンバー、ホットナンバー関連
    const sortNumbers = () => {

      //500回中  カウントリセット＋カウント
      const plusNumber2 = () => {

        for (var i = 0; i < numbersArray.length; i++) {
          numbersArray[i].count = 0;
        }

        if (numbersHistoryArray500.length == 500) {
          numbersHistoryArray500.pop();
        };
        numbersHistoryArray500.unshift(value);

        for (let i = 0; i < numbersHistoryArray500.length; i++) {
          for (let n = 0; n < 36; n++) {
            if (numbersHistoryArray500[i] == n + 1) {
              numbersArray[n].count++;
            }
          }
          if (numbersHistoryArray500[i] == 0) {
            numbersArray[36].count++;
          }
        }
      };
      plusNumber2();
      //オブジェクトのディープコピー
      let sortedArray = JSON.parse(JSON.stringify(numbersArray));
      //ソート
      const compare = (a, b) => {
        const A = a.count;
        const B = b.count;

        let comparison = 0;
        if (A > B) {
          comparison = -1;
        } else if (A < B) {
          comparison = 1;
        }
        return comparison;
      };
      sortedArray.sort(compare);

      //表示
      $('#hot1').text(sortedArray[0].No);
      $('#hot2').text(sortedArray[1].No);
      $('#hot3').text(sortedArray[2].No);
      $('#hot4').text(sortedArray[3].No);
      $('#hot5').text(sortedArray[4].No);

      $('#h1count').text(sortedArray[0].count);
      $('#h2count').text(sortedArray[1].count);
      $('#h3count').text(sortedArray[2].count);
      $('#h4count').text(sortedArray[3].count);
      $('#h5count').text(sortedArray[4].count);

      $('#hot1').css('color', (sortedArray[0].color == "black") ? "white" : sortedArray[0].color);
      $('#hot2').css('color', (sortedArray[1].color == "black") ? "white" : sortedArray[1].color);
      $('#hot3').css('color', (sortedArray[2].color == "black") ? "white" : sortedArray[2].color);
      $('#hot4').css('color', (sortedArray[3].color == "black") ? "white" : sortedArray[3].color);
      $('#hot5').css('color', (sortedArray[4].color == "black") ? "white" : sortedArray[4].color);

      $('#cold1').text(sortedArray[36].No);
      $('#cold2').text(sortedArray[35].No);
      $('#cold3').text(sortedArray[34].No);
      $('#cold4').text(sortedArray[33].No);
      $('#cold5').text(sortedArray[32].No);

      $('#c1count').text(sortedArray[36].count);
      $('#c2count').text(sortedArray[35].count);
      $('#c3count').text(sortedArray[34].count);
      $('#c4count').text(sortedArray[33].count);
      $('#c5count').text(sortedArray[32].count);

      $('#cold1').css('color', (sortedArray[36].color == "black") ? "white" : sortedArray[36].color);
      $('#cold2').css('color', (sortedArray[35].color == "black") ? "white" : sortedArray[35].color);
      $('#cold3').css('color', (sortedArray[34].color == "black") ? "white" : sortedArray[34].color);
      $('#cold4').css('color', (sortedArray[33].color == "black") ? "white" : sortedArray[33].color);
      $('#cold5').css('color', (sortedArray[32].color == "black") ? "white" : sortedArray[32].color);

    };
    sortNumbers();




    alln++;
    console.log(alln);
    //totale timesの表示




    //「200回中」関連
    const plusNumber = () => {
      if (numbersHistoryArray200.length == 150) {
        numbersHistoryArray200.pop();
      };
      numbersHistoryArray200.unshift(selectTarget);
      // console.log(numbersHistoryArray200);
      redn = 0;
      blackn = 0;
      greenn = 0;
      highn = 0;
      lown = 0;
      uppern = 0;
      middlen = 0;
      lowern = 0;
      oddn = 0;
      evenn = 0;
      firstn = 0;
      secondn = 0;
      thirdn = 0;
    };
    plusNumber();





    //数値履歴と赤黒比率関連の処理
    switch (selectTarget.color) {
      case 'red':
        redArray.unshift(selectTarget.No);
        greenArray.unshift("");
        blackArray.unshift("");
        shiftnumbers();
        // redn++;
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          // for (let i = 0; i < numbersHistoryArray200.length ; i++) {
          // for (let i = 0; i < 200 ; i++) {
          switch (numbersHistoryArray200[i].color) {
            case 'red':
              redn++;
              break;
            case 'black':
              blackn++;
              break;
            case 'green':
              greenn++;
              break;
            default:
          }
        }
        calcuColorProb();
        break;

      case 'green':
        redArray.unshift("");
        greenArray.unshift(selectTarget.No);
        blackArray.unshift("");
        shiftnumbers();
        // greenn++;
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          // for (let i = 0; i < numbersHistoryArray200.length ; i++) {
          // for (let i = 0; i < 200 ; i++) {
          switch (numbersHistoryArray200[i].color) {
            case 'red':
              redn++;
              break;
            case 'black':
              blackn++;
              break;
            case 'green':
              greenn++;
              break;
            default:
          }
        }
        calcuColorProb();
        break;

      case 'black':
        redArray.unshift("");
        greenArray.unshift("");
        blackArray.unshift(selectTarget.No);
        shiftnumbers();
        // blackn++;
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          // for (let i = 0; i < numbersHistoryArray200.length ; i++) {
          // for (let i = 0; i < 200 ; i++) {
          switch (numbersHistoryArray200[i].color) {
            case 'red':
              redn++;
              break;
            case 'black':
              blackn++;
              break;
            case 'green':
              greenn++;
              break;
            default:
          }
        }
        calcuColorProb();
        break;
      default:
    }


    //ハイ、ロー比率処理
    switch (selectTarget.highLow) {
      case 'high':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].highLow) {
            case 'high':
              highn++;
              break;
            case 'low':
              lown++;
              break;
            default:
          }
        }
        calcuHighLowProb();
        break;
      case 'low':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].highLow) {
            case 'high':
              highn++;
              break;
            case 'low':
              lown++;
              break;
            default:
          }
        }
        calcuHighLowProb();
        break;
      case '0':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].highLow) {
            case 'high':
              highn++;
              break;
            case 'low':
              lown++;
              break;
            default:
          }
        }
        calcuHighLowProb();
        break;
      default:
    }


    //column比率処理
    switch (selectTarget.column) {
      case 'upper':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].column) {
            case 'upper':
              uppern++;
              break;
            case 'middle':
              middlen++;
              break;
            case 'lower':
              lowern++;
              break;
            default:
          }
        }
        calcuColumnProb();
        break;
      case 'middle':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].column) {
            case 'upper':
              uppern++;
              break;
            case 'middle':
              middlen++;
              break;
            case 'lower':
              lowern++;
              break;
            default:
          }
        }
        calcuColumnProb();
        break;
      case 'lower':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].column) {
            case 'upper':
              uppern++;
              break;
            case 'middle':
              middlen++;
              break;
            case 'lower':
              lowern++;
              break;
            default:
          }
        }
        calcuColumnProb();
        break;
      case '0':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].column) {
            case 'upper':
              uppern++;
              break;
            case 'middle':
              middlen++;
              break;
            case 'lower':
              lowern++;
              break;
            default:
          }
        }
        calcuColumnProb();
        break;
      default:
    }


    //奇数、偶数比率関連
    switch (selectTarget.oddEven) {
      case 'odd':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].oddEven) {
            case 'odd':
              oddn++;
              break;
            case 'even':
              evenn++;
              break;
            default:
          }
        }
        calcuOddEvenProb();
        break;
      case 'even':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].oddEven) {
            case 'odd':
              oddn++;
              break;
            case 'even':
              evenn++;
              break;
            default:
          }
        }
        calcuOddEvenProb();
        break;
      case '0':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].oddEven) {
            case 'odd':
              oddn++;
              break;
            case 'even':
              evenn++;
              break;
            default:
          }
        }
        calcuOddEvenProb();
        break;
      default:
    }


    //dozen比率処理
    switch (selectTarget.dozen) {
      case 'first':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].dozen) {
            case 'first':
              firstn++;
              break;
            case 'second':
              secondn++;
              break;
            case 'third':
              thirdn++;
              break;
            default:
          }
        }
        calcuDozenProb();
        break;
      case 'second':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].dozen) {
            case 'first':
              firstn++;
              break;
            case 'second':
              secondn++;
              break;
            case 'third':
              thirdn++;
              break;
            default:
          }
        }
        calcuDozenProb();
        break;
      case 'third':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].dozen) {
            case 'first':
              firstn++;
              break;
            case 'second':
              secondn++;
              break;
            case 'third':
              thirdn++;
              break;
            default:
          }
        }
        calcuDozenProb();
        break;
      case '0':
        for (let i = 0; i < numbersHistoryArray200.length; i++) {
          switch (numbersHistoryArray200[i].dozen) {
            case 'first':
              firstn++;
              break;
            case 'second':
              secondn++;
              break;
            case 'third':
              thirdn++;
              break;
            default:
          }
        }
        calcuDozenProb();
        break;
      default:
    }





  })


















}
