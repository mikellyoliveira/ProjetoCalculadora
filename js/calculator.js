class Calculator {
    /**
     * @param {number} nota 
     * @returns {boolean} 
     */
    validarNota(nota) {
        return nota !== null && 
               nota !== undefined && 
               !isNaN(nota) && 
               nota >= 0 && 
               nota <= 10;
    }

    /**
     * @param {number} nota1 
     * @param {number} nota2
     * @returns {number}
     * @throws {Error} 
     */
    calcularMedia(nota1, nota2) {
        
        const n1 = typeof nota1 === 'string' ? parseFloat(nota1) : nota1;
        const n2 = typeof nota2 === 'string' ? parseFloat(nota2) : nota2;
        
        if (!this.validarNota(n1) || !this.validarNota(n2)) {
            throw new Error('As notas devem estar entre 0 e 10');
        }
        
        return (n1 + n2) / 2;
    }

    /**
     * @param {number} media 
     * @returns {string} 
     */
    determinarSituacao(media) {
        if (media >= 7) {
            return 'Aprovado';
        } else if (media >= 5) {
            return 'Recuperação';
        } else {
            return 'Reprovado';
        }
    }

    /**
     * @param {number} nota1 
     * @param {number} nota2 
     * @returns {object} 
     */
    processarNotas(nota1, nota2) {
        const media = this.calcularMedia(nota1, nota2);
        const situacao = this.determinarSituacao(media);
        
        return {
            media: media.toFixed(1),
            situacao
        };
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = Calculator;
} 