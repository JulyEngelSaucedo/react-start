import Header from './Header'
import Funcionalidades from './Funcionalidades'
import styles from './Formulario.module.css'
import { TextInputField, Button, SavedIcon } from 'evergreen-ui'

const Formulario = () => {
  return (
    <div >
      <Header />
      <div className={styles.formContainer}>
        <Funcionalidades />
        <div className={styles.form}>
          <form>

            <TextInputField
              label="Nome"
              width="100%"
              marginBottom={16}
              name="text-input-name"
            />
            <TextInputField
              label="CNPJ"
              width="100%"
              marginBottom={16}
              name="text-input-name"
            />
            <div className={styles.inputContainer}>
              <TextInputField
                label="Endereço"
                width="600px"
                marginBottom={16}
                name="text-input-name"
              />
              <TextInputField
                label="Bairro"
                width="600px"
                marginBottom={16}
                marginLeft={8}
                name="text-input-name"
              />
            </div>
            <TextInputField
              label="CEP/ZIP CODE"
              width="100%"
              marginBottom={16}
              name="text-input-name"
            />

            <TextInputField
              label="Tax Identification Number"
              width="100%"
              marginBottom={16}
              name="text-input-name"
            />
            <div className={styles.inputContainer}>
              <TextInputField
                label="Telefone"
                width="600px"
                marginBottom={16}
                name="text-input-name"
              />
              <TextInputField
                label="Fax"
                width="600px"
                marginBottom={16}
                marginLeft={8}
                name="text-input-name"
              />
            </div>
            <TextInputField
              label="E-mail"
              width="100%"
              marginBottom={16}
              name="text-input-name"
            />
            <TextInputField
              label="Site"
              width="100%"
              marginBottom={16}
              name="text-input-name"
            />
            <div className={styles.botaoContainer}>

              <Button iconBefore={SavedIcon} appearance="primary" intent="none">Criar</Button>

            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Formulario;