/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service235Service } from './service-235.service';

describe('Service235Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service235Service]
    });
  });

  it('should ...', inject([Service235Service], (service: Service235Service) => {
    expect(service).toBeTruthy();
  }));
});
