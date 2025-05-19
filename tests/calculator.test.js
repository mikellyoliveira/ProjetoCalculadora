const Calculator = require('../js/calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('validarNota', () => {
        test('deve retornar true para notas válidas', () => {
            expect(calculator.validarNota(0)).toBe(true);
            expect(calculator.validarNota(5)).toBe(true);
            expect(calculator.validarNota(7.5)).toBe(true);
            expect(calculator.validarNota(10)).toBe(true);
        });

        test('deve retornar false para notas inválidas', () => {
            expect(calculator.validarNota(-1)).toBe(false);
            expect(calculator.validarNota(11)).toBe(false);
            expect(calculator.validarNota(null)).toBe(false);
            expect(calculator.validarNota(undefined)).toBe(false);
            expect(calculator.validarNota('abc')).toBe(false);
            expect(calculator.validarNota(NaN)).toBe(false);
        });
    });

    describe('calcularMedia', () => {
        test('deve calcular corretamente a média de duas notas', () => {
            expect(calculator.calcularMedia(7, 8)).toBe(7.5);
            expect(calculator.calcularMedia(10, 10)).toBe(10);
            expect(calculator.calcularMedia(0, 0)).toBe(0);
            expect(calculator.calcularMedia(5.5, 7.5)).toBe(6.5);
        });

        test('deve aceitar notas em formato string', () => {
            expect(calculator.calcularMedia('7', '8')).toBe(7.5);
            expect(calculator.calcularMedia('5.5', '7.5')).toBe(6.5);
        });

        test('deve lançar erro para notas inválidas', () => {
            expect(() => calculator.calcularMedia(11, 8)).toThrow();
            expect(() => calculator.calcularMedia(-1, 8)).toThrow();
            expect(() => calculator.calcularMedia(7, 'abc')).toThrow();
            expect(() => calculator.calcularMedia(null, 8)).toThrow();
        });
    });

    describe('determinarSituacao', () => {
        test('deve retornar "Aprovado" para média 7 ou superior', () => {
            expect(calculator.determinarSituacao(7)).toBe('Aprovado');
            expect(calculator.determinarSituacao(8.5)).toBe('Aprovado');
            expect(calculator.determinarSituacao(10)).toBe('Aprovado');
        });

        test('deve retornar "Recuperação" para média entre 5 e menor que 7', () => {
            expect(calculator.determinarSituacao(5)).toBe('Recuperação');
            expect(calculator.determinarSituacao(6)).toBe('Recuperação');
            expect(calculator.determinarSituacao(6.9)).toBe('Recuperação');
        });

        test('deve retornar "Reprovado" para média menor que 5', () => {
            expect(calculator.determinarSituacao(4.9)).toBe('Reprovado');
            expect(calculator.determinarSituacao(3)).toBe('Reprovado');
            expect(calculator.determinarSituacao(0)).toBe('Reprovado');
        });
    });

    describe('processarNotas', () => {
        test('deve processar as notas e retornar objeto com média e situação corretamente formatados', () => {
            const resultado1 = calculator.processarNotas(7, 8);
            expect(resultado1.media).toBe('7.5');
            expect(resultado1.situacao).toBe('Aprovado');

            const resultado2 = calculator.processarNotas(5, 6);
            expect(resultado2.media).toBe('5.5');
            expect(resultado2.situacao).toBe('Recuperação');

            const resultado3 = calculator.processarNotas(3, 4);
            expect(resultado3.media).toBe('3.5');
            expect(resultado3.situacao).toBe('Reprovado');
        });

        test('deve lançar erro se alguma nota for inválida', () => {
            expect(() => calculator.processarNotas(11, 8)).toThrow();
            expect(() => calculator.processarNotas(7, -1)).toThrow();
        });
    });
}); 