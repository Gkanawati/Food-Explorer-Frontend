import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { IngredientItem } from '../../components/IngredientItem';

import { Container, Content, InputImageContainer, InputSelectContainer, PageTitle, Row } from './styles';
import { api } from '../../hooks/api';
import { useAuth } from '../../hooks/auth';
import { IconButton } from '../../components/IconButton';
import { FaChevronLeft } from 'react-icons/fa6';
import { MdOutlineFileUpload } from 'react-icons/md';

export function DishForm() {
  const params = useParams();
  const { isAdmin } = useAuth();

  const isEditAction = !!params.id;
  const categoryItems = ['Entrada', 'Prato Principal', 'Sobremesa', 'Bebida'];

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categoryItems[0]);
  const [ingredientes, setIngredientes] = useState([]);
  const [tagLink, setTagLink] = useState("");
  const [imageUrl, setImageUrl] = useState(isEditAction ? null : 'https://via.placeholder.com/150');
  const [imageFile, setImageFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  function handleAddTag() {
    if (!tagLink) {
      return alert('Preencha o campo.');
    }
    setIngredientes(prevState => [...prevState, { name: tagLink }]);
    setTagLink("");
  }

  function handleRemoveTag(tag) {
    setIngredientes(prevState => prevState.filter(item => item.name !== tag));
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleSaveDish() {
    if (!title || !price || !description || !category || !ingredientes.length || !imageUrl) {
      return alert('Preencha todos os campos.');
    }

    if (price < 0) {
      return alert('O Preço deve ser maior que 0.');
    }

    if (tagLink) {
      return alert('Clique em Adicionar para adicionar o marcador.');
    }

    const formattedFormData = {
      title,
      price,
      category,
      description,
      ingredientes,
    };

    try {
      setIsSubmitting(true);
      let dishId = null;
      if (isEditAction) {
        await api.put(`/dishes/${params.id}`, formattedFormData);
        dishId = params.id;
      } else {
        const res = await api.post('/dishes', formattedFormData)
        dishId = res.data.id;
      }

      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        await api.patch(`/dishes/image/${dishId}`, formData);
      }

      alert(`Prato ${isEditAction ? 'editado' : 'adicionado'} com sucesso!`);
      handleBack();
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      }
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function fetchDish() {
    const response = await api.get(`/dishes/${params.id}`);
    setTitle(response.data.title);
    setPrice(response.data.price);
    setCategory(response.data.category);
    setDescription(response.data.description);
    setIngredientes(response.data.ingredients);
    setImageUrl(`${api.defaults.baseURL}/files/${response.data.image}`);
  }

  function clearForm() {
    setTitle("");
    setPrice(0);
    setCategory(categoryItems[0]);
    setDescription("");
    setIngredientes([]);
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImageUrl(imagePreview);
  }

  useEffect(() => {
    // verify if use isAdmin
    if (!isAdmin) {
      alert('Você não tem permissão para acessar essa página.');
      navigate('/');
    }

    if (isEditAction) {
      fetchDish();
    } else {
      clearForm();
    }
  }, [isEditAction]);

  return (
    <Container>
      <Header />

      <Content>
        <IconButton onClick={handleBack}>
          <FaChevronLeft size={25} />
          voltar
        </IconButton>

        <PageTitle>
          {isEditAction ? 'Editar' : 'Adicionar '} Prato
        </PageTitle>

        <Row>
          <InputImageContainer>
            <img
              src={imageUrl}
              alt="Imagem do prato"
            />

            <label htmlFor="avatar">
              <div>
                <MdOutlineFileUpload />
                <span>
                  {imageUrl === 'https://via.placeholder.com/150'
                    ? 'Selecione uma imagem'
                    // nome da imagem selecionada
                    : imageFile?.name ?? 'Alterar imagem'
                  }
                </span>
              </div>

              <input
                id='avatar'
                type='file'
                onChange={handleChangeImage}
              />
            </label>
          </InputImageContainer>
        </Row>

        <Row>
          <Input
            id="name"
            labelText='Nome'
            placeholder="Nome do prato"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <Input
            id="price"
            labelText='Preço'
            placeholder="R$ 00,00"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          <InputSelectContainer>
            <label for="category">Categoria</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {categoryItems.map(item => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </InputSelectContainer>
        </Row>

        <TextArea
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <Section title="Ingredientes">
          <div className='tags'>
            {
              ingredientes.map(tag => (
                <IngredientItem
                  key={String(tag)}
                  value={tag.name}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <IngredientItem
              isNew
              placeholder="Novo Ingrediente"
              value={tagLink}
              onChange={e => setTagLink(e.target.value)}
              onClick={e => handleAddTag(e.target.value)}
            />
          </div>
        </Section>

        <Row>
          <Button styleType='secondary' type="secondary" text="Cancelar" onClick={handleBack} />
          <Button
            text="Salvar Alterações"
            onClick={handleSaveDish}
            loading={isSubmitting}
          />
        </Row>
      </Content>
    </Container>
  )
}
