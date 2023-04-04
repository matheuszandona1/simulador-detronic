const dados = [
	{
		versiculo: "Filipenses 4:13",
		mensagem: "Tudo posso naquele que me fortalece.",
	},
	{
		versiculo: "Efésios 4:32",
		mensagem: "Pelo contrário, sejam bons e atenciosos uns para com os outros. E perdoem uns aos outros, assim como Deus, por meio de Cristo, perdoou vocês.",
	},
	{
		versiculo: "Filipenses 4:4",
		mensagem: "Tenham sempre alegria, unidos com o Senhor! Repito: tenham alegria!",
	},
	{
		versiculo: "Hebreus 11:22",
		mensagem:
			"Foi pela fé que José, quando estava para morrer, falou da saída dos israelitas do Egito e deu ordens sobre o que deveria ser feito com o seu corpo.",
	},
	{
		versiculo: "João 8:12",
		mensagem: "De novo Jesus começou a falar com eles e disse: — Eu sou a luz do mundo; quem me segue nunca andará na escuridão, mas terá a luz da vida.",
	},
	{
		versiculo: "1Tessalonicenses 5:16",
		mensagem: "Estejam sempre al,egres",
	},
	{
		versiculo: "Salmos 47:1",
		mensagem: "Batam palmas de alegria, todos os povos! Cantem louvores a Deus em voz alta.",
	},
	{
		versiculo: "Lucas 12:40",
		mensagem: "Vocês, também, fiquem alertas, porque o Filho do Homem vai chegar quando não estiverem esperando.",
	},
	{
		versiculo: "Hebreus 11:1",
		mensagem: "A fé é a certeza de que vamos receber as coisas que esperamos e a prova de que existem coisas que não podemos ver.",
	},
	{
		versiculo: "Filipenses 4:6",
		mensagem: "Não se preocupem com nada, mas em todas as orações peçam a Deus o que vocês precisam e orem sempre com o coração agradecido.",
	},
	{
		versiculo: "Hebreus 11:22",
		mensagem:
			"Foi pela fé que José, quando estava para morrer, falou da saída dos israelitas do Egito e deu ordens sobre o que deveria ser feito com o seu corpo.",
	},
	{
		versiculo: "Mateus 5:16",
		mensagem: "Assim também a luz de vocês deve brilhar para que os outros vejam as coisas boas que vocês fazem e louvem o Pai de vocês, que está no céu.",
	},
	{
		versiculo: "Romanos 5:3",
		mensagem: "E também nos alegramos nos sofrimentos, pois sabemos que os sofrimentos produzem a paciência.",
	},
	{
		versiculo: "2Crônicas 7:14",
		mensagem:
			"então, se o meu povo, que pertence somente a mim, se arrepender, abandonar os seus pecados e orar a mim, eu os ouvirei do céu, perdoarei os seus pecados e farei o país ",
	},
	{
		versiculo: "Salmos 95:6",
		mensagem: "Venham, fiquemos de joelhos e adoremos o Senhor . Vamos nos ajoelhar diante do nosso Criador.",
	},
	{
		versiculo: "João 1:5",
		mensagem: "A luz brilha na escuridão, e a escuridão não conseguiu apagá-la.",
	},
	{
		versiculo: "1Pedro 5:7",
		mensagem: "Entreguem todas as suas preocupações a Deus, pois ele cuida de vocês.",
	},
	{
		versiculo: "Efésios 2:8",
		mensagem: "Pois pela graça de Deus vocês são salvos por meio da fé. Isso não vem de vocês, mas é um presente dado por Deus.",
	},
	{
		versiculo: "João 7:38",
		mensagem: "Como dizem as Escrituras Sagradas : Rios de água viva vão jorrar do coração de quem crê em mim.",
	},
	{
		versiculo: "2Coríntios 9:6",
		mensagem: "Lembrem disto: quem planta pouco colhe pouco; quem planta muito colhe muito.",
	},
	{
		versiculo: "Colossenses 1:13",
		mensagem: "Ele nos libertou do poder da escuridão e nos trouxe em segurança para o Reino do seu Filho amado.",
	},
	{
		versiculo: "Isaías 9:2",
		mensagem: "O povo que andava na escuridão viu uma forte luz; a luz brilhou sobre os que viviam nas trevas.",
	},
	{
		versiculo: "Números 6:24",
		mensagem: "Que o Senhor os abençoe e os gu,arde",
	},
	{
		versiculo: "Tiago 1:17",
		mensagem:
			"Tudo de bom que recebemos e tudo o que é perfeito vêm do céu, vêm de Deus, o Criador das luzes do céu. Ele não muda, nem varia de posição, o que causaria a escuridão.",
	},
	{
		versiculo: "1Crônicas 16:34",
		mensagem: "Deem graças ao Senhor porque ele é bom, e o seu amor dura para sempre.",
	},
	{
		versiculo: "Salmos 28:7",
		mensagem:
			"O Senhor é a minha força e o meu escudo ; com todo o coração eu confio nele. O Senhor me ajuda; por isso, o meu coração está feliz, e eu canto hinos em seu louvor.",
	},
	{
		versiculo: "Jeremias 17:10",
		mensagem:
			"Eu, o Senhor , examino os pensamentos e ponho à prova os corações. Eu trato cada pessoa conforme a sua maneira de viver, de acordo com o que ela faz.",
	},
	{
		versiculo: "Salmos 91:2",
		mensagem: "Pode dizer a ele: “Ó Senhor Deus, tu és o meu defensor e o meu protetor. Tu és o meu Deus; eu confio em ti.",
	},
	{
		versiculo: "Mateus 11:28",
		mensagem: "Venham a mim, todos vocês que estão cansados de carregar as suas pesadas cargas, e eu lhes darei descanso.",
	},
	{
		versiculo: "Romanos 12:2",
		mensagem:
			"Não vivam como vivem as pessoas deste mundo, mas deixem que Deus os transforme por meio de uma completa mudança da mente de vocês. Assim vocês conhecerão a vontade de Deus, isto é, aquilo que é bom, perfeito e agradável a ele.",
	},
	{
		versiculo: "2Coríntios 3:17",
		mensagem: "Aqui a palavra “Senhor” quer dizer o Espírito. E onde o Espírito do Senhor está presente, aí existe liberdade.",
	},
	{
		versiculo: "1João 4:7",
		mensagem: "Queridos amigos, amemos uns aos outros porque o amor vem de Deus. Quem ama é filho de Deus e conhece a Deus.",
	},
	{
		versiculo: "1Samuel 2:2",
		mensagem: "Ninguém é santo como o Senhor ; não existe outro deus além dele, e não há nenhum protetor como o nosso Deus.",
	},
	{
		versiculo: "Salmos 119:2",
		mensagem: "Felizes os que guardam os mandamentos de Deus e lhe obedecem de todo o coração!",
	},
	{
		versiculo: "Isaías 6:8",
		mensagem: "Em seguida, ouvi o Senhor dizer: Quem é que eu vou enviar? Quem será o nosso mensageiro? Então respondi: Aqui estou eu. Envia-me a mim!",
	},
	{
		versiculo: "1João 2:6",
		mensagem: "Quem diz que vive unido com Deus deve viver como Jesus Cristo viveu.",
	},
	{
		versiculo: "Lucas 6:28",
		mensagem: "Desejem o bem para aqueles que os amaldiçoam e orem em favor daqueles que maltratam vocês.",
	},
	{
		versiculo: "Miquéias 6:8",
		mensagem:
			"O Senhor já nos mostrou o que é bom, ele já disse o que exige de nós. O que ele quer é que façamos o que é direito, que amemos uns aos outros com dedicação e que vivamos em humilde obediência ao nosso Deus.",
	},
	{
		versiculo: "Salmos 23:4",
		mensagem: "Ainda que eu ande por um vale escuro como a morte, não terei medo de nada. Pois tu, ó Senhor Deus, estás comigo; tu me proteges e me diriges.",
	},
	{
		versiculo: "Hebreus 4:12",
		mensagem:
			"Pois a palavra de Deus é viva e poderosa e corta mais do que qualquer espada afiada dos dois lados. Ela vai até o lugar mais fundo da alma e do espírito, vai até o íntimo das pessoas e julga os desejos e pensamentos do coração delas.",
	},
	{
		versiculo: "Efésios 3:20",
		mensagem: "E agora, que a glória seja dada a Deus, o qual, por meio do seu poder que age em nós, pode fazer muito mais do que nós pedimos ou até pensamos!",
	},
	{
		versiculo: "Isaías 40:8",
		mensagem: "A erva seca, a flor cai, mas a palavra do nosso Deus dura para sempre.",
	},
	{
		versiculo: "Salmos 119:105",
		mensagem: "A tua palavra é lâmpada para guiar os meus passos, é luz que ilumina o meu caminho.",
	},
	{
		versiculo: "Mateus 24:35",
		mensagem: "O céu e a terra desaparecerão, mas as minhas palavras ficarão para sempre.",
	},
	{
		versiculo: "2Timóteo 3:16",
		mensagem:
			"Pois toda a Escritura Sagrada é inspirada por Deus e é útil para ensinar a verdade, condenar o erro, corrigir as faltas e ensinar a maneira certa de viver.",
	},
	{
		versiculo: "Salmos 19:7",
		mensagem: "A lei do Senhor é perfeita e nos dá novas forças. Os seus conselhos merecem confiança e dão sabedoria às pessoas simples.",
	},
	{
		versiculo: "Salmos 42:11",
		mensagem: "Por que estou tão triste? Por que estou tão aflito? Eu porei a minha esperança em Deus e ainda o louvarei. Ele é o meu Salvador e o meu Deus.",
	},
	{
		versiculo: "Mateus 6:33",
		mensagem: "Portanto, ponham em primeiro lugar na sua vida o Reino de Deus e aquilo que Deus quer, e ele lhes dará todas essas coisas.",
	},
	{
		versiculo: "Filipenses 2:12",
		mensagem:
			"Portanto, meus queridos amigos, vocês que me obedeceram sempre quando eu estava aí, devem me obedecer muito mais agora que estou ausente. Continuem trabalhando com respeito e temor a Deus para completar a salvação de vocês.",
	},
	{
		versiculo: "Romanos 1:17",
		mensagem:
			"Pois o evangelho mostra como é que Deus nos aceita: é por meio da fé, do começo ao fim. Como dizem as Escrituras Sagradas : “Viverá aquele que, por meio da fé, é aceito por Deus.",
	},
	{
		versiculo: "Romanos 10:10",
		mensagem: "Porque nós cremos com o coração e somos aceitos por Deus; falamos com a boca e assim somos salvos.",
	},
	{
		versiculo: "Filipenses 4:9",
		mensagem:
			"Ponham em prática o que vocês receberam e aprenderam de mim, tanto com as minhas palavras como com as minhas ações. E o Deus que nos dá a paz estará com vocês.",
	},
	{
		versiculo: "João 11:25",
		mensagem: "Então Jesus afirmou: — Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá.",
	},
	{
		versiculo: "Mateus 10:16",
		mensagem: "Escutem! Eu estou mandando vocês como ovelhas para o meio de lobos. Sejam espertos como as cobras e sem maldade como as pombas.",
	},
	{
		versiculo: "Salmos 34:19",
		mensagem: "Os bons passam por muitas aflições, mas o Senhor os livra de todas elas.",
	},
	{
		versiculo: "Salmos 28:7",
		mensagem:
			"O Senhor é a minha força e o meu escudo ; com todo o coração eu confio nele. O Senhor me ajuda, por isso, o meu coração está feliz, e eu canto hinos em seu louvor.",
	},
	{
		versiculo: "Isaías 54:10",
		mensagem:
			"As montanhas podem desaparecer, os montes podem se desfazer, mas o meu amor por você não acabará nunca, e a minha aliança de paz com você nunca será quebrada.” É isso o que diz o Senhor , que tem amor por você.",
	},
	{
		versiculo: "João 7:38",
		mensagem: "Como dizem as Escrituras Sagradas : “Rios de água viva vão jorrar do coração de quem crê em mim.",
	},
	{
		versiculo: "Salmos 23:3",
		mensagem: "O Senhor renova as minhas forças e me guia por caminhos certos, como ele mesmo prometeu.",
	},
	{
		versiculo: "Salmos 121:2",
		mensagem: "O meu socorro vem do Senhor Deus, que fez o céu e a terra.",
	},
	{
		versiculo: "Tiago 1:5",
		mensagem: "Mas, se alguém tem falta de sabedoria, peça a Deus, e ele a dará porque é generoso e dá com bondade a todos.",
	},
	{
		versiculo: "Mateus 5:6",
		mensagem: "Felizes as pessoas que têm fome e sede de fazer a vontade de Deus, pois ele as deixará completamente satisfeitas.",
	},
	{
		versiculo: "1João 3:16",
		mensagem: "Sabemos o que é o amor por causa disto: Cristo deu a sua vida por nós. Por isso nós também devemos dar a nossa vida pelos nossos irmãos.",
	},
	{
		versiculo: "Lucas 6:45",
		mensagem:
			"A pessoa boa tira o bem do depósito de coisas boas que tem no seu coração. E a pessoa má tira o mal do seu depósito de coisas más. Pois a boca fala do que o coração está cheio.",
	},
	{
		versiculo: "1João 2:15",
		mensagem: "Não amem o mundo, nem as coisas que há nele. Se vocês amam o mundo, não amam a Deus, o Pai.",
	},
	{
		versiculo: "1Timóteo 6:12",
		mensagem:
			"Corra a boa corrida da fé e ganhe a vida eterna. Pois foi para essa vida que Deus o chamou quando você deu o seu belo testemunho de fé na presença de muitas testemunhas.",
	},
	{
		versiculo: "Colossenses 3:1",
		mensagem:
			"Vocês foram ressuscitados com Cristo. Portanto, ponham o seu interesse nas coisas que são do céu, onde Cristo está sentado ao lado direito de Deus.",
	},
	{
		versiculo: "Deuteronômio 6:5",
		mensagem: "Portanto, amem o Senhor , nosso Deus, com todo o coração, com toda a alma e com todas as forças.",
	},
	{
		versiculo: "Salmos 30:5",
		mensagem: "A sua ira dura só um momento, mas a sua bondade é para a vida toda. O choro pode durar a noite inteira, mas de manhã vem a alegria.",
	},
	{
		versiculo: "1Pedro 3:13",
		mensagem: "Se, de fato, vocês quiserem fazer o bem, quem lhes fará o mal?",
	},
	{
		versiculo: "Mateus 5:7",
		mensagem: "Felizes as pessoas que têm misericórdia dos outros, pois Deus terá misericórdia delas.",
	},
	{
		versiculo: "1Coríntios 10:13",
		mensagem:
			"As tentações que vocês têm de enfrentar são as mesmas que os outros enfrentam; mas Deus cumpre a sua promessa e não deixará que vocês sofram tentações que vocês não têm forças para suportar. Quando uma tentação vier, Deus dará forças a vocês para suportá-la, e assim vocês poderão sair dela.",
	},
	{
		versiculo: "Salmos 19:14",
		mensagem: "Que as minhas palavras e os meus pensamentos sejam aceitáveis a ti, ó Senhor Deus, minha rocha e meu defensor!",
	},
	{
		versiculo: "Mateus 28:19",
		mensagem:
			"Portanto, vão a todos os povos do mundo e façam com que sejam meus seguidores, batizando esses seguidores em nome do Pai, do Filho e do Espírito Sa,nto",
	},
	{
		versiculo: "Isaías 40:5",
		mensagem: "Então o Senhor mostrará a sua glória , e toda a humanidade a verá. O próprio Senhor Deus prometeu que vai fazer isso.",
	},
	{
		versiculo: "Salmos 139:13",
		mensagem: "Tu criaste cada parte do meu corpo; tu me formaste na barriga da minha mãe.",
	},
	{
		versiculo: "2Timóteo 1:7",
		mensagem: "Pois o Espírito que Deus nos deu não nos torna medrosos; pelo contrário, o Espírito nos enche de poder e de amor e nos torna prudentes.",
	},
	{
		versiculo: "2Coríntios 5:17",
		mensagem: "Quem está unido com Cristo é uma nova pessoa; acabou-se o que era velho, e já chegou o que é novo.",
	},
	{
		versiculo: "Salmos 24:1",
		mensagem: "Ao Senhor Deus pertencem o mundo e tudo o que nele existe; a terra e todos os seres vivos que nela vivem são dele.",
	},
	{
		versiculo: "Amós 5:24",
		mensagem: "Em vez disso, quero que haja tanta justiça como as águas de uma enchente e que a honestidade seja como um rio que não para de correr.",
	},
	{
		versiculo: "Mateus 23:11",
		mensagem: "Entre vocês, o mais importante é aquele que serve os outros.",
	},
	{
		versiculo: "Efésios 4:2",
		mensagem: "Sejam sempre humildes, bem-educados e pacientes, suportando uns aos outros com amor.",
	},
	{
		versiculo: "Lucas 9:23",
		mensagem:
			"Depois disse a todos: Se alguém quer ser meu seguidor, que esqueça os seus próprios interesses, esteja pronto cada dia para morrer como eu vou morrer e me acompanhe.",
	},
	{
		versiculo: "Mateus 18:20",
		mensagem: "Porque, onde dois ou três estão juntos em meu nome, eu estou ali com eles.",
	},
	{
		versiculo: "Romanos 6:23",
		mensagem: "Pois o salário do pecado é a morte, mas o presente gratuito de Deus é a vida eterna, que temos em união com Cristo Jesus, o nosso Senhor.",
	},
	{
		versiculo: "Isaías 60:1",
		mensagem: "Levante-se, Jerusalém! Que o seu rosto brilhe de alegria, pois já chegou a sua luz! A glória do Senhor está brilhando sobre você.",
	},
	{
		versiculo: "Salmos 55:22",
		mensagem: "Entregue os seus problemas ao Senhor , e ele o ajudará; ele nunca deixa que fracasse a pessoa que lhe obedece.",
	},
	{
		versiculo: "2Coríntios 9:6",
		mensagem: "Lembrem disto: quem planta pouco colhe pouco; quem planta muito colhe muito.",
	},
	{
		versiculo: "Filipenses 4:6",
		mensagem: "Não se preocupem com nada, mas em todas as orações peçam a Deus o que vocês precisam e orem sempre com o coração agradecido.",
	},
	{
		versiculo: "Salmos 119:105",
		mensagem: "A tua palavra é lâmpada para guiar os meus passos, é luz que ilumina o meu caminho.",
	},
	{
		versiculo: "Isaías 43:18",
		mensagem:
			"Mas agora o Senhor Deus diz ao seu povo: “Não fiquem lembrando do que aconteceu no passado, não continuem pensando nas coisas que fiz há muito tempo.",
	},
	{
		versiculo: "Salmos 73:26",
		mensagem: "Ainda que a minha mente e o meu corpo enfraqueçam, Deus é a minha força, ele é tudo o que sempre preciso.",
	},
	{
		versiculo: "1Coríntios 10:31",
		mensagem: "Portanto, quando vocês comem, ou bebem, ou fazem qualquer outra coisa, façam tudo para a glória de Deus.",
	},
	{
		versiculo: "Provérbios 21:21",
		mensagem: "Quem é bondoso e direito terá uma vida longa e será tratado com respeito e justiça.",
	},
	{
		versiculo: "Salmos 23:3",
		mensagem: "O Senhor renova as minhas forças e me guia por caminhos certos, como ele mesmo prometeu.",
	},
	{
		versiculo: "1João 4:11",
		mensagem: "Amigos, se foi assim que Deus nos amou, então nós devemos nos amar uns aos outros.",
	},
	{
		versiculo: "Mateus 6:3",
		mensagem: "Mas você, quando ajudar alguma pessoa necessitada, faça isso de tal modo que nem mesmo o seu amigo mais íntimo fique sabendo do que você fez.",
	},
	{
		versiculo: "Lucas 2:11",
		mensagem: "Hoje mesmo, na cidade de Davi , nasceu o Salvador de vocês , o Messias , o Senhor!",
	},
	{
		versiculo: "Lucas 2:14",
		mensagem: "Glória a Deus nas maiores alturas do céu! E paz na terra para as pessoas a quem ele quer bem!",
	},
	{
		versiculo: "Mateus 2:10",
		mensagem: "Quando viram a estrela, eles ficaram muito alegres e felizes.",
	},
	{
		versiculo: "Isaías 7:14",
		mensagem: "Pois o Senhor mesmo lhes dará um sinal: a jovem que está grávida dará à luz um filho e porá nele o nome de Emanuel.",
	},
	{
		versiculo: "Mateus 1:21",
		mensagem: "Ela terá um menino, e você porá nele o nome de Jesus , pois ele salvará o seu povo dos pecados deles.",
	},
	{
		versiculo: "Habacuque 2:14",
		mensagem: "E a terra ficará cheia do conhecimento da glória do Senhor , assim como as águas enchem o mar.",
	},
	{
		versiculo: "João 3:16",
		mensagem: "Porque Deus amou o mundo tanto, que deu o seu único Filho, para que todo aquele que nele crer não morra, mas tenha a vida eterna.",
	},
	{
		versiculo: "Salmos 32:8",
		mensagem: "O Senhor Deus me disse: “Eu lhe ensinarei o caminho por onde você deve ir; eu vou guiá-lo e orientá-lo.",
	},
	{
		versiculo: "Efésios 4:32",
		mensagem: "Pelo contrário, sejam bons e atenciosos uns para com os outros. E perdoem uns aos outros, assim como Deus, por meio de Cristo, perdoou vocês.",
	},
	{
		versiculo: "Filipenses 4:4",
		mensagem: "Tenham sempre alegria, unidos com o Senhor! Repito: tenham alegria!",
	},
	{
		versiculo: "Hebreus 11:22",
		mensagem:
			"Foi pela fé que José, quando estava para morrer, falou da saída dos israelitas do Egito e deu ordens sobre o que deveria ser feito com o seu corpo.",
	},
	{
		versiculo: "João 8:12",
		mensagem: "De novo Jesus começou a falar com eles e disse: Eu sou a luz do mundo; quem me segue nunca andará na escuridão, mas terá a luz da vida.",
	},
	{
		versiculo: "Salmos 47:1",
		mensagem: "Batam palmas de alegria, todos os povos! Cantem louvores a Deus em voz alta.",
	},
	{
		versiculo: "Lucas 12:40",
		mensagem: "Vocês, também, fiquem alertas, porque o Filho do Homem vai chegar quando não estiverem esperando.",
	},
	{
		versiculo: "Hebreus 11:1",
		mensagem: "A fé é a certeza de que vamos receber as coisas que esperamos e a prova de que existem coisas que não podemos ver.",
	},
	{
		versiculo: "Filipenses 4:6",
		mensagem: "Não se preocupem com nada, mas em todas as orações peçam a Deus o que vocês precisam e orem sempre com o coração agradecido.",
	},
	{
		versiculo: "Mateus 5:16",
		mensagem: "Assim também a luz de vocês deve brilhar para que os outros vejam as coisas boas que vocês fazem e louvem o Pai de vocês, que está no céu.",
	},
	{
		versiculo: "Romanos 5:3",
		mensagem: "E também nos alegramos nos sofrimentos, pois sabemos que os sofrimentos produzem a paciência.",
	},
	{
		versiculo: "2Crônicas 7:14",
		mensagem:
			"então, se o meu povo, que pertence somente a mim, se arrepender, abandonar os seus pecados e orar a mim, eu os ouvirei do céu, perdoarei os seus pecados e farei o país progredir de novo.",
	},
	{
		versiculo: "Salmos 95:6",
		mensagem: "Venham, fiquemos de joelhos e adoremos o Senhor . Vamos nos ajoelhar diante do nosso Criador.",
	},
	{
		versiculo: "João 1:5",
		mensagem: "A luz brilha na escuridão, e a escuridão não conseguiu apagá-la.",
	},
	{
		versiculo: "1Pedro 5:7",
		mensagem: "Entreguem todas as suas preocupações a Deus, pois ele cuida de vocês.",
	},
	{
		versiculo: "Efésios 2:8",
		mensagem: "Pois pela graça de Deus vocês são salvos por meio da fé. Isso não vem de vocês, mas é um presente dado por Deus.",
	},
	{
		versiculo: "João 7:38",
		mensagem: "Como dizem as Escrituras Sagradas : “Rios de água viva vão jorrar do coração de quem crê em mim.",
	},
	{
		versiculo: "2Coríntios 9:6",
		mensagem: "Lembrem disto: quem planta pouco colhe pouco; quem planta muito colhe muito.",
	},
	{
		versiculo: "Colossenses 1:13",
		mensagem: "Ele nos libertou do poder da escuridão e nos trouxe em segurança para o Reino do seu Filho amado.",
	},
	{
		versiculo: "Isaías 9:2",
		mensagem: "O povo que andava na escuridão viu uma forte luz; a luz brilhou sobre os que viviam nas trevas.",
	},
	{
		versiculo: "Números 6:24",
		mensagem: "Que o Senhor os abençoe e os guarde.",
	},
	{
		versiculo: "Tiago 1:17",
		mensagem:
			"Tudo de bom que recebemos e tudo o que é perfeito vêm do céu, vêm de Deus, o Criador das luzes do céu. Ele não muda, nem varia de posição, o que causaria a escuridão.",
	},
	{
		versiculo: "1Crônicas 16:34",
		mensagem: "Deem graças ao Senhor porque ele é bom, e o seu amor dura para sempre.",
	},
	{
		versiculo: "Salmos 28:7",
		mensagem:
			"O Senhor é a minha força e o meu escudo ; com todo o coração eu confio nele. O Senhor me ajuda; por isso, o meu coração está feliz, e eu canto hinos em seu louvor.",
	},
	{
		versiculo: "Jeremias 17:10",
		mensagem:
			"Eu, o Senhor , examino os pensamentos e ponho à prova os corações. Eu trato cada pessoa conforme a sua maneira de viver, de acordo com o que ela faz.",
	},
	{
		versiculo: "Salmos 91:2",
		mensagem: "Pode dizer a ele: Ó Senhor Deus, tu és o meu defensor e o meu protetor. Tu és o meu Deus; eu confio em ti.",
	},
	{
		versiculo: "Mateus 11:28",
		mensagem: "Venham a mim, todos vocês que estão cansados de carregar as suas pesadas cargas, e eu lhes darei descanso.",
	},
	{
		versiculo: "Romanos 12:2",
		mensagem:
			"Não vivam como vivem as pessoas deste mundo, mas deixem que Deus os transforme por meio de uma completa mudança da mente de vocês. Assim vocês conhecerão a vontade de Deus, isto é, aquilo que é bom, perfeito e agradável a ele.",
	},
	{
		versiculo: "2Coríntios 3:17",
		mensagem: "Aqui a palavra “Senhor” quer dizer o Espírito. E onde o Espírito do Senhor está presente, aí existe liberdade.",
	},
	{
		versiculo: "1João 4:7",
		mensagem: "Queridos amigos, amemos uns aos outros porque o amor vem de Deus. Quem ama é filho de Deus e conhece a Deus.",
	},
	{
		versiculo: "Salmos 119:2",
		mensagem: "Felizes os que guardam os mandamentos de Deus e lhe obedecem de todo o coração!",
	},
	{
		versiculo: "Isaías 6:8",
		mensagem: "Em seguida, ouvi o Senhor dizer: Quem é que eu vou enviar? Quem será o nosso mensageiro? Então respondi: — Aqui estou eu. Envia-me a mim!",
	},
	{
		versiculo: "1João 2:6",
		mensagem: "Quem diz que vive unido com Deus deve viver como Jesus Cristo viveu.",
	},
	{
		versiculo: "Lucas 6:28",
		mensagem: "Desejem o bem para aqueles que os amaldiçoam e orem em favor daqueles que maltratam vocês.",
	},
	{
		versiculo: "Miqueias 6:8",
		mensagem:
			"O Senhor já nos mostrou o que é bom, ele já disse o que exige de nós. O que ele quer é que façamos o que é direito, que amemos uns aos outros com dedicação e que vivamos em humilde obediência ao nosso Deus.",
	},
	{
		versiculo: "Salmos 23:4",
		mensagem: "Ainda que eu ande por um vale escuro como a morte, não terei medo de nada. Pois tu, ó Senhor Deus, estás comigo; tu me proteges e me diriges.",
	},
	{
		versiculo: "Hebreus 4:12",
		mensagem:
			"Pois a palavra de Deus é viva e poderosa e corta mais do que qualquer espada afiada dos dois lados. Ela vai até o lugar mais fundo da alma e do espírito, vai até o íntimo das pessoas e julga os desejos e pensamentos do coração delas.",
	},
	{
		versiculo: "Efésios 3:20",
		mensagem: "E agora, que a glória seja dada a Deus, o qual, por meio do seu poder que age em nós, pode fazer muito mais do que nós pedimos ou até pensamos!",
	},
	{
		versiculo: "Isaías 40:8",
		mensagem: "A erva seca, a flor cai, mas a palavra do nosso Deus dura para sempre.",
	},
	{
		versiculo: "Salmos 119:105",
		mensagem: "A tua palavra é lâmpada para guiar os meus passos, é luz que ilumina o meu caminho.",
	},
	{
		versiculo: "Mateus 24:35",
		mensagem: "O céu e a terra desaparecerão, mas as minhas palavras ficarão para sempre.",
	},
	{
		versiculo: "2Timóteo 3:16",
		mensagem:
			"Pois toda a Escritura Sagrada é inspirada por Deus e é útil para ensinar a verdade, condenar o erro, corrigir as faltas e ensinar a maneira certa de viver.",
	},
	{
		versiculo: "Salmos 19:7",
		mensagem: "A lei do Senhor é perfeita e nos dá novas forças. Os seus conselhos merecem confiança e dão sabedoria às pessoas simples.",
	},
	{
		versiculo: "Salmos 42:11",
		mensagem: "Por que estou tão triste? Por que estou tão aflito? Eu porei a minha esperança em Deus e ainda o louvarei. Ele é o meu Salvador e o meu Deus.",
	},
	{
		versiculo: "Mateus 6:33",
		mensagem: "Portanto, ponham em primeiro lugar na sua vida o Reino de Deus e aquilo que Deus quer, e ele lhes dará todas essas coisas.",
	},
	{
		versiculo: "Filipenses 2:12",
		mensagem:
			"Portanto, meus queridos amigos, vocês que me obedeceram sempre quando eu estava aí, devem me obedecer muito mais agora que estou ausente. Continuem trabalhando com respeito e temor a Deus para completar a salvação de vocês.",
	},
	{
		versiculo: "Romanos 1:17",
		mensagem:
			"Pois o evangelho mostra como é que Deus nos aceita: é por meio da fé, do começo ao fim. Como dizem as Escrituras Sagradas: Viverá aquele que, por meio da fé, é aceito por Deus.",
	},
	{
		versiculo: "Romanos 10:10",
		mensagem: "Porque nós cremos com o coração e somos aceitos por Deus; falamos com a boca e assim somos salvos.",
	},
	{
		versiculo: "Filipenses 4:9",
		mensagem:
			"Ponham em prática o que vocês receberam e aprenderam de mim, tanto com as minhas palavras como com as minhas ações. E o Deus que nos dá a paz estará com vocês.",
	},
	{
		versiculo: "João 11:25",
		mensagem: "Então Jesus afirmou: Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá.",
	},
	{
		versiculo: "Mateus 10:16",
		mensagem: "Escutem! Eu estou mandando vocês como ovelhas para o meio de lobos. Sejam espertos como as cobras e sem maldade como as pombas.",
	},
	{
		versiculo: "Salmos 34:19",
		mensagem: "Os bons passam por muitas aflições, mas o Senhor os livra de todas elas.",
	},
	{
		versiculo: "Salmos 28:7",
		mensagem:
			"O Senhor é a minha força e o meu escudo ; com todo o coração eu confio nele. O Senhor me ajuda; por isso, o meu coração está feliz, e eu canto hinos em seu louvor.",
	},
	{
		versiculo: "Isaías 54:10",
		mensagem:
			"As montanhas podem desaparecer, os montes podem se desfazer, mas o meu amor por você não acabará nunca, e a minha aliança de paz com você nunca será quebrada.” É isso o que diz o Senhor , que tem amor por você.",
	},
	{
		versiculo: "João 7:38",
		mensagem: "Como dizem as Escrituras Sagradas : “Rios de água viva vão jorrar do coração de quem crê em mim.",
	},
	{
		versiculo: "Salmos 23:3",
		mensagem: "O Senhor renova as minhas forças e me guia por caminhos certos, como ele mesmo prometeu.",
	},
	{
		versiculo: "1João 4:11",
		mensagem: "Amigos, se foi assim que Deus nos amou, então nós devemos nos amar uns aos outros.",
	},
	{
		versiculo: "Romanos 15:5",
		mensagem: "Que Deus, que é quem dá paciência e coragem, ajude vocês a viverem bem uns com os outros, seguindo o exemplo de Cristo Jesus!",
	},
	{
		versiculo: "Hebreus 12:11",
		mensagem:
			"Quando somos corrigidos, isso no momento nos parece motivo de tristeza e não de alegria. Porém, mais tarde, os que foram corrigidos recebem como recompensa uma vida correta e de paz.",
	},
	{
		versiculo: "João 5:24",
		mensagem:
			"Eu afirmo a vocês que isto é verdade: quem ouve as minhas palavras e crê naquele que me enviou tem a vida eterna e não será julgado, mas já passou da morte para a vida.",
	},
	{
		versiculo: "Provérbios 1:7",
		mensagem: "Para ser sábio, é preciso primeiro temer a Deus , o Senhor . Os tolos desprezam a sabedoria e não querem aprender.",
	},
	{
		versiculo: "2Coríntios 9:7",
		mensagem: "Que cada um dê a sua oferta conforme resolveu no seu coração, não com tristeza nem por obrigação, pois Deus ama quem dá com alegria.",
	},
	{
		versiculo: "João 1:5",
		mensagem: "A luz brilha na escuridão, e a escuridão não conseguiu apagá-la.",
	},
	{
		versiculo: "Mateus 5:8",
		mensagem: "Felizes as pessoas que têm o coração puro, pois elas verão a Deus.",
	},
	{
		versiculo: "Tiago 5:16",
		mensagem:
			"Portanto, confessem os seus pecados uns aos outros e façam oração uns pelos outros, para que vocês sejam curados. A oração de uma pessoa obediente a Deus tem muito poder.",
	},
	{
		versiculo: "Lucas 12:40",
		mensagem: "Vocês, também, fiquem alertas, porque o Filho do Homem vai chegar quando não estiverem esperando.",
	},
	{
		versiculo: "Romanos 10:10",
		mensagem: "Porque nós cremos com o coração e somos aceitos por Deus; falamos com a boca e assim somos salvos.",
	},
	{
		versiculo: "Salmos 107:1",
		mensagem: "Deem graças a Deus, o Senhor , porque ele é bom, e porque o seu amor dura para sempre.",
	},
	{
		versiculo: "Filipenses 1:3",
		mensagem: "Sempre que penso em vocês, eu agradeço ao meu Deus.",
	},
	{
		versiculo: "Lucas 9:24",
		mensagem:
			"Pois quem põe os seus próprios interesses em primeiro lugar nunca terá a vida verdadeira; mas quem esquece a si mesmo por minha causa terá a vida verdadeira.",
	},
	{
		versiculo: "Mateus 5:16",
		mensagem: "Assim também a luz de vocês deve brilhar para que os outros vejam as coisas boas que vocês fazem e louvem o Pai de vocês, que está no céu.",
	},
	{
		versiculo: "Colossenses 3:16",
		mensagem:
			"Que a mensagem de Cristo, com toda a sua riqueza, viva no coração de vocês! Ensinem e instruam uns aos outros com toda a sabedoria. Cantem salmos, hinos e canções espirituais; louvem a Deus, com gratidão no coração.",
	},
	{
		versiculo: "Miqueias 7:18",
		mensagem:
			"Ó Deus, não há outro deus como tu, pois perdoas os pecados e as maldades daqueles do teu povo que ficaram vivos. Tu não contínuas irado para sempre, mas tens prazer em nos mostrar sempre o teu amor.",
	},
	{
		versiculo: "Mateus 6:14",
		mensagem: "Porque, se vocês perdoarem as pessoas que ofenderem vocês, o Pai de vocês, que está no céu, também perdoará vocês.",
	},
	{
		versiculo: "1Samuel 2:2",
		mensagem: "Ninguém é santo como o Senhor ; não existe outro deus além dele, e não há nenhum protetor como o nosso Deus.",
	},
	{
		versiculo: "Mateus 7:24",
		mensagem: "Quem ouve esses meus ensinamentos e vive de acordo com eles é como um homem sábio que construiu a sua casa na rocha.",
	},
	{
		versiculo: "1João 4:18",
		mensagem:
			"No amor não há medo; o amor que é totalmente verdadeiro afasta o medo. Portanto, aquele que sente medo não tem no seu coração o amor totalmente verdadeiro, porque o medo mostra que existe castigo.",
	},
	{
		versiculo: "João 14:27",
		mensagem: "Deixo com vocês a paz. É a minha paz que eu lhes dou; não lhes dou a paz como o mundo a dá. Não fiquem aflitos, nem tenham medo.",
	},
	{
		versiculo: "Isaías 6:8",
		mensagem: "Em seguida, ouvi o Senhor dizer: Quem é que eu vou enviar? Quem será o nosso mensageiro? Então respondi: — Aqui estou eu. Envia-me a mim!",
	},
	{
		versiculo: "Romanos 8:31",
		mensagem: "Diante de tudo isso, o que mais podemos dizer? Se Deus está do nosso lado, quem poderá nos vencer? Ninguém!",
	},
	{
		versiculo: "2Crônicas 7:14",
		mensagem:
			"então, se o meu povo, que pertence somente a mim, se arrepender, abandonar os seus pecados e orar a mim, eu os ouvirei do céu, perdoarei os seus pecados e farei o país progredir de novo.",
	},
	{
		versiculo: "1João 2:6",
		mensagem: "Quem diz que vive unido com Deus deve viver como Jesus Cristo viveu.",
	},
	{
		versiculo: "Mateus 7:13",
		mensagem: "Entrem pela porta estreita porque a porta larga e o caminho fácil levam para o inferno, e há muitas pessoas que andam por esse caminho.",
	},
	{
		versiculo: "João 15:4",
		mensagem:
			"Continuem unidos comigo, e eu continuarei unido com vocês. Pois, assim como o ramo só dá uvas quando está unido com a planta, assim também vocês só podem dar fruto se ficarem unidos comigo.",
	},
	{
		versiculo: "Gálatas 6:2",
		mensagem: "Ajudem uns aos outros e assim vocês estarão obedecendo à lei de Cristo.",
	},
	{
		versiculo: "Salmos 8:3",
		mensagem: "Quando olho para o céu, que tu criaste, para a lua e para as estrelas, que puseste nos seus lugares.",
	},
	{
		versiculo: "Provérbios 19:21",
		mensagem: "As pessoas fazem muitos planos, mas quem decide é Deus, o Senhor.",
	},
	{
		versiculo: "Sofonias 3:17",
		mensagem:
			"Pois o Senhor , seu Deus, está com vocês; ele é poderoso e os salvará. Deus ficará contente com vocês e por causa do seu amor lhes dará nova vida. Ele cantará e se alegrará.",
	},
	{
		versiculo: "João 11:25",
		mensagem: "Então Jesus afirmou: Eu sou a ressurreição e a vida. Quem crê em mim, ainda que morra, viverá.",
	},
	{
		versiculo: "Salmos 27:14",
		mensagem: "Confie no Senhor. Tenha fé e coragem. Confie em Deus, o Senhor.",
	},
	{
		versiculo: "Tiago 5:13",
		mensagem: "Se algum de vocês está sofrendo, ore. Se alguém está contente, cante hinos de agradecimento.",
	},
	{
		versiculo: "Salmos 85:2",
		mensagem: "Perdoaste todos os pecados do teu povo e não olhaste para as suas maldades.",
	},
	{
		versiculo: "João 10:11",
		mensagem: "Eu sou o bom pastor; o bom pastor dá a vida pelas ovelhas.",
	},
	{
		versiculo: "Provérbios 19:17",
		mensagem: "Ser bondoso com os pobres é emprestar ao Senhor , e ele nos devolve o bem que fazemos.",
	},
	{
		versiculo: "Colossenses 3:23",
		mensagem: "O que vocês fizerem façam de todo o coração, como se estivessem servindo o Senhor e não as pessoas.",
	},
	{
		versiculo: "Salmos 147:3",
		mensagem: "Ele cura os que têm o coração partido e trata dos seus ferimentos.",
	},
	{
		versiculo: "Apocalipse 7:9",
		mensagem:
			"Depois disso olhei e vi uma multidão tão grande, que ninguém podia contar. Eram de todas as nações, tribos , raças e línguas. Estavam de pé diante do trono e do Cordeiro, vestidos de roupas brancas, e tinham folhas de palmeira nas mãos.",
	},
	{
		versiculo: "Tiago 1:19",
		mensagem: "Lembrem disto, meus queridos irmãos: cada um esteja pronto para ouvir, mas demore para falar e ficar com raiva.",
	},
	{
		versiculo: "Efésios 5:1",
		mensagem: "Vocês são filhos queridos de Deus e por isso devem ser como ele.",
	},
	{
		versiculo: "Romanos 10:9",
		mensagem: "Se você disser com a sua boca: “Jesus é Senhor” e no seu coração crer que Deus ressuscitou Jesus, você será salvo.",
	},
	{
		versiculo: "Salmos 119:11",
		mensagem: "Guardo a tua palavra no meu coração para não pecar contra ti.",
	},
	{
		versiculo: "Mateus 11:28",
		mensagem: "Venham a mim, todos vocês que estão cansados de carregar as suas pesadas cargas, e eu lhes darei descanso.",
	},
	{
		versiculo: "Salmos 100:2",
		mensagem: "Adorem o Senhor com alegria e venham cantando até a sua presença.",
	},
	{
		versiculo: "1Tessalonicenses 5:15",
		mensagem:
			"Tomem cuidado para que ninguém pague o mal com o mal. Pelo contrário, procurem em todas as ocasiões fazer o bem uns aos outros e também aos que não são irmãos na fé.",
	},
	{
		versiculo: "Filipenses 4:9",
		mensagem:
			"Ponham em prática o que vocês receberam e aprenderam de mim, tanto com as minhas palavras como com as minhas ações. E o Deus que nos dá a paz estará com vocês.",
	},
	{
		versiculo: "Mateus 7:12",
		mensagem: "Façam aos outros o que querem que eles façam a vocês; pois isso é o que querem dizer a Lei de Moisés e os ensinamentos dos Profetas.",
	},
	{
		versiculo: "Mateus 6:6",
		mensagem:
			"Mas você, quando orar, vá para o seu quarto, feche a porta e ore ao seu Pai, que não pode ser visto. E o seu Pai, que vê o que você faz em segredo, lhe dará a recompensa.",
	},
	{
		versiculo: "Hebreus 13:8",
		mensagem: "Jesus Cristo é o mesmo ontem, hoje e sempre.",
	},
	{
		versiculo: "Romanos 12:21",
		mensagem: "Não deixem que o mal vença vocês, mas vençam o mal com o bem.",
	},
	{
		versiculo: "Romanos 8:28",
		mensagem: "Pois sabemos que todas as coisas trabalham juntas para o bem daqueles que amam a Deus, daqueles a quem ele chamou de acordo com o seu plano.",
	},
	{
		versiculo: "Lamentações 3:22",
		mensagem: "O amor do Senhor Deus não se acaba, e a sua bondade não tem fim.",
	},
	{
		versiculo: "Marcos 8:35",
		mensagem:
			"Pois quem põe os seus próprios interesses em primeiro lugar nunca terá a vida verdadeira; mas quem esquece a si mesmo por minha causa e por causa do evangelho terá a vida verdadeira.",
	},
	{
		versiculo: "Provérbios 12:25",
		mensagem: "As preocupações roubam a felicidade da gente, mas as palavras amáveis nos alegram.",
	},
	{
		versiculo: "Salmos 94:19",
		mensagem: "Quando estou aflito e preocupado, tu me consolas e me alegras.",
	},
	{
		versiculo: "1João 4:19",
		mensagem: "Nós amamos porque Deus nos amou primeiro.",
	},
	{
		versiculo: "Filipenses 1:9",
		mensagem: "O que eu peço a Deus é que o amor de vocês cresça cada vez mais e que tenham sabedoria e um entendimento completo.",
	},
	{
		versiculo: "Josué 1:9",
		mensagem:
			"Lembre da minha ordem: “Seja forte e corajoso! Não fique desanimado, nem tenha medo, porque eu, o Senhor , seu Deus, estarei com você em qualquer lugar para onde você for!",
	},
	{
		versiculo: "Mateus 22:37",
		mensagem: "Jesus respondeu: Ame o Senhor, seu Deus, com todo o coração, com toda a alma e com toda a mente.",
	},
	{
		versiculo: "Romanos 15:13",
		mensagem:
			"Que Deus, que nos dá essa esperança, encha vocês de alegria e de paz, por meio da fé que vocês têm nele, a fim de que a esperança de vocês aumente pelo poder do Espírito Santo!",
	},
	{
		versiculo: "Provérbios 22:4",
		mensagem: "Quem teme o Senhor e é humilde consegue riqueza, prestígio e vida longa.",
	},
	{
		versiculo: "2Pedro 1:3",
		mensagem:
			"O poder de Deus nos tem dado tudo o que precisamos para viver uma vida que agrada a ele, por meio do conhecimento que temos daquele que nos chamou para tomar parte na sua própria glória e bondade.",
	},
	{
		versiculo: "Salmos 68:19",
		mensagem: "Louvado seja o Senhor, que dia a dia leva as nossas cargas! Deus é a nossa salvação.",
	},
	{
		versiculo: "1João 1:7",
		mensagem:
			"Porém, se vivemos na luz, como Deus está na luz, então estamos unidos uns com os outros, e o sangue de Jesus, o seu Filho, nos limpa de todo pecado.",
	},
	{
		versiculo: "Salmos 103:13",
		mensagem: "Como um pai trata com bondade os seus filhos, assim o Senhor é bondoso para aqueles que o temem.",
	},
	{
		versiculo: "Colossenses 3:13",
		mensagem:
			"Não fiquem irritados uns com os outros e perdoem uns aos outros, caso alguém tenha alguma queixa contra outra pessoa. Assim como o Senhor perdoou vocês, perdoem uns aos outros.",
	},
	{
		versiculo: "Salmos 34:8",
		mensagem: "Procure descobrir, por você mesmo, como o Senhor Deus é bom. Feliz aquele que encontra segurança nele!",
	},
	{
		versiculo: "Gálatas 5:25",
		mensagem: "Que o Espírito de Deus, que nos deu a vida, controle também a nossa vida!",
	},
	{
		versiculo: "1Coríntios 12:25",
		mensagem: "Desse modo não existe divisão no corpo, mas todas as suas partes têm o mesmo interesse umas pelas outras.",
	},
	{
		versiculo: "1Coríntios 16:13",
		mensagem: "Estejam alertas, fiquem firmes na fé, sejam corajosos, sejam fortes.",
	},
	{
		versiculo: "Filipenses 3:10",
		mensagem:
			"Tudo o que eu quero é conhecer a Cristo e sentir em mim o poder da sua ressurreição. Quero também tomar parte nos seus sofrimentos e me tornar como ele na sua morte,",
	},
	{
		versiculo: "Filipenses 3:10",
		mensagem:
			"Tudo o que eu quero é conhecer a Cristo e sentir em mim o poder da sua ressurreição. Quero também tomar parte nos seus sofrimentos e me tornar como ele na sua morte.",
	},
	{
		versiculo: "Apocalipse 21:4",
		mensagem: "Ele enxugará dos olhos deles todas as lágrimas. Não haverá mais morte, nem tristeza, nem choro, nem dor. As coisas velhas já passaram.",
	},
	{
		versiculo: "2Coríntios 10:5",
		mensagem:
			"e também todo orgulho humano que não deixa que as pessoas conheçam a Deus. Dominamos todo pensamento humano e fazemos com que ele obedeça a Cristo.",
	},
	{
		versiculo: "Mateus 9:37",
		mensagem: "Então disse aos discípulos: A colheita é grande mesmo, mas os trabalhadores são poucos.",
	},
	{
		versiculo: "Mateus 5:44",
		mensagem: "Mas eu lhes digo: amem os seus inimigos e orem pelos que perseguem vocês.",
	},
	{
		versiculo: "João 16:33",
		mensagem: "Eu digo isso para que, por estarem unidos comigo, vocês tenham paz. No mundo vocês vão sofrer; mas tenham coragem. Eu venci o mundo.",
	},
	{
		versiculo: "Salmos 119:114",
		mensagem: "Tu és o meu esconderijo e o meu escudo ; eu ponho a minha esperança na tua promessa.",
	},
	{
		versiculo: "1Coríntios 10:31",
		mensagem: "Portanto, quando vocês comem, ou bebem, ou fazem qualquer outra coisa, façam tudo para a glória de Deus.",
	},
	{
		versiculo: "Efésios 3:20",
		mensagem: "E agora, que a glória seja dada a Deus, o qual, por meio do seu poder que age em nós, pode fazer muito mais do que nós pedimos ou até pensamos!",
	},
	{
		versiculo: "2Coríntios 4:16",
		mensagem: "Por isso nunca ficamos desanimados. Mesmo que o nosso corpo vá se gastando, o nosso espírito vai se renovando dia a dia.",
	},
	{
		versiculo: "Salmos 145:18",
		mensagem: "Ele está perto de todos os que pedem a sua ajuda, dos que pedem com sinceridade.",
	},
	{
		versiculo: "Filipenses 2:3",
		mensagem:
			"Não façam nada por interesse pessoal ou por desejos tolos de receber elogios; mas sejam humildes e considerem os outros superiores a vocês mesmos.",
	},
	{
		versiculo: "Salmos 23:4",
		mensagem: "Ainda que eu ande por um vale escuro como a morte, não terei medo de nada. Pois tu, ó Senhor Deus, estás comigo; tu me proteges e me diriges.",
	},
	{
		versiculo: "1Tessalonicenses 5:17",
		mensagem: "orem se,mpre",
	},
	{
		versiculo: "Isaías 26:4",
		mensagem: "Confiem sempre no Senhor , pois ele é o nosso eterno abrigo.",
	},
	{
		versiculo: "Romanos 12:1",
		mensagem:
			"Portanto, meus irmãos, por causa da grande misericórdia divina, peço que vocês se ofereçam completamente a Deus como um sacrifício vivo, dedicado ao seu serviço e agradável a ele. Esta é a verdadeira adoração que vocês devem oferecer a Deus.",
	},
	{
		versiculo: "2Pedro 3:9",
		mensagem:
			"O Senhor não demora a fazer o que prometeu, como alguns pensam. Pelo contrário, ele tem paciência com vocês porque não quer que ninguém seja destruído, mas deseja que todos se arrependam dos seus pecados.",
	},
	{
		versiculo: "Efésios 6:12",
		mensagem:
			"Pois nós não estamos lutando contra seres humanos, mas contra as forças espirituais do mal que vivem nas alturas, isto é, os governos, as autoridades e os poderes que dominam completamente este mundo de escuridão.",
	},
	{
		versiculo: "Filipenses 2:13",
		mensagem: "Pois Deus está sempre agindo em vocês para que obedeçam à vontade dele, tanto no pensamento como nas ações.",
	},
	{
		versiculo: "1Pedro 3:15",
		mensagem:
			"Tenham no coração de vocês respeito por Cristo e o tratem como Senhor. Estejam sempre prontos para responder a qualquer pessoa que pedir que expliquem a esperança que vocês têm.",
	},
	{
		versiculo: "Mateus 6:7",
		mensagem:
			"Nas suas orações, não fiquem repetindo o que vocês já disseram, como fazem os pagãos. Eles pensam que Deus os ouvirá porque fazem orações compridas.",
	},
	{
		versiculo: "Salmos 147:11",
		mensagem: "mas, sim, as pessoas que o temem e põem a sua esperança no seu amor.",
	},
	{
		versiculo: "1Coríntios 3:16",
		mensagem: "Certamente vocês sabem que são o templo de Deus e que o Espírito de Deus vive em vocês.",
	},
	{
		versiculo: "1Crônicas 16:11",
		mensagem: "Procurem a ajuda do Senhor ; estejam sempre na sua presença.",
	},
	{
		versiculo: "1Coríntios 15:57",
		mensagem: "Mas agradeçamos a Deus, que nos dá a vitória por meio do nosso Senhor Jesus Cristo!",
	},
	{
		versiculo: "Gálatas 5:13",
		mensagem:
			"Porém vocês, irmãos, foram chamados para serem livres. Mas não deixem que essa liberdade se torne uma desculpa para permitir que a natureza humana domine vocês. Pelo contrário, que o amor faça com que vocês sirvam uns aos outros.",
	},
	{
		versiculo: "Salmos 56:3",
		mensagem: "Quando estou com medo, eu confio em ti, ó Deus Todo-Poderoso.",
	},
	{
		versiculo: "Salmos 105:1",
		mensagem: "Agradeçam a Deus, o Senhor , anunciem a sua grandeza e contem às nações as coisas que ele fez.",
	},
	{
		versiculo: "Salmos 77:2",
		mensagem: "Nas horas de aflição eu oro ao Senhor; durante a noite, levanto as mãos em oração, porém não encontro consolo.",
	},
	{
		versiculo: "Eclesiastes 12:13",
		mensagem: "De tudo o que foi dito, a conclusão é esta: tema a Deus e obedeça aos seus mandamentos porque foi para isso que fomos criados.",
	},
	{
		versiculo: "Salmos 143:10",
		mensagem: "Tu és o meu Deus; ensina-me a fazer a tua vontade. Que o teu Espírito seja bom para mim e me guie por um caminho seguro!",
	},
	{
		versiculo: "Lucas 6:35",
		mensagem:
			"Façam o contrário: amem os seus inimigos e façam o bem para eles. Emprestem e não esperem receber de volta o que emprestaram e assim vocês terão uma grande recompensa e serão filhos do Deus Altíssimo. Façam isso porque ele é bom também para os ingratos e maus.",
	},
	{
		versiculo: "Provérbios 11:24",
		mensagem: "Algumas pessoas gastam com generosidade e ficam cada vez mais ricas; outras são econômicas demais e acabam ficando cada vez mais pobres.",
	},
	{
		versiculo: "Mateus 5:9",
		mensagem: "Felizes as pessoas que trabalham pela paz, pois Deus as tratará como seus filhos.",
	},
	{
		versiculo: "Romanos 15:4",
		mensagem:
			"Porque tudo o que está nas Escrituras foi escrito para nos ensinar, a fim de que tenhamos esperança por meio da paciência e da coragem que as Escrituras nos dão.",
	},
	{
		versiculo: "Gálatas 5:1",
		mensagem: "Cristo nos libertou para que nós sejamos realmente livres. Por isso, continuem firmes como pessoas livres e não se tornem escravos novamente.",
	},
	{
		versiculo: "João 6:35",
		mensagem: "Jesus respondeu: Eu sou o pão da vida. Quem vem a mim nunca mais terá fome, e quem crê em mim nunca mais terá sede.",
	},
	{
		versiculo: "Salmos 59:16",
		mensagem:
			"Porém eu cantarei a respeito do teu poder; de manhã louvarei bem alto o teu amor, pois tu tens sido uma fortaleza para mim, um refúgio nos meus dias de aflição.",
	},
	{
		versiculo: "Mateus 20:28",
		mensagem: "Porque até o Filho do Homem não veio para ser servido, mas para servir e dar a sua vida para salvar muita gente.",
	},
	{
		versiculo: "Gálatas 5:16",
		mensagem: "Quero dizer a vocês o seguinte: deixem que o Espírito de Deus dirija a vida de vocês e não obedeçam aos desejos da natureza humana.",
	},
	{
		versiculo: "Romanos 10:17",
		mensagem: "Portanto, a fé vem por ouvir a mensagem, e a mensagem vem por meio da pregação a respeito de Cristo.",
	},
	{
		versiculo: "João 1:12",
		mensagem: "Porém alguns creram nele e o receberam, e a estes ele deu o direito de se tornarem filhos de Deus.",
	},
	{
		versiculo: "Isaías 41:13",
		mensagem: "Eu sou o Senhor, o Deus de vocês; eu os seguro pela mão e lhes digo: ‘Não fiquem com medo, pois eu os ajudo.",
	},
	{
		versiculo: "Gálatas 2:20",
		mensagem:
			"Assim já não sou eu quem vive, mas Cristo é quem vive em mim. E esta vida que vivo agora, eu a vivo pela fé no Filho de Deus, que me amou e se deu a si mesmo por mim.",
	},
	{
		versiculo: "1Pedro 5:7",
		mensagem: "Entreguem todas as suas preocupações a Deus, pois ele cuida de vocês.",
	},
	{
		versiculo: "Salmos 100:5",
		mensagem: "Pois o Senhor é bom, o seu amor dura para sempre, e a sua fidelidade não tem fim.",
	},
	{
		versiculo: "Mateus 7:8",
		mensagem: "Porque todos aqueles que pedem recebem; aqueles que procuram acham; e a porta será aberta para quem bate.",
	},
	{
		versiculo: "Provérbios 9:10",
		mensagem: "Para ser sábio, é preciso primeiro temer a Deus , o Senhor . Se você conhece o Deus Santo, então você tem compreensão das coisas.",
	},
	{
		versiculo: "Provérbios 4:23",
		mensagem: "Tenha cuidado com o que você pensa, pois a sua vida é dirigida pelos seus pensamentos.",
	},
	{
		versiculo: "Salmos 113:3",
		mensagem: "Desde o nascer até o pôr do sol, que o nome do Senhor seja louvado!",
	},
	{
		versiculo: "Malaquias 4:6",
		mensagem: "Ele fará com que pais e filhos façam as pazes para que eu não venha castigar o país e destruí-lo completamente.",
	},
	{
		versiculo: "Salmos 103:2",
		mensagem: "Que todo o meu ser louve o Senhor , e que eu não esqueça nenhuma das suas bênçãos!",
	},
	{
		versiculo: "Isaías 12:2",
		mensagem: "Deus é o meu Salvador; eu confiarei nele e não terei medo. Pois o Senhor me dá força e poder, ele é o meu Salvador.",
	},
	{
		versiculo: "Gálatas 5:24",
		mensagem: "As pessoas que pertencem a Cristo Jesus crucificaram a natureza humana delas, junto com todas as paixões e desejos dessa natureza.",
	},
	{
		versiculo: "Tiago 3:13",
		mensagem:
			"Existe entre vocês alguém que seja sábio e inteligente? Pois então que prove isso pelo seu bom comportamento e pelas suas ações, praticadas com humildade e sabedoria.",
	},
	{
		versiculo: "1Crônicas 16:34",
		mensagem: "Deem graças ao Senhor porque ele é bom, e o seu amor dura para sempre.",
	},
	{
		versiculo: "Filipenses 2:5",
		mensagem: "Tenham entre vocês o mesmo modo de pensar que Cristo Jesus tinha:",
	},
	{
		versiculo: "Romanos 12:10",
		mensagem: "Amem uns aos outros com o amor de irmãos em Cristo e se esforcem para tratar uns aos outros com respeito.",
	},
	{
		versiculo: "Isaías 43:2",
		mensagem:
			"Quando você atravessar águas profundas, eu estarei ao seu lado, e você não se afogará. Quando passar pelo meio do fogo, as chamas não o queimarão.",
	},
	{
		versiculo: "Efésios 2:10",
		mensagem:
			"Pois foi Deus quem nos fez o que somos agora; em nossa união com Cristo Jesus, ele nos criou para que fizéssemos as boas obras que ele já havia preparado para nós.",
	},
	{
		versiculo: "2Timóteo 3:16",
		mensagem:
			"Pois toda a Escritura Sagrada é inspirada por Deus e é útil para ensinar a verdade, condenar o erro, corrigir as faltas e ensinar a maneira certa de viver.",
	},
	{
		versiculo: "1Pedro 5:6",
		mensagem: "Portanto, sejam humildes debaixo da poderosa mão de Deus para que ele os honre no tempo certo.",
	},
	{
		versiculo: "Atos 1:8",
		mensagem:
			"Porém, quando o Espírito Santo descer sobre vocês, vocês receberão poder e serão minhas testemunhas em Jerusalém, em toda a Judéia e Samaria e até nos lugares mais distantes da terra.",
	},
	{
		versiculo: "Atos 2:38",
		mensagem:
			"Pedro respondeu: — Arrependam-se, e cada um de vocês seja batizado em nome de Jesus Cristo para que os seus pecados sejam perdoados, e vocês receberão de Deus o Espírito Santo.",
	},
	{
		versiculo: "Ezequiel 36:26",
		mensagem:
			"Eu lhes darei um coração novo e porei em vocês um espírito novo. Tirarei de vocês o coração de pedra, desobediente, e lhes darei um coração bondoso, obediente.",
	},
	{
		versiculo: "Gálatas 5:14",
		mensagem: "Pois a lei inteira se resume em um mandamento só: “Ame os outros como você ama a você mesmo.",
	},
	{
		versiculo: "Romanos 8:6",
		mensagem:
			"As pessoas que têm a mente controlada pela natureza humana acabarão morrendo espiritualmente; mas as que têm a mente controlada pelo Espírito de Deus terão a vida eterna e a paz.",
	},
	{
		versiculo: "Lucas 6:36",
		mensagem: "Tenham misericórdia dos outros, assim como o Pai de vocês tem misericórdia de vocês.",
	},
	{
		versiculo: "Colossenses 3:12",
		mensagem:
			"Vocês são o povo de Deus. Ele os amou e os escolheu para serem dele. Portanto, vistam-se de misericórdia, de bondade, de humildade, de delicadeza e de paciência.",
	},
	{
		versiculo: "Provérbios 13:6",
		mensagem: "A justiça protege os inocentes, mas a maldade do pecador o leva à desgraça.",
	},
	{
		versiculo: "João 15:13",
		mensagem: "Ninguém tem mais amor pelos seus amigos do que aquele que dá a sua vida por eles.",
	},
	{
		versiculo: "Salmos 20:7",
		mensagem: "Alguns confiam nos seus carros de guerra, e outros, nos seus cavalos, mas nós confiamos no poder do Senhor , nosso Deus.",
	},
	{
		versiculo: "Mateus 5:3",
		mensagem: "Felizes as pessoas que sabem que são espiritualmente pobres, pois o Reino do Céu é delas.",
	},
	{
		versiculo: "João 20:21",
		mensagem: "Então Jesus disse de novo: Que a paz esteja com vocês! Assim como o Pai me enviou, eu também envio vocês.",
	},
	{
		versiculo: "João 14:1",
		mensagem: "Jesus disse: Não fiquem aflitos. Creiam em Deus e creiam também em mim.",
	},
	{
		versiculo: "Mateus 18:3",
		mensagem: "e disse: Eu afirmo a vocês que isto é verdade: se vocês não mudarem de vida e não ficarem iguais às crianças, nunca entrarão no Reino do Céu.",
	},
	{
		versiculo: "Mateus 18:3",
		mensagem: "e disse: Eu afirmo a vocês que isto é verdade: se vocês não mudarem de vida e não ficarem iguais às crianças, nunca entrarão no Reino do Céu.",
	},
	{
		versiculo: "Colossenses 4:6",
		mensagem: "Que as suas conversas sejam sempre agradáveis e de bom gosto, e que vocês saibam também como responder a cada pessoa!",
	},
	{
		versiculo: "Tiago 4:7",
		mensagem: "Portanto, obedeçam a Deus e enfrentem o Diabo, que ele fugirá de vocês.",
	},
	{
		versiculo: "Provérbios 18:10",
		mensagem: "O nome do Senhor é como uma torre forte para onde as pessoas direitas vão e ficam em segurança.",
	},
	{
		versiculo: "Hebreus 4:16",
		mensagem:
			"Por isso, tenhamos confiança e cheguemos perto do trono divino, onde está a graça de Deus. Ali receberemos misericórdia e encontraremos graça sempre que precisarmos de ajuda.",
	},
	{
		versiculo: "Filipenses 4:19",
		mensagem: "E o meu Deus, de acordo com as gloriosas riquezas que ele tem para oferecer por meio de Cristo Jesus, lhes dará tudo o que vocês precisam.",
	},
	{
		versiculo: "Apocalipse 4:11",
		mensagem:
			"Senhor nosso e nosso Deus! Tu és digno de receber glória, honra e poder, pois criaste todas as coisas; por tua vontade elas foram criadas e existem.",
	},
	{
		versiculo: "2Coríntios 7:10",
		mensagem:
			"Pois a tristeza que é usada por Deus produz o arrependimento que leva à salvação; e nisso não há motivo para alguém ficar triste. Mas as tristezas deste mundo produzem a morte.",
	},
	{
		versiculo: "Miquéias 6:8",
		mensagem:
			"O Senhor já nos mostrou o que é bom, ele já disse o que exige de nós. O que ele quer é que façamos o que é direito, que amemos uns aos outros com dedicação e que vivamos em humilde obediência ao nosso Deus.",
	},
	{
		versiculo: "Romanos 8:1",
		mensagem: "Agora já não existe nenhuma condenação para as pessoas que estão unidas com Cristo Jesus.",
	},
	{
		versiculo: "Habacuque 2:14",
		mensagem: "E a terra ficará cheia do conhecimento da glória do Senhor , assim como as águas enchem o mar.",
	},
	{
		versiculo: "Naum 1:7",
		mensagem: "O Senhor Deus é bom. Em tempos difíceis, ele salva o seu povo e cuida dos que procuram a sua proteção.",
	},
	{
		versiculo: "Mateus 6:25",
		mensagem:
			"Por isso eu digo a vocês: não se preocupem com a comida e com a bebida que precisam para viver nem com a roupa que precisam para se vestir. Afinal, será que a vida não é mais importante do que a comida? E será que o corpo não é mais importante do que as roupas?",
	},
	{
		versiculo: "João 15:2",
		mensagem:
			"Todos os ramos que não dão uvas ele corta, embora eles estejam em mim. Mas os ramos que dão uvas ele poda a fim de que fiquem limpos e dêem mais uvas ainda.",
	},
	{
		versiculo: "Mateus 6:19",
		mensagem: "Não ajuntem riquezas aqui na terra, onde as traças e a ferrugem destroem, e onde os ladrões arrombam e roubam.",
	},
	{
		versiculo: "Provérbios 18:21",
		mensagem: "O que você diz pode salvar ou destruir uma vida; portanto, use bem as suas palavras e você será recompensado.",
	},
	{
		versiculo: "Isaías 41:10",
		mensagem:
			"Não fiquem com medo, pois estou com vocês; não se apavorem, pois eu sou o seu Deus. Eu lhes dou forças e os ajudo; eu os protejo com a minha forte mão.",
	},
	{
		versiculo: "1Coríntios 13:7",
		mensagem: "Quem ama nunca desiste, porém suporta tudo com fé, esperança e paciência.",
	},
	{
		versiculo: "Efésios 6:2",
		mensagem: "Como dizem as Escrituras : “Respeite o seu pai e a sua mãe.” E esse é o primeiro mandamento que tem uma promessa, a qual é:",
	},
	{
		versiculo: "1Timóteo 2:5",
		mensagem: "Pois existe um só Deus e uma só pessoa que une Deus com os seres humanos. O ser humano Cristo Jesus,",
	},
	{
		versiculo: "Romanos 8:26",
		mensagem:
			"Assim também o Espírito de Deus vem nos ajudar na nossa fraqueza. Pois não sabemos como devemos orar, mas o Espírito de Deus, com gemidos que não podem ser explicados por palavras, pede a Deus em nosso favor.",
	},
	{
		versiculo: "Salmos 37:4",
		mensagem: "Que a sua felicidade esteja no Senhor ! Ele lhe dará o que o seu coração deseja.",
	},
	{
		versiculo: "Salmos 34:18",
		mensagem: "Ele fica perto dos que estão desanimados e salva os que perderam a esperança.",
	},
	{
		versiculo: "Salmos 18:2",
		mensagem:
			"O Senhor é a minha rocha, a minha fortaleza e o meu libertador. O meu Deus é uma rocha em que me escondo. Ele me protege como um escudo ; ele é o meu abrigo, e com ele estou seguro.",
	},
	{
		versiculo: "2Coríntios 12:9",
		mensagem:
			"Mas ele me respondeu: “A minha graça é tudo o que você precisa, pois o meu poder é mais forte quando você está fraco.” Portanto, eu me sinto muito feliz em me gabar das minhas fraquezas, para que assim a proteção do poder de Cristo esteja comigo.",
	},
	{
		versiculo: "Salmos 19:1",
		mensagem: "O céu anuncia a glória de Deus e nos mostra aquilo que as suas mãos fizeram.",
	},
	{
		versiculo: "Lucas 6:38",
		mensagem:
			"Deem aos outros, e Deus dará a vocês. Ele será generoso, e as bênçãos que ele lhes dará serão tantas, que vocês não poderão segurá-las nas suas mãos. A mesma medida que vocês usarem para medir os outros Deus usará para medir vocês.",
	},
	{
		versiculo: "Hebreus 10:24",
		mensagem: "Pensemos uns nos outros a fim de ajudarmos todos a terem mais amor e a fazerem o bem.",
	},
	{
		versiculo: "1João 5:14",
		mensagem:
			"Quando estamos na presença de Deus, temos coragem por causa do seguinte: se pedimos alguma coisa de acordo com a sua vontade, temos a certeza de que ele nos ouve.",
	},
	{
		versiculo: "Romanos 5:3",
		mensagem: "E também nos alegramos nos sofrimentos, pois sabemos que os sofrimentos produzem a paciência.",
	},
	{
		versiculo: "João 14:6",
		mensagem: "Jesus respondeu: Eu sou o caminho, a verdade e a vida; ninguém pode chegar até o Pai a não ser por mim.",
	},
	{
		versiculo: "João 3:17",
		mensagem: "Pois Deus mandou o seu Filho para salvar o mundo e não para julgá-lo.",
	},
	{
		versiculo: "João 1:29",
		mensagem: "No dia seguinte, João viu Jesus vindo na direção dele e disse: Aí está o Cordeiro de Deus, que tira o pecado do mundo!",
	},
	{
		versiculo: "Isaías 53:5",
		mensagem:
			"Porém ele estava sofrendo por causa dos nossos pecados, estava sendo castigado por causa das nossas maldades. Nós somos curados pelo castigo que ele sofreu, somos sarados pelos ferimentos que ele recebeu.",
	},
	{
		versiculo: "João 13:14",
		mensagem: "Se eu, o Senhor e o Mestre, lavei os pés de vocês, então vocês devem lavar os pés uns dos outros.",
	},
	{
		versiculo: "Tiago 1:2",
		mensagem: "Meus irmãos, sintam-se felizes quando passarem por todo tipo de aflições.",
	},
	{
		versiculo: "Romanos 10:13",
		mensagem: "Como dizem as Escrituras Sagradas: “Todos os que pedirem a ajuda do Senhor serão salvos.”",
	},
	{
		versiculo: "Romanos 3:23",
		mensagem: "Todos pecaram e estão afastados da presença gloriosa de Deus.",
	},
	{
		versiculo: "João 3:16",
		mensagem: "Porque Deus amou o mundo tanto, que deu o seu único Filho, para que todo aquele que nele crer não morra, mas tenha a vida eterna.",
	},
	{
		versiculo: "Isaías 53:6",
		mensagem:
			"Todos nós éramos como ovelhas que se haviam perdido; cada um de nós seguia o seu próprio caminho. Mas o Senhor castigou o seu servo; fez com que ele sofresse o castigo que nós merecíamos.",
	},
	{
		versiculo: "Mateus 27:50",
		mensagem: "Aí Jesus deu outro grito forte e morreu.",
	},
	{
		versiculo: "Mateus 26:38",
		mensagem: "e disse a eles: — A tristeza que estou sentindo é tão grande, que é capaz de me matar. Fiquem aqui vigiando comigo.",
	},
	{
		versiculo: "1Pedro 4:16",
		mensagem: "Mas, se alguém sofrer por ser cristão, não fique envergonhado, mas agradeça a Deus o fato de ser chamado por esse nome.",
	},
	{
		versiculo: "João 13:34",
		mensagem: "Eu lhes dou este novo mandamento: amem uns aos outros. Assim como eu os amei, amem também uns aos outros.",
	},
	{
		versiculo: "Filipenses 2:7",
		mensagem:
			"Pelo contrário, ele abriu mão de tudo o que era seu e tomou a natureza de servo , tornando-se assim igual aos seres humanos. E, vivendo a vida comum de um ser humano.",
	},
	{
		versiculo: "Lucas 19:38",
		mensagem: "Eles diziam:Que Deus abençoe o Rei que vem em nome do Senhor! Paz no céu e glória a Deus!",
	},
	{
		versiculo: "Salmos 24:10",
		mensagem: "Quem é esse Rei da glória? É Deus, o Senhor Todo-Poderoso; ele é o Rei da glória.",
	},
	{
		versiculo: "Salmos 4:8",
		mensagem: "Quando me deito, durmo em paz, pois só tu, ó Senhor , me fazes viver em segurança.",
	},
	{
		versiculo: "Gálatas 5:22",
		mensagem: "Mas o Espírito de Deus produz o amor, a alegria, a paz, a paciência, a delicadeza, a bondade, a fidelidade,",
	},
	{
		versiculo: "Romanos 5:8",
		mensagem: "Mas Deus nos mostrou o quanto nos ama: Cristo morreu por nós quando ainda vivíamos no pecado.",
	},
	{
		versiculo: "Josué 1:8",
		mensagem:
			"Fale sempre do que está escrito no Livro da Lei . Estude esse livro dia e noite e se esforce para viver de acordo com tudo o que está escrito nele. Se fizer isso, tudo lhe correrá bem, e você terá sucesso.",
	},
	{
		versiculo: "Salmos 27:4",
		mensagem:
			"A Deus, o Senhor , pedi uma coisa, e o que eu quero é só isto: que ele me deixe viver na sua casa todos os dias da minha vida, para sentir, maravilhado, a sua bondade e pedir a sua orientação.",
	},
	{
		versiculo: "Atos 4:12",
		mensagem:
			"A salvação só pode ser conseguida por meio dele. Pois não há no mundo inteiro nenhum outro que Deus tenha dado aos seres humanos, por meio do qual possamos ser salvos.",
	},
	{
		versiculo: "Provérbios 27:17",
		mensagem: "As pessoas aprendem umas com as outras, assim como o ferro afia o próprio ferro.",
	},
	{
		versiculo: "Efésios 6:11",
		mensagem: "Vistam-se com toda a armadura que Deus dá a vocês, para ficarem firmes contra as armadilhas do Diabo.",
	},
	{
		versiculo: "Salmos 40:1",
		mensagem: "Esperei com paciência pela ajuda de Deus, o Senhor . Ele me escutou e ouviu o meu pedido de socorro.",
	},
	{
		versiculo: "Salmos 68:5",
		mensagem: "Deus, que vive no seu santo Templo, cuida dos órfãos e protege as viúvas.",
	},
	{
		versiculo: "Provérbios 16:3",
		mensagem: "Peça a Deus que abençoe os seus planos, e eles darão certo.",
	},
]

module.exports = dados
