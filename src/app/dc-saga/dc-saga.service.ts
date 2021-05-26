import { Injectable } from '@angular/core';
import { Dc } from './dc/dc.model';

@Injectable({
  providedIn: 'root'
})
export class DcSagaService {

  sagas: Dc[] = [
    {
    id: 'bat',
    nome: 'Batman: Cavaleiro das Trevas',
    ano:   2011,
    edicao:  35,
    autor: 'Gregg Hurwitz',
    desenhista: 'David Finch',
    descricao: 'Três dos maiores vilões de Batman são convidados para uma festa, o que acaba sendo uma armadilha.',
    imagePath: 'assets/img/bat.png'
  },
  {
    id: 'baty',
    nome: 'Batman: O Retorno',
    ano:   1986,
    edicao:  4,
    autor: 'Frank Miller',
    desenhista: 'Frank Miller',
    descricao: 'Bruce Wayne está aposentado e tenta levar uma vida comum, mas a onda de crimes em Gotham City não deixa.',
    imagePath: 'assets/img/baty.png'
  },
  {
    id: 'joker',
    nome: 'Batman: Piada Mortal',
    ano:   1988,
    edicao: 1,
    autor: 'Alan Moore',
    desenhista: 'Brian Bolland',
    descricao: 'Coringa foge do Arkham e põe em prática um plano para provar que qualquer um pode se tornar um monstro.',
    imagePath: 'assets/img/joke.png'
  },
  {
    id: 'hell',
    nome: 'Constantine: Hellblazer',
    ano:   2015,
    edicao:   13,
    autor: 'Ming Doyle',
    desenhista: 'James Tynion',
    descricao: 'Fantasmas de seus amigos começam a desaparecer aos poucos, atacados por uma misteriosa entidade sobrenatural',
    imagePath: 'assets/img/hell.png'
  },
  
  {
    id: 'idy',
    nome: 'Crise de Identidade',
    ano:   2004,
    edicao: 7,
    autor: 'Brad Meltzer',
    desenhista: 'Rags Morales',
    descricao: 'Um assassinato revolta a comunidade heroica, então, um grande grupo de heróis se junta para encontrar o assassino.',
    imagePath: 'assets/img/idy.png'
  },
  {
    id: 'flash',
    nome: 'Flash',
    ano:   2011,
    edicao:   52,
    autor: 'Francis Manapul e Brian Buccellato',
    desenhista: 'Francis Manapul',
    descricao: 'As melhores histórias com os melhores vilões e com muitas (MUITAS) versões de Flash',
    imagePath: 'assets/img/flash.png'
  },
  {
    id: 'justice',
    nome: 'Justiça',
    ano:   2005,
    edicao:   12,
    autor: 'Alex Ross',
    desenhista: 'Doug Braithwaite e Alex Ross',
    descricao: 'A história mostra a Liga da Justiça enfrentando a Legião do Mal: um grupo de vilões que tenta destruir a reputação dos heróis',
    imagePath: 'assets/img/justice.png'
  },
  {
    id: 'green',
    nome: 'Lanterna Verde',
    ano:   2005,
    edicao:   67,
    autor: ' Geoff Johns',
    desenhista: 'Ivan Reis',
    descricao: 'O retorno de Hal Jordan como o herói esmeralda e a volta Tropa dos Lanternas Verdes na franquia',
    imagePath: 'assets/img/green.png'
  },
  
  {
    id: 'cat',
    nome: 'Mulher-Gato',
    ano:   2002,
    edicao: 38,
    autor: 'Ed Brubaker',
    desenhista: 'Darwyn Cooke',
    descricao: 'A maior e melhor ladra de toda Gothan City retorna novamente e promete dar muita dor de cabeça',
    imagePath: 'assets/img/cat.png'
  },
  {
    id: 'king',
    nome: 'Reino do Amanhã',
    ano:   1996,
    edicao:   4,
    autor: ' Todd Klein',
    desenhista: 'Alex Ross',
    descricao: 'Heróis passam a usar métodos extremos de justiça e as pessoas comuns estão presas no meio da guerra sangrenta',
    imagePath: 'assets/img/king.png'
  },
  {
    id: 'sm',
    nome: 'Superman: O Homem de Aço',
    ano: 1991,
    edicao: 52,
    autor: 'John Byrne',
    desenhista: 'Francis Manapul',
    descricao: 'A história mostra a origem dos poderes de Clark e como ele passará por todas essas as mudanças.',
    imagePath: 'assets/img/sm.png'
  },
  {
    id: 'trinity',
    nome: 'Trindade',
    ano:   2016,
    edicao: 22,
    autor: 'Matt Wagner',
    desenhista: 'Olivier Coipel',
    descricao: 'Superman, Mulher-Maravilha e Batman se unem para enfrentar seu maior desafio: A pior versão deles mesmos',
    imagePath: 'assets/img/trinity.png'
  },
  ]

  constructor() { }

  hqs() : Dc[]{
    return this.sagas;
  }
}
