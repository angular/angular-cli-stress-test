/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service229Service } from '../../services/service-229.service';

@Component({
  selector: 'app-comp-229',
  templateUrl: './comp-229.component.html',
  styleUrls: ['./comp-229.component.css']
})
export class Comp229Component implements OnInit {

  constructor(private _service: Service229Service) { }

  ngOnInit() {
  }

}
