<template>
  <q-page class="column items-center justify-center">
    <div v-html="md.render(targetText)"></div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { md } from 'src/boot/markdown-it';

export default defineComponent({
  setup() {
    const targetText = `
\`\`\`csharp
using System;
using System.Linq;
using System.Collections.Generic;


public record Person
{
    public string Name;
    public string WorkingFor;
    public string Role;
    private List<string> _skills = new();

    public void AddSkill(params string[] skills)
    {
        _skills.AddRange(skills);
    }

    public void Greet()
    {
        Console.WriteLine($"Hello, I'm {Name}.");
        Console.WriteLine($"I'm working for {WorkingFor} as {Role}.");
        string skills = string.Join(", ", _skills.SkipLast(1));
        skills += $" and {_skills.Last()}";
        Console.WriteLine($"I also use skills such as {skills}.");
    }
}
\`\`\`
`;
    return {
      md,
      targetText,
    };
  },
});
</script>
