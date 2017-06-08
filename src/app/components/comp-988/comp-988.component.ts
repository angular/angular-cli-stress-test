/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service988Service } from '../../services/service-988.service';

@Component({
  selector: 'app-comp-988',
  templateUrl: './comp-988.component.html',
  styleUrls: ['./comp-988.component.css']
})
export class Comp988Component implements OnInit {

  constructor(private _service: Service988Service) { }

  ngOnInit() {
  }

}
