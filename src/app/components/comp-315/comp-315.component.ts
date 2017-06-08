/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service315Service } from '../../services/service-315.service';

@Component({
  selector: 'app-comp-315',
  templateUrl: './comp-315.component.html',
  styleUrls: ['./comp-315.component.css']
})
export class Comp315Component implements OnInit {

  constructor(private _service: Service315Service) { }

  ngOnInit() {
  }

}
