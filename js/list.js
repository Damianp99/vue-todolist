/*
Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/
console.log('Vue ok', Vue);
Vue.config.devtools = true

const app = new Vue({
    el: '#root',
    data: {
        newTask: '',
        tasks: [
            {
                text: 'Fai la spesa',
                done: true,
            },
            {
                text: 'Butta la spazzatura',
                done: false,
            },
            {
                text: 'Porta la macchina dal meccanico',
                done: true,
            },
            {
                text: 'Porta fuori il cane',
                done: false,
            },
            {
                text: 'Vai in palestra',
                done: false,
            },
        ]

    },

    methods: {
        doneTask(task) {
            task.done = false
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        },
        addTask() {
            const newTask = this.newTask.trim()
            if (newTask) {
                const taskObject = {
                    text: newTask,
                    done: false,
                }
                this.tasks.push(taskObject)
            }
            this.newTask = '';
        },

        toggleTask(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },
    },
});