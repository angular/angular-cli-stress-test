/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service818Service } from '../../services/service-818.service';

@Component({
  selector: 'app-comp-818',
  templateUrl: './comp-818.component.html',
  styleUrls: ['./comp-818.component.css']
})
export class Comp818Component implements OnInit {

  constructor(private _service: Service818Service) { }

  ngOnInit() {
  }

}
