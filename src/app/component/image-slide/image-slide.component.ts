import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss'],
})
export class ImageSlideComponent implements OnInit {
  constructor() {}
  @Input() label: string = 'Special offer';
  @Input() images: any;
  @Input() arrow: boolean = true;
  input: string = '';
  ngOnInit(): void {

  }
}
