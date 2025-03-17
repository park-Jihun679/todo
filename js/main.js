const addBtn = document.querySelector('.fa-plus'); //추가 버튼
const input = document.querySelector('.footer_input'); // input 요소
const items = document.querySelector('.items'); // ul

function createItem(text) {
  console.log(text);

  const itemRow = document.createElement('li');
  itemRow.className = 'item';
  itemRow.innerHTML = `
          <span class="todo">${text}</span>
          <span class="input-time">${getDate()}</span>
          <span class="finish-time"></span>
          <i class="fa-solid fa-check"></i>
          <i class="fa-solid fa-trash"></i>`;

  // 체크 버튼 클릭 시 클래스 추가 이벤트
  itemRow.querySelector('.fa-check').addEventListener('click', () => {
    itemRow.classList.toggle('item_done');

    const endDate = itemRow.querySelector('.finish-time');
    endDate.textContent = getDate();
  });

  // 삭제 버튼 클릭 시 itemRow 제거 이벤트
  itemRow
    .querySelector('.fa-trash')
    .addEventListener('click', () => itemRow.remove());

  //   setTimeout(() => itemRow.scrollIntoView({ block: 'center' }), 0);
  requestAnimationFrame(() => itemRow.scrollIntoView({ block: 'center' }));
  return itemRow;
}

function onAdd() {
  const text = input.value.trim();
  if (!text) {
    input.value = '';
    input.focus();
    return;
  }

  // li 생성하는 함수 - createItem(text)
  // ul에 생성값을 추가함

  items.appendChild(createItem(text));
  input.value = '';
  input.focus();
}
addBtn.addEventListener('click', onAdd);

// && 앞이 true면 뒤를 무조건 실행
// || 앞이 false면 뒤를 실행
input.addEventListener('keypress', (e) => e.key === 'Enter' && onAdd());

function getDate() {
  const date = new Date();
  const nowMonth = date.getMonth() + 1;
  const nowDate = date.getDate();
  const nowHours = date.getHours();
  const nowMinutes = date.getMinutes();

  return nowMonth + '/' + nowDate + ' ' + nowHours + ':' + nowMinutes;
}
