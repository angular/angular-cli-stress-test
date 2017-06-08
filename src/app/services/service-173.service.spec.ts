/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service173Service } from './service-173.service';

describe('Service173Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service173Service]
    });
  });

  it('should ...', inject([Service173Service], (service: Service173Service) => {
    expect(service).toBeTruthy();
  }));
});
