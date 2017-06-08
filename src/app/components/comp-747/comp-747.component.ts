/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service747Service } from '../../services/service-747.service';

@Component({
  selector: 'app-comp-747',
  templateUrl: './comp-747.component.html',
  styleUrls: ['./comp-747.component.css']
})
export class Comp747Component implements OnInit {

  constructor(private _service: Service747Service) { }

  ngOnInit() {
  }

}
