/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service695Service } from './service-695.service';

describe('Service695Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service695Service]
    });
  });

  it('should ...', inject([Service695Service], (service: Service695Service) => {
    expect(service).toBeTruthy();
  }));
});
