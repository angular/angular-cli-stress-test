/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service289Service } from '../../services/service-289.service';

@Component({
  selector: 'app-comp-289',
  templateUrl: './comp-289.component.html',
  styleUrls: ['./comp-289.component.css']
})
export class Comp289Component implements OnInit {

  constructor(private _service: Service289Service) { }

  ngOnInit() {
  }

}
