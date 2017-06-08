/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service440Service } from '../../services/service-440.service';

@Component({
  selector: 'app-comp-440',
  templateUrl: './comp-440.component.html',
  styleUrls: ['./comp-440.component.css']
})
export class Comp440Component implements OnInit {

  constructor(private _service: Service440Service) { }

  ngOnInit() {
  }

}
