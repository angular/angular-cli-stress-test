/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service777Service } from '../../services/service-777.service';

@Component({
  selector: 'app-comp-777',
  templateUrl: './comp-777.component.html',
  styleUrls: ['./comp-777.component.css']
})
export class Comp777Component implements OnInit {

  constructor(private _service: Service777Service) { }

  ngOnInit() {
  }

}
