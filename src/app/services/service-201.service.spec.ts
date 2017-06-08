/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service201Service } from './service-201.service';

describe('Service201Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service201Service]
    });
  });

  it('should ...', inject([Service201Service], (service: Service201Service) => {
    expect(service).toBeTruthy();
  }));
});
