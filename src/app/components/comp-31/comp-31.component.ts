/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service31Service } from '../../services/service-31.service';

@Component({
  selector: 'app-comp-31',
  templateUrl: './comp-31.component.html',
  styleUrls: ['./comp-31.component.css']
})
export class Comp31Component implements OnInit {

  constructor(private _service: Service31Service) { }

  ngOnInit() {
  }

}
