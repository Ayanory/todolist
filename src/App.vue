<template>
  <div class="app">
    <h1>代辦事項</h1>
    <div class="input-container">
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
      <button @click="addTask" class="add-button">新增</button>
    </div>
    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <div v-if="editIndex === index && editStatus == true">
          <!-- 編輯模式 -->
          <div class="task-buttons">
            <input v-model="editingText" @keyup.enter="saveTask" />
            <button @click="saveTask()" class="save-button">儲存</button>
            <button @click="cancelEdit()" class="cancel-button">取消</button>
          </div>
        </div>
        <div v-else>
          <!-- 顯示模式 -->
          <div class="task-content">
              <span class="task-text">{{ task }}</span>
             <div class="task-buttons">
               <button @click="startEdit(index)" class="edit-button">編輯</button>
               <button @click="removeTask(index)" class="remove-button">移除</button>
             </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref([]);
const editIndex = ref(null);
const editingText = ref('');
const editStatus = ref(false);

function addTask() {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value.trim());
    newTask.value = '';
  }
};

function removeTask(index) {
  tasks.value.splice(index, 1);
};

function startEdit(index) {
  editStatus.value = true;
  editIndex.value = index;
  editingText.value = tasks.value[index]; // 設置 editingText 為當前值
};

function saveTask() {
  console.log(editingText.value);
  if (editIndex.value !== null) {
    tasks.value[editIndex.value] = editingText.value;
    editIndex.value = null;
  }
  console.log(tasks.value);
  // console.log(editingTextTemp.value);
  console.log(editingText.value);
};

function cancelEdit() {
  editStatus.value= false;
  editIndex.value = null;
};
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;  
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 50px;
}

.input-container {
  margin-bottom: 20px;
}

input {
  padding: 8px;
  margin-right: 10px;
}

.add-button {
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #45a049;
}

ul {
  list-style-type: none;
  padding: 10px 0 50px;
}

.task-list {
  max-height: 200px; /* 設定代辦事項列表的最大高度 */
  width: 35rem;
  overflow: auto; /* 設定溢出內容滾動 */
  align-items: center;
}

.task-item {
  display: flex;
  flex-direction:column;
  flex-wrap: nowrap;
  justify-content:center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box; /* 使邊框包含在內部，不增加元素的大小 */
  width: 100%; /*設定固定寬度*/
  white-space: nowrap; /* 防止文字換行 */
  overflow: hidden; /* 如果文字過長，隱藏溢出的部分 */
  text-overflow: ellipsis; /* 在溢出時顯示省略號 */
  word-wrap: break-word; /* 新增的屬性，處理長單詞或URL的換行 */
}

.task-content {
  flex: 1; /* 使用 flex 屬性讓文字部分佔據剩餘空間 */
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: flex;
  align-items: flex-start;
}

.task-text{
  width: 20rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.task-buttons {
  display: flex;
  gap: 5px;
  margin-left: auto;
}

.edit-button {
  padding: 8px 12px;
  background-color: #45a049;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button:hover {
  background-color: #45a049;
}

.remove-button {
  padding: 8px 12px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #d32f2f;
}


.save-button {
  padding: 8px 12px;
  background-color: #45a049;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.save-button:hover {
  background-color: #45a049;
}

.cancel-button {
  padding: 8px 12px;
  background-color: #f44336;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cancel-button:hover {
  background-color: #d32f2f;
}

</style>
