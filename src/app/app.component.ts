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

    constructor(private formBuilder: FormBuilder) {
        this.myForm = this.formBuilder.group({
            op1: 3,
            op2: 2,
        });
    }

    public operation(sign: string) {
        const { op1, op2 } = this.myForm.value;
        switch (sign) {
            case '+':
                this.resultat = op1 + op2;
                break;
            case '-':
                this.resultat = op1 - op2;
                break;
            case '*':
                this.resultat = op1 * op2;
                break;
            case '/':
                this.resultat = op1 / op2;
                break;
            default:
                console.error("Opérateur inconnu : " + sign);
                break;
        }

        const operation = op1 + ' + ' + op2 + ' = ' + this.resultat;
        if (this.operationHistory[0] != operation) {
            this.operationHistory.unshift(operation);
        }
    }

    public memoriser() {
        this.resultatEnMemoire = this.resultat;
    }

    public chargerMemoire() {
        const op2 = this.myForm.value.op2;
        this.myForm = this.formBuilder.group({
            op1: this.resultatEnMemoire,
            op2: op2,
        });
    }
}
