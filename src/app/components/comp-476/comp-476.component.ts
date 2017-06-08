/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service476Service } from '../../services/service-476.service';

@Component({
  selector: 'app-comp-476',
  templateUrl: './comp-476.component.html',
  styleUrls: ['./comp-476.component.css']
})
export class Comp476Component implements OnInit {

  constructor(private _service: Service476Service) { }

  ngOnInit() {
  }

}
