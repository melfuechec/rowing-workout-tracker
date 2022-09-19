// the plan data
var thePlan = [
    { Week: 1,
    Day1: '5000m',
    Day2: '6 x 500m / 2min rest',
    Day3: '5000m',
    OptionalDay4: '20min',
    OptionalDay5: '2 x 10min / 2min rest' 
    },
    { Week: 2,
    Day1: '5500m',
    Day2: '4 x 750m / 2min rest',
    Day3: '5500m',
    OptionalDay4: '20min',
    OptionalDay5: '3 x 8min / 2min rest'
    },
    { Week: 3,
    Day1: '6000m',
    Day2: '2 x 2000m / 4min rest',
    Day3: '6000m',
    OptionalDay4: '5000m',
    OptionalDay5: '6 x 500m / 2min rest'
    },
    { Week: 4,
    Day1: '6500m',
    Day2: '3 x 1000m / 3min rest',
    Day3: '6500m',
    OptionalDay4: '[6000m]',
    OptionalDay5: '[2 x 2500m / 2min rest]'
    },
    { Week: 5,
    Day1: '7000m',
    Day2: '4 x 800m / 2min rest',
    Day3: '7000m',
    OptionalDay4: '20min',
    OptionalDay5: '2 x 10min / 2min rest'
    },
    { Week: 6,
    Day1: '7500m',
    Day2: '3 x 2000m / 4min rest',
    Day3: '7500m',
    OptionalDay4: '5000m',
    OptionalDay5: '6 x 500m / 2min rest'
    },
    { Week: 7,
    Day1: '8000m',
    Day2: '7 x 500m / 2min rest',
    Day3: '8000m',
    OptionalDay4: '[6000m]',
    OptionalDay5: '3 x 1500m / 3min rest'
    },
    { Week: 8,
    Day1: '8500m',
    Day2: '4 x 1500m / 3min rest',
    Day3: '8000m',
    OptionalDay4: '25min',
    OptionalDay5: '3 x 1k / 3min rest'
    },
    { Week: 9,
    Day1: '9000m',
    Day2: '4 x 800m / 2min rest',
    Day3: '8000m',
    OptionalDay4: '8000m',
    OptionalDay5: '2 x 10min / 2min rest'
    },
    { Week: 10,
    Day1: '9500m',
    Day2: '3 x 2000m / 4min rest',
    Day3: '8000m',
    OptionalDay4: '8000m',
    OptionalDay5: '7 x 500m / 2min rest'
    },
    { Week: 11,
    Day1: '10000m',
    Day2: '8 x 500m / 2min rest',
    Day3: '8000m',
    OptionalDay4: '25mins',
    OptionalDay5: '4 x 1500m / 3min rest'
    },
    { Week: 12,
    Day1: '10000m',
    Day2: '4 x 1500m / 3min rest',
    Day3: '3 x 10min / 2min rest',
    OptionalDay4: '8000m',
    OptionalDay5: '4 x 800m / 2min rest'
    },
    { Week: 13,
    Day1: '10000m',
    Day2: '4 x 1k / 3min rest',
    Day3: '2 x 15min / 2min rest',
    OptionalDay4: '8000m',
    OptionalDay5: '3 x 2k / 4min rest',
    },
    { Week: 14,
    Day1: '10000m',
    Day2: '3 x 2k / 4min rest',
    Day3: '4 x 8min / 2min rest',
    OptionalDay4: '30min',
    OptionalDay5: '7 x 500m / 2min rest'
    },
    { Week: 15,
    Day1: '10000m',
    Day2: '5 x 750m / 2min rest',
    Day3: '3 x 10min / 2min rest',
    OptionalDay4: '[8000m]',
    OptionalDay5: '4 x 1500m / 3min rest'
    },
    { Week: 16,
    Day1: '10500m',
    Day2: '5 x 1500m / 3min rest',
    Day3: '30min',
    OptionalDay4: '10000m',
    OptionalDay5: '4 x 1k / 3min rest'
    },
    { Week: 17,
    Day1: '10500m',
    Day2: '8 x 500m / 2min rest',
    Day3: '2 x 15min / 2min rest',
    OptionalDay4: '30min',
    OptionalDay5: '4 x 8min / 2min rest'
    },
    { Week: 18,
    Day1: '11000m',
    Day2: '4 x 2k / 4min rest',
    Day3: '30min',
    OptionalDay4: '10000m',
    OptionalDay5: '4 x 1k / 3min rest'
    },
    { Week: 19,
    Day1: '10000m',
    Day2: '5 x 800m / 2min rest',
    Day3: '3 x 10min / 2min rest',
    OptionalDay4: '30min',
    OptionalDay5: '4 x 2k / 4min rest'
    },
    { Week: 20,
    Day1: '12000m',
    Day2: '5 x 1500m / 3min rest',
    Day3: '30min',
    OptionalDay4: '10000m',
    OptionalDay5: '8 x 500m / 2min rest'
    },
    { Week: 21,
    Day1: '10000m',
    Day2: '4 x 1k / 3min rest',
    Day3: '4 x 8min / 2min rest',
    OptionalDay4: '12000m',
    OptionalDay5: '5 x 1500m / 3min rest'
    },
    { Week: 22,
    Day1: '12000m',
    Day2: '4 x 2k / 4min rest',
    Day3: '30min',
    OptionalDay4: '3 x 10min / 2min rest',
    OptionalDay5: '5 x 800m / 2min rest'
    },
    { Week: 23,
    Day1: '10000m',
    Day2: '8 x 500m / 2min rest',
    Day3: '2 x 15min / 2min rest',
    OptionalDay4: '10000m',
    OptionalDay5: '4 x 2k / 4min rest'
    },
    { Week: 24,
    Day1: '12000m',
    Day2: '5 x 1500m / 3min rest',
    Day3: '30min',
    OptionalDay4: '2 x 15min / 2min rest',
    OptionalDay5: '4 x 1k / 3min rest'
    }
]

var workoutForm = document.getElementById('workoutForm');
var inputs = document.getElementsByClassName('input')

function saveNotes(e) {
    var button = e.target.id;
    var noteIdOfButtonClicked = button.replace('Button', 'Input');
    var note = document.getElementById(noteIdOfButtonClicked).value;
    JSON.stringify(note)

    localStorage.setItem(noteIdOfButtonClicked, note);
    console.log(noteIdOfButtonClicked, note)
}

function createPlan() {
        const header1 = document.createElement('header');
        header1.className = 'headers'
        header1.id = 'Week1Header'
        header1.textContent = 'Week  ' + thePlan[i].Week 
        const workout1 = document.createElement('span');
        workout1.id = 'Workout Week ' + thePlan[i].Week  + ' ' + thePlan[i].Day1 + '1';
        workout1.className = 'workout col-sm-10 col-md-3'
        workout1.textContent = thePlan[i].Day1;
        const input1 = document.createElement('input');
        input1.id = 'Input Week ' + thePlan[i].Week + ' ' + thePlan[i].Day1 + '1';
        input1.className = 'input col-sm-10 col-md-6'
        input1.placeholder = "cals / time / stroke rate";
        var noteToDisplay = localStorage.getItem(input1.id)
        textContent = noteToDisplay
        const btn1 = document.createElement('button');
        btn1.id = 'Button Week ' + thePlan[i].Week + ' ' + thePlan[i].Day1 + '1';
        btn1.className = 'button col-sm-10 col-md-2 btn btn-secondary'
        btn1.textContent = 'Save Note';
        btn1.addEventListener('click', saveNotes)
        const checkBox1 = document.createElement('input');
        checkBox1.setAttribute('type', 'checkbox');
        checkBox1.setAttribute('name', 'completed');
        const label1 = document.createElement('label');
        label1.textContent = 'Workout Complete!';
        workoutForm.append(header1, workout1, input1, btn1, label1, checkBox1)

        const workout2 = document.createElement('span');
        workout2.id = 'Workout Week ' + thePlan[i].Week  + ' ' + thePlan[i].Day2 + '2';
        workout2.className = 'workout col-sm-10 col-md-3'
        workout2.textContent = thePlan[i].Day2;
        const input2 = document.createElement('input');
        input2.id = 'Input Week ' + thePlan[i].Week  + ' ' + thePlan[i].Day2 + '2';
        input2.className = 'input col-sm-10 col-md-6'
        input2.placeholder = "cals / time / stroke rate";
        const btn2 = document.createElement('button');
        btn2.id = 'Button Week ' + thePlan[i].Week  + ' ' + thePlan[i].Day2 + '2';
        btn2.className = 'button col-sm-10 col-md-2 btn btn-secondary'
        btn2.textContent = 'Save Note';
        btn2.addEventListener('click', saveNotes);
        const checkBox2 = document.createElement('input');
        checkBox2.setAttribute('type', 'checkbox');
        checkBox2.setAttribute('name', 'completed');
        const label2 = document.createElement('label');
        label2.textContent = 'Workout Complete!';
        workoutForm.append(workout2, input2, btn2, label2, checkBox2)

        const workout3 = document.createElement('span');
        workout3.id = 'Workout Week ' + thePlan[i].Week  + ' ' + thePlan[i].Day3 + '3';
        workout3.className = 'workout col-sm-10 col-md-3'
        workout3.textContent = thePlan[i].Day3;
        const input3 = document.createElement('input');
        input3.id = 'Input Week ' + thePlan[i].Week  + ' ' + thePlan[i].Day3 + '3';
        input3.className = 'input col-sm-10 col-md-6'
        input3.placeholder = "cals / time / stroke rate";
        const btn3 = document.createElement('button');
        btn3.id = 'Button Week ' + thePlan[i].Week  + ' ' + thePlan[i].Day3 + '3';
        btn3.className = 'button col-sm-10 col-md-2 btn btn-secondary'
        btn3.textContent = 'Save Note';
        btn3.addEventListener('click', saveNotes)
        const checkBox3 = document.createElement('input');
        checkBox3.setAttribute('type', 'checkbox');
        checkBox3.setAttribute('name', 'completed');
        const label3 = document.createElement('label');
        label3.textContent = 'Workout Complete!';
        workoutForm.append(workout3, input3, btn3, label3, checkBox3)

        const workout4 = document.createElement('span');
        workout4.id = 'Workout Week ' + thePlan[i].Week  + ' ' + thePlan[i].OptionalDay4 + 4;
        workout4.className = 'workout col-sm-10 col-md-3'
        workout4.textContent = thePlan[i].OptionalDay4;
        const input4 = document.createElement('input');
        input4.id = 'Input Week ' + thePlan[i].Week  + ' ' + thePlan[i].OptionalDay4 + '4';
        input4.className = 'input col-sm-10 col-md-6'
        input4.placeholder = "cals / time / stroke rate";
        const btn4 = document.createElement('button');
        btn4.id = 'Button Week ' + thePlan[i].Week  + ' ' + thePlan[i].OptionalDay4 + 4;
        btn4.className = 'button col-sm-10 col-md-2 btn btn-secondary'
        btn4.textContent = 'Save Note'
        btn4.addEventListener('click', saveNotes)
        const checkBox4 = document.createElement('input');
        checkBox4.setAttribute('type', 'checkbox');
        checkBox4.setAttribute('name', 'completed');
        const label4 = document.createElement('label');
        label4.textContent = 'Workout Complete!';
        workoutForm.append(workout4, input4, btn4, label4, checkBox4)

        const workout5 = document.createElement('span');
        workout5.id = 'Workout Week ' + thePlan[i].Week  + ' ' + thePlan[i].OptionalDay5 + '5';
        workout5.className = 'workout col-sm-10 col-md-3'
        workout5.textContent = thePlan[i].OptionalDay5;
        const input5 = document.createElement('input');
        input5.id = 'Input Week ' + thePlan[i].Week  + ' ' + thePlan[i].OptionalDay5 + '5';
        input5.className = 'input col-sm-10 col-md-6'
        input5.placeholder = "cals / time / stroke rate";
        const btn5 = document.createElement('button');
        btn5.id = 'Button Week ' + thePlan[i].Week  + ' ' + thePlan[i].OptionalDay5 + '5';
        btn5.className = 'button col-sm-10 col-md-2 btn btn-secondary'
        btn5.textContent = 'Save Note';
        btn5.addEventListener('click', saveNotes)
        const checkBox5 = document.createElement('input');
        checkBox5.setAttribute('type', 'checkbox');
        checkBox5.setAttribute('name', 'completed');
        const label5 = document.createElement('label');
        label5.textContent = 'Workout Complete!';
        workoutForm.append(workout5, input5, btn5, label5, checkBox5)

        rendernotes(input1, input2, input3, input4, input5)
}
function rendernotes(input1, input2, input3, input4, input5) {
    if (localStorage.getItem(input1.id)) {
    input1.placeholder = localStorage.getItem(input1.id)
    } if (localStorage.getItem(input2.id)) {
    input2.placeholder = localStorage.getItem(input2.id)
    } if (localStorage.getItem(input3.id)) {
        input3.placeholder = localStorage.getItem(input3.id)
    } if (localStorage.getItem(input4.id)) {
        input4.placeholder = localStorage.getItem(input4.id)
    } if (localStorage.getItem(input5.id)) {
        input5.placeholder = localStorage.getItem(input5.id)
    }
}

for (var i = 0; i < thePlan.length; i++) {
    createPlan(i)
}