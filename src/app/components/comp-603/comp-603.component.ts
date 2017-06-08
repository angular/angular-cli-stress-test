/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service603Service } from '../../services/service-603.service';

@Component({
  selector: 'app-comp-603',
  templateUrl: './comp-603.component.html',
  styleUrls: ['./comp-603.component.css']
})
export class Comp603Component implements OnInit {

  constructor(private _service: Service603Service) { }

  ngOnInit() {
  }

}
