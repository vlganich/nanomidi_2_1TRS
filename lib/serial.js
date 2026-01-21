document.getElementById('save').addEventListener('click', function() {
    // Показываем сообщение перед отправкой команд
    showWaitingMessage();
    // Получаем значения из выпадающих списков
    allSave();
});

function showWaitingMessage() {
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.id = 'waitingModal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    
    const content = document.createElement('div');
    content.style.backgroundColor = 'white';
    content.style.padding = '20px';
    content.style.borderRadius = '5px';
    content.style.textAlign = 'center';
    content.style.boxShadow = '5px 5px 0px 1px rgb(155 10 10 / 97%)';
   

    
    const message = document.createElement('h2');
    message.textContent = 'Не отключайте устройство';
    message.style.color = 'red';
    message.style.display = 'contents';
    
    content.appendChild(message);
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Слушаем сообщения от serial-порта
    listenForSaveConfirmation(modal);
}

function listenForSaveConfirmation(modal) {
    // Здесь должен быть код для чтения из serial-порта
    // Это примерная реализация, вам нужно адаптировать её под ваш API работы с serial-портом
    
    // Эмуляция: в реальном коде это будет событие при получении данных из порта
    function checkForConfirmation() {
        // В реальном приложении вы бы читали данные из порта:
        // const data = serialPort.read();
        
        // Для примера используем setTimeout как эмуляцию получения данных
        setTimeout(() => {
            // Эмулируем получение подтверждения
            const receivedData = "Received data: HID4"; // В реальности это будет из serial-порта
            
            if (receivedData.includes("Received data: HID4")) {
                // Если получили подтверждение - закрываем модальное окно
                if (modal && modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
            } else {
                // Продолжаем проверять
                checkForConfirmation();
            }
        }, 1000); // Проверяем каждую секунду (в реальном коде интервал может быть другим)
    }
    
    checkForConfirmation();
}

function allSave() {
    const md1Value = document.getElementById('mode1value').value;
    const md2Value = document.getElementById('mode2value').value;
    const md3value = document.getElementById('mode3value').value;
    const md4value = document.getElementById('mode4value').value;

    const ch1Value = document.getElementById('ch1value').value;
    const ch2Value = document.getElementById('ch2value').value;
    const ch3Value = document.getElementById('ch3value').value;
    const ch4Value = document.getElementById('ch4value').value;

    const nt1 = document.getElementById('note1value').value
    const nt2 = document.getElementById('note2value').value
    const nt11 = document.getElementById('1note1value').value
    const nt12 = document.getElementById('1note2value').value
    const nt21 = document.getElementById('2note1value').value
    const nt22 = document.getElementById('2note2value').value
    
    const nt3 = document.getElementById('note3value').value
    const nt4 = document.getElementById('note4value').value
    const nt13 = document.getElementById('1note3value').value
    const nt14 = document.getElementById('1note4value').value
    const nt23 = document.getElementById('2note3value').value
    const nt24 = document.getElementById('2note4value').value

    const nt31 = document.getElementById('3note1value').value
    const nt32 = document.getElementById('3note2value').value
    const nt33 = document.getElementById('3note3value').value
    const nt34 = document.getElementById('3note4value').value
    const nt41 = document.getElementById('4note1value').value
    const nt42 = document.getElementById('4note2value').value
    const nt43 = document.getElementById('4note3value').value
    const nt44 = document.getElementById('4note4value').value

    const kn1 = document.getElementById('knob1value').value
    const kn2 = document.getElementById('knob2value').value
    const kn3 = document.getElementById('knob3value').value
    const kn4 = document.getElementById('knob4value').value
    const kn11 = document.getElementById('1knob1value').value
    const kn12 = document.getElementById('1knob2value').value
    const kn13 = document.getElementById('1knob3value').value
    const kn14 = document.getElementById('1knob4value').value
    const kn21 = document.getElementById('2knob1value').value
    const kn22 = document.getElementById('2knob2value').value
    const kn23 = document.getElementById('2knob3value').value
    const kn24 = document.getElementById('2knob4value').value
    const kn31 = document.getElementById('3knob1value').value
    const kn32 = document.getElementById('3knob2value').value
    const kn33 = document.getElementById('3knob3value').value
    const kn34 = document.getElementById('3knob4value').value
    const kn41 = document.getElementById('4knob1value').value
    const kn42 = document.getElementById('4knob2value').value
    const kn43 = document.getElementById('4knob3value').value
    const kn44 = document.getElementById('4knob4value').value

    const hid11 = document.getElementById('hid1value1').value
    const hid12 = document.getElementById('hid1value2').value
    const hid13 = document.getElementById('hid1value3').value
    const hid21 = document.getElementById('hid2value1').value
    const hid22 = document.getElementById('hid2value2').value
    const hid23 = document.getElementById('hid2value3').value
    const hid31 = document.getElementById('hid3value1').value
    const hid32 = document.getElementById('hid3value2').value
    const hid33 = document.getElementById('hid3value3').value
    const hid41 = document.getElementById('hid4value1').value
    const hid42 = document.getElementById('hid4value2').value
    const hid43 = document.getElementById('hid4value3').value
    const hid111 = document.getElementById('1hid1value1').value
    const hid112 = document.getElementById('1hid1value2').value
    const hid113 = document.getElementById('1hid1value3').value
    const hid121 = document.getElementById('1hid2value1').value
    const hid122 = document.getElementById('1hid2value2').value
    const hid123 = document.getElementById('1hid2value3').value
    const hid131 = document.getElementById('1hid3value1').value
    const hid132 = document.getElementById('1hid3value2').value
    const hid133 = document.getElementById('1hid3value3').value
    const hid141 = document.getElementById('1hid4value1').value
    const hid142 = document.getElementById('1hid4value2').value
    const hid143 = document.getElementById('1hid4value3').value

    const hid211 = document.getElementById('2hid1value1').value
    const hid212 = document.getElementById('2hid1value2').value
    const hid213 = document.getElementById('2hid1value3').value
    const hid221 = document.getElementById('2hid2value1').value
    const hid222 = document.getElementById('2hid2value2').value
    const hid223 = document.getElementById('2hid2value3').value
    const hid231 = document.getElementById('2hid3value1').value
    const hid232 = document.getElementById('2hid3value2').value
    const hid233 = document.getElementById('2hid3value3').value
    const hid241 = document.getElementById('2hid1value1').value
    const hid242 = document.getElementById('2hid1value2').value
    const hid243 = document.getElementById('2hid1value3').value

    const hid311 = document.getElementById('3hid1value1').value
    const hid312 = document.getElementById('3hid1value2').value
    const hid313 = document.getElementById('3hid1value3').value
    const hid321 = document.getElementById('3hid2value1').value
    const hid322 = document.getElementById('3hid2value2').value
    const hid323 = document.getElementById('3hid2value3').value
    const hid331 = document.getElementById('3hid3value1').value
    const hid332 = document.getElementById('3hid3value2').value
    const hid333 = document.getElementById('3hid3value3').value
    const hid341 = document.getElementById('3hid1value1').value
    const hid342 = document.getElementById('3hid1value2').value
    const hid343 = document.getElementById('3hid1value3').value

    const hid411 = document.getElementById('4hid1value1').value
    const hid412 = document.getElementById('4hid1value2').value
    const hid413 = document.getElementById('4hid1value3').value
    const hid421 = document.getElementById('4hid2value1').value
    const hid422 = document.getElementById('4hid2value2').value
    const hid423 = document.getElementById('4hid2value3').value
    const hid431 = document.getElementById('4hid3value1').value
    const hid432 = document.getElementById('4hid3value2').value
    const hid433 = document.getElementById('4hid3value3').value
    const hid441 = document.getElementById('4hid1value1').value
    const hid442 = document.getElementById('4hid1value2').value
    const hid443 = document.getElementById('4hid1value3').value

    
    // Отправляем команды в последовательный порт
    sendCommand(`MODE1 ${md1Value}`);
    sendCommand(`MODE2 ${md2Value}`);
    sendCommand(`MODE3 ${md3value}`);
    sendCommand(`MODE4 ${md4value}`);

    sendCommand(`CH1 ${ch1Value}`);
    sendCommand(`CH2 ${ch2Value}`);
    sendCommand(`CH3 ${ch3Value}`);
    sendCommand(`CH4 ${ch4Value}`);

    sendCommand(`NT1 ${nt1}`);
    sendCommand(`NT2 ${nt2}`);
    sendCommand(`NT3 ${nt3}`);
    sendCommand(`NT4 ${nt4}`);
    sendCommand(`1NT1 ${nt11}`);
    sendCommand(`1NT2 ${nt12}`);
    sendCommand(`1NT3 ${nt13}`);
    sendCommand(`1NT4 ${nt14}`);
    sendCommand(`2NT1 ${nt21}`);
    sendCommand(`2NT2 ${nt22}`);
    sendCommand(`2NT3 ${nt23}`);
    sendCommand(`2NT4 ${nt24}`);
    sendCommand(`3NT1 ${nt31}`);
    sendCommand(`3NT2 ${nt32}`);
    sendCommand(`3NT3 ${nt33}`);
    sendCommand(`3NT4 ${nt34}`);
    sendCommand(`4NT1 ${nt41}`);
    sendCommand(`4NT2 ${nt42}`);
    sendCommand(`4NT3 ${nt43}`);
    sendCommand(`4NT4 ${nt44}`);

    sendCommand(`KN1 ${kn1}`);
    sendCommand(`KN2 ${kn2}`);
    sendCommand(`KN3 ${kn3}`);
    sendCommand(`KN4 ${kn4}`);
    sendCommand(`1KN1 ${kn11}`);
    sendCommand(`1KN2 ${kn12}`);
    sendCommand(`1KN3 ${kn13}`);
    sendCommand(`1KN4 ${kn14}`);
    sendCommand(`2KN1 ${kn21}`);
    sendCommand(`2KN2 ${kn22}`);
    sendCommand(`2KN3 ${kn23}`);
    sendCommand(`2KN4 ${kn24}`);
    sendCommand(`3KN1 ${kn31}`);
    sendCommand(`3KN2 ${kn32}`);
    sendCommand(`3KN3 ${kn33}`);
    sendCommand(`3KN4 ${kn34}`);
    sendCommand(`4KN1 ${kn41}`);
    sendCommand(`4KN2 ${kn42}`);
    sendCommand(`4KN3 ${kn43}`);
    sendCommand(`4KN4 ${kn44}`);


    sendCommand(`HID1 ${hid11}:${hid12}:${hid13}`);
    sendCommand(`HID2 ${hid21}:${hid22}:${hid23}`);
    sendCommand(`HID3 ${hid31}:${hid32}:${hid33}`);
    sendCommand(`HID4 ${hid41}:${hid42}:${hid43}`);
    sendCommand(`1HID1 ${hid111}:${hid112}:${hid113}`);
    sendCommand(`1HID2 ${hid121}:${hid122}:${hid123}`);
    sendCommand(`1HID3 ${hid131}:${hid132}:${hid133}`);
    sendCommand(`1HID4 ${hid141}:${hid142}:${hid143}`);
    sendCommand(`2HID1 ${hid211}:${hid212}:${hid213}`);
    sendCommand(`2HID2 ${hid221}:${hid222}:${hid223}`);
    sendCommand(`2HID3 ${hid231}:${hid232}:${hid233}`);
    sendCommand(`2HID4 ${hid241}:${hid242}:${hid243}`);

    sendCommand(`3HID1 ${hid311}:${hid312}:${hid313}`);
    sendCommand(`3HID2 ${hid321}:${hid322}:${hid323}`);
    sendCommand(`3HID3 ${hid331}:${hid332}:${hid333}`);
    sendCommand(`3HID4 ${hid341}:${hid342}:${hid343}`);
    sendCommand(`4HID1 ${hid411}:${hid412}:${hid413}`);
    sendCommand(`4HID2 ${hid421}:${hid422}:${hid423}`);
    sendCommand(`4HID3 ${hid431}:${hid432}:${hid433}`);
    sendCommand(`4HID4 ${hid441}:${hid442}:${hid443}`);
    sendCommand(`SAVEHID`);

}