// Envio de Arquivo
// Atividade 2 - Criando classes e objetos na prática.

// Implemente em Javascript os itens da lista de exercícios. Todos os itens devem ser feitos em um único projeto. No final compacte a pasta do projeto e envie a atividade no prazo estipulado.
// Item 1 (4,0 pontos)
//      Crie a classe Retângulo. A classe deve ter largura e altura como atributos e ter também como métodos que atribuam valor aos atributos da classe (setAltura e setLargura) e também métodos para calcular o perímetro e a área do retângulo. Inclua o método ehQuadrado que determina se o retângulo é um quadrado.

class Retangulo {
    #largura
    #altura
    #area
    #perimetro

    setAltura(novaAltura) {
        if (novaAltura > 0) {
            this.#altura = novaAltura;
        }
        else {
            console.log('Insira um valor positivo');
        }
    }
    setLargura(novaLargura) {
        if (novaLargura > 0) {
            this.#largura = novaLargura;
        }
        else {
            console.log('Insira um valor positivo');
        }
    }
    getAltura() {
        return this.#altura
    }
    getLargura() {
        return this.#largura
    }
    calcularArea() {
        this.#area = this.#altura * this.#largura
        return this.#area
    }
    calcularPerimetro() {
        this.#perimetro = (this.#altura + this.#largura) * 2
        return this.#perimetro;
    }
    ehQuadrado() {
        if (this.#altura == this.#largura) {
            return true;
        }
        else {
            return false;
        }
    }
}

const retangulo = new Retangulo();

retangulo.setAltura(5)
retangulo.setLargura(5)

console.log('altura = ' + retangulo.getAltura());
console.log('largura = ' + retangulo.getLargura());
console.log('area = ' + retangulo.calcularArea());
console.log('perimetro = ' + retangulo.calcularPerimetro());

let msgm;
if (retangulo.ehQuadrado()) {
    msgm = 'É quadrado!'
}
else {
    msgm = 'É retangulo'
}
console.log(msgm);



//calculadora
// Item 2 (6,0 pontos)
//     Projete e implemente a classe Calculadora. Os objetos gerados pela classe Calculadora deverão executar operações aritméticas (soma, subtração, divisão, multiplicação, potência, porcentagem e raiz quadrada) e operações funcionais (zerar resultado, desfazer última operação e retornar resultado). A classe é apresentada abaixo na notação UML:

class Calculadora {
    #res = 0
    #mem = [0]

    getRes() {
        return this.#res;
    }

    setRes(novaRes) {
        this.#res = novaRes;
    }

    getMem() {
        return this.#mem[this.#mem.length - 2];
    }
    getMemCompleta(){
        return this.#mem;
    }
    setMem(novaMem) {
        this.#mem = novaMem;
    }
    soma(valor) {
        this.#res = this.#mem[this.#mem.length - 1] + valor;
        this.#mem.push(this.#res);
        return this.#res
    }
    subtracao(valor) {
        this.#res = this.#mem[this.#mem.length - 1] - valor;
        this.#mem.push(this.#res);
        return this.#res
    }
    divisao(valor) {
        this.#res = this.#mem[this.#mem.length - 1] / valor;
        this.#mem.push(this.#res);
        return this.#res;
    }
    multiplicacao(valor) {
        this.#res = this.#mem[this.#mem.length - 1] * valor;
        this.#mem.push(this.#res);
        return this.#res;
    }
    potencia(valor) {
        this.#res = this.#mem[this.#mem.length - 1] ** valor;
        this.#mem.push(this.#res);
        return this.#res;
    }
    porcentagem(valor) {
        this.#res = this.#mem[this.#mem.length - 1] * valor / 100;
        this.#mem.push(this.#res);
        return this.#res;
    }
    raizQuadrada() {
        this.#res = this.#mem[this.#mem.length - 1] ** (1 / 2);
        this.#mem.push(this.#res);
        return this.#res;
    }
    zerarResultado() {
        this.#res = 0;
        this.#mem.push(this.#res);
        return this.#res;
    }
    desfazerUltimaOperacao() {
        if (this.#mem.length > 1) {
            this.#res = this.#mem.pop();
            return this.#res;
        }
        else {
            console.log('Nenhuma operação para desfazer!');
        }
    }
    limparMemoria (){
        this.#mem = [0];
        return this.#mem;
    }
}

let calculadora = new Calculadora();

console.log('Soma 15:')
console.log(calculadora.soma(15))
console.log('Ultimo registro antes da soma:')
console.log(calculadora.getMem())
console.log('Subtrai 3:')
console.log(calculadora.subtracao(3))
console.log('Ultimo registro antes da subtração:')
console.log(calculadora.getMem())
console.log('Divide por 2:')
console.log(calculadora.divisao(2))
console.log('Ultimo registro antes da divisão:')
console.log(calculadora.getMem())
console.log('Elevado a 2:');
console.log(calculadora.potencia(2))
console.log ('Ultimo registro antes da potência');
console.log(calculadora.getMem())
console.log('25% do valor:');
console.log(calculadora.porcentagem(25))
console.log('Ultimo registro antes da porcentagem')
console.log(calculadora.getMem())
console.log('Raiz quadrada:')
console.log(calculadora.raizQuadrada())
console.log ('Ultimo registro antes da raiz');
console.log(calculadora.getMem())
console.log('Zera o resultado:');
console.log(calculadora.zerarResultado())
console.log('Defazendo ultima operação:')
console.log(calculadora.desfazerUltimaOperacao())
console.log('Memória atual:')
console.log(calculadora.getMemCompleta())
console.log('Soma 5:')
console.log(calculadora.soma(5))
console.log('Ultimo registro antes da soma:')
console.log(calculadora.getMem())
console.log('Subtrai 1:')
console.log(calculadora.subtracao(1))
console.log('Ultimo registro antes da subtração:')
console.log(calculadora.getMem())
console.log('Zera o resultado:');
console.log(calculadora.zerarResultado())
console.log('Memória atual:')
console.log(calculadora.getMemCompleta())
console.log('Memória limpa:')
console.log(calculadora.limparMemoria())



