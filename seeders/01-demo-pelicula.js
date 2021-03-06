'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('peliculas', [{"titulo":"Knick Knack","genero":"Animation|Children","actor":"Brittni Rhoades"},
      {"titulo":"Shooting Fish","genero":"Comedy|Romance","actor":"Ardis Lohrensen"},
      {"titulo":"Every Other Week (Varannan vecka)","genero":"Comedy|Drama|Romance","actor":"Corinna Wyndham"},
      {"titulo":"Rabbit","genero":"Animation|Horror","actor":"Berti Schoenleiter"},
      {"titulo":"Secret Life of Bees, The","genero":"Drama","actor":"Jereme Fladgate"},
      {"titulo":"Freeway II: Confessions of a Trickbaby","genero":"Comedy|Crime|Drama|Thriller","actor":"Maggi Whitlam"},
      {"titulo":"Loving","genero":"Comedy|Drama","actor":"Adelle Smissen"},
      {"titulo":"Robin Hood: Men in Tights","genero":"Comedy","actor":"Elnore Exroll"},
      {"titulo":"Wicker Man, The","genero":"Drama|Horror|Mystery|Thriller","actor":"Alverta Font"},
      {"titulo":"Inside The X-files","genero":"Documentary","actor":"Alene Sunnex"},
      {"titulo":"Death Wish 2","genero":"Action|Drama","actor":"Gabie Kinner"},
      {"titulo":"Singles","genero":"Comedy|Drama|Romance","actor":"Honor MacGall"},
      {"titulo":"Suddenly (Tan de Repente)","genero":"Comedy|Drama","actor":"Lyndell Zupo"},
      {"titulo":"Opportunists, The","genero":"Comedy|Crime|Drama","actor":"James Raccio"},
      {"titulo":"School of Flesh, The (École de la chair, L')","genero":"Drama|Romance","actor":"Tera Alabaster"},
      {"titulo":"Torments (El) (This Strange Passion)","genero":"Drama|Romance","actor":"Nikolai Tregust"},
      {"titulo":"Sleeper","genero":"Comedy|Sci-Fi","actor":"Boyce Starte"},
      {"titulo":"Single White Female","genero":"Drama|Thriller","actor":"Carlyle Gronno"},
      {"titulo":"String, The (Le fil)","genero":"Drama","actor":"Kay Gontier"},
      {"titulo":"Little Dorrit","genero":"Drama|Romance","actor":"Lizzie Glaister"},
      {"titulo":"Pleasantville","genero":"Comedy|Drama|Fantasy","actor":"Lorraine Noury"},
      {"titulo":"V. I. Warshawski","genero":"Action|Comedy|Crime","actor":"Swen Sowerby"},
      {"titulo":"Follow the Fleet","genero":"Comedy|Musical|Romance","actor":"Lorne Boutellier"},
      {"titulo":"I Drink Your Blood","genero":"Horror","actor":"Pauletta Gabbatt"},
      {"titulo":"Beans of Egypt, Maine, The","genero":"Drama","actor":"Geoff Stokell"},
      {"titulo":"Actress, the Dollars and the Transylvanians, The (Artista, dolarii si Ardelenii)","genero":"Western","actor":"Connor Pagon"},
      {"titulo":"Ice Storm, The","genero":"Drama","actor":"Ermina Allum"},
      {"titulo":"Presidentintekijät","genero":"Documentary","actor":"Vidovik Wogden"},
      {"titulo":"Crocodile Dundee II","genero":"Action|Adventure|Comedy","actor":"Margery Zollner"},
      {"titulo":"Living in Oblivion","genero":"Comedy","actor":"Cherianne Olver"},
      {"titulo":"And Along Come Tourists (Am Ende kommen Touristen)","genero":"Drama","actor":"Christoffer Hollebon"},
      {"titulo":"Lovely to Look At","genero":"Comedy|Musical|Romance","actor":"Laurena Darlow"},
      {"titulo":"Green Fire","genero":"Adventure|Drama","actor":"Fields Snawdon"},
      {"titulo":"Crystal Lake Memories: The Complete History of Friday the 13th","genero":"Documentary|Horror","actor":"Tore Pedlingham"},
      {"titulo":"The Good Lie","genero":"Drama","actor":"Padriac Glabach"},
      {"titulo":"Pete's Dragon","genero":"Adventure|Animation|Children|Musical","actor":"Annabella Harrigan"},
      {"titulo":"Gardens of the Night","genero":"Drama","actor":"Kellyann Bullocke"},
      {"titulo":"Love You You","genero":"Romance","actor":"Trescha Kliemann"},
      {"titulo":"Balto","genero":"Adventure|Animation|Children","actor":"Margarita Castille"},
      {"titulo":"Timecrimes (Cronocrímenes, Los)","genero":"Sci-Fi|Thriller","actor":"Libbey Riddles"},
      {"titulo":"Big Chill, The","genero":"Comedy|Drama","actor":"Burt Filipovic"},
      {"titulo":"Last Days of Pompeii, The (Gli ultimi giorni di Pompeii)","genero":"Adventure|Drama","actor":"Yorker Blaschek"},
      {"titulo":"Mr. Deeds","genero":"Comedy|Romance","actor":"Brittney Thackray"},
      {"titulo":"Tetsuo II: Body Hammer","genero":"Horror|Sci-Fi","actor":"Reider Peplaw"},
      {"titulo":"Allotment Wives","genero":"Crime|Drama|Film-Noir","actor":"Rebecka Cholwell"},
      {"titulo":"Smoke on the Potato Fields (Dým bramborové nate)","genero":"Drama","actor":"Dall Metcalf"},
      {"titulo":"Jazz Singer, The","genero":"Drama|Musical|Romance","actor":"Darrell Lodin"},
      {"titulo":"Dialogues with Solzhenitsyn (Uzel)","genero":"Documentary","actor":"Conny Eykel"},
      {"titulo":"Suez","genero":"Drama|Romance","actor":"Brinn Zipsell"},
      {"titulo":"Monty Python: Almost the Truth - Lawyers Cut","genero":"Comedy|Documentary","actor":"Goddard Jeafferson"},
      {"titulo":"Left Behind: World at War","genero":"Drama","actor":"Arlyne Lufkin"},
      {"titulo":"Hamburg Syndrome, The (Die Hamburger Krankheit)","genero":"Adventure|Sci-Fi","actor":"Monty Jocic"},
      {"titulo":"Satan's School for Girls","genero":"Crime|Horror|Mystery","actor":"Prentiss Halloway"},
      {"titulo":"King - Jari Litmanen, The (Kuningas Litmanen)","genero":"Documentary","actor":"Sawyere Pescod"},
      {"titulo":"Halloweentown High","genero":"Adventure|Children|Comedy|Fantasy","actor":"Clarette Stokell"},
      {"titulo":"Reykjavik-Rotterdam","genero":"Drama|Thriller","actor":"Coraline Millmoe"},
      {"titulo":"East Meets West (Dung sing sai tsau 2011)","genero":"Comedy","actor":"Nikki Cushe"},
      {"titulo":"Alexandria... Why? (Iskanderija... lih?)","genero":"Drama","actor":"Sam Coit"},
      {"titulo":"Short Time","genero":"Comedy","actor":"Glenine Leadbeater"},
      {"titulo":"Charlie Chan in Reno","genero":"Comedy|Crime|Drama|Mystery|Thriller","actor":"Dinnie Whellams"},
      {"titulo":"Dirty Harry","genero":"Action|Crime|Thriller","actor":"Gaynor Boggers"},
      {"titulo":"Newsies","genero":"Children|Musical","actor":"Wilie Gleadle"},
      {"titulo":"Charlie's Angels: Full Throttle","genero":"Action|Adventure|Comedy|Crime|Thriller","actor":"Charlie Colgan"},
      {"titulo":"Ways to Live Forever","genero":"Children|Drama","actor":"Joey Caesman"},
      {"titulo":"Good Dick","genero":"Comedy|Drama|Romance","actor":"Hedda Caldera"},
      {"titulo":"McLintock!","genero":"Comedy|Western","actor":"Claribel Kinson"},
      {"titulo":"Freakin' Beautiful World (Sairaan kaunis maailma)","genero":"Drama","actor":"Wilbur Orbell"},
      {"titulo":"Student, The (El estudiante)","genero":"Drama","actor":"Stormy Auletta"},
      {"titulo":"Catwoman","genero":"Action|Crime|Fantasy","actor":"Janie Hayton"},
      {"titulo":"Nobody Will Speak of Us When We're Dead (Nadie hablará de nosotras cuando hayamos muerto)","genero":"Drama","actor":"Meade Hiland"},
      {"titulo":"Bethlehem","genero":"Drama|Thriller|War","actor":"Matti Pohlak"},
      {"titulo":"Transylvania","genero":"Drama","actor":"Jase Ridding"},
      {"titulo":"Cat's Meow, The","genero":"Drama|Thriller","actor":"Lester Gabotti"},
      {"titulo":"God is Great, I'm Not (Dieu est grand, je suis toute petite)","genero":"Comedy|Romance","actor":"Lavinia Mateu"},
      {"titulo":"Over My Dead Body","genero":"Comedy|Fantasy|Romance","actor":"Crystal Bengtson"},
      {"titulo":"Firemen's Ball, The (Horí, má panenko)","genero":"Comedy|Drama","actor":"Jillene Notman"},
      {"titulo":"Saratoga Trunk","genero":"Drama|Romance","actor":"Wrennie Feenan"},
      {"titulo":"Camouflage","genero":"Action|Comedy","actor":"Karly Narbett"},
      {"titulo":"Snowblind","genero":"Western","actor":"Candide Wigginton"},
      {"titulo":"Seven Days to Noon","genero":"Drama|Thriller","actor":"Sal Casado"},
      {"titulo":"The Little Rascals Save the Day","genero":"Comedy","actor":"Sasha Dohms"},
      {"titulo":"For Sale (À Vendre)","genero":"Drama","actor":"Gerrard Brazenor"},
      {"titulo":"Soft Toilet Seats","genero":"Comedy","actor":"Griz Olivey"},
      {"titulo":"Roller Boogie","genero":"Drama","actor":"Carolyn Owen"},
      {"titulo":"Birdsong (Cant dels ocells, El)","genero":"Drama","actor":"Jock Lufkin"},
      {"titulo":"Barabbas","genero":"Drama","actor":"Teodor Girke"},
      {"titulo":"Izo","genero":"Action|Drama|Fantasy|Horror|Thriller|War","actor":"Annalee Scole"},
      {"titulo":"Change of Habit","genero":"Drama","actor":"Guglielma Rudyard"},
      {"titulo":"My Cousin Vinny","genero":"Comedy","actor":"Cherish MacKibbon"},
      {"titulo":"Five Card Stud (a.k.a. 5 Card Stud)","genero":"Mystery|Western","actor":"Shanda Lessmare"},
      {"titulo":"Stepfather II","genero":"Horror|Thriller","actor":"Merwyn Jordine"},
      {"titulo":"Ballistic: Ecks vs. Sever","genero":"Action|Thriller","actor":"Ardys Peizer"},
      {"titulo":"Mondo Topless","genero":"Documentary","actor":"Marcello Cheyney"},
      {"titulo":"American Adobo","genero":"Comedy","actor":"Chiquia Simeone"},
      {"titulo":"Bird People","genero":"Drama|Fantasy|Romance","actor":"Dal Balling"},
      {"titulo":"Street Fighter: The Legend of Chun-Li","genero":"Action|Adventure|Sci-Fi|Thriller","actor":"Yorgo Le Port"},
      {"titulo":"Kaena: The Prophecy (Kaena: La prophétie)","genero":"Action|Adventure|Animation|Children|Sci-Fi","actor":"Dominic Josephov"},
      {"titulo":"Gestapo's Last Orgy, The (L'ultima orgia del III Reich)","genero":"Thriller|War","actor":"Joli Tomkinson"},
      {"titulo":"Down by Law","genero":"Comedy|Drama|Film-Noir","actor":"Teddie Dallan"},
      {"titulo":"From Above","genero":"Drama|Romance","actor":"Montgomery Persence"}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('peliculas', null, {});
     
  }
};
