/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service675Service } from '../../services/service-675.service';

@Component({
  selector: 'app-comp-675',
  templateUrl: './comp-675.component.html',
  styleUrls: ['./comp-675.component.css']
})
export class Comp675Component implements OnInit {

  constructor(private _service: Service675Service) { }

  ngOnInit() {
  }

}
