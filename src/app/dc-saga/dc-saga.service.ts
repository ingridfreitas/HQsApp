import { Injectable } from '@angular/core';
import { DC } from './dc/dc.model';

@Injectable({
  providedIn: 'root'
})
export class DcSagaService {

  hqs: DC[] = [
    {
      id: "bat",
      nome: "Batman: O Cavaleiro das Trevas",
      ano: 2011,
      edicoes: 35,
      autor:  "Gregg Hurwitz",
      desenhista: "David Finch",
      imagePath: "assets/img/bat.png",
      descricao: "Em uma certa noite, Pinguim, Espantalho e Chapeleiro Louco foram convidados para um encontro de dia das bruxas. Porém, é tudo uma armadilha"
    },
    {
      id: "baty",
      nome: "Batman: O Retorno",
      ano: 1986,
      edicoes: 4,
      autor:  "Frank Miller",
      desenhista: "Frank Miller",
      imagePath: "assets/img/baty.png",
      descricao: "Um Batman velho e cansado que resolve voltar a ativa após perceber que o crime continua crescendo. A trama ainda culmina no famoso confronto com o Homem de Aço. "
    },
    {
      
      id: "hell",
      nome: "Constantine: The Hellblazer",
      ano: 2015,
      edicoes: 14,
      autor:  "Ming Doyle",
      desenhista: "Eryk Donovan",
      imagePath: "assets/img/hell.png",
      descricao: "A história Constantine com um mistério bastante particular: os fantasmas de seus amigos começam a desaparecer aos poucos, atacados por uma misteriosa entidade sobrenatural."
    },
    {
      id: "idy",
      nome: "Crise de Identidade",
      ano: 2004,
      edicoes: 7,
      autor:  "Brad Meltzer",
      desenhista: "Rags Morales",
      imagePath: "assets/img/idy.png",
      descricao: "Em Crise de Identidade a trama volta para os primeiros anos da Liga da Justiça, quando Batman descobre uma história decepcionante que mudará a equipe para sempre."
    },
    {
      id: "flash",
      nome: "Flash",
      ano: 2011,
      edicoes: 52,
      autor:  "Francis Manapul",
      desenhista: " Brett Booth ",
      imagePath: "assets/img/flash.png",
      descricao: "Essa continuação possui um Flash 5 anos mais novo e com a vida totalmente diferente e em uma versão muito mais complexa"
    },
    {
      id: "justice",
      nome: "Justiça",
      ano: 2005,
      edicoes: 12,
      autor:  "Doug Braithwaite e Jim Krueger",
      desenhista: "Alex Ross ",
      imagePath: "assets/img/justice.png",
      descricao: "As mentes criminosas descobrem que para serem reconhecidos precisam provas sua dignidade e começam a fazer bons atos, mas esses vilões precisam se livrar de seus maiores inimigos. "
    },
    {
      id: "green",
      nome: "Lanterna Verde",
      ano: 2005,
      edicoes: 67,
      autor:  "Geoff Johns",
      desenhista: "Carlos Pacheco",
      imagePath: "assets/img/green.png",
      descricao: "personagens que estavam no esquecimento retornam e trazem todo o universo brilhante da força policial mais bem sucedida da galáxia de volta!"
    },
    {
      id: "cat",
      nome: "Mulher-Gato - Vol.1",
      ano: 2002,
      edicoes: 83,
      autor:  "Ed Brubaker",
      desenhista: "Darwyn Cooke",
      imagePath: "assets/img/cat.png",
      descricao: "A noite de casamento mal acabou, e a Mulher-Gato já está de volta às ruas. É hora de encontrar um imitador que está cometendo roubos por Gotham City."
    },
    {
      id: "joke",
      nome: "Piada Mortal",
      ano: 1988,
      edicoes: 1,
      autor:  "Alan Moore",
      desenhista: "Brian Bolland",
      imagePath: "assets/img/joke.png",
      descricao: "Na história de Alan Moore vemos o Coringa tentar provar que todos podem ser como ele. A trama traz tortura física e psicológica e tem um final arrepiante."
    },
    {
      id: "king",
      nome: "Reino do Amanhã",
      ano: 1996,
      edicoes: 4,
      autor:  "Todd Klein",
      desenhista: "Alex Ross",
      imagePath: "assets/img/king.png",
      descricao: "A linha que separa o herói do vilão foi cruzada pelas novas gerações de vigilantes me e as pessoas comuns estão presas no meio da guerra sangrenta"
    },
    {
      id: "sm",
      nome: "Superman: O Homem de Aço",
      ano: 1991,
      edicoes: 6,
      autor:  " John Byrne",
      desenhista: " John Byrne",
      imagePath: "assets/img/sm.png",
      descricao: "Todo o passado de Clark até o fatídico dia em que ele se mostra para humanidade pela primeira vez, ainda em trajes civis. Onde ele busca em seus pais, o refúgio de sua confusão."
    },
    {
      id: "trinity",
      nome: "Trindade",
      ano: 2016,
      edicoes: 22,
      autor:  "Francis Manapul",
      desenhista: "Francis Manapul",
      imagePath: "assets/img/trinity.png",
      descricao: "Os heróis Batman, Superman e Wonder Woman se unem para deter um plano de Ra’s Al Ghul que envolve um clone do Superman e até uma amazona renegada! "
    },
  ]

  constructor() { }
  dcs() : DC[] {
    return this.hqs;
  }
}