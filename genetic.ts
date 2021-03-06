class Chromosome {
    private string: string[];
    private score: number;

    constructor(string: string[], score: number) {
        this.string = string;
        this.score = score;
    }

    public getScore(): number {
        return this.score;
    }

    public getString(): string[] {
        return this.string;
    }

    public setCharacter(index: number, character: string): void {
        this.string[index] = character;
    }

    public setScore(score: number): void {
        this.score = score;
    }
}

class Main {
    readonly low = 32;
    readonly high = 126;
    readonly POP_SIZE = 100;
    private chromosomes: Chromosome[] = [];
    private newChromosomes: Chromosome[] = [];
    private startHighest = 0;
    private startHighestString: string[];

    private iteration = 0;
    readonly helloWorld = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];

    public run() {
        this.fillArray();
        while (!this.checkSolution()) {
            let currentHighest = 0;
            let highestString = '';
            for (let i = 0; i < this.POP_SIZE; i++) {
                if (i < this.POP_SIZE) {
                    this.createNewPopulation();
                }
                let score = this.chromosomes[i].getScore();
                if (i == 0 || score < currentHighest) {
                    currentHighest = score;
                    highestString = this.chromosomes[i].getString().join('');
                }
            }
            if (!this.checkSolution()) {
                this.chromosomes = this.newChromosomes.slice();
                this.mutate();
                console.log(`${this.iteration}. Best = ${highestString}, ${currentHighest} off target`)
        
                this.newChromosomes = [];
                this.iteration++;
            }
        }
        console.log('\nHello, World! has been made');
        console.log(`Start string was ${this.startHighestString.join('')} (${this.startHighest} away from target)\n`);
    }

    private createString(): string[] {
        let string: string[] = [];
        for (let i = 0; i < 13; i++) {
            let letter: number = this.random(this.low, this.high);
            string.push(String.fromCharCode(letter));
        }
        return string;
    }

    private fillArray(): void {
        let string = []; 
        let score = 0;
        for (let i = 0; i < this.POP_SIZE; i++) {
            string = this.createString();
            score = this.calculateFitness(string);
            this.chromosomes.push(new Chromosome(string, score));
            if (i == 0 || score < this.startHighest) {
                this.startHighest = score;
                this.startHighestString = this.chromosomes[i].getString();
            }
        }
    }

    private calculateFitness(string): number {
        let score = 0;
        for (let i = 0; i < string.length; i++) {
            score += Math.abs(string[i].charCodeAt(0) - this.helloWorld[i]);
        }
        return score;
    }

    private checkSolution(): boolean {
        for (let i =0; i < this.POP_SIZE; i++) {
            if (this.chromosomes[i].getScore() === 0) {
                return true;
            }
        }
        return false;
    }

    private crossOver(parent1, parent2): void {
        let rand = this.random(parent1.length);
        let child1 = '';
        let child2 = '';

        for (let i = 0; i < parent1.length; i++) {
            child1 += i >= rand ? parent1[i] : parent2[i];
            child2 += i >= rand ? parent2[i] : parent1[i];
        }

        this.newChromosomes.push(new Chromosome(child1.split(''), this.calculateFitness(child1.split(''))));
        this.newChromosomes.push(new Chromosome(child2.split(''), this.calculateFitness(child2.split(''))));
    }

    private createNewPopulation(): void {
        let randomFour1 = [];
        let randomFour2 = [];

        for (let i = 0; i < 4; i++) {
            randomFour1.push(this.random(this.chromosomes));
            randomFour2.push(this.random(this.chromosomes));
        }

        let parent1: string[] = this.fitnessFunction(randomFour1).getString();
        let parent2: string[] = this.fitnessFunction(randomFour2).getString();
        let n = this.random(1, 100);
        if (n < 70) {
            this.crossOver(parent1, parent2);
        } else {
            this.newChromosomes.push(new Chromosome(parent1, this.calculateFitness(parent1)));
            this.newChromosomes.push(new Chromosome(parent2, this.calculateFitness(parent2)));
        }
    }

    private mutate(): void {
        let stringToMutate;
        for (let i = 0; i < this.chromosomes.length; i++) {
            if (this.random(1, 100) < 5) {
                stringToMutate = this.chromosomes[i].getString();
                let answer = this.random(stringToMutate.length);
                let chromosomeString = stringToMutate[answer];
                let character = chromosomeString.charCodeAt(0);
                if (character == this.low) {
                    character++;
                } else if (character == this.high) {
                    character--;
                } else {
                    this.random(2) == 0 ? character++ : character--;
                }
                this.chromosomes[i].setCharacter(answer, String.fromCharCode(character));
                this.chromosomes[i].setScore(this.calculateFitness(this.chromosomes[i].getString()));
            }
        }
    }

    private fitnessFunction(randomFour): Chromosome {
        return randomFour.reduce((accumulator, currentValue) => {
            return accumulator.getScore() < currentValue.getScore() ? accumulator : currentValue;
        }, randomFour[0]);
    }

    private random(x: any, y?: number): any {
        if (typeof y === 'undefined') {
            if (x instanceof Array) {
                let index: number = Math.floor(Math.random() * x.length);    
                return x[index];
            } else {
                return Math.floor(Math.random() * x);            
            }
        } else {
            return Math.floor(Math.random() * (y - x) + x);
        }
    }
}
let mainMethod = new Main();

mainMethod.run();