import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public myForm: FormGroup;
    public operationHistory: string[] = [];
    public resultat = 0;
    public resultatEnMemoire = 0;
    public op1 = 3;
    public op2 = 2;

    public operation(sign: string) {
        switch (sign) {
            case '+':
                this.resultat = this.op1 + this.op2;
                break;
            case '−':
                this.resultat = this.op1 - this.op2;
                break;
            case '×':
                this.resultat = this.op1 * this.op2;
                break;
            case '÷':
                this.resultat = this.op1 / this.op2;
                break;
            default:
                console.error("Opérateur inconnu : " + sign);
                break;
        }

        const operation = this.op1 + ' ' + sign + ' ' + this.op2 + ' = ' + this.resultat;
        if (this.operationHistory[0] != operation) {
            this.operationHistory.unshift(operation);
        }
    }

    public memoriser() {
        this.resultatEnMemoire = this.resultat;
    }

    public chargerMemoire() {
        this.op1 = this.resultatEnMemoire;
    }
}
