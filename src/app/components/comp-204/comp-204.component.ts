/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service204Service } from '../../services/service-204.service';

@Component({
  selector: 'app-comp-204',
  templateUrl: './comp-204.component.html',
  styleUrls: ['./comp-204.component.css']
})
export class Comp204Component implements OnInit {

  constructor(private _service: Service204Service) { }

  ngOnInit() {
  }

}
