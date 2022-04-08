import { defineStore } from 'pinia'

export const userStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: 'bingo',
            age: 23
        }
    },
    actions: {
        updateName(name: string): void {
            this.name = name
        }
    }
})
