/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service666Service } from '../../services/service-666.service';

@Component({
  selector: 'app-comp-666',
  templateUrl: './comp-666.component.html',
  styleUrls: ['./comp-666.component.css']
})
export class Comp666Component implements OnInit {

  constructor(private _service: Service666Service) { }

  ngOnInit() {
  }

}
