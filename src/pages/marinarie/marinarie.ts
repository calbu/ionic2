import { NavParams} from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../providers/questions.service';
import { IQuestion } from '../../models/question';


@Component({
  templateUrl: 'marinarie.html'
})

export class MarinariePage implements OnInit {
  numerOfResults: number = 10;
  pageTitle: string ='marinarieD';
  questions: IQuestion[];
  errorMessage: string;
  answers: any[] = [];
  disableButton: boolean = true;
  showAnswers: Boolean = false;

  constructor(private _productService: QuestionService, private _navParams: NavParams) {
    this.pageTitle = _navParams.get('title');
    console.log("page title is: " + this.pageTitle);
  }

  ngOnInit(): void {
    console.log('Init');
    this._productService.getQuestions(this.pageTitle, this.numerOfResults)
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
    if (this.answers && this.answers.length == this.numerOfResults) {
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
