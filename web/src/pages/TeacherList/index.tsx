import React from 'react';

import PageHeader from '../../Components/PageHeader';
import TeacherItem from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select 
            name="subject" 
            label="Matéria"
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Matemática', label: 'Matemática'},
              {value: 'Música', label: 'Música'},
              {value: 'História', label: 'História'},
              {value: 'Química', label: 'Química'},
              {value: 'Física', label: 'Física'},
              {value: 'Geografia', label: 'Geografia'},
              {value: 'Português', label: 'Português'}
            ]}
          />
          <Select 
            name="week_day" 
            label="Dia da Semena"
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-Feira'},
              {value: '2', label: 'Terça-Feira'},
              {value: '3', label: 'Quarta-Feira'},
              {value: '4', label: 'Quinta-Feira'},
              {value: '5', label: 'Sexta-Feira'},
              {value: '6', label: 'Sábado'}
            ]}
          />
          <Input type="time" name="time" label="time"></Input>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
      
    </div>
  );
}

export default TeacherList;