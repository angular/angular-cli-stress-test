/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service647Service } from '../../services/service-647.service';

@Component({
  selector: 'app-comp-647',
  templateUrl: './comp-647.component.html',
  styleUrls: ['./comp-647.component.css']
})
export class Comp647Component implements OnInit {

  constructor(private _service: Service647Service) { }

  ngOnInit() {
  }

}
