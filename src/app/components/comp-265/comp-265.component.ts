/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service265Service } from '../../services/service-265.service';

@Component({
  selector: 'app-comp-265',
  templateUrl: './comp-265.component.html',
  styleUrls: ['./comp-265.component.css']
})
export class Comp265Component implements OnInit {

  constructor(private _service: Service265Service) { }

  ngOnInit() {
  }

}
