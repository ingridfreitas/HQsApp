import { Injectable } from '@angular/core';
import { Marvel } from './marvel/marvel.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelSagaService {

  hqs: Marvel[] = [
    {
      id: "children",
      nome: "Cruzada das Crianças",
      ano: 2010,
      edicoes: 10,
      autor:  "Allan Heinberg",
      desenhista: "Jim Cheung",
      imagePath: "assets/img/children.png",
      descricao: "Os Jovens Vingadores surgem após a Feiticeira Escarlate enlouquecer e perder o controle de seus poderes, tentando encontrá-la e fazê-la recobrar sua consciência"
    },
    {
      id: "infinity",
      nome: "Cruzada Infinita",
      ano: 1996,
      edicoes: 3,
      autor:  "Jim Starlin",
      desenhista: "Ron Lim",
      imagePath: "assets/img/infinity.png",
      descricao: "Após a derrota de Magnus, a essência boa de Adam Warlock ataca os heróis recrutando os fiéis mais fervorosos para lutar em sua guerra santa."
    },
    {
      
      id: "dinastia",
      nome: "Dinastia M",
      ano: 2005,
      edicoes: 8,
      autor:  "Brian Michael Bendis",
      desenhista: "Oliver Coipel",
      imagePath: "assets/img/dinastia.png",
      descricao: "Após os eventos de Vingadores: A Queda, uma antiga heroína pode se tornar uma vilã e o maior desafio dos X-Men e dos Vingadores."
    
    },
    {
      id: "wanda",
      nome: "Feiticeira Escarlate",
      ano: 2016,
      edicoes: 8,
      autor:  "James Robinson",
      desenhista: "Tula Lotay",
      imagePath: "assets/img/witcher.png",
      descricao: "Essa série mostra a Feiticeira Escarlate em uma investigação de eventos mágicos e misteriosos que estava ocorrendo enquanto mergulha dentro de si mesma e monta suas peças"
    },
    {
      id: "smash",
      nome: "Futuro Imperfeito",
      ano: 2015,
      edicoes: 5,
      autor:  "Peter David",
      desenhista: "Greg Land",
      imagePath: "assets/img/smash.png",
      descricao: "Ao contrario do que muitos pensam, o Hulk não é só um monstro verde que quebra tudo, pelo contrário, ele pensa e também tem sentimentos."
    },
    {
      id: "hawkeye",
      nome: "Gavião Arqueiro",
      ano: 2012,
      edicoes: 22,
      autor:  "Matt Fraction",
      desenhista: "David Aja",
      imagePath: "assets/img/hawkeye.png",
      descricao: "A história mostra as missões do Gavião Arqueiro ao passar seu manto para Kate Bishop, a nova Gaviã Arqueira"
    },
    {
      id: "civil",
      nome: "Guerra Civil",
      ano: 2015,
      edicoes: 5,
      autor:  "Chales Soule",
      desenhista: "Leinil Francis Yu",
      imagePath: "assets/img/civil.png",
      descricao: "Após os eventos de Vingadores: A Queda, uma antiga heroína pode se torna"
    },
    {
      id: "civil2",
      nome: "Guerra Civil II",
      ano: 2015,
      edicoes: 10,
      autor:  "Brian Michael Bendis",
      desenhista: "David Marques",
      imagePath: "assets/img/civil2.png",
      descricao: "Após os eventos de Vingadores: A Queda, uma antiga heroína pode se torna"
    },
    {
      id: "armor",
      nome: "Guerra das Armaduras",
      ano: 2015,
      edicoes: 5,
      autor:  "James Robinson",
      desenhista: "Marcio Takara",
      imagePath: "assets/img/armor.png",
      descricao: "Após os eventos de Vingadores: A Queda, uma antiga heroína pode se torna"
    },
    {
      id: "young",
      nome: "Jovens Vingadores - Vol.1",
      ano: 2013,
      edicoes: 15,
      autor:  "Brian Michael Bendis",
      desenhista: "Oliver Coipel",
      imagePath: "assets/img/young.png",
      descricao: "Os Jovens Vingadores surgem novamente para consertar uma falha no multiverso causada por Wiccano, onde ele liberta 'A Mãe' e somente como Demiurgo poderia derrotá-la"
    },
    {
      id: "pecado",
      nome: "Pecado Original",
      ano: 2013,
      edicoes: 9,
      autor:  "Jason Aaron",
      desenhista: "Mike Deodato",
      imagePath: "assets/img/pecado.png",
      descricao: "Os Vingadores se unem novamente para resolver o maior mistério de suas vidas: Quem matou o Vigia?"
    },
    {
      id: "avsxm",
      nome: "Vingadores vs X-Men",
      ano: 2012,
      edicoes: 13,
      autor:  "Ed Brubaker",
      desenhista: "John Romita Jr.",
      imagePath: "assets/img/avsxm.png",
      descricao: "Após todo o caos causado pela Feiticeira Escarlate, os X-Men tem a chance de recomeçar com a chegada da Fênix Negra, mas será essa uma boa ideia?"
    }
  ]

  constructor() { }
  marvels() : Marvel[] {
    return this.hqs;
  }
}