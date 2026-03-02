<script lang="ts">
import {FileUpload} from '$lib/index.js';
import XIcon from '../@icons/XIcon.svelte';
</script>

<FileUpload.Root maxFiles={3}>
	{#snippet children(api)}
		<FileUpload.Dropzone>
			Drag your file(s) here

			<FileUpload.HiddenInput />
			<FileUpload.Trigger>Browse Files</FileUpload.Trigger>
		</FileUpload.Dropzone>

		<FileUpload.ItemGroup>
			{#each api().acceptedFiles as file}
				<FileUpload.Item {file}>
					<FileUpload.ItemPreview>
						<FileUpload.ItemPreviewImage />
					</FileUpload.ItemPreview>
					<FileUpload.ItemName />
					<FileUpload.ItemSizeText />
					<FileUpload.ItemDeleteTrigger>
						<XIcon style="width:14px;height:14px;" />
					</FileUpload.ItemDeleteTrigger>
				</FileUpload.Item>
			{/each}
		</FileUpload.ItemGroup>
	{/snippet}
</FileUpload.Root>
