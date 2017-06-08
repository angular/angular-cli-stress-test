/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service738Service } from '../../services/service-738.service';

@Component({
  selector: 'app-comp-738',
  templateUrl: './comp-738.component.html',
  styleUrls: ['./comp-738.component.css']
})
export class Comp738Component implements OnInit {

  constructor(private _service: Service738Service) { }

  ngOnInit() {
  }

}
