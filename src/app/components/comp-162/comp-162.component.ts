/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service162Service } from '../../services/service-162.service';

@Component({
  selector: 'app-comp-162',
  templateUrl: './comp-162.component.html',
  styleUrls: ['./comp-162.component.css']
})
export class Comp162Component implements OnInit {

  constructor(private _service: Service162Service) { }

  ngOnInit() {
  }

}
