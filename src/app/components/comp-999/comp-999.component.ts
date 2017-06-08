/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service999Service } from '../../services/service-999.service';

@Component({
  selector: 'app-comp-999',
  templateUrl: './comp-999.component.html',
  styleUrls: ['./comp-999.component.css']
})
export class Comp999Component implements OnInit {

  constructor(private _service: Service999Service) { }

  ngOnInit() {
  }

}
