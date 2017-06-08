/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service210Service } from '../../services/service-210.service';

@Component({
  selector: 'app-comp-210',
  templateUrl: './comp-210.component.html',
  styleUrls: ['./comp-210.component.css']
})
export class Comp210Component implements OnInit {

  constructor(private _service: Service210Service) { }

  ngOnInit() {
  }

}
