/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service957Service } from '../../services/service-957.service';

@Component({
  selector: 'app-comp-957',
  templateUrl: './comp-957.component.html',
  styleUrls: ['./comp-957.component.css']
})
export class Comp957Component implements OnInit {

  constructor(private _service: Service957Service) { }

  ngOnInit() {
  }

}
