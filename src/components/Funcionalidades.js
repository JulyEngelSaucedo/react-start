import React from 'react';
import styles from './Funcionalidades.module.css';
import { AddIcon } from 'evergreen-ui'
import { DatabaseIcon } from 'evergreen-ui'
import { Button } from 'evergreen-ui'


const Funcionalidades = () => {
  return (
    <div className={styles.container}>
       <Button className={styles.botao}  iconBefore={AddIcon}>Nova Empresa</Button>
       <Button className={styles.botao} iconBefore={DatabaseIcon}>Empresas Cadastradas</Button>

    </div>
  );
};

export default Funcionalidades;