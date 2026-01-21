
function activeBlockConnect(){
    document.getElementById("ch1value").disabled = false;
    document.getElementById("ch2value").disabled = false;
    document.getElementById("ch3value").disabled = false;
    document.getElementById("ch4value").disabled = false;
    
    document.getElementById("knob1value").disabled = false;
    document.getElementById("knob2value").disabled = false;
    document.getElementById("knob3value").disabled = false;
    document.getElementById("knob4value").disabled = false;

    document.getElementById("note1value").disabled = false;
    document.getElementById("note2value").disabled = false;
    document.getElementById("note3value").disabled = false;
    document.getElementById("note4value").disabled = false;

   
    document.getElementById("1knob1value").disabled = false;
    document.getElementById("1knob2value").disabled = false;
    document.getElementById("1knob3value").disabled = false;
    document.getElementById("1knob4value").disabled = false;
    document.getElementById("2knob1value").disabled = false;
    document.getElementById("2knob2value").disabled = false;
    document.getElementById("2knob3value").disabled = false;
    document.getElementById("2knob4value").disabled = false;

    document.getElementById("3knob1value").disabled = false;
    document.getElementById("3knob2value").disabled = false;
    document.getElementById("3knob3value").disabled = false;
    document.getElementById("3knob4value").disabled = false;
    document.getElementById("4knob1value").disabled = false;
    document.getElementById("4knob2value").disabled = false;
    document.getElementById("4knob3value").disabled = false;
    document.getElementById("4knob4value").disabled = false;


    document.getElementById("save").disabled = false;
    document.getElementById("defaultAll").disabled = false;
    updateShifts();



}

function updateShifts() {
    var mode1Value = document.getElementById('mode1value').value;
    var mode2Value = document.getElementById('mode2value').value;
    var mode3Value = document.getElementById('mode3value').value;
    var mode4Value = document.getElementById('mode4value').value;

    var shift1KnobDiv = document.getElementById('shift1knob');
    var shift2KnobDiv = document.getElementById('shift2knob');
    var shift3KnobDiv = document.getElementById('shift3knob');
    var shift4KnobDiv = document.getElementById('shift4knob');

    var noteDiv = document.getElementById('note');
    var shift1noteDiv = document.getElementById('shift1note');
    var shift2noteDiv = document.getElementById('shift2note');
    var shift3noteDiv = document.getElementById('shift3note');
    var shift4noteDiv = document.getElementById('shift4note');

    var hidDiv = document.getElementById('hid');
    var shift1hidDiv = document.getElementById('shift1hid');
    var shift2hidDiv = document.getElementById('shift2hid');
    var shift3hidDiv = document.getElementById('shift3hid');
    var shift4hidDiv = document.getElementById('shift4hid');

    // Определяем, должен ли shift1 быть видимым
    var shouldShowShift1 = (mode1Value == 5) || (mode2Value == 5)|| (mode3Value == 5)|| (mode4Value == 5) || (mode1Value == 10) || (mode2Value == 10)|| (mode3Value == 10)|| (mode4Value == 10) ;
    // Определяем, должен ли shift2 быть видимым
    var shouldShowShift2 = (mode1Value == 6) || (mode2Value == 6)|| (mode3Value == 6)|| (mode4Value == 6) || (mode1Value == 11) || (mode2Value == 11)|| (mode3Value == 11)|| (mode4Value == 11) ;
    // Определяем, должен ли shift3 быть видимым
    var shouldShowShift3 = (mode1Value == 8) || (mode2Value == 8)|| (mode3Value == 8)|| (mode4Value == 8) || (mode1Value == 12) || (mode2Value == 12)|| (mode3Value == 12)|| (mode4Value == 12) ;
    // Определяем, должен ли shift4 быть видимым
    var shouldShowShift4 = (mode1Value == 9) || (mode2Value == 9)|| (mode3Value == 9)|| (mode4Value == 9)|| (mode1Value == 13) || (mode2Value == 13)|| (mode3Value == 13)|| (mode4Value == 13) ;

    // Ноты

    var shouldShowNoteDiv = (mode1Value < 5) || (mode2Value < 5) || (mode3Value <5) || (mode4Value <5);

    var shouldShowNoteDiv1 = ((mode1Value < 5) || (mode2Value < 5) || (mode3Value <5) || (mode4Value <5)) && (shouldShowShift1==true);

    var shouldShowNoteDiv2 = ((mode1Value < 5) || (mode2Value < 5) || (mode3Value <5) || (mode4Value <5)) && (shouldShowShift2==true);

    var shouldShowNoteDiv3 = ((mode1Value < 5) || (mode2Value < 5) || (mode3Value <5) || (mode4Value <5)) && (shouldShowShift3==true);

    var shouldShowNoteDiv4 = ((mode1Value < 5) || (mode2Value < 5) || (mode3Value <5) || (mode4Value <5)) && (shouldShowShift4==true);

    // HID
    var shouldShowHidDiv = (mode1Value == 7) || (mode2Value == 7) ||  (mode3Value == 7) || (mode4Value == 7);

    var shouldShowHidDiv1 = ((mode1Value == 7) || (mode2Value == 7) ||  (mode3Value == 7) || (mode4Value == 7)) && (shouldShowShift1==true);

    var shouldShowHidDiv2 = ((mode1Value == 7) || (mode2Value == 7) ||  (mode3Value == 7) || (mode4Value == 7)) && (shouldShowShift2==true);

    var shouldShowHidDiv3 = ((mode1Value == 7) || (mode2Value == 7) ||  (mode3Value == 7) || (mode4Value == 7)) && (shouldShowShift3==true);

    var shouldShowHidDiv4 = ((mode1Value == 7) || (mode2Value == 7) ||  (mode3Value == 7) || (mode4Value == 7)) && (shouldShowShift4==true);

    var checkActivity = document.getElementById("save").disabled
    // Открываем активность блоков
    if (checkActivity == false) {
        const enableIds = [
            "note2value", "1note2value", "2note2value", "3note2value", "4note2value",
            "note3value", "1note3value", "2note3value", "3note3value", "4note3value",
            "note4value", "1note4value", "2note4value", "3note4value", "4note4value",
            "hid2value1", "hid2value2", "hid2value3", "1hid2value1", "1hid2value2", "1hid2value3",
            "2hid2value1", "2hid2value2", "2hid2value3", "3hid2value1", "3hid2value2", "3hid2value3",
            "4hid2value1", "4hid2value2", "4hid2value3", "hid3value1", "hid3value2", "hid3value3",
            "1hid3value1", "1hid3value2", "1hid3value3", "2hid3value1", "2hid3value2", "2hid3value3",
            "3hid3value1", "3hid3value2", "3hid3value3", "4hid3value1", "4hid3value2", "4hid3value3",
            "hid4value1", "hid4value2", "hid4value3", "1hid4value1", "1hid4value2", "1hid4value3",
            "2hid4value1", "2hid4value2", "2hid4value3", "3hid4value1", "3hid4value2", "3hid4value3",
            "4hid4value1", "4hid4value2", "4hid4value3","note1value", "1note1value", "2note1value", "3note1value", "4note1value",
                "hid1value1", "hid1value2", "hid1value3", "1hid1value1", "1hid1value2", "1hid1value3",
                "2hid1value1", "2hid1value2", "2hid1value3", "3hid1value1", "3hid1value2", "3hid1value3",
                "4hid1value1", "4hid1value2", "4hid1value3"
        ];
        // Включаем элементы
        enableIds.forEach(id => {
            document.getElementById(id).disabled = false;
        });

        if ((mode1Value == 5) || (mode1Value == 6) || (mode1Value == 8) || (mode1Value == 9)) {
            // Список ID элементов, которые нужно включить
            
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "note1value", "1note1value", "2note1value", "3note1value", "4note1value",
                "hid1value1", "hid1value2", "hid1value3", "1hid1value1", "1hid1value2", "1hid1value3",
                "2hid1value1", "2hid1value2", "2hid1value3", "3hid1value1", "3hid1value2", "3hid1value3",
                "4hid1value1", "4hid1value2", "4hid1value3"
            ];
        
            
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }
        if ((mode1Value == 7) ) {            
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "note1value", "1note1value", "2note1value", "3note1value", "4note1value"
            ];                  
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }
        if ((mode1Value < 5) ) {            
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "hid1value1", "hid1value2", "hid1value3", "1hid1value1", "1hid1value2", "1hid1value3",
                "2hid1value1", "2hid1value2", "2hid1value3", "3hid1value1", "3hid1value2", "3hid1value3",
                "4hid1value1", "4hid1value2", "4hid1value3"
            ];                  
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }
        

        if ((mode2Value == 5) || (mode2Value == 6) || (mode2Value == 8) || (mode2Value == 9)) {
            // Список ID элементов, которые нужно включить
            
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "note2value", "1note2value", "2note2value", "3note2value", "4note2value",
                "hid2value1", "hid2value2", "hid2value3", "1hid2value1", "1hid2value2", "1hid2value3",
                "2hid2value1", "2hid2value2", "2hid2value3", "3hid2value1", "3hid2value2", "3hid2value3",
                "4hid2value1", "4hid2value2", "4hid2value3"
            ];
        
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }
        if ((mode2Value == 7) ) {            
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "note2value", "1note2value", "2note2value", "3note2value", "4note2value"
            ];                  
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }
        if ((mode2Value < 5) ) {            
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "hid2value1", "hid2value2", "hid2value3", "1hid2value1", "1hid2value2", "1hid2value3",
                "2hid2value1", "2hid2value2", "2hid2value3", "3hid2value1", "3hid2value2", "3hid2value3",
                "4hid2value1", "4hid2value2", "4hid2value3"
            ];                  
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }

        if ((mode3Value == 5) || (mode3Value == 6) || (mode3Value == 8) || (mode3Value == 9)) {
            // Список ID элементов, которые нужно включить
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "note3value", "1note3value", "2note3value", "3note3value", "4note3value",
                "hid3value1", "hid3value2", "hid3value3", "1hid3value1", "1hid3value2", "1hid3value3",
                "2hid3value1", "2hid3value2", "2hid3value3", "3hid3value1", "3hid3value2", "3hid3value3",
                "4hid3value1", "4hid3value2", "4hid3value3"
            ];
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }

        if ((mode3Value == 7) ) {            
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "note3value", "1note3value", "2note3value", "3note3value", "4note3value"
            ];                  
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }
        if ((mode3Value < 5) ) {            
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "hid3value1", "hid3value2", "hid3value3", "1hid3value1", "1hid3value2", "1hid3value3",
                "2hid3value1", "2hid3value2", "2hid3value3", "3hid3value1", "3hid3value2", "3hid3value3",
                "4hid3value1", "4hid3value2", "4hid3value3"
            ];                  
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }

        if ((mode4Value == 5) || (mode4Value == 6) || (mode4Value == 8) || (mode4Value == 9)) {
            
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "note4value", "1note4value", "2note4value", "3note4value", "4note4value",
                "hid4value1", "hid4value2", "hid4value3", "1hid4value1", "1hid4value2", "1hid4value3",
                "2hid4value1", "2hid4value2", "2hid4value3", "3hid4value1", "3hid4value2", "3hid4value3",
                "4hid4value1", "4hid4value2", "4hid4value3"
            ];
        
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }

        if ((mode4Value == 7) ) {            
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "note4value", "1note4value", "2note4value", "3note4value", "4note4value"
            ];                  
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }
        if ((mode4Value < 5) ) {            
        
            // Список ID элементов, которые нужно отключить
            const disableIds = [
                "hid4value1", "hid4value2", "hid4value3", "1hid4value1", "1hid4value2", "1hid4value3",
                "2hid4value1", "2hid4value2", "2hid4value3", "3hid4value1", "3hid4value2", "3hid4value3",
                "4hid4value1", "4hid4value2", "4hid4value3"
            ];                  
        
            // Отключаем элементы
            disableIds.forEach(id => {
                document.getElementById(id).disabled = true;
            });
        }

    
        
        // Функция для включения или отключения элементов
            function toggleElements(ids, enable) {
                ids.forEach(id => {
                    document.getElementById(id).disabled = !enable;
                });
            }

            // Элементы для mode1Value
            const mode1Ids = ["hid1value1", "hid1value2", "hid1value3"];
            toggleElements(mode1Ids, mode1Value == 7);

            // Элементы для mode2Value
            const mode2Ids = ["hid2value1", "hid2value2", "hid2value3"];
            toggleElements(mode2Ids, mode2Value == 7);

            // Элементы для mode3Value
            const mode3Ids = ["hid3value1", "hid3value2", "hid3value3"];
            toggleElements(mode3Ids, mode3Value == 7);

            // Элементы для mode4Value
            const mode4Ids = ["hid4value1", "hid4value2", "hid4value3"];
            toggleElements(mode4Ids, mode4Value == 7);

        // Функция для включения или отключения элемента
            function toggleElement(id, enable) {
                document.getElementById(id).disabled = !enable;
            }

            // Массив объектов с данными
            const elements = [
                { value: mode1Value, id: "note1value" },
                { value: mode2Value, id: "note2value" },
                { value: mode3Value, id: "note3value" },
                { value: mode4Value, id: "note4value" }
            ];

            // Обработка каждого элемента
            elements.forEach(element => {
                toggleElement(element.id, element.value < 5);
            });
                }
    

    // Применяем видимость для shift1
    if (shouldShowShift1) {
        shift1KnobDiv.classList.remove('hidden');
    } else {
        shift1KnobDiv.classList.add('hidden');
    }

    // Применяем видимость для shift2
    if (shouldShowShift2) {
        shift2KnobDiv.classList.remove('hidden');
    } else {
        shift2KnobDiv.classList.add('hidden');
    }
    // Применяем видимость для shift3
    if (shouldShowShift3) {
        shift3KnobDiv.classList.remove('hidden');
    } else {
        shift3KnobDiv.classList.add('hidden');
    }

    // Применяем видимость для shift4
    if (shouldShowShift4) {
        shift4KnobDiv.classList.remove('hidden');
    } else {
        shift4KnobDiv.classList.add('hidden');
    }
    // Применяем видимость для shift2
    if (shouldShowNoteDiv) {
        noteDiv.classList.remove('hidden');
    } else {
        noteDiv.classList.add('hidden');
    }
    // Применяем видимость для shift2
    if (shouldShowNoteDiv1) {
        shift1noteDiv.classList.remove('hidden');
    } else {
        shift1noteDiv.classList.add('hidden');
    }
    // Применяем видимость для shift2
    if (shouldShowNoteDiv2) {
        shift2noteDiv.classList.remove('hidden');
    } else {
        shift2noteDiv.classList.add('hidden');
    }
    if (shouldShowNoteDiv3) {
        shift3noteDiv.classList.remove('hidden');
    } else {
        shift3noteDiv.classList.add('hidden');
    }
    // Применяем видимость для shift2
    if (shouldShowNoteDiv4) {
        shift4noteDiv.classList.remove('hidden');
    } else {
        shift4noteDiv.classList.add('hidden');
    }

    // Применяем видимость для HID
    if (shouldShowHidDiv) {
        hidDiv.classList.remove('hidden');
    } else {
        hidDiv.classList.add('hidden');
    }
    // Применяем видимость для shift2
    if (shouldShowHidDiv1) {
        shift1hidDiv.classList.remove('hidden');
    } else {
        shift1hidDiv.classList.add('hidden');
    }
    // Применяем видимость для shift2
    if (shouldShowHidDiv2) {
        shift2hidDiv.classList.remove('hidden');
    } else {
        shift2hidDiv.classList.add('hidden');
    }
     // Применяем видимость для shift2
     if (shouldShowHidDiv3) {
        shift3hidDiv.classList.remove('hidden');
    } else {
        shift3hidDiv.classList.add('hidden');
    }
    // Применяем видимость для shift2
    if (shouldShowHidDiv4) {
        shift4hidDiv.classList.remove('hidden');
    } else {
        shift4hidDiv.classList.add('hidden');
    }
}

// Назначение обработчиков для mode1value и mode2value
document.getElementById('mode1value').addEventListener('change', updateShifts);
document.getElementById('mode2value').addEventListener('change', updateShifts);
document.getElementById('mode3value').addEventListener('change', updateShifts);
document.getElementById('mode4value').addEventListener('change', updateShifts);


// Функция для заполнения select элемента option'ами от 0 до 127
function fillSelectOptions(selectId) {
    const selectElement = document.getElementById(selectId);
    for (let i = 0; i <= 127; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectElement.appendChild(option);
    }
}

// Заполняем оба select элемента
fillSelectOptions('knob1value');
fillSelectOptions('knob2value');
fillSelectOptions('knob3value');
fillSelectOptions('knob4value');
fillSelectOptions('1knob1value');
fillSelectOptions('1knob2value');
fillSelectOptions('1knob3value');
fillSelectOptions('1knob4value');
fillSelectOptions('2knob1value');
fillSelectOptions('2knob2value');
fillSelectOptions('2knob3value');
fillSelectOptions('2knob4value');
fillSelectOptions('3knob1value');
fillSelectOptions('3knob2value');
fillSelectOptions('3knob3value');
fillSelectOptions('3knob4value');
fillSelectOptions('4knob1value');
fillSelectOptions('4knob2value');
fillSelectOptions('4knob3value');
fillSelectOptions('4knob4value');



function hidSelectElements() {
    // Находим все элементы <select>
        const selectElements = document.querySelectorAll('select');
selectElements.forEach(select => {
    if (select.id.includes('hid') && select.id.includes('value')) {
        select.innerHTML = '';
        for (const [value, text] of Object.entries(keycodeData)) {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = text;
            select.appendChild(option);
        }
    }
});
}

function noteSelectElements() {
    // Находим все элементы <select>
        const selectElements = document.querySelectorAll('select');
selectElements.forEach(select => {
    if (select.id.includes('note') && select.id.includes('value')) {
        select.innerHTML = '';
        for (const [value, text] of Object.entries(notecodeData)) {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = text;
            select.appendChild(option);
        }
    }
});
}
noteSelectElements();
hidSelectElements();


// Инициализация при загрузке страницы
updateShifts();