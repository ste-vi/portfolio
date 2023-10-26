<script>
  import { Hr, Html, Text, Container, Heading } from "svelte-email";

  export let name = "";
  export let body = "";
  export let email = "";
</script>

<Html lang="en">
<Container>
  <Heading as="h3">New email from {name}</Heading>
  <Hr />
  <Text style="white-space: pre-wrap">
    {body}
  </Text>
  <Hr />
  <Text>
    {email}
  </Text>
</Container>
</Html>