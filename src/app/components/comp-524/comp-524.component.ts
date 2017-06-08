/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service524Service } from '../../services/service-524.service';

@Component({
  selector: 'app-comp-524',
  templateUrl: './comp-524.component.html',
  styleUrls: ['./comp-524.component.css']
})
export class Comp524Component implements OnInit {

  constructor(private _service: Service524Service) { }

  ngOnInit() {
  }

}
