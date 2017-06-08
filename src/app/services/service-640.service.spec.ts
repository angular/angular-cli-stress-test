/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service640Service } from './service-640.service';

describe('Service640Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service640Service]
    });
  });

  it('should ...', inject([Service640Service], (service: Service640Service) => {
    expect(service).toBeTruthy();
  }));
});
