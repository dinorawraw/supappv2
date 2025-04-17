const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setIsLoading(true);

  const form = event.currentTarget;
  const name = form.fullName.value;
  const email = form.email.value;
  const plan = form.plan.value;

  try {
    await addDoc(collection(db, "usuarios"), {
      nome: name,
      email,
      plano: plan,
      criadoEm: new Date(),
    });

    setSuccess(true);
    form.reset();
  } catch (error) {
    console.error("Erro ao salvar no Firestore:", error);
    setError("Erro ao enviar os dados.");
  } finally {
    setIsLoading(false);
  }
};
