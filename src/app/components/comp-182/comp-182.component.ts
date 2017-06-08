/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service182Service } from '../../services/service-182.service';

@Component({
  selector: 'app-comp-182',
  templateUrl: './comp-182.component.html',
  styleUrls: ['./comp-182.component.css']
})
export class Comp182Component implements OnInit {

  constructor(private _service: Service182Service) { }

  ngOnInit() {
  }

}
