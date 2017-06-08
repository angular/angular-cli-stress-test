/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service657Service } from './service-657.service';

describe('Service657Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service657Service]
    });
  });

  it('should ...', inject([Service657Service], (service: Service657Service) => {
    expect(service).toBeTruthy();
  }));
});
