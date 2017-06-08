/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service456Service } from '../../services/service-456.service';

@Component({
  selector: 'app-comp-456',
  templateUrl: './comp-456.component.html',
  styleUrls: ['./comp-456.component.css']
})
export class Comp456Component implements OnInit {

  constructor(private _service: Service456Service) { }

  ngOnInit() {
  }

}
