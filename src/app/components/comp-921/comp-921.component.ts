/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service921Service } from '../../services/service-921.service';

@Component({
  selector: 'app-comp-921',
  templateUrl: './comp-921.component.html',
  styleUrls: ['./comp-921.component.css']
})
export class Comp921Component implements OnInit {

  constructor(private _service: Service921Service) { }

  ngOnInit() {
  }

}
