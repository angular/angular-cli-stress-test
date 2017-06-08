/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service770Service } from '../../services/service-770.service';

@Component({
  selector: 'app-comp-770',
  templateUrl: './comp-770.component.html',
  styleUrls: ['./comp-770.component.css']
})
export class Comp770Component implements OnInit {

  constructor(private _service: Service770Service) { }

  ngOnInit() {
  }

}
