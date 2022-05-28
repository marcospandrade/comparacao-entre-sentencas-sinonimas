const SYNONYMS = [
    ['rate', 'ratings'],
    ['approval', 'popularity']
];
const QUERIES = [
    ['obama approval rate', 'obama popularity ratings'], //true
    ['obama approval rates', 'obama popularity ratings'], //false
    ['obama approval rate', 'popularity ratings obama'] //false
];

function checkIsInSinonyms(word: string, arraySyn: string[][]): string[] {
    const arraySinonyms: string[] = [];
    arraySyn.map(elem => {
        if (elem.includes(word)) {
            return arraySinonyms.push(...elem);
        }
    });

    return arraySinonyms;
}

function isSynonyms(queries: string[][]) {
    let isSynonym = false;

    queries.map(sentence => {
        const sentence1 = sentence[0].split(' ');
        const sentence2 = sentence[1].split(' ');

        sentence1.map((elem, index) => {
            if (elem.toLowerCase() === sentence2[index].toLowerCase()) {
                console.log(
                    'palavra 1: ' +
                        elem +
                        'palavra 2: ' +
                        sentence2[index] +
                        ' são iguais \n ------'
                );
                isSynonym = true;
                return;
            } else {
                const arraySynonymsByWord = checkIsInSinonyms(
                    elem.toLowerCase(),
                    SYNONYMS
                );
                if (
                    arraySynonymsByWord.length > 0 &&
                    arraySynonymsByWord.includes(sentence2[index].toLowerCase())
                ) {
                    console.log(
                        'palavra 1: ' +
                            elem +
                            ' palavra 2: ' +
                            sentence2[index] +
                            ' são sinônimas\n ------'
                    );
                    isSynonym = true;
                } else {
                    console.log(
                        'palavra 1: ' +
                            elem +
                            ' palavra 2: ' +
                            sentence2[index] +
                            ' não são sinônimas\n ------'
                    );
                    isSynonym = false;
                }
            }
        });
        console.log('Resposta final', isSynonym + '\n');
    });
}

isSynonyms(QUERIES);
