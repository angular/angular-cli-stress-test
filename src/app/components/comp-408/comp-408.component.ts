/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service408Service } from '../../services/service-408.service';

@Component({
  selector: 'app-comp-408',
  templateUrl: './comp-408.component.html',
  styleUrls: ['./comp-408.component.css']
})
export class Comp408Component implements OnInit {

  constructor(private _service: Service408Service) { }

  ngOnInit() {
  }

}
