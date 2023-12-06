// script.js

// Funkce pro otevření modálního okna
function openEditModal(todoId, todoText) {
    // Nastavení hodnoty do inputu v modálním okně
    document.getElementById('editTodoText').value = todoText;

    // Nastavení akce formuláře
    document.getElementById('editForm').action = '/edit/todo/' + todoId;

    // Otevření modálního okna
    $('#editModal').modal('show');
}

// JavaScript funkce pro filtrování todo items
function filterTodos(status) {
    // Získání všech todo items na stránce
    const todos = document.querySelectorAll('.list-group-item');

    // Iterace přes každý todo item a zobrazení/skrytí podle statusu
    todos.forEach(todo => {
        const done = todo.classList.contains('done-item');
        if ((status === 'done' && done) || (status === 'undone' && !done) || status === 'all') {
            todo.style.display = 'flex';
        } else {
            todo.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('logout-btn');

    if (button) {
        button.addEventListener('click', () => {
            window.location.href = '/logout';
        });
    } else {
        console.error('Button not found.');
    }

    // JSON Button
    const viewJsonBtn = document.getElementById('viewJsonBtn');

    if (viewJsonBtn) {
        viewJsonBtn.addEventListener('click', () => {
            // Otevřít nové okno nebo panel s JSON daty
            window.open('/json', '_blank');
        });
    } else {
        console.error('Button not found.');
    }
});
