import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <div class="py-2 px-3 my-4 rounded" [style]="{ background: '#DDD' }">
            <h3>
              <i class="fa fa-hand-paper-o" aria-hidden="true"></i>
              {{ title | titlecase }}
            </h3>
            <p class="lead ">
              {{ description | paragraphCapital }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./page-header.component.css'],
})
export class PageHeaderComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  constructor() {}

  ngOnInit(): void {}
}
