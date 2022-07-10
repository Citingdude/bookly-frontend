<script lang=ts>
  import IconEye from "../../components/icon/IconEye.svelte";

  export let href: string;
  export let imgUrl: string;
  export let imgAlt = "Image alt text";
  export let title= "Book title";
  export let author= "Book author";
</script>

<a href={`/book/${href}`}>
  <img class="mb-8" src={imgUrl} alt={imgAlt} />

  <h3 class="capitalize text-lg font-medium mb-1">
    {title}
  </h3>

  <p class="text-sm mb-6">
    {author}
  </p>

  <div class="font-medium text-primary italic flex space-x-5">
    <p>View details</p>
    <IconEye />
  </div>
</a>
