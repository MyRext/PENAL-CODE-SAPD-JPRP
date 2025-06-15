let selectedPenalCodes = new Set();
let totalFine = 0;
let totalArrestTime = 0;

document.querySelectorAll('.copyable').forEach(cell => {
  cell.addEventListener('click', () => {
    navigator.clipboard.writeText(cell.textContent);
    alert(`Copied: ${cell.textContent}`);
  });
});

document.getElementById('searchInput').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const rows = document.querySelectorAll('#penalTable tbody tr');
  rows.forEach(row => {
    const code = row.children[1].textContent.toLowerCase();
    const desc = row.children[2].textContent.toLowerCase();
    row.style.display = (code.includes(filter) || desc.includes(filter)) ? '' : 'none';
  });
});

document.querySelectorAll('.copyable').forEach(cell => {
  cell.addEventListener('click', () => {
    navigator.clipboard.writeText(cell.textContent);
    alert(`Copied: ${cell.textContent}`);
  });
});

document.getElementById('searchInput').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  document.querySelectorAll('.penalTable tbody tr').forEach(row => {
    const code = row.children[1].textContent.toLowerCase();
    const desc = row.children[2].textContent.toLowerCase();
    row.style.display = (code.includes(filter) || desc.includes(filter)) ? '' : 'none';
  });
});

document.querySelectorAll('.addBtn').forEach(button => {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    const code = row.children[1].textContent;
    const fine = parseInt(row.children[3].textContent);
    const time = parseInt(row.children[4].textContent);

    if (!selectedPenalCodes.has(code)) {
      selectedPenalCodes.add(code);
      totalFine += fine;
      totalArrestTime += time;
      updateArrestCommand();
    } else {
      alert(`${code} sudah ditambahkan.`);
    }
  });
});


function updateArrestCommand() {
  const codeList = Array.from(selectedPenalCodes).join(', ');
  const command = `/arrest [ID] [${totalFine}] [${totalArrestTime}] [${codeList}]`;
  const arrestElement = document.getElementById('arrestCommand');
  arrestElement.textContent = command;

  arrestElement.onclick = () => {
    navigator.clipboard.writeText(command);
    alert(`Copied: ${command}`);
  };
}

document.getElementById('resetBtn').addEventListener('click', () => {
  selectedPenalCodes.clear();
  totalFine = 0;
  totalArrestTime = 0;
  document.getElementById('arrestCommand').textContent = '/arrest';
});
