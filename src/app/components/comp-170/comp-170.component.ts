/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service170Service } from '../../services/service-170.service';

@Component({
  selector: 'app-comp-170',
  templateUrl: './comp-170.component.html',
  styleUrls: ['./comp-170.component.css']
})
export class Comp170Component implements OnInit {

  constructor(private _service: Service170Service) { }

  ngOnInit() {
  }

}
