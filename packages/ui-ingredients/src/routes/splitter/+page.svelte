<script lang="ts">
import {Splitter} from '$lib/index.js';
</script>

<Splitter.Root
	panels={[
    {
      id: 'a',
      minSize: 25,
    },
    {
      id: 'b',
      minSize: 25,
    },
  ]}
	defaultSize={[50, 50]}
>
	<Splitter.Panel id="a">A</Splitter.Panel>
	<Splitter.ResizeTrigger id="a:b" />
	<Splitter.Panel id="b">B</Splitter.Panel>
</Splitter.Root>
