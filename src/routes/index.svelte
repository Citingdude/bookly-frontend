<script>
  import BookCard from "../components/book/BookCard.svelte";
</script>

<main>
  <section class="py-8 sm:py-16">
    <div class="container">
      <h2 class="mb-12">Currently reading.</h2>

      <div class="grid lg:grid-cols-4 lg:gap-12">
        <BookCard
          imgUrl="/images/books/astrophysics.jpg"
          imgAlt="Astrophysics for people in a hurry"
          href="astrophysics-for-people-in-a-hurry"
          title="Astrophysics for People in a hurry"
          author="Neil Degrasse Tyson"
        />
        <BookCard
          imgUrl="/images/books/dune.jpg"
          imgAlt="Dune"
          href="dune"
          title="Dune"
          author="Frank Herbert"
        />
        <BookCard
          imgUrl="/images/books/intelligent.jpg"
          imgAlt="The intelligent investor"
          href="the-intelligent-investor"
          title="The intelligent investor"
          author="Benjamin Graham"
        />
        <BookCard
          imgUrl="/images/books/theory.jpg"
          imgAlt="The theory of everything"
          href="the-theory-of-everything"
          title="The theory of everything"
          author="Stephen Hawking"
        />
      </div>
    </div>
  </section>
</main>
