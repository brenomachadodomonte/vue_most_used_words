<template>
  <v-container fluid>
    <v-form>
      <v-file-input
          multiple
          chips
          v-model="files"
          append-outer-icon="mdi-send"
          label="Select subtitles"
          prepend-icon="mdi-message-text"
          outlined
          @click:append-outer="processSubtitles" />
    </v-form>
    <div class="pills">
      <Pill v-for="word in groupedWords" :key="word.name" :name="word.name" :amount="word.amount"/>
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from 'electron';
import Pill from "./Pill";
export default {
  name: 'Home',
  components:  { Pill },
  data: () => ({
    files: [],
    groupedWords: []
  }),
  methods: {
    processSubtitles() {
      console.log(this.files);

      ipcRenderer.send('process-subtitles', this.files);
      ipcRenderer.on('process-subtitles', (event, resp) => {
          this.groupedWords = resp;
      });
    }
  }
}
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>