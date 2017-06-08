/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service342Service } from '../../services/service-342.service';

@Component({
  selector: 'app-comp-342',
  templateUrl: './comp-342.component.html',
  styleUrls: ['./comp-342.component.css']
})
export class Comp342Component implements OnInit {

  constructor(private _service: Service342Service) { }

  ngOnInit() {
  }

}
