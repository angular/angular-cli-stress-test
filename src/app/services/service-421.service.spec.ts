/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service421Service } from './service-421.service';

describe('Service421Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service421Service]
    });
  });

  it('should ...', inject([Service421Service], (service: Service421Service) => {
    expect(service).toBeTruthy();
  }));
});
