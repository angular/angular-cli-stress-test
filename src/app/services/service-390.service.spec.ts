/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service390Service } from './service-390.service';

describe('Service390Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service390Service]
    });
  });

  it('should ...', inject([Service390Service], (service: Service390Service) => {
    expect(service).toBeTruthy();
  }));
});
