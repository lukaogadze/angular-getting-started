import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
    starWidth: number | undefined;
    @Input() rating: number | undefined;
    @Output() readonly ratingClicked: EventEmitter<string>;

    constructor() {
        this.ratingClicked = new EventEmitter<string>();
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating! * 75 / 5;
    }

}
