/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service795Service } from '../../services/service-795.service';

@Component({
  selector: 'app-comp-795',
  templateUrl: './comp-795.component.html',
  styleUrls: ['./comp-795.component.css']
})
export class Comp795Component implements OnInit {

  constructor(private _service: Service795Service) { }

  ngOnInit() {
  }

}
