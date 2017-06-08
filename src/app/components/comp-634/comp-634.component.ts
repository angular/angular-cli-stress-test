/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service634Service } from '../../services/service-634.service';

@Component({
  selector: 'app-comp-634',
  templateUrl: './comp-634.component.html',
  styleUrls: ['./comp-634.component.css']
})
export class Comp634Component implements OnInit {

  constructor(private _service: Service634Service) { }

  ngOnInit() {
  }

}
