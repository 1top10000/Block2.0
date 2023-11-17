let PTemp = Entry.exportProject();
const prompt01 = prompt("반복문 속도(60은 기본값)");
if (isNaN(prompt01) == false) {
  PTemp.speed = Number(prompt01);
  Entry.clearProject();
  Entry.loadProject(PTemp);
  alert("1top10020이 만들음(약250보다 빨라지는거는 불가능했어요.(1top10020컴 기준))");
}else{
  alert("숫자를 입력해주세요");
}
