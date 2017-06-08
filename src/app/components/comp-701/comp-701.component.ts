/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service701Service } from '../../services/service-701.service';

@Component({
  selector: 'app-comp-701',
  templateUrl: './comp-701.component.html',
  styleUrls: ['./comp-701.component.css']
})
export class Comp701Component implements OnInit {

  constructor(private _service: Service701Service) { }

  ngOnInit() {
  }

}
