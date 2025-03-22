import SubmitButton from "@/components/form/buttons";
import CheckboxInput from "@/components/form/checkbox-input";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInput from "@/components/form/image-input";
import PriceInput from "@/components/form/prince-input";
import TextAreaInput from "@/components/form/text-area-input";
import { Button } from "@/components/ui/button";
import { createProductAction } from "@/utils/actions";
import { faker } from "@faker-js/faker";

export default function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 15 });
  const price = faker.commerce.price({ dec: 0 });

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">criar produto</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="nome do produto"
              defaultValue={name}
              placeholder={"Nome do produto"}
            />
            <FormInput
              type="text"
              name="company"
              label="empresa"
              defaultValue={company}
              placeholder={"Nome da empresa"}
            />
            <PriceInput defaultValue={Number(price)} />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="descrição do produto"
            defaultValue={description}
          />

          <div className="mt-6">
            <CheckboxInput name="featured" label="favorito" />
          </div>
          <SubmitButton text="criar produto" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
