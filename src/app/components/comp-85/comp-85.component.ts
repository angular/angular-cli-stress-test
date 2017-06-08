/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service85Service } from '../../services/service-85.service';

@Component({
  selector: 'app-comp-85',
  templateUrl: './comp-85.component.html',
  styleUrls: ['./comp-85.component.css']
})
export class Comp85Component implements OnInit {

  constructor(private _service: Service85Service) { }

  ngOnInit() {
  }

}
