/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service140Service } from '../../services/service-140.service';

@Component({
  selector: 'app-comp-140',
  templateUrl: './comp-140.component.html',
  styleUrls: ['./comp-140.component.css']
})
export class Comp140Component implements OnInit {

  constructor(private _service: Service140Service) { }

  ngOnInit() {
  }

}
