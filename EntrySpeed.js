let PTemp = Entry.exportProject();
PTemp.speed = prompt("반복문 속도(60은 기본값)");
Entry.clearProject();
Entry.loadProject(PTemp);
alert("1top10020이 만들음");
