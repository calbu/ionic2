import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/questions.service';
import { IQuestion } from '../shared/question';


@Component({
  templateUrl: 'marinarie.html'
})

export class MarinariePage implements OnInit {
  questions: IQuestion[];
  errorMessage: string;
  answers: any[] = [];
  disableButton: boolean = true;
  showAnswers: Boolean = false;

  constructor(private _productService: QuestionService) { }

  ngOnInit(): void {
    console.log('Init');
    this._productService.getQuestions('marinarieD', 2)
      .subscribe(questions => this.questions = questions,
      error => this.errorMessage = <any>error);
  };

  setAnswer(option, index): void {
    var found = false;
    for (var i = 0; i < this.answers.length; i++) {
      if (this.answers[i].questionIndex == index) {

        this.answers[i].optionChosen = option;

        this.questions[this.answers[i].questionIndex].corect == this.answers[i].optionChosen ?
          this.answers[i].isCorect = true : this.answers[i].isCorect = false;

        found = true;
        break;
      }
    }
    if (!found) {
      this.answers.push({ "questionIndex": index, "optionChosen": option });

      this.questions[this.answers[i].questionIndex].corect == this.answers[i].optionChosen ?
        this.answers[i].isCorect = true : this.answers[i].isCorect = false;

      console.log(`am adaugat intrebarea ${index} optiuneAleasa: ${option} isCorect: ${this.answers[i].isCorect}`);
    }
    this.setShowButton();
  };

  setShowButton(): void {
    if (this.answers && this.answers.length == 2) {
      this.disableButton = false;
    }
    else {
      this.disableButton = true;
    }
  };

  validateAnswers(): void {
    this.showAnswers = true;
  }

  getRightAnswersNo(): number {
    let total = 0;
    for (var i = 0; i < this.answers.length; i++) {
      if (this.answers[i].isCorect)
        total += 1;
    };
    console.log(total);
    return total;
  }
}