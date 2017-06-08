/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service17Service } from './service-17.service';

describe('Service17Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service17Service]
    });
  });

  it('should ...', inject([Service17Service], (service: Service17Service) => {
    expect(service).toBeTruthy();
  }));
});
