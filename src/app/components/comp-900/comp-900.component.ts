/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service900Service } from '../../services/service-900.service';

@Component({
  selector: 'app-comp-900',
  templateUrl: './comp-900.component.html',
  styleUrls: ['./comp-900.component.css']
})
export class Comp900Component implements OnInit {

  constructor(private _service: Service900Service) { }

  ngOnInit() {
  }

}
