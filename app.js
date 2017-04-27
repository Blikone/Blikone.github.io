; (function () {
    console.log('executing...')
    var truths = [
        { prompt: "In high school I was a featured soloist with a city youth orchestra.", answer: "True. I performed a piano concerto with the Spokane Youth Orchestra after a year of hard practice." },
        { prompt: "I am an Eagle Scout.", answer: "True. My eagle project involved recreating a flooded-out music library." },
        { prompt: "I enjoy helping my wife piece patchwork quilts.", answer: "True. My geometry training has led be to be good at spatial relationships and pattern recognition." },
        { prompt: "I read and speak French.", answer: "C'est vrai, mais quand quelqu'un d'autre parle à moi, c'est un peu plus difficile à le comprendre." },
        { prompt: "During college I tutored classmates in four different subjects.", answer: "True. College algebra, calculus-based mechanical physics, and musical theory and aural recognition." },
        { prompt: "I have appeared onstage with the internationally-acclaimed Eroica Trio.", answer: "True. In college I worked for a year as an usher in the auditorium and volunteered to be their page turner." },
        { prompt: "I still carry a flip phone.", answer: "Yes, it's true.  I'm a simple man, and I prefer to get directions before I leave the house." },
        { prompt: "I have entered produce from my garden in the county fair.", answer: "True. Won honorable mention for tomatoes with strange growths that my father labelled \"Richard Nixon and Spiro Agnew\"." },
    ];
    var lies = [
        { prompt: "I once placed in a Super Smash Brothers tournament.", answer: "False. But I played against friends enough to be a fairly competent button-masher." },
        { prompt: "I won the county Spelling Bee in elementary school.", answer: "False. But second place in the county spelling bee isn't bad." },
        { prompt: "I am fluent in Spanish.", answer: "Sadly, no. Though I'm pretty good at French." },
        { prompt: "I am an avid Whovian and adore David Tennant.", answer: "David Tennant is a great actor, but I don't watch Doctor Who. I prefer BBC's Sherlock any day of the week." },
    ];
    var randomizer = Math.floor(Math.random() * Math.ceil(truths.length / 2));
    var randomTruthA = truths[randomizer];
    var randomTruthB = truths[randomizer + Math.floor(truths.length / 2)];
    var randomLie = lies[Math.floor(Math.random() * lies.length)];
    var statementList = ["", "", ""];
    statementList[Math.floor(Math.random() * 3)] = { statement: randomLie.prompt, answer: randomLie.answer, lie: true };
    console.log(statementList);
    var firstStatement = { statement: randomTruthA.prompt, answer: randomTruthA.answer, lie: false }
    if (!statementList[0]) {
        statementList[0] = firstStatement;
    } else {
        statementList[1] = firstStatement;
    }
    var secondStatement = { statement: randomTruthB.prompt, answer: randomTruthB.answer, lie: false }
    if (!statementList[1]) {
        statementList[1] = secondStatement;
    } else {
        statementList[2] = secondStatement;
    }
    console.log(statementList);

    $('#randomStatementA').html(statementList[0].statement);
    $('#randomStatementB').html(statementList[1].statement);
    $('#randomStatementC').html(statementList[2].statement);

    $('#randomStatementA-2').html(statementList[0].statement);
    $('#randomStatementB-2').html(statementList[1].statement);
    $('#randomStatementC-2').html(statementList[2].statement);

    $('.truth-lie').on('click', function () {
        var key;
        if (this.id == 'randomStatementA' || this.id == 'randomStatementA-2') {
            key = statementList[0];
        } else if (this.id == 'randomStatementB' || this.id == 'randomStatementB-2') {
            key = statementList[1];
        } else { key = statementList[2] }

        $(this).html(key.answer)

        if (this.className.split(' ').length > 1) {
            $(this).removeClass('truth lie');
            $(this).html(key.statement);
            return;
        }

        if (key.lie) {
            $(this).addClass('lie');
        } else {
            $(this).addClass('truth');
        }
    })

    $('.inactive').on('mousedown', function () {
        swal('This link is not yet active.', 'Deployment expected January 2017')
    })
})();