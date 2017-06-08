/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service800Service } from '../../services/service-800.service';

@Component({
  selector: 'app-comp-800',
  templateUrl: './comp-800.component.html',
  styleUrls: ['./comp-800.component.css']
})
export class Comp800Component implements OnInit {

  constructor(private _service: Service800Service) { }

  ngOnInit() {
  }

}
