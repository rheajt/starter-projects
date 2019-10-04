<script>
  import Button from "./Button";
  let form = {
    name: "",
    email: "",
    message: "",
    subscribe: true
  };

  function submit() {
    if (process.env.NODE_ENV !== "production") {
      console.log(form);
      return;
    }

    google.script.run
      .withSuccessHandler(onSuccess)
      .withFailureHandler(onFailure)
      .submitMessage(form);
  }

  function onSuccess(resp) {
    console.log(resp);
  }

  function onFailure(err) {
    console.error(err);
  }
</script>

<style lang="scss">
  textarea,
  input {
    padding: 0.5em 1em;
    font-size: 1em;
  }

  .form-container {
    display: grid;
    grid-gap: 1em;
    max-width: 800px;
    margin: 0 auto;
    grid-template-areas: "name email" "message message" "subscribe submit";

    .name {
      grid-area: name;
    }

    .email {
      grid-area: email;
    }

    .message {
      grid-area: message;
      height: 10em;
    }

    .subscribe {
      grid-area: subscribe;
    }

    .submit {
      grid-area: submit;
      text-align: center;
    }
  }
</style>

<div class="form-container">
  <input class="name" type="text" bind:value={form.name} placeholder="Name" />
  <input
    class="email"
    type="email"
    bind:value={form.email}
    placeholder="Email" />
  <textarea class="message" bind:value={form.message} />
  <label class="subscribe">
    <input type="checkbox" bind:checked={form.subscribe} />
    I don't mind hearing more about your projects!
  </label>

  <div class="submit">
    <Button on:click={submit}>Submit</Button>
  </div>
</div>
