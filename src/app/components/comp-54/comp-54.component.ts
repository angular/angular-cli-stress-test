/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service54Service } from '../../services/service-54.service';

@Component({
  selector: 'app-comp-54',
  templateUrl: './comp-54.component.html',
  styleUrls: ['./comp-54.component.css']
})
export class Comp54Component implements OnInit {

  constructor(private _service: Service54Service) { }

  ngOnInit() {
  }

}
