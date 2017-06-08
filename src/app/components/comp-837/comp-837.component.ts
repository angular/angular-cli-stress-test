/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, OnInit } from '@angular/core';
import { Service837Service } from '../../services/service-837.service';

@Component({
  selector: 'app-comp-837',
  templateUrl: './comp-837.component.html',
  styleUrls: ['./comp-837.component.css']
})
export class Comp837Component implements OnInit {

  constructor(private _service: Service837Service) { }

  ngOnInit() {
  }

}
