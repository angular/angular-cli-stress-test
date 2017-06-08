/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service500Service } from '../../services/service-500.service';

@Component({
  selector: 'app-comp-500',
  templateUrl: './comp-500.component.html',
  styleUrls: ['./comp-500.component.css']
})
export class Comp500Component implements OnInit {

  constructor(private _service: Service500Service) { }

  ngOnInit() {
  }

}
