import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { Marvel } from './marvel/marvel.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelSagaService {

  sagas: Marvel[] = [
    {
    id: 'dinastia',
    nome: 'Dinastia M',
    ano:   2005,
    edicao:   8,
    autor: 'Brian Michael Bendis',
    desenhista: 'Olivier Coipel',
    descricao: 'Após eventos de Vingadores: A Queda, Wanda Maximoff se torna o maior desafio para os X-Men e Vingadores',
    imagePath: 'assets/img/dinastia.png'
  },
  {
    id: 'armor',
    nome: 'Guerra das Armaduras',
    ano:   2015,
    edicao:   5,
    autor: 'David Michelinie e Bob Layton',
    desenhista: 'Mark Bright',
    descricao: 'Terroristas tentam recriar armaduras, enquanto vilões perigosos atacam e tentam ruir o império criado por Stark.',
    imagePath: 'assets/img/armor.png'
  },
  {
    id: 'avsxm',
    nome: 'Vingadores vs X-Men',
    ano:   2012,
    edicao:   13,
    autor: 'Brian Michael Bendis',
    desenhista: ' Jonathan Hickman,',
    descricao: 'O retorno da Fênix Negra traz novas esperanças para os Mutantes, mas um grande desespero aos Vingadores',
    imagePath: 'assets/img/avsxm.png'
  },
  {
    id: 'children',
    nome: 'Cruzada das Crianças',
    ano:   2010,
    edicao:   10,
    autor: 'Allan Heinberg',
    desenhista: 'Jim Cheung',
    descricao: 'Jovens super-heróis surgem após a Feiticeira Escarlate enlouquecer e perder o controle de seus poderes',
    imagePath: 'assets/img/children.png'
  },
  {
    id: 'civil',
    nome: 'Guerra Civil',
    ano:   2015,
    edicao: 5,
    autor: 'Mark Millar',
    desenhista: 'Steve McNiven',
    descricao: 'Depois do massacre causado por um descuido, as coisas não ficaram fáceis para a classe dos super-heróis',
    imagePath: 'assets/img/civil.png'
  },
  {
    id: 'fall',
    nome: 'Vingadores: A Queda',
    ano:   2004,
    edicao:   5,
    autor: 'Brian Michael Bendis',
    desenhista: ' David Finch',
    descricao: 'Uma nova batalha começa e os Vingadores estão em desvantagem, tanto tecnológica quanto em número.',
    imagePath: 'assets/img/fall.png'
  },
  {
    id: 'gavigod',
    nome: 'Gavião Arqueiro',
    ano:   2012,
    edicao:  22,
    autor: 'Matt Fraction',
    desenhista: 'David Aja',
    descricao: 'Clint Barton começa a treinar Kate Bishop - Gaviã Arqueira - para passar seu manto',
    imagePath: 'assets/img/gavigod.png'
  },
  {
    id: 'infinity',
    nome: 'Cruzada Infinita',
    ano:   1996,
    edicao:   8,
    autor: 'Jim Starlin ',
    desenhista: 'Ron Lim',
    descricao: 'A "essência boa" de Adam Warlock ataca os heróis recrutando os fiéis mais fervorosos e monta um exército',
    imagePath: 'assets/img/infinity.png'
  },
  {
    id: 'pecado',
    nome: 'Pecado Original',
    ano:   2013,
    edicao:   9,
    autor: ' Jason Aaron',
    desenhista: 'Mike Deodato',
    descricao: 'O Vigia é assassinado, e cabe aos Vingadores descobrirem quem o matou',
    imagePath: 'assets/img/pecado.png'
  },
  {
    id: 'smash',
    nome: 'Futuro Imperfeito',
    ano:   2015,
    edicao:   5,
    autor: 'Peter David',
    desenhista: 'George Pérez',
    descricao: 'Hulk é levado para um futuro e precisa ajudar um grupo de rebeldes a acabar com a tirania do tal ditador',
    imagePath: 'assets/img/smash.png'
  },
  {
    id: 'witcher',
    nome: 'Feiticeira Escarlate',
    ano:   2016,
    edicao:   8,
    autor: 'James Robinson',
    desenhista: 'Marco Rudy',
    descricao: 'Feiticeira Escarlate sai pelo mundo resolvendo mistérios sobrenaturais enquanto descobre mais sobre si mesma',
    imagePath: 'assets/img/witcher.png'
  },
  {
    id: 'young ',
    nome: 'Jovens Vingadores: Vol. 3',
    ano:   2013,
    edicao:   15,
    autor: 'Kieron Gillen',
    desenhista: ' Jamie McKelvie',
    descricao: 'Após Wiccano soltar um ser dimencional chamado "Mãe", os heróis viajam pelo Mulriverso para consertar o erro',
    imagePath: 'assets/img/young.png'
  },
  ]

  constructor() { }

  hqs() : Marvel[]{
    return this.sagas;
  }
}
