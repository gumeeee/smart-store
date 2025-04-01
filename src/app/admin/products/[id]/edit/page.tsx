import SubmitButton from "@/components/form/buttons";
import CheckboxInput from "@/components/form/checkbox-input";
import FormContainer from "@/components/form/form-container";
import FormInput from "@/components/form/form-input";
import ImageInputContainer from "@/components/form/image-input-container";
import PriceInput from "@/components/form/prince-input";
import TextAreaInput from "@/components/form/text-area-input";
import { fetchAdminProductDetails, updateProductAction } from "@/utils/actions";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  const { name, company, description, featured, price, image } = product;

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">Editar Produto</h1>
      <div className="border p-8 rounded">
        <ImageInputContainer
          action={updateProductAction}
          name={name}
          image={image}
          text="Atualizar Imagem"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="Nome do Produto"
              placeholder="Nome do Produto"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              placeholder="Nome da empresa"
              defaultValue={company}
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            defaultValue={description}
            labelText="Descrição do Produto"
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="Favoritar"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="Atualizar Produto" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
