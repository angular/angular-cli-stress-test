/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service901Service } from '../../services/service-901.service';

@Component({
  selector: 'app-comp-901',
  templateUrl: './comp-901.component.html',
  styleUrls: ['./comp-901.component.css']
})
export class Comp901Component implements OnInit {

  constructor(private _service: Service901Service) { }

  ngOnInit() {
  }

}
