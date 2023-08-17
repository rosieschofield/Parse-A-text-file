import * as fs from 'fs'
import * as csv from 'csv'

const file = './src/jokes_for_cohort.txt';
let jokes:string[] = []
fs.readFile(file, 'utf8',(err, data)=>{
    if (err){
        console.log(err)
    }
    jokes = data.split('\n\n')
    jokes = jokes.map((joke)=> joke.replace(/\n/g,''))
    jokes = jokes.filter((joke)=>joke!='')
   })



   /*
   const data = [['Index', 'Joke']].concat(jokes.map((str, index) => [index + 1, str]));
const csvStringifier = csv.stringify({
        header: false
    });
    
    const csvOutput = fs.createWriteStream('output.csv');
    csvOutput.write('\uFEFF')
    csvStringifier.pipe(csvOutput);
    csvStringifier.write([jokes]);
    csvStringifier.end();
    */