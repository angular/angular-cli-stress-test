/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service483Service } from '../../services/service-483.service';

@Component({
  selector: 'app-comp-483',
  templateUrl: './comp-483.component.html',
  styleUrls: ['./comp-483.component.css']
})
export class Comp483Component implements OnInit {

  constructor(private _service: Service483Service) { }

  ngOnInit() {
  }

}
