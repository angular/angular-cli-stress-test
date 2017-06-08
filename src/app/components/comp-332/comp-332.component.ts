/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service332Service } from '../../services/service-332.service';

@Component({
  selector: 'app-comp-332',
  templateUrl: './comp-332.component.html',
  styleUrls: ['./comp-332.component.css']
})
export class Comp332Component implements OnInit {

  constructor(private _service: Service332Service) { }

  ngOnInit() {
  }

}
