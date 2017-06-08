/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service376Service } from '../../services/service-376.service';

@Component({
  selector: 'app-comp-376',
  templateUrl: './comp-376.component.html',
  styleUrls: ['./comp-376.component.css']
})
export class Comp376Component implements OnInit {

  constructor(private _service: Service376Service) { }

  ngOnInit() {
  }

}
