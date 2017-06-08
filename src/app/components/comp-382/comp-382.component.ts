/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service382Service } from '../../services/service-382.service';

@Component({
  selector: 'app-comp-382',
  templateUrl: './comp-382.component.html',
  styleUrls: ['./comp-382.component.css']
})
export class Comp382Component implements OnInit {

  constructor(private _service: Service382Service) { }

  ngOnInit() {
  }

}
