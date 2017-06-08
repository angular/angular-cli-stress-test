/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service877Service } from '../../services/service-877.service';

@Component({
  selector: 'app-comp-877',
  templateUrl: './comp-877.component.html',
  styleUrls: ['./comp-877.component.css']
})
export class Comp877Component implements OnInit {

  constructor(private _service: Service877Service) { }

  ngOnInit() {
  }

}
