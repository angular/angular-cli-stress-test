/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service692Service } from '../../services/service-692.service';

@Component({
  selector: 'app-comp-692',
  templateUrl: './comp-692.component.html',
  styleUrls: ['./comp-692.component.css']
})
export class Comp692Component implements OnInit {

  constructor(private _service: Service692Service) { }

  ngOnInit() {
  }

}
