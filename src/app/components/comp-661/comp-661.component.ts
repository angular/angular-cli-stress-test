/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service661Service } from '../../services/service-661.service';

@Component({
  selector: 'app-comp-661',
  templateUrl: './comp-661.component.html',
  styleUrls: ['./comp-661.component.css']
})
export class Comp661Component implements OnInit {

  constructor(private _service: Service661Service) { }

  ngOnInit() {
  }

}
