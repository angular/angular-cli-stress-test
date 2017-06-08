/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service267Service } from '../../services/service-267.service';

@Component({
  selector: 'app-comp-267',
  templateUrl: './comp-267.component.html',
  styleUrls: ['./comp-267.component.css']
})
export class Comp267Component implements OnInit {

  constructor(private _service: Service267Service) { }

  ngOnInit() {
  }

}
