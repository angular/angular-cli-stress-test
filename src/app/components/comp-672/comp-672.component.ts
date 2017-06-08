/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service672Service } from '../../services/service-672.service';

@Component({
  selector: 'app-comp-672',
  templateUrl: './comp-672.component.html',
  styleUrls: ['./comp-672.component.css']
})
export class Comp672Component implements OnInit {

  constructor(private _service: Service672Service) { }

  ngOnInit() {
  }

}
