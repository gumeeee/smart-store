import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter no mínimo 4 caracteres" })
    .max(60, { message: "O nome deve ter no máximo 100 caracteres" }),
  company: z
    .string()
    .min(4, { message: "O nome da empresa deve ter no mínimo 4 caracteres" })
    .max(50, { message: "O nome da empresa deve ter no máximo 50 caracteres" }),
  price: z.coerce.number().int().min(0, {
    message: "O preço deve ser um valor positivo",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "A descrição deve ter entre 10 e 1000 palavras",
    }
  ),
  featured: z.coerce.boolean(),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const supportedFormats = ["image/"];

  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "O tamanho da imagem deve ser menor que 1MB")
    .refine((file) => {
      return (
        !file || supportedFormats.some((format) => file.type.includes(format))
      );
    }, "O arquivo deve ser uma imagem");
}

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);

    throw new Error(errors.join(","));
  }

  return result.data;
}
