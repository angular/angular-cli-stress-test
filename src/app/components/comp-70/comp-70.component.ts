/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service70Service } from '../../services/service-70.service';

@Component({
  selector: 'app-comp-70',
  templateUrl: './comp-70.component.html',
  styleUrls: ['./comp-70.component.css']
})
export class Comp70Component implements OnInit {

  constructor(private _service: Service70Service) { }

  ngOnInit() {
  }

}
