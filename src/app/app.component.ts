import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from './scroll-animation.directive';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NzLayoutModule,
    NzStatisticModule,
    NzCardModule,
    NzGridModule,
    CommonModule,
    ScrollAnimationDirective,
    NzImageModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'layout-testing';
  constructor(private elementRef: ElementRef) {}
}
