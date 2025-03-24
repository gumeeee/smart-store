export const renderError = (error: unknown): { message: string } => {
  console.log(error);

  return {
    message:
      error instanceof Error
        ? error.message
        : "Ocorreu um erro ao criar o produto...",
  };
};
