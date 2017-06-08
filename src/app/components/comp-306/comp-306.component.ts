/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service306Service } from '../../services/service-306.service';

@Component({
  selector: 'app-comp-306',
  templateUrl: './comp-306.component.html',
  styleUrls: ['./comp-306.component.css']
})
export class Comp306Component implements OnInit {

  constructor(private _service: Service306Service) { }

  ngOnInit() {
  }

}
