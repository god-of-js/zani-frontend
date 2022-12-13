<template>
  <section>
    <p>
      sign up to our mailing list to receive exclusive early access on all
      upcoming drops. SMS sign-ups are not compulsory but are recommended
    </p>
    <div class="signup-to-malling">
      <UiInput placeholder="enter your email" class="enter-email" />
      <UiInput placeholder="mobile number" class="input-number" />
    </div>
    <UiButton class="subscribe-button">
      subscribe
    </UiButton>
  </section>
</template>

<style>
section {
  width: 72%;
  margin-inline: auto;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-block: 50px;
}
section p {
  font-size: 14px;
  width: 120%;
  padding-bottom: 20px;
}
.enter-email, .input-number {
    width: 50%;
}
.signup-to-malling {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
.subscribe-button {
  width: 60%;
}
</style>
