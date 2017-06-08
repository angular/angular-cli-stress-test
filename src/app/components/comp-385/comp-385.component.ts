/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service385Service } from '../../services/service-385.service';

@Component({
  selector: 'app-comp-385',
  templateUrl: './comp-385.component.html',
  styleUrls: ['./comp-385.component.css']
})
export class Comp385Component implements OnInit {

  constructor(private _service: Service385Service) { }

  ngOnInit() {
  }

}
