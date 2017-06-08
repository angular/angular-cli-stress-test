/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service839Service } from '../../services/service-839.service';

@Component({
  selector: 'app-comp-839',
  templateUrl: './comp-839.component.html',
  styleUrls: ['./comp-839.component.css']
})
export class Comp839Component implements OnInit {

  constructor(private _service: Service839Service) { }

  ngOnInit() {
  }

}
