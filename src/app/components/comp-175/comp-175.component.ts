/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service175Service } from '../../services/service-175.service';

@Component({
  selector: 'app-comp-175',
  templateUrl: './comp-175.component.html',
  styleUrls: ['./comp-175.component.css']
})
export class Comp175Component implements OnInit {

  constructor(private _service: Service175Service) { }

  ngOnInit() {
  }

}
