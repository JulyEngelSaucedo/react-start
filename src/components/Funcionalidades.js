import React from 'react';
import styles from './Funcionalidades.module.css';
import { AddIcon } from 'evergreen-ui'
import { DatabaseIcon } from 'evergreen-ui'
import { Button } from 'evergreen-ui'
import { Link } from 'react-router-dom';

const Funcionalidades = () => {

  return (



    <div className={styles.container}>

      <Link className={styles.link} to="/formulario">
        <Button className={styles.botao} iconBefore={AddIcon}>Nova Empresa</Button>
      </Link>
      <Link className={styles.link} to="/cadastros">
        <Button className={styles.botao} iconBefore={DatabaseIcon}>Empresas Cadastradas</Button>
      </Link>

    </div>
  );
};

export default Funcionalidades;