<template>
  <q-page class="column items-center justify-center">
    <code class="q-my-lg">
      <pre class="ascii-art">
                                           ./#,*
                                   %&%&@&&&&&&&%#/#*
                               %%&&@&&@@@&@@@@@&&@@&&%#&
                            %%%&@&&&@&&&@&&&@&@@@&@&&@%&&%
                          %&&%&&&&@&@@@@@@@&@@&@@@@&@&&&%&&&
                         &&&&&@&@&@&&@@@@@&@@@@@@@@@@@&&&&&%&
                       %%&%&@&&&@@&&&&%&@@@@&&@@@@@&&@@&&&&&%%
                      %&&&&&&%&&&&&%%#(#@@@@@@@@&@@@@&&&@&&&&%
                      &&&&&%@@@&&&&%#(/(%@@&&@@&&@&&&@&@&&&&%%%
                      %&%&&%&&%##//(####(#&@@@@@&&&@&&&&@&&&%%%
                     (%#&%&%%%(%%@&%((##(((#%%@&@@@&&&&&&&&&&&%
                     #(###((##((((((((%#((%/###(#(##%@&&&&&&&&%
                     (#(///((((((/(%##(//(#//(((((###%@&&&%&&%
                     //#/(((((//((((((////((//////#((#&@&&&&
                      /(/(((#((((##((((////(//////////#%//#
                        /((((((((((########(//////////(((
                        *(((((#@%#%####(//////////////(
                         ,#(((((#%%//**/(##((///////
                          *(((((##((#(###((((//////
                           /(#(((#####(((///(((((/
                           *#(#((((((///(////((((*
                           .###(###((((//(((((((//
                            (##(#######(((((//////*
                            (((####((((((///////////.
                        .,/((#((((((((((///////////////#(***.
                   .*//((((((##((((((((/(/(((//(/((((****/*/*//,
               .//(//////(((((#(((#((((((((((((///**/*****///(/(//***
        ,((/((###%%%///////////////***////***/*/*/*//(/##(########//#%(#/
     /%%##(/(///%/((((/////////*/*/*////***/**(((#/(((/*##&(//*/#/#%#%###/(/*
  #/(%////(((/(((((/((#/#((/##//#(#(/(((//%(##/(#((/(((((#((//((/(*//@#//(#(/#/
(#/(/(((((((((#(/(((/(#(*###/(##(/###(/(((//(((//(((/(((*/(((/(#((/(#(//(@//##/*

</pre
      >
    </code>

    <div
      v-html="md.render(targetText)"
      @click="router.push('/me/def')"
      style="cursor: zoom-in"
    ></div>

    <div class="row items-center justify-center">
      <q-btn flat round icon="play_arrow" :loading="loading" @click="run" />

      <q-btn flat round icon="add" @click="addingNewSkill = true" />
    </div>

    <code>
      <div
        class="row justify-center content-center q-ma-lg"
        style="white-space: pre-line"
      >
        <div class="col-12">
          {{ result }}
        </div>
      </div>
    </code>

    <q-dialog v-model="addingNewSkill">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">New skill</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="newSkill"
            autofocus
            @keyup.enter="addSkill"
            color="black"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Add skill" @click="addSkill" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <router-link to="/" class="q-ma-lg">back</router-link>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { md } from 'src/boot/markdown-it';
import { useRouter } from 'vue-router';

// utils
const sleep = (ms: number) => new Promise((s) => setTimeout(s, ms));
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

export default defineComponent({
  setup() {
    const router = useRouter();

    const skills: string[] = [
      'Rust',
      'Rails',
      'Solidity',
      'C#',
      'Unity',
      'Python',
      'Vue.js',
      'TypeScript',
      'Java',
    ];
    const targetText = ref('');
    const loading = ref(false);
    const addingNewSkill = ref(false);
    const newSkill = ref('');
    const result = ref('');

    const updateCode = () => {
      targetText.value = `
\`\`\`csharp
Person damin = new()
{
  Name = "Hiroaki Honda",
  WorkingFor = "Kande Inc.",
  Role = "CTO",
};

damin.AddSkill(
${skills.map((skill) => `    "${skill}"`).join(', \n')}
);

damin.Greet();
\`\`\``;
    };

    updateCode();

    return {
      router,
      md,
      targetText,
      loading,
      addingNewSkill,
      newSkill,
      result,

      updateCode,

      addSkill() {
        if (newSkill.value.indexOf('"') === -1) {
          skills.push(newSkill.value);
        }
        addingNewSkill.value = false;
        newSkill.value = '';
        updateCode();
      },

      async run() {
        result.value = '';
        loading.value = true;

        await sleep(getRandomInt(500, 2000));

        const skillText =
          skills.slice(0, skills.length - 1).join(', ') +
          ' and ' +
          skills[skills.length - 1];

        result.value = `Hello, I'm Hiroaki Honda.
I'm working for Kande Inc. as CTO.
I also use skills such as ${skillText}.`;

        loading.value = false;
        return;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.ascii-art {
  font-size: 0.45rem;
}
</style>
