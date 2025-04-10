<script setup>
const props = defineProps({
    note: Object
})

const emit = defineEmits(["delete"])
</script>

<template>
    <div class="rounded-xl p-4 shadow-sm transition hover:shadow-md" :class="{
        'bg-orange-100': note.label === 'Important',
        'bg-green-100': note.label === 'Work',
        'bg-blue-100': note.label === 'Personal',
        'bg-purple-100': note.label === 'Social'
    }">
        <div class="mb-2 flex items-center justify-between">
            <h3 class="font-semibold">{{ note.title }}</h3>
            <span class="h-2 w-2 rounded-full" :class="{
                'bg-orange-500': note.label === 'Important',
                'bg-green-500': note.label === 'Work',
                'bg-blue-500': note.label === 'Personal',
                'bg-purple-500': note.label === 'Social'
            }"></span>
        </div>
        <p class="text-sm text-gray-600">{{ note.description }}</p>
        <div class="mt-4 flex items-center justify-between text-gray-600">
            <div class="flex gap-3">
                <button title="Favorite">
                    <i class="bi bi-star"></i>
                </button>
                <button @click="emit('delete', note.id)" title="Delete">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
            <button title="Expand">
                <i class="bi bi-arrows-fullscreen"></i>
            </button>
        </div>
    </div>
</template>