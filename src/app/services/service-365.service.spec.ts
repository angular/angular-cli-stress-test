/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service365Service } from './service-365.service';

describe('Service365Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service365Service]
    });
  });

  it('should ...', inject([Service365Service], (service: Service365Service) => {
    expect(service).toBeTruthy();
  }));
});
