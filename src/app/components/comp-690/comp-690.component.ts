/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service690Service } from '../../services/service-690.service';

@Component({
  selector: 'app-comp-690',
  templateUrl: './comp-690.component.html',
  styleUrls: ['./comp-690.component.css']
})
export class Comp690Component implements OnInit {

  constructor(private _service: Service690Service) { }

  ngOnInit() {
  }

}
