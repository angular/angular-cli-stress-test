/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service656Service } from '../../services/service-656.service';

@Component({
  selector: 'app-comp-656',
  templateUrl: './comp-656.component.html',
  styleUrls: ['./comp-656.component.css']
})
export class Comp656Component implements OnInit {

  constructor(private _service: Service656Service) { }

  ngOnInit() {
  }

}
