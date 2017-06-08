/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service413Service } from '../../services/service-413.service';

@Component({
  selector: 'app-comp-413',
  templateUrl: './comp-413.component.html',
  styleUrls: ['./comp-413.component.css']
})
export class Comp413Component implements OnInit {

  constructor(private _service: Service413Service) { }

  ngOnInit() {
  }

}
