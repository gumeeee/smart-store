import FormInput from "@/components/form/form-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { faker } from "@faker-js/faker";

const createProductAction = async (formData: FormData) => {
  "use server";

  const name: string = formData.get("name") as string;
};

export default function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 15 });

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">criar produto</h1>
      <div className="border p-8 rounded-md">
        <form action={createProductAction}>
          <FormInput
            type="text"
            name="name"
            label="nome do produto"
            defaultValue={name}
            placeholder="Nome do produto"
          />
          <Button type="submit" size={"lg"}>
            Criar
          </Button>
        </form>
      </div>
    </section>
  );
}
