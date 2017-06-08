/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service651Service } from '../../services/service-651.service';

@Component({
  selector: 'app-comp-651',
  templateUrl: './comp-651.component.html',
  styleUrls: ['./comp-651.component.css']
})
export class Comp651Component implements OnInit {

  constructor(private _service: Service651Service) { }

  ngOnInit() {
  }

}
