/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service808Service } from '../../services/service-808.service';

@Component({
  selector: 'app-comp-808',
  templateUrl: './comp-808.component.html',
  styleUrls: ['./comp-808.component.css']
})
export class Comp808Component implements OnInit {

  constructor(private _service: Service808Service) { }

  ngOnInit() {
  }

}
